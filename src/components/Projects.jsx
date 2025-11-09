import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Dashboard Analytics',
    desc: 'UI modern dengan chart interaktif dan dark mode konsisten.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
  },
  {
    title: 'E-commerce UI Kit',
    desc: 'Sistem desain komponen untuk toko online cepat dan scalable.',
    tags: ['Design System', 'Figma', 'Accessibility'],
    link: '#',
  },
  {
    title: '3D Landing Experience',
    desc: 'Eksperimen hero 3D interaktif menggunakan Spline dan WebGL.',
    tags: ['Spline', 'WebGL', 'Framer Motion'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Proyek Unggulan</h2>
            <p className="mt-2 text-slate-400 max-w-2xl">Kumpulan pekerjaan terbaik yang berfokus pada pengalaman pengguna dan performa.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-300">
            <Code2 size={18} />
            <span className="text-sm">Dibuat dengan perhatian pada detail</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-white text-lg font-semibold">{p.title}</h3>
                <ExternalLink size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <p className="mt-2 text-slate-400 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-slate-300 rounded-full border border-slate-700 bg-slate-800/50 px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
