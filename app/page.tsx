import Link from 'next/link';
import { FileText, FileCode, Zap, ArrowRight, MousePointer2 } from 'lucide-react';

export default function Home() {
  const tools = [
    {
      title: "PDF ke Word",
      desc: "Pixel-perfect conversion.",
      icon: <FileText className="w-6 h-6 text-[#2563EB]" />,
      link: "/pdf-ke-word",
      color: "bg-blue-50"
    },
    {
      title: "Word ke PDF",
      desc: "Universal document standard.",
      icon: <FileCode className="w-6 h-6 text-[#38BDF8]" />,
      link: "/word-ke-pdf",
      color: "bg-sky-50"
    },
    {
      title: "Kompres PDF",
      desc: "Optimized file footprint.",
      icon: <Zap className="w-6 h-6 text-[#10B981]" />,
      link: "/kompres-pdf",
      color: "bg-emerald-50"
    }
  ];

  return (
    <main>
      <section className="max-w-6xl mx-auto py-16 md:py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.link} className="group">
              <div className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#2563EB]/10 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tighter uppercase">{tool.title}</h3>
                <p className="text-slate-400 font-medium text-[10px] mb-8 uppercase tracking-widest">{tool.desc}</p>
                <div className="mt-auto inline-flex items-center justify-center bg-[#10B981] text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#059669] transition-colors shadow-lg shadow-emerald-100">
                  Gunakan <MousePointer2 className="w-3 h-3 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-24 md:py-32 px-6 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-lg text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">The Journal.</h2>
            <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">Wawasan mendalam mengenai manajemen dokumen dan privasi digital oleh Ravid El Aziz.</p>
          </div>
          <Link href="/blog" className="text-[#2563EB] font-bold text-[10px] uppercase tracking-widest flex items-center group">
            Semua Artikel <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <Link href="/blog/cara-mengubah-pdf-ke-word-tanpa-berantakan" className="group block">
            <div className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-100 hover:border-[#2563EB]/20 transition-all flex flex-col h-full shadow-sm hover:shadow-md">
              <span className="text-[#2563EB] text-[9px] font-black tracking-[0.3em] uppercase mb-6 block">Analysis / 001</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 group-hover:text-[#2563EB] transition-colors leading-tight tracking-tighter uppercase">
                Cara Mengubah PDF ke Word Tanpa Berantakan.
              </h3>
              <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">Analisis integritas data digital di era kecepatan tinggi.</p>
              <div className="mt-auto text-[10px] font-black uppercase tracking-widest text-[#10B981]">Read More</div>
            </div>
          </Link>

          <Link href="/blog/cara-mengubah-word-ke-pdf-tanpa-berantakan" className="group block">
            <div className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-100 hover:border-[#2563EB]/20 transition-all flex flex-col h-full shadow-sm hover:shadow-md">
              <span className="text-[#2563EB] text-[9px] font-black tracking-[0.3em] uppercase mb-6 block">Tutorial / 002</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 group-hover:text-[#2563EB] transition-colors leading-tight tracking-tighter uppercase">
                Cara Mengubah Word ke PDF Tanpa Berantakan.
              </h3>
              <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">Tips rahasia agar margin dan posisi gambar dokumen Anda tetap presisi.</p>
              <div className="mt-auto text-[10px] font-black uppercase tracking-widest text-[#10B981]">Read More</div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}