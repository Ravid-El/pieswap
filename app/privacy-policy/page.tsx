import { ShieldCheck, Lock, EyeOff, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// --- WILAYAH 1: SEO METADATA ---
export const metadata = {
  title: "Kebijakan Privasi (Privacy Policy) | Pieswap",
  description: "Informasi lengkap mengenai cara Pieswap melindungi data Anda, kebijakan penghapusan file otomatis, dan penggunaan cookies iklan Google AdSense.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
      
      {/* --- WILAYAH 2: SCHEMA WEB PAGE (JSON-LD) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - Pieswap",
            "description": "Kebijakan perlindungan data dan penggunaan cookies untuk layanan Pieswap.",
            "publisher": {
              "@type": "Organization",
              "name": "Pieswap",
              "logo": "https://pieswap.my.id/icon.png"
            }
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        
        {/* --- BREADCRUMBS --- */}
        <Link href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Home
        </Link>

        {/* --- HEADER --- */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black tracking-[0.2em] text-[#2563EB] mb-8 uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">
            Privacy <span className="text-[#2563EB]">Policy.</span>
          </h1>
          <p className="text-slate-400 font-medium tracking-tight uppercase text-[10px] tracking-[0.2em]">Terakhir diperbarui: 23 Februari 2026</p>
        </header>

        {/* --- CONTENT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm group hover:border-[#2563EB]/20 transition-colors">
            <Lock className="w-8 h-8 text-[#2563EB] mb-6" />
            <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Enkripsi Data</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Semua file yang diunggah diproses melalui jalur koneksi terenkripsi (SSL) untuk menjaga keamanan data Anda.</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm group hover:border-[#10B981]/20 transition-colors">
            <Trash2 className="w-8 h-8 text-[#10B981] mb-6" />
            <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Penghapusan Otomatis</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Pieswap berkomitmen untuk menghapus seluruh file Anda dari server kami secara permanen dalam waktu 24 jam.</p>
          </div>
        </div>

        {/* --- DETAILED TEXT --- */}
        <article className="bg-white rounded-[48px] p-10 md:p-16 border border-slate-100 shadow-sm">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">1. Informasi yang Kami Kumpulkan</h2>
            <p className="text-slate-600 mb-10 leading-relaxed font-medium">
              Pieswap.my.id tidak mengharuskan pengguna untuk mendaftar. Kami hanya mengumpulkan informasi teknis standar seperti alamat IP dan jenis perangkat untuk optimasi layanan. Kami TIDAK menyimpan konten dari file yang Anda konversi setelah proses selesai.
            </p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6 text-[#2563EB]">2. Penggunaan Cookies & Iklan</h2>
            <p className="text-slate-600 mb-10 leading-relaxed font-medium">
              Situs ini menggunakan Google AdSense untuk menampilkan iklan. Google menggunakan cookies (seperti cookie DART) untuk menyajikan iklan berdasarkan kunjungan Anda ke situs ini dan situs lainnya di internet. Anda dapat memilih untuk keluar dari penggunaan cookie DART dengan mengunjungi kebijakan privasi jaringan iklan dan konten Google.
            </p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">3. Keamanan File</h2>
            <p className="text-slate-600 mb-10 leading-relaxed font-medium">
              Privasi Anda adalah prioritas kami. Seluruh proses konversi dilakukan secara otomatis oleh mesin. Tidak ada manusia (termasuk tim pengembang) yang memiliki akses untuk melihat atau mengunduh file yang Anda unggah ke Pieswap.
            </p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">4. Perubahan Kebijakan</h2>
            <p className="text-slate-600 mb-10 leading-relaxed font-medium">
              Kami sebagai pengembang berhak memperbarui kebijakan privasi ini kapan saja. Kami menyarankan pengguna untuk sering memeriksa halaman ini demi informasi terbaru tentang cara kami melindungi informasi pribadi yang dikumpulkan.
            </p>

            <div className="pt-10 border-t border-slate-50">
              <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Hubungi Pengembang</h4>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-loose">
                Jika ada pertanyaan mengenai kebijakan ini, silakan hubungi kami di <span className="text-[#2563EB]">pieswap.my@gmail.com</span> atau melalui <Link href="/contact" className="underline">halaman kontak</Link>.
              </p>
            </div>
          </div>
        </article>

        {/* --- FOOTER INFO --- */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
            PIESWAP BY RAVID EL — SALATIGA, INDONESIA
          </p>
        </div>

      </div>
    </main>
  );
}