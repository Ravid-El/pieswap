import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata: Sangat penting untuk Google Search & AdSense
export const metadata: Metadata = {
  title: "Pieswap.my.id - Konversi PDF ke Word & Word ke PDF Gratis",
  description: "Pieswap adalah alat online gratis untuk mengonversi PDF ke Word, Word ke PDF, dan kompres PDF dengan cepat dan aman di Indonesia.",
  keywords: ["pdf ke word", "word ke pdf", "kompres pdf", "converter pdf gratis", "pieswap"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* --- NAVBAR --- */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tighter">
              PIESWAP<span className="text-gray-400 text-lg">.my.id</span>
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/pdf-ke-word" className="hover:text-blue-600">PDF ke Word</Link>
              <Link href="/word-ke-pdf" className="hover:text-blue-600">Word ke PDF</Link>
              <Link href="/kompres-pdf" className="hover:text-blue-600">Kompres PDF</Link>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* --- FOOTER (Wajib untuk AdSense) --- */}
        <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
              <div>
                <h3 className="font-bold mb-4 text-gray-900">Tentang Pieswap</h3>
                <p className="text-sm text-gray-500">
                  Pieswap adalah layanan konversi dokumen online gratis yang fokus pada kecepatan dan privasi pengguna.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-gray-900">Alat Populer</h3>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li><Link href="/pdf-ke-word" className="hover:underline">PDF ke Word</Link></li>
                  <li><Link href="/word-ke-pdf" className="hover:underline">Word ke PDF</Link></li>
                  <li><Link href="/kompres-pdf" className="hover:underline">Kompres PDF</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-gray-900">Bantuan & Hukum</h3>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                  <li><Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
                  <li><Link href="/contact" className="hover:underline">Hubungi Kami</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-8">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Pieswap.my.id. Dibuat dengan ❤️ di Indonesia.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}