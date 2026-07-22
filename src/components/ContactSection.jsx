import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeData } from '../data/resumeData';

export default function ContactSection({ onOpenResume }) {
  const { personalInfo } = resumeData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'IT Project Coordinator Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // ignore if canvas fail
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact with Abhilasha Das
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interested in discussing an IT Project Coordinator or PMO Analyst opportunity? Connect directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Direct Channels
              </h3>

              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/50 hover:border-violet-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-violet-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/50 hover:border-violet-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-violet-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/50">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-bold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/50 hover:border-violet-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-violet-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                      linkedin.com/in/abhilasha-das
                    </div>
                  </div>
                </a>

              </div>

              {/* View Resume CTA */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-semibold text-xs transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  View & Print Full Resume PDF
                </button>
              </div>

            </div>

          </motion.div>

          {/* Right Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-indigo-900/60 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-violet-500/10 border border-violet-500/30 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto font-bold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Abhilasha will review your request and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-amber-300 bg-slate-950 rounded-xl border border-amber-500/30 hover:bg-slate-900"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-indigo-900/60 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-indigo-900/60 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-indigo-900/60 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Abhilasha, we are looking for an IT Project Coordinator to manage healthcare / government tech projects..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-indigo-900/60 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Message
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
