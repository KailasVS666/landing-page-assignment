"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap 
} from 'lucide-react';

// Animation settings
const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 scroll-smooth">
      {/* Navbar with Glassmorphism */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 tracking-tighter"
          >
            <GraduationCap className="w-8 h-8" />
            <span>STUDENTMENTOR</span>
          </motion.div>
          <div className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#stories" className="hover:text-blue-600 transition">Stories</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-100"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-20 md:py-32 text-center max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <Rocket className="w-4 h-4" />
            <span>New: 1-on-1 career coaching available</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Master your future with <span className="text-blue-600">expert mentors.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform for students to bridge the gap between education and industry. Build skills that matter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Join Now <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-slate-200 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all"
            >
              View Mentors
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* Features Grid */}
      <section id="features" className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why StudentMentor?</h2>
            <p className="text-slate-500">Everything you need to succeed in your professional journey.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              delay={0.1}
              icon={<Users className="w-6 h-6 text-blue-600" />}
              title="Global Network"
              desc="Connect with over 5,000+ mentors across various industries worldwide."
            />
            <FeatureCard 
              delay={0.2}
              icon={<CheckCircle2 className="w-6 h-6 text-blue-600" />}
              title="Verified Experts"
              desc="All mentors are vetted professionals from top-tier companies."
            />
            <FeatureCard 
              delay={0.3}
              icon={<Globe className="w-6 h-6 text-blue-600" />}
              title="Flexible Learning"
              desc="Schedule sessions that fit your timeline and timezone effortlessly."
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Success Stories</h2>
            <p className="text-slate-500 text-lg">See how StudentMentor has changed the trajectory for students worldwide.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Frontend Dev @ TechCo", text: "The 1-on-1 mentorship was the turning point in my career. My mentor helped me land a job I didn't think I was qualified for." },
              { name: "David Chen", role: "Computer Science Junior", text: "The guided projects gave me a portfolio that actually impressed recruiters. It's much better than just doing online courses." },
              { name: "Amara Okafor", role: "UX Design Student", text: "Finally, a place where I can get real feedback from people working in the industry. The community is so supportive." }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] py-16 px-8 text-white shadow-2xl shadow-blue-200"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Take the first step toward your dream career today. Join StudentMentor for free.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-12 py-5 rounded-2xl text-xl font-extrabold hover:bg-slate-50"
          >
            Create Free Account
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-100">
        <p>© 2025 StudentMentor. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="p-10 bg-white rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors shadow-sm"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}