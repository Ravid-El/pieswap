"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileText, Download, Loader2, UploadCloud } from "lucide-react";

export default function PdfToWord() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"], "application/msword": [".doc"] },
    multiple: false,
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
  });

const handleConvert = async () => {
  if (!file) return;
  setLoading(true);
  setDownloadUrl(null);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("targetFormat", "pdf");
  try {
    const response = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.ok && data.url) {
      setDownloadUrl(data.url);
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    alert("Gagal menghubungi server.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Word ke PDF</h1>
        <p className="text-gray-600 mb-8">Ubah dokumen Word Anda menjadi PDF (.pdf) yang bisa diedit.</p>

        {/* Kotak Upload */}
        <div 
          {...getRootProps()} 
          className={`border-3 border-dashed rounded-2xl p-12 transition-all cursor-pointer ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white hover:border-blue-400"
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center">
            <UploadCloud className={`w-16 h-16 mb-4 ${isDragActive ? "text-blue-500" : "text-gray-400"}`} />
            {file ? (
              <p className="text-blue-600 font-medium">{file.name}</p>
            ) : (
              <p className="text-gray-500 text-lg">
                Tarik file PDF ke sini, atau <span className="text-blue-600 underline">klik untuk memilih</span>
              </p>
            )}
            <p className="text-xs text-gray-400 mt-2">Maksimal ukuran file: 10MB</p>
          </div>
        </div>

        {/* Tombol Aksi */}
        {file && !downloadUrl && (
          <button
            onClick={handleConvert}
            disabled={loading}
            className="mt-6 w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 disabled:bg-gray-400 flex justify-center items-center gap-2"
          >
            {loading ? (
              <><Loader2 className="animate-spin" /> Sedang Memproses...</>
            ) : (
              "Mulai Konversi Sekarang"
            )}
          </button>
        )}

        {/* Tombol Download */}
        {downloadUrl && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl flex flex-col items-center">
            <p className="text-green-700 font-semibold mb-4 text-lg text-center">Hore! File Anda sudah siap.</p>
            <a
              href={downloadUrl}
              target="_blank"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-green-700 transition"
            >
              <Download /> Download PDF (.pdf)
            </a>
            <button onClick={() => {setFile(null); setDownloadUrl(null);}} className="mt-4 text-sm text-gray-500 underline">Konversi File Lain</button>
          </div>
        )}
      </div>
    </main>
  );
}