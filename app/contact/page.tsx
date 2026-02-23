"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, ArrowLeft, MapPin, Sparkles, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    // GANTI "your_formspree_id" dengan ID dari akun Formspree lo nanti
    try {
      const response = await fetch("https://formspree.io/f/mdalpezj", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Waduh, ada masalah pas kirim pesan. Coba lagi ya!");
      }
    } catch (err) {
      setError("Gagal terhubung ke server. Cek koneksi internet lo, Vid!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <Link href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT SIDE: INFO --- */}
          <div>
            <header className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black tracking-[0.2em] text-[#2563EB] mb-6 uppercase">
                <Sparkles className="w-3 h-3" />
                <span>Get In Touch</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-8">
                Let's <br /><span className="text-[#2563EB]">Connect.</span>
              </h1>
              <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                Punya pertanyaan teknis atau ingin berkolaborasi dengan developer dari Salatiga? Saya selalu terbuka untuk diskusi.
              </p>
            </header>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-[#2563EB] shadow-sm group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Email Utama</p>
                  <p className="text-sm font-bold text-slate-900">ravid@pieswap.my.id</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-[#10B981] shadow-sm group-hover:bg-[#10B981] group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Base Camp</p>
                  <p className="text-sm font-bold text-slate-900">Salatiga, Central Java, ID</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="bg-white rounded-[48px] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
            {success ? (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#10B981]">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Pesan Terkirim!</h3>
                <p className="text-slate-400 text-sm font-medium mb-8">Siap, Vid! Pesan sudah masuk. Ravid bakal segera balas.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] underline"
                >
                  Kirim Pesan Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <p className="text-red-500 text-xs font-bold text-center mb-4 uppercase tracking-widest">{error}</p>}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Nama</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-[#F8FAFC] border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-4 focus:ring-[#2563EB]/5 focus:border-[#2563EB] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-[#F8FAFC] border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-4 focus:ring-[#2563EB]/5 focus:border-[#2563EB] outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Pesan</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="Halo Ravid, saya mau tanya soal Pieswap..."
                    className="w-full bg-[#F8FAFC] border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-4 focus:ring-[#2563EB]/5 focus:border-[#2563EB] outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={loading}
                  className="w-full bg-[#2563EB] text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex justify-center items-center gap-3 hover:bg-[#38BDF8] disabled:bg-slate-200 shadow-xl shadow-blue-500/20 transition-all"
                >
                  {loading ? (
                    <><Loader2 className="animate-spin w-4 h-4" /> Mengirim...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Kirim Sekarang</>
                  )}
                </button>
              </form>
            )}
            <MessageSquare className="absolute -bottom-10 -right-10 w-48 h-48 text-slate-50 -rotate-12 -z-0" />
          </div>

        </div>
      </div>
    </main>
  );
}