import Link from 'next/link';
import { ArrowLeft, User, FileDown, ShieldCheck, Zap, Sparkles } from 'lucide-react';

// --- WILAYAH 1: METADATA SPESIFIK KOMPRES PDF ---
export const metadata = {
  title: "Mengapa Kompres PDF Penting? Solusi Hemat Penyimpanan | Pieswap",
  description: "Pelajari alasan mengapa memperkecil ukuran file PDF sangat krusial untuk produktivitas digital, pengiriman email, dan optimasi ruang penyimpanan.",
  keywords: ["Kompres PDF", "Perkecil Ukuran PDF", "Optimasi Dokumen", "Pieswap", "Teknologi Salatiga"],
};

export default function KompresPdfArticle() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-24 md:pt-32 pb-20 px-6">
      
      {/* --- WILAYAH 2: JSON-LD --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Mengapa Kompres PDF Sangat Penting untuk Produktivitas Digital",
            "author": {
              "@type": "Person",
              "name": "Ravid El Aziz",
              "url": "https://pieswap.my.id/about"
            },
            "datePublished": "2026-02-23",
            "description": "Analisis mengenai pentingnya kompresi dokumen PDF dalam manajemen data modern.",
            "publisher": {
              "@type": "Organization",
              "name": "Pieswap",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pieswap.my.id/icon.png"
              }
            }
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#10B981] mb-8 md:mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Journal
        </Link>

        <header className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[9px] font-black tracking-[0.2em] text-[#10B981] mb-6 uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Insight / 003</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1] mb-10">
            Kompresi Cerdas: Mengapa <br className="hidden md:block" />
            <span className="text-[#10B981]">Ukuran File Berarti.</span>
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
                <p className="text-xs md:text-sm font-bold text-slate-900">23 Feb 2026</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Topic</p>
                <p className="text-xs md:text-sm font-bold text-[#10B981]">Optimization</p>
              </div>
            </div>
          </div>
        </header>

        <article className="bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-16 border border-slate-100 shadow-sm mb-16">
          <div className="prose prose-sm md:prose-base prose-slate max-w-none">
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-12 font-medium">
              Di era digital yang serba cepat, ukuran file seringkali menjadi hambatan utama dalam berbagi informasi. Pernahkah Anda gagal mengirim email hanya karena lampiran PDF yang terlalu besar?
            </p>

            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">3 Alasan Utama Kompresi PDF</h2>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start bg-[#F8FAFC] p-6 rounded-2xl">
                <Zap className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Kecepatan Pengiriman</h4>
                  <p className="text-slate-500 text-xs">File yang lebih kecil berarti proses upload dan download yang jauh lebih cepat, menghemat waktu berharga Anda.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-[#F8FAFC] p-6 rounded-2xl">
                <FileDown className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Efisiensi Penyimpanan</h4>
                  <p className="text-slate-500 text-xs">Mengurangi ukuran PDF membantu menghemat ruang di cloud storage maupun memori fisik perangkat Anda.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-[#F8FAFC] p-6 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Aksesibilitas Mobile</h4>
                  <p className="text-slate-500 text-xs">Pengguna smartphone dapat membuka dokumen lebih lancar tanpa menghabiskan banyak kuota data.</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Teknologi di Balik Pieswap</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Pieswap menggunakan algoritma kompresi mutakhir yang mampu mengecilkan ukuran file hingga 70% tanpa merusak kualitas visual teks dan gambar secara signifikan.
            </p>

            <blockquote className="border-l-4 border-[#10B981] pl-6 my-10 py-4 bg-emerald-50/50 rounded-r-2xl px-6">
              <p className="text-base md:text-lg italic text-slate-900 font-medium">
                "Digitalisasi bukan hanya soal memindahkan kertas ke layar, tapi bagaimana kita mengoptimalkannya agar lebih efisien."
              </p>
            </blockquote>

            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">Mulai Sekarang</h2>
            <p className="text-slate-600 mb-0 leading-relaxed">
              Jangan biarkan ukuran file menghambat produktivitas Anda. Gunakan alat <Link href="/kompres-pdf" className="text-[#10B981] font-bold hover:underline">Kompres PDF</Link> kami secara gratis dan rasakan perbedaannya.
            </p>
          </div>
        </article>

        <div className="bg-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center font-black text-xl text-white/40">RA</div>
          <div>
            <h4 className="font-bold mb-2 uppercase tracking-tight text-lg text-white">Tentang Penulis</h4>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              <strong>Ravid El Aziz</strong> adalah pengembang asal <strong>Salatiga</strong> yang berdedikasi menciptakan alat produktivitas digital yang aksesibel untuk semua orang.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}