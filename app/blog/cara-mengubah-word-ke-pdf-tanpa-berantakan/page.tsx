import Link from 'next/link';
import { ArrowLeft, User, FileCheck, ShieldCheck, Sparkles } from 'lucide-react';

export default function WordToPdfArticle() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] mb-8 md:mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back
        </Link>

        <header className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black tracking-[0.2em] text-[#2563EB] mb-6 uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Tutorial / 002</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1] mb-10">
            Cara Mengubah Word ke PDF <br className="hidden md:block" />
            <span className="text-[#2563EB]">Tanpa Berantakan.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-xs">RE</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Author</p>
                <p className="text-xs md:text-sm font-bold text-slate-900">Ravid El Aziz</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Published</p>
                <p className="text-xs md:text-sm font-bold text-slate-900">20 Feb 2026</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Status</p>
                <p className="text-xs md:text-sm font-bold text-[#10B981]">Verified Guide</p>
              </div>
            </div>
          </div>
        </header>

        <article className="bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-16 border border-slate-100 shadow-sm mb-16">
          <div className="prose prose-sm md:prose-base prose-slate max-w-none">
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-12 font-medium">
              Mengubah dokumen Word (.docx) ke PDF seringkali menantang saat kita ingin menjaga presisi margin dan tata letak gambar agar tidak bergeser.
            </p>

            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Kenapa PDF Menjadi Standar?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              PDF dirancang untuk mengunci tampilan dokumen. Pieswap memastikan penerima dokumen melihat tampilan yang persis sama dengan yang Anda buat.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-50">
                <FileCheck className="w-6 h-6 text-[#2563EB] mb-4" />
                <h4 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-widest">Akurasi Font</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">Pieswap menyematkan font asli Anda agar tidak berubah.</p>
              </div>
              <div className="bg-[#F8FAFC] p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-50">
                <ShieldCheck className="w-6 h-6 text-[#10B981] mb-4" />
                <h4 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-widest">Privasi 24 Jam</h4>
                <p className="text-slate-500 text-[10px] leading-relaxed">Dokumen dihapus otomatis dalam 24 jam.</p>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Langkah Konversi</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Unggah file di <Link href="/word-ke-pdf" className="text-[#2563EB] font-bold hover:underline">Word ke PDF</Link> dan biarkan algoritma kami menangani sisanya.
            </p>

            <blockquote className="border-l-4 border-[#2563EB] pl-6 my-10 py-4 bg-blue-50/50 rounded-r-2xl px-6">
              <p className="text-base md:text-lg italic text-slate-900 font-medium">
                "Integritas dokumen adalah cerminan dari profesionalitas kerja Anda."
              </p>
            </blockquote>

            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Kesimpulan</h2>
            <p className="text-slate-600 mb-0 leading-relaxed">
              Pieswap hadir sebagai solusi gratis dan aman untuk kebutuhan dokumen digital Anda sehari-hari.
            </p>
          </div>
        </article>

        <div className="bg-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center font-black text-xl text-white/40">RA</div>
          <div>
            <h4 className="font-bold mb-2 uppercase tracking-tight text-lg text-white">Tentang Penulis</h4>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              <strong>Ravid El Aziz</strong> pengembang di balik Pieswap berbasis di <strong>Salatiga</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}