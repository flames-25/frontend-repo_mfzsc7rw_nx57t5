import { User, Figma, MonitorSmartphone } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400" />
                <div>
                  <h3 className="text-white font-semibold">Tentang Saya</h3>
                  <p className="text-slate-400 text-sm">Desainer & Frontend</p>
                </div>
              </div>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                Saya menggabungkan pemikiran desain dan kemampuan teknis untuk mengubah ide menjadi produk digital yang dapat digunakan. Fokus pada aksesibilitas, sistem desain, dan mikrointeraksi.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <User className="mx-auto text-emerald-300" size={18} />
                  <p className="text-white text-sm mt-1">5+ thn</p>
                  <p className="text-slate-400 text-xs">Pengalaman</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <Figma className="mx-auto text-fuchsia-300" size={18} />
                  <p className="text-white text-sm mt-1">Figma</p>
                  <p className="text-slate-400 text-xs">Design System</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <MonitorSmartphone className="mx-auto text-indigo-300" size={18} />
                  <p className="text-white text-sm mt-1">Responsive</p>
                  <p className="text-slate-400 text-xs">Mobile First</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Desain berpusat pada manusia, didukung teknologi</h2>
            <p className="mt-3 text-slate-400 max-w-2xl">
              Setiap keputusan desain didukung riset dan diuji pada pengguna nyata. Saya bekerja iteratif: memahami masalah, membuat prototipe, menguji, lalu menyempurnakan.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Audit UX & heuristik',
                'Wireframe dan prototipe interaktif',
                'Sistem desain & dokumentasi',
                'Implementasi pixel-perfect',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
