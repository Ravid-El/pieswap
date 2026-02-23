"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, Calendar, User, Search, Sparkles, Clock, Loader2, CheckCircle2 } from 'lucide-react';

export default function BlogArchive() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const posts = [
    {
      id: "cara-mengubah-pdf-ke-word-tanpa-berantakan", 
      category: "Analysis / 001",
      title: "Cara Mengubah PDF ke Word Tanpa Berantakan.",
      excerpt: "Analisis mendalam mengenai integritas data digital dan cara menjaga estetika dokumen tetap utuh di era kecepatan tinggi.",
      date: "22 Februari 2026",
      author: "Ravid El Aziz",
      readTime: "5 min read"
    },
    {
      id: "cara-mengubah-word-ke-pdf-tanpa-berantakan",
      category: "Tutorial / 002",
      title: "Cara Mengubah Word ke PDF Tanpa Berantakan.",
      excerpt: "Tips rahasia agar margin dan posisi gambar dokumen Anda tetap presisi saat dikonversi ke format PDF digital.",
      date: "20 Februari 2026",
      author: "Ravid El Aziz",
      readTime: "3 min read"
    },
    {
      id: "mengapa-kompres-pdf-penting",
      category: "Insight / 003",
      title: "Kompresi Cerdas: Mengapa Ukuran File Berarti.",
      excerpt: "Analisis mengenai pentingnya kompresi dokumen PDF dalam manajemen data modern untuk efisiensi penyimpanan dan pengiriman.",
      date: "23 Februari 2026",
      author: "Ravid El Aziz",
      readTime: "4 min read"
    }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // GANTI "your_formspree_id" dengan ID yang lo dapet dari Formspree tadi
      const res = await fetch("https://formspree.io/f/mnjbopog", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER JURNAL --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black tracking-[0.2em] text-[#2563EB] mb-8 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Knowledge Base & Insights</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-6 leading-none">
              The Journal<span className="text-[#2563EB]">.</span>
            </h1>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Arsip pemikiran, tutorial, dan analisis teknis oleh <span className="text-slate-900 font-bold">Ravid El Aziz</span>, pengembang dari Salatiga.
            </p>
          </div>
          
          <div className="relative w-full md:w-80 group">
            <input 
              type="text" 
              placeholder="Cari artikel..." 
              className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-4 focus:ring-[#2563EB]/10 focus:border-[#2563EB] outline-none transition-all shadow-sm"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#2563EB] transition-colors" />
          </div>
        </div>

        {/* --- GRID DAFTAR ARTIKEL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.id}`} className="group">
              <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#2563EB]/10 transition-all duration-700 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="w-6 h-6 text-[#2563EB] -rotate-45" />
                </div>

                <div className="flex justify-between items-center mb-10">
                  <span className="text-[#2563EB] text-[10px] font-black tracking-[0.3em] uppercase">{post.category}</span>
                  <div className="flex items-center gap-4 text-slate-300 text-[9px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-[#2563EB] transition-colors leading-tight tracking-tighter uppercase">
                  {post.title}
                </h2>
                
                <p className="text-slate-400 font-medium text-sm leading-relaxed mb-10 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-10 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-400">
                      RA
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{post.author}</span>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#10B981] flex items-center group-hover:translate-x-2 transition-transform">
                    Read Entry <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- NEWSLETTER SECTION (FIXED) --- */}
        <div className="mt-40 bg-slate-900 rounded-[56px] p-16 text-center relative overflow-hidden">
          <div className="relative z-10 text-white">
            <h2 className="text-4xl font-bold mb-4 tracking-tight uppercase">Join the Insights<span className="text-[#2563EB]">.</span></h2>
            <p className="text-slate-400 mb-10 max-w-sm mx-auto text-sm font-medium">
              Dapatkan tutorial dokumen terbaru langsung di inbox Anda.
            </p>

            {status === "success" ? (
              <div className="flex items-center justify-center gap-2 text-[#10B981] font-bold uppercase text-[10px] tracking-widest bg-emerald-500/10 py-6 rounded-3xl border border-emerald-500/20 max-w-md mx-auto animate-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-5 h-5" /> Berhasil Berlangganan!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@anda.com" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-[#2563EB] transition-all"
                />
                <button 
                  disabled={status === "loading"}
                  className="bg-[#2563EB] text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#38BDF8] transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center min-w-[140px]"
                >
                  {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
                </button>
              </form>
            )}
            
            {status === "error" && (
              <p className="text-red-400 text-[9px] mt-4 uppercase font-black tracking-widest">
                Waduh gagal, coba lagi nanti Vid!
              </p>
            )}
          </div>
          <FileText className="absolute -bottom-10 -left-10 w-64 h-64 text-white/5 -rotate-12" />
        </div>
      </div>
    </main>
  );
}