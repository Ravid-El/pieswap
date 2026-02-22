import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Command } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pieswap.my.id - Modern Document Engine",
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
        {/* --- NAVBAR MODERN --- */}
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

            {/* Mobile Journal Link */}
            <Link href="/blog" className="md:hidden text-[10px] font-black uppercase tracking-widest text-[#2563EB]">
              Journal
            </Link>
          </div>
        </nav>

        <div className="min-h-screen pt-14">
          {children}
        </div>

        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
              <div>
                <h3 className="font-bold mb-4 text-[#2563EB]">Pieswap.</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Solusi konversi dokumen digital yang dikembangkan untuk kecepatan, akurasi, dan privasi total.
                </p>
                <Link href="/about" className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] hover:underline">
                  About the Project →
                </Link>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-slate-900">Alat Utama</h3>
                <ul className="text-sm text-slate-400 space-y-3">
                  <li><Link href="/pdf-ke-word" className="hover:text-[#2563EB]">PDF ke Word</Link></li>
                  <li><Link href="/word-ke-pdf" className="hover:text-[#2563EB]">Word ke PDF</Link></li>
                  <li><Link href="/kompres-pdf" className="hover:text-[#2563EB]">Kompres PDF</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-slate-900">Informasi & Hukum</h3>
                <ul className="text-sm text-slate-400 space-y-3">
                  <li><Link href="/blog" className="hover:text-[#2563EB]">Jurnal & Blog</Link></li>
                  <li><Link href="/faq" className="hover:text-[#2563EB]">FAQ</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-[#2563EB]">Privacy Policy</Link></li>
                  <li><Link href="/terms-and-conditions" className="hover:text-[#2563EB]">Terms & Conditions</Link></li>
                  <li><Link href="/contact" className="hover:text-[#2563EB]">Contact Support</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                © {new Date().getFullYear()} PIESWAP — SALATIGA, ID
              </p>
              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                DESIGNED BY RAVID EL
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}