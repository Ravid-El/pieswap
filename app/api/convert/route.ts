import { NextResponse } from 'next/server';
import CloudConvert from 'cloudconvert';

export async function POST(req: Request) {
  // 1. Cek Kunci API sebelum mulai (Keamanan & Debugging)
  const apiKey = process.env.CLOUDCONVERT_API_KEY;
  
  if (!apiKey) {
    console.error("ERROR: CLOUDCONVERT_API_KEY tidak ditemukan di Environment Variables.");
    return NextResponse.json(
      { error: 'Konfigurasi server belum lengkap (API Key hilang).' }, 
      { status: 500 }
    );
  }

  // Inisialisasi di dalam fungsi untuk memastikan kunci terbaru terbaca
  const cloudConvert = new CloudConvert(apiKey);

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Tidak ada file yang dipilih.' }, { status: 400 });
    }

    // 2. Buat Job Konversi
    // Kita pakai mode 'docx' karena ini untuk tool PDF ke Word
    const job = await cloudConvert.jobs.create({
      tasks: {
        'import-file': {
          operation: 'import/upload',
        },
        'convert-file': {
          operation: 'convert',
          input: 'import-file',
          output_format: 'docx', 
        },
        'export-file': {
          operation: 'export/url',
          input: 'convert-file',
        },
      },
    });

    // 3. Upload file ke CloudConvert
    const uploadTask = job.tasks.find((task) => task.name === 'import-file');
    
    if (!uploadTask) {
      throw new Error("Gagal membuat tugas upload.");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Kirim file ke CloudConvert
    await cloudConvert.tasks.upload(uploadTask, buffer, file.name);

    // 4. Tunggu proses konversi (Bisa memakan waktu beberapa detik)
    const finishedJob = await cloudConvert.jobs.wait(job.id);
    
    // Ambil hasil export
    const exportTask = finishedJob.tasks.find((task) => task.name === 'export-file');
    
    if (exportTask?.status === 'error') {
      throw new Error("CloudConvert gagal memproses file Anda.");
    }

    const downloadUrl = exportTask?.result?.files?.[0]?.url;

    if (!downloadUrl) {
      throw new Error("Link download tidak ditemukan.");
    }

    return NextResponse.json({ url: downloadUrl });

  } catch (error: any) {
    console.error("DETAIL ERROR:", error);

    // Jika error berasal dari CloudConvert (biasanya Unauthorized)
    if (error.message.includes('401') || error.message.includes('Unauthorized')) {
      return NextResponse.json(
        { error: 'Kunci API CloudConvert tidak valid atau tidak diizinkan.' }, 
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Terjadi kesalahan: ' + error.message }, 
      { status: 500 }
    );
  }
}