import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm font-medium">
      <li>
        <a href="#home" onClick={() => setOpen(false)} className="text-slate-300 hover:text-white transition-colors">Beranda</a>
      </li>
      <li>
        <a href="#projects" onClick={() => setOpen(false)} className="text-slate-300 hover:text-white transition-colors">Proyek</a>
      </li>
      <li>
        <a href="#contact" onClick={() => setOpen(false)} className="text-slate-300 hover:text-white transition-colors">Kontak</a>
      </li>
      <li className="flex items-center gap-4 pt-2 md:pt-0">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate-300 hover:text-white"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate-300 hover:text-white"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:you@email.com"
          aria-label="Email"
          className="text-slate-300 hover:text-white"
        >
          <Mail size={18} />
        </a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border border-slate-700/50">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400" />
              <span className="text-white font-semibold tracking-tight">Portofolio</span>
            </a>

            <nav className="hidden md:block">
              <NavLinks />
            </nav>

            <button
              className="md:hidden text-slate-200"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
