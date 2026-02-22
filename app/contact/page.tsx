import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto py-32 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black tracking-[0.2em] text-[#2563EB] mb-8 uppercase">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase mb-8 leading-none">
            Hubungi Kami.
          </h1>
          <p className="text-slate-400 font-medium leading-relaxed mb-12 max-w-sm">
            Ada pertanyaan atau saran? Tim kami (dan Ravid) siap mendengarkan Anda.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Email</p>
                <p className="font-bold text-slate-900">support@pieswap.my.id</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-[#10B981] group-hover:text-white transition-all shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">WhatsApp</p>
                <p className="font-bold text-slate-900">+62 8XX XXXX XXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Location</p>
                <p className="font-bold text-slate-900">Salatiga, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Sederhana tapi Mahal */}
        <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          <form className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-2">Full Name</label>
              <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#2563EB] transition-all outline-none text-sm font-medium" placeholder="Ravid El Aziz" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-2">Email Address</label>
              <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#2563EB] transition-all outline-none text-sm font-medium" placeholder="hello@example.com" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-2">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#2563EB] transition-all outline-none text-sm font-medium resize-none" placeholder="Bagaimana kami bisa membantu Anda?" />
            </div>
            <button type="button" className="w-full bg-[#10B981] text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-[#059669] transition-all shadow-lg shadow-emerald-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}