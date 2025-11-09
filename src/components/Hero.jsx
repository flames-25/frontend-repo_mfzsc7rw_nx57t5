import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <Sparkles size={14} className="text-emerald-300" />
              <span>UI/UX Designer • Frontend Engineer</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Membangun pengalaman digital yang intuitif dan menyenangkan
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              Saya merancang antarmuka yang indah dan mengembangkan frontend yang cepat, aksesibel, dan interaktif. Fokus pada detail, konsistensi, dan hasil.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-medium shadow-sm hover:shadow transition-shadow"
              >
                Lihat Proyek
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>

      {/* Gradient overlay to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </section>
  );
}
