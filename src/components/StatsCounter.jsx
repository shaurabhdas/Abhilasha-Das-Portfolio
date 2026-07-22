import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderCheck, 
  CalendarCheck2, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import AnimatedCounter from './AnimatedCounter';

const iconMap = {
  FolderCheck,
  CalendarCheck2,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Zap
};

export default function StatsCounter() {
  const { metrics } = resumeData;

  const colorVariants = {
    projects: "from-indigo-500 via-violet-400 to-amber-300",
    adherence: "from-amber-400 via-yellow-300 to-amber-500",
    efficiency: "from-violet-400 via-indigo-300 to-cyan-300",
    financial: "from-purple-400 via-pink-400 to-violet-300",
    sla: "from-cyan-400 via-teal-300 to-indigo-300",
    automation: "from-amber-300 via-orange-400 to-amber-500"
  };

  return (
    <section id="metrics" className="py-20 relative bg-slate-950/80 border-y border-indigo-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Quantifiable Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Performance Metrics & Executive Results
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven track record delivering healthcare & government IT initiatives within budget, on schedule, and adhering to strict governance standards.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((item, index) => {
            const IconComponent = iconMap[item.icon] || FolderCheck;
            const gradient = colorVariants[item.id] || "from-indigo-400 to-violet-400";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-7 rounded-3xl bg-slate-900/70 border border-indigo-900/60 hover:border-violet-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 flex flex-col justify-between"
              >
                {/* Glow Overlay */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-violet-600/5 rounded-full blur-2xl group-hover:bg-violet-600/20 transition-all pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-indigo-900/70 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-950 border border-indigo-900/60 text-slate-300">
                      {item.unit}
                    </span>
                  </div>

                  <div>
                    <div className={`text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
                      <AnimatedCounter value={item.value} />
                    </div>
                    <div className="text-lg font-bold text-white mt-1">
                      {item.title}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-amber-400">
                  <span>Verified Outcome</span>
                  <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
