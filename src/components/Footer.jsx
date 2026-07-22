import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Footer({ onOpenResume }) {
  const { personalInfo } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-indigo-900/40 py-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-amber-400 flex items-center justify-center text-slate-950 font-extrabold text-sm">
              AD
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Abhilasha Das
              </div>
              <div className="text-[11px] text-amber-400 font-medium">
                IT Project Coordinator & PMO Analyst
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
            <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
            <a href="#metrics" className="hover:text-amber-400 transition-colors">Metrics</a>
            <a href="#simulator" className="hover:text-amber-400 transition-colors">Lifecycle Simulator</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#competencies" className="hover:text-amber-400 transition-colors">Competencies</a>
            <button onClick={onOpenResume} className="hover:text-amber-400 transition-colors">Resume PDF</button>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-indigo-900/60 hover:border-violet-500/50 text-slate-300 hover:text-amber-400 transition-all hover:-translate-y-0.5"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <div>
            © {new Date().getFullYear()} Abhilasha Das. All rights reserved. • Toronto, Ontario, Canada
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              {personalInfo.email}
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
