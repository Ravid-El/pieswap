import { HelpCircle, ShieldCheck, Zap, Lock, ArrowLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      q: "Apa itu Pieswap?",
      a: "Pieswap adalah platform konversi dokumen digital gratis yang fokus pada akurasi layout dan keamanan data pengguna."
    },
    {
      q: "Apakah file saya aman?",
      a: "Sangat aman. Sistem kami menghapus file Anda secara permanen dari server dalam waktu 24 jam."
    },
    {
      q: "Format apa saja yang didukung?",
      a: "Saat ini kami mendukung PDF ke Word, Word ke PDF, dan Kompresi PDF."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] mb-8 md:mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back
        </Link>

        <header className="mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black tracking-[0.2em] text-[#2563EB] mb-6 uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-6">
            Frequently <br /><span className="text-[#2563EB]">Asked Questions.</span>
          </h1>
        </header>

        <div className="space-y-4 md:space-y-6 mb-16 md:mb-24">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[40px] border border-slate-100 shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                {faq.q}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed ml-4">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">Masih bingung?</h2>
            <Link href="/contact" className="inline-flex items-center bg-[#10B981] text-white px-6 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-[#059669] transition-all">
              <MessageCircle className="w-3.5 h-3.5 mr-2" /> Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}