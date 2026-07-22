import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Briefcase,
  FileText,
  Mail
} from 'lucide-react';
import { caseStudiesDetailData } from '../data/caseStudiesData';

export default function CaseStudyDetailPage({ caseStudyId, onBack, onOpenResume }) {
  const caseStudy = caseStudiesDetailData[caseStudyId] || caseStudiesDetailData['healthcare-pmo'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [caseStudyId]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 relative z-10 animate-fadeIn">
      
      {/* Background Radial Ambient Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b ${caseStudy.heroBg} rounded-full blur-[160px] pointer-events-none`} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between border-b border-indigo-900/40 pb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-indigo-900/60 hover:border-violet-500/50 text-amber-300 font-bold text-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main Portfolio
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span className="hidden sm:inline">Detailed PMO Case Study</span>
            <span className="px-2.5 py-0.5 rounded-md bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[11px] font-bold">
              Verified Executive Record
            </span>
          </div>
        </div>

        {/* Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-indigo-900/80 shadow-2xl space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5" />
              {caseStudy.organization}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-extrabold">
              <Award className="w-3.5 h-3.5" />
              {caseStudy.impact}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {caseStudy.title}
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-300 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-1.5 text-indigo-300">
              <Briefcase className="w-4 h-4 text-violet-400" />
              Role: {caseStudy.role}
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-4 h-4 text-amber-400" />
              Period: {caseStudy.period}
            </div>
          </div>
        </motion.div>

        {/* Quantifiable Results Highlight Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudy.results.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-900/80 border border-indigo-900/60 space-y-2 shadow-xl hover:border-violet-500/40 transition-colors"
            >
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                {res.value}
              </div>
              <div className="text-sm font-bold text-white">
                {res.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {res.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Case Study Deep Dive Body */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Challenge & Solution */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-4 shadow-xl">
              <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-violet-400" />
                Executive Summary & Background
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            {/* Challenge */}
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-4 shadow-xl border-l-4 border-l-amber-400">
              <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                The Challenge
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-4 shadow-xl">
              <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-violet-400" />
                The PMO Solution & Governance Approach
              </h2>
              <div className="space-y-3">
                {caseStudy.solution.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-indigo-900/40 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tools Used */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
                Governance Tools & Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.pmoTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-xl bg-slate-950 border border-indigo-900/60 text-xs font-semibold text-violet-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-3 shadow-xl">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
                Key Deliverable Domain
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-indigo-900/60 to-slate-900 border border-violet-500/40 space-y-4 shadow-xl text-center">
              <h3 className="text-base font-bold text-white">
                Inquire About PMO Experience
              </h3>
              <p className="text-xs text-slate-300">
                Interested in bringing this level of governance discipline to your organization?
              </p>
              <a
                href="#contact"
                onClick={onBack}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-md shadow-amber-500/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Abhilasha Das
              </a>
            </div>

          </div>

        </div>

        {/* Footer Back Button */}
        <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-indigo-900/60 hover:border-violet-500/50 text-amber-300 font-bold text-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main Portfolio
          </button>
        </div>

      </div>
    </div>
  );
}
