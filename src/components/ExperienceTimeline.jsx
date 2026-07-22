import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Building2,
  Filter
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ExperienceTimeline() {
  const { experience } = resumeData;
  const [filter, setFilter] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState(0);

  const filteredExperience = experience.filter(job => {
    if (filter === 'All') return true;
    if (filter === 'Healthcare') return job.type.includes('Healthcare');
    if (filter === 'Government') return job.type.includes('Government');
    return true;
  });

  return (
    <section id="experience" className="py-20 relative">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & PMO Accomplishments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            8+ years leading PMO operations, project governance, schedule adherence, and financial reconciliation.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {['All', 'Healthcare', 'Government'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === tab
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-900 border border-indigo-900/60 text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Roles' : `${tab} Sector`}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-indigo-900/60 ml-4 sm:ml-8 lg:ml-32 space-y-12">
          
          <AnimatePresence mode="wait">
            {filteredExperience.map((job, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <motion.div 
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-6 sm:pl-10 group"
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-slate-950 border-2 border-violet-400 flex items-center justify-center text-amber-400 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Left Date Label for LG Screens */}
                  <div className="hidden lg:block absolute -left-36 top-2 text-right w-28">
                    <span className="block text-xs font-extrabold text-amber-300 tracking-wider">
                      {job.period}
                    </span>
                    <span className="block text-[11px] text-slate-400 font-medium">
                      {job.duration}
                    </span>
                  </div>

                  {/* Main Card */}
                  <div className="rounded-3xl bg-slate-900/80 border border-indigo-900/60 hover:border-violet-500/40 transition-all p-6 sm:p-8 space-y-6 shadow-xl">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {job.type}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {job.role}
                        </h3>
                        <div className="text-base font-bold text-indigo-300 mt-0.5">
                          {job.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                        <span className="lg:hidden px-3 py-1 rounded-md bg-slate-950 border border-indigo-900/60 font-medium text-amber-300 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-violet-400" />
                          {job.period}
                        </span>
                        <span className="px-3 py-1 rounded-md bg-slate-950 border border-indigo-900/60 font-medium text-slate-300 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {job.description}
                    </p>

                    {/* Key Results Grid */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Key Deliverable Outcomes
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {job.keyResults.map((result, rIdx) => (
                          <div key={rIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-indigo-900/50 text-xs font-semibold text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Accordion Expand Button */}
                    <div>
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                        className="inline-flex items-center gap-2 text-xs font-bold text-violet-300 hover:text-amber-300 transition-colors pt-2"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" /> Hide Detailed PMO Achievements
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" /> View All PMO Achievements ({job.achievements.length})
                          </>
                        )}
                      </button>

                      {/* Detailed Bullet Points */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-slate-800 space-y-3 animate-fadeIn">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Governance & Strategic Milestones
                          </h4>
                          <ul className="space-y-2.5">
                            {job.achievements.map((item, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
