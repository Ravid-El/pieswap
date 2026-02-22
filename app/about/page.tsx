import { User, Code2, Globe, Sparkles, ArrowLeft, Terminal, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] mb-8 md:mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back
        </Link>

        <header className="mb-12 md:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black tracking-[0.2em] text-[#2563EB] mb-6 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Developer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-6">
            About the <br /><span className="text-[#2563EB]">Project.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Mengenal lebih dekat visi di balik Pieswap dan sosok pengembang yang membangunnya dari Salatiga.
          </p>
        </header>

        <section className="bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-sm mb-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 rounded-[24px] md:rounded-[32px] flex items-center justify-center text-white font-black text-2xl md:text-3xl flex-shrink-0 shadow-xl shadow-slate-200">
              RE
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight uppercase">Ravid El Aziz</h2>
              <p className="text-[#2563EB] text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase mb-6 flex items-center justify-center md:justify-start gap-2">
                <Code2 className="w-4 h-4" /> Fullstack Developer
              </p>
              <div className="text-sm md:text-base text-slate-500 font-medium leading-relaxed space-y-4">
                <p>
                  Halo, saya Ravid. Saya adalah pengembang aplikasi dari <strong>Salatiga</strong> yang membangun Pieswap untuk menyediakan alat produktivitas gratis yang menjaga privasi data pengguna sepenuhnya.
                </p>
              </div>
            </div>
          </div>
          <Terminal className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 text-slate-50 -rotate-12 hidden md:block" />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-slate-900 p-8 md:p-10 rounded-[32px] md:rounded-[40px] text-white">
            <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#38BDF8] mb-6" />
            <h3 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-tight">Visi Lokal</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
              Membuktikan inovasi teknologi kelas dunia bisa lahir dari Salatiga untuk membantu pengguna global.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm">
            <Coffee className="w-6 h-6 md:w-8 md:h-8 text-[#10B981] mb-6" />
            <h3 className="text-lg md:text-xl font-bold mb-4 text-slate-900 uppercase tracking-tight">Filosofi</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
              Setiap alat digital harus memiliki estetika yang bersih dan navigasi yang memudahkan penggunanya.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}