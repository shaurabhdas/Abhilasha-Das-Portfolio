import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  PieChart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  RotateCcw,
  Zap
} from 'lucide-react';

const phases = [
  {
    id: 1,
    name: 'Initiation & Governance Setup',
    icon: Compass,
    badge: 'Phase 01 • PMO Setup',
    metric: '100% Scope Alignment',
    description: 'Establishing project charters, baseline RAID logs, governance checkpoints, and defining cross-functional stakeholder approval workflows.',
    deliverables: [
      'Project Scope & Boundary Controls',
      'Initial RAID Register Baseline',
      'Stakeholder Communication Plan',
      'Milestone Adherence Thresholds'
    ]
  },
  {
    id: 2,
    name: 'RAID Gate & Risk Mitigation',
    icon: ShieldCheck,
    badge: 'Phase 02 • Risk Control',
    metric: '-26% Recurring Risks',
    description: 'Proactively identifying critical project bottlenecks, conducting risk scoring, and executing mitigation strategies before scope drift occurs.',
    deliverables: [
      'Weekly Governance Checkpoint Reviews',
      'Change Control Request Log',
      'Critical Issue Escalation Matrix',
      '95% Governance Compliance Verification'
    ]
  },
  {
    id: 3,
    name: 'Execution & Budget Reconciliation',
    icon: PieChart,
    badge: 'Phase 03 • Financial Control',
    metric: '< 4-5% Budget Variance',
    description: 'Rigorously tracking resource allocation, validating contractor invoices, and reducing reconciliation variances through automated Power Query frameworks.',
    deliverables: [
      'Financial Reconciliation & Invoice Audits',
      'Contract & Scope Adjustments',
      'Resource Utilization Optimization',
      'Variance Containment < 5%'
    ]
  },
  {
    id: 4,
    name: 'Executive Dashboard Reporting',
    icon: TrendingUp,
    badge: 'Phase 04 • KPI Visibility',
    metric: '25+ KPIs Tracked',
    description: 'Publishing automated executive dashboards in Excel/Jira, providing leadership real-time visibility into milestone adherence and SLA compliance.',
    deliverables: [
      '25+ KPI Metric Dashboard',
      'Automated Weekly Status Briefings',
      'Saved 15+ Hours Weekly Reporting Time',
      '100% Vendor SLA Audit'
    ]
  },
  {
    id: 5,
    name: 'Deployment Readiness & Transition',
    icon: CheckCircle2,
    badge: 'Phase 05 • Go-Live Success',
    metric: '98% On-Time Delivery',
    description: 'Managing end-user training, knowledge transfer, and post-go-live transition across multi-site healthcare and government facilities.',
    deliverables: [
      'User Readiness & Training Handover',
      '-23% Post-Go-Live Incidents',
      'Operational Support Turnover',
      'Delivery Excellence Award Review'
    ]
  }
];

export default function LifecycleSimulator() {
  const [activeStep, setActiveStep] = useState(0);

  const currentPhase = phases[activeStep];
  const IconComp = currentPhase.icon;

  return (
    <section className="py-20 relative bg-slate-950/70 border-y border-indigo-900/30">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Interactive Governance Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            2D PMO Governance Lifecycle Simulator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click through the 5-phase PMO delivery framework used to coordinate 24+ healthcare and government IT transformations.
          </p>
        </div>

        {/* Phase Step Buttons Stream */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {phases.map((phase, idx) => {
            const isActive = activeStep === idx;
            const StepIcon = phase.icon;

            return (
              <button
                key={phase.id}
                onClick={() => setActiveStep(idx)}
                className={`relative p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 group ${
                  isActive
                    ? 'bg-gradient-to-b from-indigo-900/80 to-slate-900 border-violet-500 shadow-xl shadow-indigo-500/20 scale-[1.03]'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl border ${
                    isActive ? 'bg-violet-500 text-white border-violet-400' : 'bg-slate-950 text-indigo-400 border-slate-800'
                  }`}>
                    <StepIcon className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] font-extrabold ${isActive ? 'text-amber-400' : 'text-slate-400'}`}>
                    0{phase.id}
                  </span>
                </div>

                <div>
                  <div className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {phase.name}
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-violet-500 to-amber-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Phase Interactive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-violet-500/30 shadow-2xl space-y-8 relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <span className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/30">
                  {currentPhase.badge}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight pt-1">
                  {currentPhase.name}
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 text-right self-start sm:self-auto">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Target Outcome
                </div>
                <div className="text-xl font-extrabold text-amber-300">
                  {currentPhase.metric}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {currentPhase.description}
            </p>

            {/* Deliverables Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Governance Deliverables
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentPhase.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-semibold text-slate-200 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls Bar */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : phases.length - 1))}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
              >
                Previous Phase
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <span>Phase {currentPhase.id} of 5</span>
              </div>

              <button
                onClick={() => setActiveStep((prev) => (prev < phases.length - 1 ? prev + 1 : 0))}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 transition-all"
              >
                Next Phase
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
