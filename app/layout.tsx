import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Command, Heart } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pieswap.web.id - Modern Document Engine",
  description: "Konversi PDF gratis dengan standar kualitas profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC] text-slate-900`}>
        {/* --- NAVBAR MODERN (Tetap sesuai kode lo) --- */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 h-16 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center group-hover:bg-[#38BDF8] transition-colors">
                <Command className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-black tracking-tighter uppercase text-[#2563EB]">PIESWAP.</span>
            </Link>
            
            <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <Link href="/pdf-ke-word" className="hover:text-[#2563EB] transition-colors">PDF to Word</Link>
              <Link href="/word-ke-pdf" className="hover:text-[#2563EB] transition-colors">Word to PDF</Link>
              <Link href="/kompres-pdf" className="hover:text-[#2563EB] transition-colors">Compress</Link>
              <Link href="/blog" className="text-[#2563EB] hover:text-[#38BDF8] transition-colors">The Journal</Link>
            </div>

            <Link href="/blog" className="md:hidden text-[10px] font-black uppercase tracking-widest text-[#2563EB]">
              Journal
            </Link>
          </div>
        </nav>

        <div className="min-h-screen pt-14">
          {children}
        </div>

        {/* --- FOOTER LUXURY (Gue poles dikit biar makin pro) --- */}
        <footer className="bg-white border-t border-slate-100 pt-24 pb-12 mt-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
              
              {/* Kolom 1: Branding & About */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase mb-6">Pieswap<span className="text-[#2563EB]">.</span></h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0 mb-8">
                  Solusi konversi dokumen digital yang dikembangkan untuk kecepatan, akurasi, dan privasi total dari Salatiga.
                </p>
                <Link href="/about" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB] hover:text-[#38BDF8] transition-colors">
                  About the Project →
                </Link>
              </div>

              {/* Kolom 2: Alat Utama */}
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-8">Alat Utama</h4>
                <ul className="text-sm font-medium text-slate-400 space-y-4">
                  <li><Link href="/pdf-ke-word" className="hover:text-[#2563EB] transition-colors">PDF ke Word</Link></li>
                  <li><Link href="/word-ke-pdf" className="hover:text-[#2563EB] transition-colors">Word ke PDF</Link></li>
                  <li><Link href="/kompres-pdf" className="hover:text-[#2563EB] transition-colors">Kompres PDF</Link></li>
                </ul>
              </div>

              {/* Kolom 3: Support & Legal */}
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-8">Informasi</h4>
                <ul className="text-sm font-medium text-slate-400 space-y-4">
                  <li><Link href="/blog" className="hover:text-[#2563EB] transition-colors">The Journal</Link></li>
                  <li><Link href="/faq" className="hover:text-[#2563EB] transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-[#2563EB] transition-colors">Contact Support</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-[#2563EB] transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-and-conditions" className="hover:text-[#2563EB] transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                <span>© {new Date().getFullYear()} PIESWAP</span>
                <span className="hidden md:inline">—</span>
                <span className="flex items-center gap-1.5">
                  BUILT WITH <Heart className="w-3 h-3 text-red-400 fill-current" /> BY RAVID EL IN SALATIGA
                </span>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                <span>All Rights Reserved</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}