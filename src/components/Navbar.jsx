import React, { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Governance Lifecycle', href: '#simulator' },
    { name: 'Experience', href: '#experience' },
    { name: 'Competencies', href: '#competencies' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-indigo-900/40 py-3.5 shadow-xl shadow-slate-950/80' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#overview" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-amber-400 flex items-center justify-center text-slate-950 font-extrabold text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              AD
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Abhilasha Das
              </span>
              <span className="block text-xs font-semibold text-violet-400 tracking-wide">
                IT Project Coordinator
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-indigo-900/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-indigo-950/70 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              View Resume
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-3.5 h-3.5" />
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-slate-900/95 backdrop-blur-lg border border-indigo-900/60 rounded-2xl shadow-2xl space-y-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-indigo-950/80 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-xl"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                View Full Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-950 bg-amber-400 rounded-xl"
              >
                <Mail className="w-4 h-4" />
                Contact Abhilasha
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
