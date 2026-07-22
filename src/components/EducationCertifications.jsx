import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function EducationCertifications() {
  const { education, jobSimulations } = resumeData;

  return (
    <section id="education" className="py-20 relative bg-slate-950/80 border-t border-indigo-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Academic & Professional Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Job Simulations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineering background complemented by practical job simulations with leading global corporations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-6 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/30 text-amber-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Education
                  </h3>
                  <div className="text-xs text-violet-400 font-bold">
                    Engineering Foundation
                  </div>
                </div>
              </div>

              {education.map((edu) => (
                <div key={edu.degree} className="space-y-3">
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-bold text-indigo-300">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {edu.location}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-2xl bg-slate-950 border border-indigo-900/50">
                    {edu.highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Verified Degree Credential
            </div>
          </motion.div>

          {/* Job Simulations Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-6 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/30 text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Job Simulations
                  </h3>
                  <div className="text-xs text-violet-400 font-bold">
                    Forage Professional Simulations
                  </div>
                </div>
              </div>

              {/* Siemens & CBRE Job Simulations */}
              <div className="space-y-4">
                {jobSimulations.map((sim, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950 border border-indigo-900/60 space-y-2 hover:border-violet-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                        <Briefcase className="w-4 h-4 text-amber-400" />
                        {sim.title} – <span className="text-amber-300">{sim.company}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-extrabold text-[11px] border border-indigo-500/30">
                        {sim.platform}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {sim.details}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-400">
              <ShieldCheck className="w-4 h-4 text-violet-400" />
              Practical project management simulations completed on Forage
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
