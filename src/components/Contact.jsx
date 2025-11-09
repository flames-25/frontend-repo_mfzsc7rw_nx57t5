import { Send, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesanmu sudah terkirim.');
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <h2 className="text-white text-3xl font-semibold tracking-tight">Mari berdiskusi</h2>
            <p className="mt-2 text-slate-400">Punya ide atau proyek? Saya siap membantu mewujudkannya.</p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:you@email.com" className="flex items-center gap-2 text-slate-300 hover:text-white">
                <Mail size={16} />
                you@email.com
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 text-sm">Nama</label>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="text-slate-300 text-sm">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    placeholder="alamat@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-300 text-sm">Pesan</label>
                <textarea
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  placeholder="Ceritakan kebutuhanmu"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-medium shadow-sm hover:shadow transition-shadow"
              >
                <Send size={16} />
                Kirim Pesan
              </button>
              {status && (
                <p className="text-emerald-400 text-sm flex items-center gap-2">
                  <MessageSquare size={16} /> {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
