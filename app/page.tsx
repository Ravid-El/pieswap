import Link from 'next/link';
import { FileText, FileCode, Zap, Shield, MousePointer2 } from 'lucide-react';

export default function Home() {
  const tools = [
    {
      title: "PDF ke Word",
      desc: "Ubah dokumen PDF menjadi Word yang bisa diedit.",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      link: "/pdf-ke-word",
      color: "bg-blue-50"
    },
    {
      title: "Word ke PDF",
      desc: "Konversi file Word menjadi PDF secara instan.",
      icon: <FileCode className="w-8 h-8 text-indigo-500" />,
      link: "/word-ke-pdf",
      color: "bg-indigo-50"
    },
    {
      title: "Kompres PDF",
      desc: "Kecilkan ukuran PDF tanpa merusak kualitas.",
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      link: "/kompres-pdf",
      color: "bg-orange-50"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-center px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Solusi Dokumen <span className="text-blue-600">Tercepat</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Ubah, kompres, dan kelola file PDF Anda dalam hitungan detik. Gratis, aman, dan tanpa perlu instalasi aplikasi.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/pdf-ke-word" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Mulai Sekarang
          </Link>
        </div>
      </section>

      {/* Grid Tools */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.link} className="group">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all transform hover:-translate-y-1 h-full">
                <div className={`w-14 h-14 ${tool.color} rounded-xl flex items-center justify-center mb-6`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">{tool.title}</h3>
                <p className="text-gray-500 mb-6">{tool.desc}</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  Gunakan Sekarang <MousePointer2 className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 mb-4 text-blue-200" />
            <h4 className="text-xl font-bold mb-2">Privasi Terjamin</h4>
            <p className="text-blue-100">File Anda diproses secara aman dan otomatis dihapus dari server kami.</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-12 h-12 mb-4 text-blue-200" />
            <h4 className="text-xl font-bold mb-2">Proses Instan</h4>
            <p className="text-blue-100">Didukung teknologi CloudConvert untuk hasil konversi paling akurat.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// Tes perubahan 