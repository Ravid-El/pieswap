"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileCode, Download, Loader2, UploadCloud, ArrowLeft, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function WordToPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"], 
      "application/msword": [".doc"] 
    },
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
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Tools
        </Link>

        <header className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black tracking-[0.2em] text-[#2563EB] mb-6 uppercase">
            <Zap className="w-3 h-3" />
            <span>Universal Standard</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">
            Word ke <span className="text-[#2563EB]">PDF.</span>
          </h1>
          <p className="text-slate-400 font-medium leading-relaxed max-w-lg">
            Kunci dokumen Anda dengan format PDF yang aman tanpa mengubah tata letak.
          </p>
        </header>

        <div className="bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-sm mb-12">
          {!downloadUrl ? (
            <div 
              {...getRootProps()} 
              className={`border-2 border-dashed rounded-[32px] p-12 transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                isDragActive ? "border-[#2563EB] bg-blue-50/50 scale-[0.98]" : "border-slate-200 bg-white hover:border-[#2563EB]"
              }`}
            >
              <input {...getInputProps()} />
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6">
                <UploadCloud className={`w-10 h-10 ${isDragActive ? "text-[#2563EB]" : "text-slate-300"}`} />
              </div>
              {file ? (
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                  <FileCode className="w-4 h-4 text-[#2563EB]" />
                  <p className="text-[#2563EB] font-bold text-sm">{file.name}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">Pilih Dokumen Word</h3>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Format .docx atau .doc</p>
                </>
              )}
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100 text-[#10B981]">
                <Download className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">PDF Berhasil Dibuat!</h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href={downloadUrl} target="_blank" className="bg-[#10B981] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-[#059669] transition-all shadow-xl shadow-emerald-500/20">
                  <Download className="w-4 h-4" /> Download PDF
                </a>
                <button onClick={() => {setFile(null); setDownloadUrl(null);}} className="px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors">
                  Konversi Lain
                </button>
              </div>
            </div>
          )}

          {file && !downloadUrl && (
            <button onClick={handleConvert} disabled={loading} className="mt-10 w-full py-5 bg-[#2563EB] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex justify-center items-center gap-3 hover:bg-[#38BDF8] disabled:bg-slate-200 shadow-xl shadow-blue-500/20 transition-all">
              {loading ? <><Loader2 className="animate-spin w-4 h-4" /> Memproses...</> : "Mulai Konversi Sekarang"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}