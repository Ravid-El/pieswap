// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  const tools = [
    { name: 'PDF ke Word', slug: 'pdf-ke-word', color: 'bg-blue-500' },
    { name: 'Word ke PDF', slug: 'word-ke-pdf', color: 'bg-blue-600' },
    { name: 'Kompres PDF', slug: 'kompres-pdf', color: 'bg-red-500' },
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-black">
      <h1 className="text-4xl font-bold text-center mb-8">Pieswap.my.id</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tools.map((tool) => (
          <Link key={tool.slug} href={`/${tool.slug}`}>
            <div className={`${tool.color} p-6 rounded-xl text-white shadow-lg hover:scale-105 transition cursor-pointer`}>
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-sm mt-2 opacity-80">Gratis, Cepat, & Aman</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}