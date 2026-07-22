import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  ShieldAlert, 
  PieChart, 
  Users, 
  CheckCircle2, 
  RotateCw, 
  GitCommit, 
  Kanban, 
  Calendar, 
  FileText, 
  Cloud, 
  Database, 
  Table, 
  BarChart3 
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const categoryIcons = {
  "Project Management & PMO": Briefcase,
  "Risk & Change Control": ShieldAlert,
  "Financial & Resource Management": PieChart,
  "Stakeholder Engagement": Users
};

const toolIconMap = {
  "RotateCw": RotateCw,
  "GitCommit": GitCommit,
  "Kanban": Kanban,
  "Calendar": Calendar,
  "FileText": FileText,
  "Cloud": Cloud,
  "Database": Database,
  "Table": Table,
  "BarChart3": BarChart3
};

export default function CompetenciesGrid() {
  const { competencies, toolsAndMethodologies } = resumeData;
  const [selectedToolCat, setSelectedToolCat] = useState('All');

  const filteredTools = toolsAndMethodologies.filter(t => {
    if (selectedToolCat === 'All') return true;
    return t.category === selectedToolCat;
  });

  return (
    <section id="competencies" className="py-20 relative bg-slate-950/80 border-y border-indigo-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Domain Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core PMO Competencies & Technical Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive skill matrix refined across 8+ years of governance execution, financial controls, and risk management.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {competencies.map((comp, idx) => {
            const IconComp = categoryIcons[comp.category] || Briefcase;

            return (
              <motion.div
                key={comp.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 hover:border-violet-500/50 transition-all duration-300 space-y-6 shadow-xl"
              >
                <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                  <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/30 text-amber-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {comp.category}
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {comp.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-indigo-900/50 text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-slate-900 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools Badges Cloud */}
        <div className="rounded-3xl bg-slate-900/80 border border-indigo-900/60 p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Methodologies, Enterprise Systems & Analytics
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Hands-on technical proficiency across PM software, ERP systems, and reporting tools.
              </p>
            </div>

            {/* Tool Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
              {['All', 'Methodology', 'Tool', 'Enterprise', 'Analytics'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedToolCat(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedToolCat === cat
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-950 border border-indigo-900/60 text-slate-300 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredTools.map((tool) => {
              const IconComponent = toolIconMap[tool.icon] || RotateCw;

              return (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950 border border-indigo-900/60 hover:border-violet-500/50 hover:bg-slate-900 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-xl bg-slate-900 text-violet-400 group-hover:scale-110 group-hover:text-amber-400 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                      {tool.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      {tool.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
