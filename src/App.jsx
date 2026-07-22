import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsCounter from './components/StatsCounter';
import LifecycleSimulator from './components/LifecycleSimulator';
import ExperienceTimeline from './components/ExperienceTimeline';
import CompetenciesGrid from './components/CompetenciesGrid';
import ProjectShowcase from './components/ProjectShowcase';
import EducationCertifications from './components/EducationCertifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CaseStudyDetailPage from './components/CaseStudyDetailPage';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* 2D Canvas Interactive Node Mesh Background */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Conditional Rendering: Case Study Page vs Main Landing */}
      {activeCaseStudyId ? (
        <CaseStudyDetailPage
          caseStudyId={activeCaseStudyId}
          onBack={() => setActiveCaseStudyId(null)}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
      ) : (
        <main className="relative z-10">
          <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
          <StatsCounter />
          <div id="simulator">
            <LifecycleSimulator />
          </div>
          <ExperienceTimeline />
          <CompetenciesGrid />
          <ProjectShowcase onSelectCaseStudy={(id) => setActiveCaseStudyId(id)} />
          <EducationCertifications />
          <ContactSection onOpenResume={() => setIsResumeModalOpen(true)} />
        </main>
      )}

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}
