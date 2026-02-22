import { FileText, Scale, UserCheck, AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* --- BREADCRUMBS --- */}
        <Link href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Home
        </Link>

        {/* --- HEADER --- */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black tracking-[0.2em] text-[#2563EB] mb-8 uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">
            Terms & <span className="text-[#2563EB]">Conditions.</span>
          </h1>
          <p className="text-slate-400 font-medium tracking-tight">Terakhir diperbarui: 23 Februari 2026</p>
        </header>

        {/* --- CORE PRINCIPLES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <UserCheck className="w-8 h-8 text-[#2563EB] mb-6" />
            <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Persetujuan Pengguna</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Dengan menggunakan Pieswap, Anda secara otomatis menyetujui seluruh ketentuan yang tertulis di halaman ini.</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <AlertTriangle className="w-8 h-8 text-[#E84A5F] mb-6" />
            <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Batasan Tanggung Jawab</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Kami tidak bertanggung jawab atas kerugian yang timbul akibat penggunaan atau kesalahan teknis selama proses konversi.</p>
          </div>
        </div>

        {/* --- DETAILED TERMS --- */}
        <article className="bg-white rounded-[48px] p-10 md:p-16 border border-slate-100 shadow-sm">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">1. Penggunaan Layanan</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Layanan Pieswap disediakan secara gratis untuk penggunaan pribadi maupun komersial. Anda dilarang menggunakan layanan ini untuk memproses dokumen yang melanggar hukum, mengandung konten berbahaya, atau melanggar hak kekayaan intelektual pihak lain.
            </p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">2. Integritas Dokumen</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Meskipun Pieswap menggunakan teknologi konversi tingkat tinggi, kami tidak menjamin hasil konversi akan 100% identik dengan aslinya dalam segala kondisi. Pengguna disarankan untuk selalu memeriksa kembali hasil akhir dokumen mereka.
            </p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">3. Kekayaan Intelektual</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Seluruh desain, logo, dan kode pemrograman pada situs Pieswap.my.id adalah milik **Ravid El Aziz**. Penggandaan atau penggunaan tanpa izin tertulis merupakan pelanggaran hak cipta.
            </p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">4. Hukum yang Berlaku</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Syarat dan ketentuan ini diatur berdasarkan hukum yang berlaku di Republik Indonesia. Segala perselisihan yang timbul akan diupayakan melalui musyawarah sebelum menempuh jalur hukum.
            </p>

            <div className="pt-10 border-t border-slate-50">
              <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Tanda Tangan Digital</h4>
              <p className="text-slate-400 text-xs">
                Dokumen ini bersifat mengikat secara digital bagi seluruh pengguna aktif Pieswap.my.id.
              </p>
            </div>
          </div>
        </article>

        {/* --- FOOTER INFO --- */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
            PIESWAP.MY.ID — BUILT IN SALATIGA BY RAVID EL AZIZ
          </p>
        </div>

      </div>
    </main>
  );
}