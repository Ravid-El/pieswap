import { NextResponse } from 'next/server';
import CloudConvert from 'cloudconvert';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // Limit 10MB

export async function POST(req: Request) {
  const apiKey = process.env.CLOUDCONVERT_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: 'API Key belum dikonfigurasi di Vercel.' }, { status: 500 });
  }

  const cloudConvert = new CloudConvert(apiKey);

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    // Ambil target format dari frontend (contoh: 'docx', 'pdf')
    const targetFormat = formData.get('targetFormat') as string || 'docx';

    // Validasi 1: Cek apakah file ada
    if (!file) {
      return NextResponse.json({ error: 'Tidak ada file yang diunggah.' }, { status: 400 });
    }

    // Validasi 2: Cek ukuran file (Max 10MB)
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File terlalu besar. Maksimal 10MB.' }, { status: 400 });
    }

    // 1. Buat Job Konversi Dinamis
    const job = await cloudConvert.jobs.create({
      tasks: {
        'import-file': { operation: 'import/upload' },
        'convert-file': {
          operation: 'convert',
          input: 'import-file',
          output_format: targetFormat,
        },
        'export-file': { 
          operation: 'export/url', 
          input: 'convert-file',
          // File di CloudConvert akan otomatis terhapus setelah diproses
        },
      },
    });

    // 2. Upload File
    const uploadTask = job.tasks.find((t) => t.name === 'import-file');
    const bytes = await file.arrayBuffer();
    await cloudConvert.tasks.upload(uploadTask!, Buffer.from(bytes), file.name);

    // 3. Tunggu hingga selesai
    const finishedJob = await cloudConvert.jobs.wait(job.id);
    const exportTask = finishedJob.tasks.find((t) => t.name === 'export-file');

    if (exportTask?.status === 'error') {
      throw new Error("Gagal memproses file. Pastikan format PDF benar.");
    }

    const downloadUrl = exportTask?.result?.files?.[0]?.url;

    return NextResponse.json({ url: downloadUrl });

  } catch (error: any) {
    console.error("DEBUG ERROR:", error.message);
    return NextResponse.json(
      { error: 'Terjadi kesalahan: ' + (error.message.includes('401') ? 'API Key Tidak Valid' : error.message) }, 
      { status: 500 }
    );
  }
}