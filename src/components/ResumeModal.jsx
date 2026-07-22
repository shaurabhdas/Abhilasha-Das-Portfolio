import React from 'react';
import { X, Printer, MapPin, Mail, Phone } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personalInfo, experience, education, jobSimulations, competencies } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-indigo-900/80 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm">
              AD
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                Abhilasha Das — Official Resume Document
              </h2>
              <p className="text-[11px] text-amber-400 font-semibold">
                IT Project Coordinator | PMO Analyst | Project Analyst
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 text-sm leading-relaxed">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <h1 className="text-3xl font-extrabold text-white tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <div className="text-sm font-bold text-amber-400 tracking-wide">
              {personalInfo.title}
            </div>
            <div className="text-xs text-slate-400">
              {personalInfo.subTitle}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Core Competencies
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {competencies.map((c) => (
                <div key={c.category} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="font-bold text-white">{c.category}:</div>
                  <div className="text-slate-400">{c.skills.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Professional Experience
            </h3>

            {experience.map((job) => (
              <div key={job.company + job.role} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/60 pb-2">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {job.role}
                    </h4>
                    <div className="text-xs font-bold text-indigo-300">
                      {job.company} — {job.location}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-400">
                    {job.period}
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300">
                  {job.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-violet-400 font-bold">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-indigo-900/50 text-[11px] text-amber-300 font-semibold flex flex-wrap gap-x-4">
                  <span>Key Results:</span>
                  {job.keyResults.map((kr, idx) => (
                    <span key={idx}>✓ {kr}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.degree} className="text-xs space-y-0.5">
                <div className="font-bold text-white">{edu.degree}</div>
                <div className="text-slate-400">{edu.institution}, {edu.location}</div>
              </div>
            ))}
          </div>

          {/* Job Simulations */}
          <div className="space-y-2">
            <h3 className="text-xs font-extrabold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Job Simulations
            </h3>
            <ul className="text-xs text-slate-300 space-y-1.5">
              {jobSimulations.map((sim, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>{sim.title} – {sim.company}</strong> ({sim.platform})</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Abhilasha Das Portfolio • Toronto, ON</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}
