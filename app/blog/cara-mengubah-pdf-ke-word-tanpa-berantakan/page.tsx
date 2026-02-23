import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2, FileCheck, ShieldCheck, Zap, Sparkles } from 'lucide-react';

// --- WILAYAH 1: METADATA (DI LUAR FUNCTION) ---
// Google baca bagian ini buat nentuin judul di hasil pencarian.
export const metadata = {
  title: "Cara Mengubah PDF ke Word Tanpa Berantakan (100% Presisi) | Pieswap",
  description: "Panduan lengkap cara konversi PDF ke Word agar layout, font, dan gambar tidak bergeser. Tips profesional dari Ravid El Aziz.",
  keywords: ["PDF ke Word", "Konversi PDF", "Pieswap", "Tutorial Dokumen", "Salatiga Tech"],
};

export default function ArtikelPdfKeWord() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
      
      {/* --- WILAYAH 2: JSON-LD (DI DALAM FUNCTION, TEPAT DI BAWAH <main>) --- */}
      {/* Ini kode 'rahasia' buat robot Google agar artikel lo dapet rating tinggi. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Cara Mengubah PDF ke Word Tanpa Berantakan",
            "author": {
              "@type": "Person",
              "name": "Ravid El Aziz",
              "url": "https://pieswap.my.id/about"
            },
            "datePublished": "2026-02-22",
            "description": "Analisis integritas data digital dan cara konversi PDF tanpa merusak layout.",
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
        
        {/* --- BREADCRUMBS --- */}
        <Link href="/blog" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Journal
        </Link>

        {/* --- ARTICLE HEADER --- */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black tracking-[0.2em] text-[#2563EB] mb-8 uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Analysis / 001</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1] mb-10">
            Cara Mengubah PDF ke Word <br />
            <span className="text-[#2563EB]">Tanpa Berantakan.</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Author</p>
                <p className="text-sm font-bold text-slate-900">Ravid El Aziz</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Published</p>
              <p className="text-sm font-bold text-slate-900">22 Februari 2026</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Read Time</p>
              <p className="text-sm font-bold text-[#10B981]">4 Min Read</p>
            </div>
          </div>
        </header>

        {/* --- MAIN CONTENT CARD --- */}
        <article className="bg-white rounded-[48px] p-10 md:p-16 border border-slate-100 shadow-sm mb-16">
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
              Pernahkah Anda merasa kesal saat mengubah file PDF ke Word namun hasilnya justru berantakan? Font yang berubah hingga gambar yang menumpuk seringkali menjadi masalah utama. Di <strong>Pieswap.my.id</strong>, kami memahami keresahan tersebut.
            </p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6 text-[#2563EB]">Mengapa Layout PDF Sering Berantakan?</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              PDF dirancang untuk mempertahankan tampilan dokumen agar tetap sama di perangkat mana pun. Namun, saat dikembalikan ke format Word (.docx), struktur kode di dalamnya harus disusun ulang. Jika alat konversi tidak akurat, maka terjadilah pergeseran layout yang merepotkan.
            </p>

            {/* Visual Highlight Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#F8FAFC] p-8 rounded-[32px] border border-slate-50">
                <Zap className="w-8 h-8 text-[#2563EB] mb-4" />
                <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Teknologi CloudConvert</h4>
                <p className="text-slate-500 text-xs">Mampu membaca struktur PDF Anda dan menyusunnya kembali dengan akurasi tinggi.</p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-[32px] border border-slate-50">
                <ShieldCheck className="w-8 h-8 text-[#10B981] mb-4" />
                <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Keamanan Akses</h4>
                <p className="text-slate-500 text-xs">Layanan kami menjamin aksesibilitas dokumen secara gratis dan aman.</p>
              </div>
            </div>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">Langkah Konversi di Pieswap</h2>
            <ol className="list-decimal ml-6 mb-10 space-y-4 text-slate-600 font-medium">
              <li>Kunjungi halaman <Link href="/pdf-ke-word" className="text-[#2563EB] font-bold hover:underline">PDF ke Word</Link> di Pieswap.</li>
              <li>Seret dan lepas (drag and drop) file PDF Anda ke kotak uploader.</li>
              <li>Klik tombol <strong>"Mulai Konversi"</strong> dan tunggu beberapa detik.</li>
              <li>Klik <strong>"Download Word"</strong> untuk mendapatkan file Anda.</li>
            </ol>

            <blockquote className="border-l-4 border-[#2563EB] pl-6 my-12 py-4 bg-blue-50/50 rounded-r-2xl px-6">
              <p className="text-lg italic text-slate-900 font-medium leading-relaxed">
                "Pieswap dibangun untuk memudahkan aksesibilitas dokumen bagi semua orang secara gratis dan aman."
              </p>
              <footer className="text-xs font-black uppercase tracking-widest text-[#2563EB] mt-4">— Ravid El Aziz, Founder Pieswap</footer>
            </blockquote>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6 text-[#2563EB]">Tips Agar Hasil Tetap Rapi</h2>
            <p className="text-slate-600 mb-0 leading-relaxed">
              Pastikan file PDF Anda bukan merupakan hasil foto kamera (image-based PDF). Gunakan PDF yang memang disimpan (save as) dari Microsoft Word atau Google Docs untuk hasil 100% sempurna.
            </p>
          </div>
        </article>

        {/* --- AUTHOR FOOTER --- */}
        <div className="bg-slate-900 rounded-[48px] p-10 md:p-12 text-white flex flex-col md:flex-row items-center gap-10">
          <div className="w-24 h-24 bg-white/10 rounded-full flex-shrink-0 flex items-center justify-center font-black text-2xl text-white/20">
            RA
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Tentang Penulis</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong>Ravid El Aziz</strong> adalah seorang pengembang aplikasi dari <strong>Salatiga</strong> yang fokus pada solusi teknologi produktivitas dan kecerdasan buatan.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}