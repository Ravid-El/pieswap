import { NextResponse } from 'next/server';
import CloudConvert from 'cloudconvert';

// Inisialisasi CloudConvert dengan API Key dari .env
const cloudConvert = new CloudConvert(process.env.CLOUDCONVERT_API_KEY!);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'File tidak ditemukan' }, { status: 400 });
    }

    // 1. Mulai Job Konversi (Contoh: PDF ke Word)
    const job = await cloudConvert.jobs.create({
      tasks: {
        'import-file': {
          operation: 'import/upload',
        },
        'convert-file': {
          operation: 'convert',
          input: 'import-file',
          output_format: 'docx', // Nanti bisa kita bikin dinamis
        },
        'export-file': {
          operation: 'export/url',
          input: 'convert-file',
        },
      },
    });

    // 2. Upload file ke CloudConvert
    const uploadTask = job.tasks.find((task) => task.name === 'import-file');
    
    // Kita butuh buffer untuk upload
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await cloudConvert.tasks.upload(uploadTask!, buffer, file.name);

    // 3. Tunggu sampai konversi selesai (polling)
    const finishedJob = await cloudConvert.jobs.wait(job.id);
    const exportTask = finishedJob.tasks.find((task) => task.name === 'export-file');
    const downloadUrl = exportTask?.result?.files?.[0]?.url;

    return NextResponse.json({ url: downloadUrl });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}