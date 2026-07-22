import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  Sparkles,
  FileText
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ProjectShowcase({ onSelectCaseStudy }) {
  const { projectsCaseStudies } = resumeData;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured IT Initiatives & Governance Turnarounds
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click any case study below to open its dedicated executive breakdown page with problem statements, governance solutions, and metrics.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projectsCaseStudies.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectCaseStudy(project.id)}
              className="group relative p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer"
            >
              <div className="space-y-4">
                
                {/* Top Header */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-300 bg-violet-500/10 border border-violet-500/30 px-3 py-1 rounded-full">
                    <Building2 className="w-3.5 h-3.5" />
                    {project.organization}
                  </span>
                  <span className="text-xs font-extrabold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                    {project.impact}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

              </div>

              {/* Tags & Link */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 text-xs font-medium border border-indigo-900/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-extrabold text-amber-300 pt-2 group-hover:text-amber-400">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-violet-400" />
                    Read Full Case Study
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
