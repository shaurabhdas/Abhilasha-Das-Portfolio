export const caseStudiesDetailData = {
  "healthcare-pmo": {
    id: "healthcare-pmo",
    title: "Multi-Site Healthcare IT Governance Rollout",
    organization: "Assam Cancer Care Foundation (DiNC)",
    role: "IT Project Coordinator / PMO Analyst",
    period: "Dec 2020 – Apr 2024",
    impact: "+22% Operational Efficiency",
    tags: ["Healthcare IT", "PMO Governance", "RAID Management", "Agile/Waterfall"],
    heroBg: "from-indigo-600/30 to-violet-600/30",
    overview: "Coordinated PMO operations and delivery governance across 6 simultaneous healthcare IT initiatives across multiple operational sites in India, establishing standardized RAID tracking and executive reporting dashboards for 25+ KPIs.",
    challenge: "Managing 6 simultaneous healthcare IT project streams across disparate care centers resulted in fragmented progress reporting, inconsistent risk tracking, and manual invoice reconciliation that generated 19% financial discrepancies.",
    solution: [
      "Designed and enforced a unified PMO governance framework across all 6 project tracks, implementing weekly governance checkpoints.",
      "Established centralized RAID log management with clear escalation pathways and mitigation owners.",
      "Developed executive dashboards in Excel and Power Query tracking 25+ KPIs to give leadership real-time visibility.",
      "Instituted strict invoice validation and contractor performance reviews ensuring 100% SLA compliance."
    ],
    results: [
      { label: "Operational Throughput", value: "+22%", detail: "Increase in delivery throughput across 6 simultaneous project streams." },
      { label: "Schedule Adherence", value: "98%", detail: "Maintained milestone compliance across all project phases." },
      { label: "Financial Discrepancies", value: "-19%", detail: "Reduction in reconciliation variances through invoice validation." },
      { label: "Budget Variance", value: "< 5%", detail: "Strict cost control maintained throughout project lifecycles." }
    ],
    pmoTools: ["Jira", "MS Project", "Confluence", "Excel Power Query", "RAID Logs", "Agile & Waterfall"]
  },

  "govt-rescue": {
    id: "govt-rescue",
    title: "Stalled Government Tech Implementation Recovery",
    organization: "Tata Trusts (DiNC)",
    role: "IT Project Coordinator",
    period: "Jan 2016 – Nov 2020",
    impact: "Rescued Stalled Implementation & Delivery Excellence Award",
    tags: ["Process Redesign", "Change Control", "Stakeholder Approval", "18 Projects"],
    heroBg: "from-amber-500/20 to-indigo-600/30",
    overview: "Successfully turned around a stalled government technology transformation initiative by redesigning governance checkpoints, establishing structured change control, and streamlining stakeholder approval workflows.",
    challenge: "A multi-year government technology initiative involving 18 sub-projects stalled due to complex bureaucratic approval workflows, recurring critical risks (+26%), and unauthorized scope changes (+27%) that disrupted delivery schedules.",
    solution: [
      "Rescued the implementation by redesigning governance checkpoints and simplifying approval workflows for executive stakeholders.",
      "Formulated a structured change control process requiring formal impact assessments before scope modifications.",
      "Built a proactive risk management framework that identified recurring technical bottlenecks prior to deployment.",
      "Coordinated user training and deployment readiness activities across regional government units, reducing post-go-live incidents by 23%."
    ],
    results: [
      { label: "Projects Delivered", value: "18", detail: "Government IT transformation projects delivered across planning, testing & transition." },
      { label: "Unauthorized Scope Changes", value: "-27%", detail: "Reduction through structured change control." },
      { label: "Critical Risk Recurrence", value: "-26%", detail: "Decrease in recurring critical issues." },
      { label: "Post-Go-Live Incidents", value: "-23%", detail: "Reduction via comprehensive deployment readiness training." }
    ],
    pmoTools: ["MS Project", "Jira", "Confluence", "Oracle Cloud", "Change Control Board", "Waterfall"]
  },

  "pmo-automation": {
    id: "pmo-automation",
    title: "PMO Reporting & Financial Reconciliation Automation",
    organization: "Assam Cancer Care Foundation & Tata Trusts",
    role: "PMO Analyst / IT Project Coordinator",
    period: "2016 – 2024",
    impact: "Saved 15+ Hours Weekly | -19% Reconciliation Variance",
    tags: ["Power Query", "Excel Dashboards", "Invoice Validation", "Financial Controls"],
    heroBg: "from-cyan-500/20 to-violet-600/30",
    overview: "Architected automated Excel Power Query reporting pipelines and financial reconciliation frameworks that eliminated manual spreadsheet compilation and saved executive leadership 15+ hours weekly.",
    challenge: "PMO coordinators spent 15+ hours per week manually consolidating status reports and invoice reconciliations across 24+ technology projects, leading to human error and delayed executive reporting.",
    solution: [
      "Built automated data aggregation models in Power Query that ingested multi-site status feeds into standardized executive dashboards.",
      "Created standardized project reporting templates for weekly governance reviews.",
      "Implemented automated financial reconciliation formulas to cross-reference contractor invoices against deliverable milestones.",
      "Established automated KPI tracking for 25+ performance indicators."
    ],
    results: [
      { label: "Weekly Time Saved", value: "15+ hrs", detail: "Saved in executive status report generation and data consolidation." },
      { label: "Financial Reconciliation", value: "-19%", detail: "Reduction in billing discrepancies and invoice variances." },
      { label: "KPIs Monitored", value: "25+", detail: "Real-time key performance indicators presented to leadership." },
      { label: "Governance Compliance", value: "95%", detail: "Achievement score in reporting accuracy and timeliness." }
    ],
    pmoTools: ["Power Query", "Excel Pivot Tables", "Jira Dashboards", "PeopleSoft", "Invoice Validation"]
  }
};
