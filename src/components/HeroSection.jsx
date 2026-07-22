import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  BarChart2, 
  Layers,
  Zap
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import AnimatedCounter from './AnimatedCounter';

export default function HeroSection({ onOpenResume }) {
  const { personalInfo } = resumeData;

  return (
    <section id="overview" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Available for IT Project Coordinator & PMO Analyst Roles
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-indigo-900/60 text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Driving Governance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-400 to-amber-300">Operational Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl leading-relaxed">
                {personalInfo.title} with <span className="text-amber-300 font-bold">8+ years</span> of proven impact steering healthcare & government technology transformations.
              </p>
            </div>

            {/* Excerpt Banner */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-indigo-900/60 backdrop-blur-sm text-sm text-slate-300 leading-relaxed border-l-4 border-l-amber-400">
              Successfully coordinated <span className="text-white font-bold">24+ technology projects</span>, maintaining up to <span className="text-white font-bold">98% schedule adherence</span>, reducing reconciliation variances by <span className="text-white font-bold">19%</span>, and driving a <span className="text-white font-bold">22% throughput boost</span>.
            </div>

            {/* Live Count Ticker Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-indigo-900/50 text-center hover:border-violet-500/40 transition-colors">
                <div className="text-2xl font-extrabold text-indigo-300">
                  <AnimatedCounter value="24" suffix="+" />
                </div>
                <div className="text-xs text-slate-400 font-medium">Projects Delivered</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-indigo-900/50 text-center hover:border-violet-500/40 transition-colors">
                <div className="text-2xl font-extrabold text-amber-300">
                  <AnimatedCounter value="98" suffix="%" />
                </div>
                <div className="text-xs text-slate-400 font-medium">Schedule Adherence</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-indigo-900/50 text-center hover:border-violet-500/40 transition-colors">
                <div className="text-2xl font-extrabold text-cyan-300">
                  <AnimatedCounter value="100" suffix="%" />
                </div>
                <div className="text-xs text-slate-400 font-medium">SLA Compliance</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#experience"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Experience Timeline
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-violet-500/30 text-slate-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                View Full Resume
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-indigo-900/60 text-slate-300 hover:text-amber-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </motion.div>

          {/* Right Hero Interactive 2D Visual Dashboard Widget */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-600/40 via-violet-600/30 to-amber-500/30 blur-2xl opacity-80 animate-pulse-slow" />
            
            <div className="relative rounded-3xl bg-slate-900/90 border border-indigo-900/80 p-6 shadow-2xl space-y-6">
              
              {/* Top Status */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase ml-2">
                    PMO Live Health Monitor
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider">
                  98% Optimal
                </span>
              </div>

              {/* Progress Gauge 1 */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                  <span className="flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-violet-400" />
                    Milestone Schedule Adherence
                  </span>
                  <span className="text-amber-400 font-extrabold text-sm">98% Target</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400 rounded-full shadow-sm"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Healthcare & Government IT Rollouts</span>
                  <span className="text-amber-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> High Delivery Speed
                  </span>
                </div>
              </div>

              {/* Metric Box Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-indigo-900/60 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Budget Variance</span>
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-xl font-extrabold text-white">&lt; 4-5%</div>
                  <div className="text-[10px] text-slate-400">Maintained within limit</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-indigo-900/60 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>RAID Issue Reduction</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <div className="text-xl font-extrabold text-violet-300">-26%</div>
                  <div className="text-[10px] text-slate-400">Critical risks mitigated</div>
                </div>
              </div>

              {/* Governance Toolkit Badges */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Governance Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Agile & Waterfall', 'Jira & MS Project', 'Confluence', 'Oracle Cloud', 'Power Query', 'RAID Logs'].map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 text-xs font-medium border border-indigo-900/60">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Award Highlight */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 flex-shrink-0 font-bold text-lg">
                  🏆
                </div>
                <div>
                  <div className="text-xs font-extrabold text-amber-300">Delivery Excellence Award</div>
                  <div className="text-[11px] text-slate-300">Achieved 95% governance compliance at Tata Trusts</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
