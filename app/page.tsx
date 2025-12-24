"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Users,
  Rocket,
  Globe,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

// Animation settings
const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "How do I pick the right mentor?",
      a: "Browse mentor profiles, filter by skills and industry, then book a discovery call to confirm the fit before committing.",
    },
    {
      q: "Can I cancel or reschedule sessions?",
      a: "Yes. You can reschedule up to 12 hours before a session or cancel anytime with unused credits returned.",
    },
    {
      q: "Do mentors provide projects?",
      a: "Most mentors offer guided projects with feedback so you can add real, portfolio-ready work to your resume.",
    },
    {
      q: "Is there a free plan?",
      a: "You can start with a free account, explore mentors, and join community events before upgrading to paid sessions.",
    },
  ];

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
            <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <motion.a 
              href="/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-100"
            >
              Get Started
            </motion.a>
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="ml-auto h-full w-72 bg-white shadow-2xl flex flex-col p-6 gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
                  <GraduationCap className="w-6 h-6" />
                  <span>StudentMentor</span>
                </div>
                <button
                  aria-label="Close menu"
                  className="p-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>
              <div className="flex flex-col gap-4 text-slate-700 font-semibold">
                {[
                  { href: "#features", label: "Features" },
                  { href: "#stories", label: "Stories" },
                  { href: "#faq", label: "FAQ" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <motion.a
                href="/signup"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-100 text-center"
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <motion.a 
              href="/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-300/40"
            >
              Join Now <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="/mentors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-slate-200 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-lg shadow-blue-100/60"
            >
              View Mentors
            </motion.a>
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
                <p className="text-slate-600 italic mb-8 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-lg">Quick answers to help you get started with confidence.</p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={item.q}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInVariants}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-slate-900">{item.q}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-5 text-slate-600 leading-relaxed"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
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
          <motion.a 
            href="/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex justify-center bg-white text-blue-600 px-12 py-5 rounded-2xl text-xl font-extrabold hover:bg-slate-50 shadow-lg shadow-blue-200/80"
          >
            Create Free Account
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight">
              <GraduationCap className="w-8 h-8" />
              <span>StudentMentor</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Bridge the gap between education and industry with verified mentors, guided projects, and a community built for ambitious learners.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a className="hover:text-white transition" href="#features">Features</a></li>
              <li><a className="hover:text-white transition" href="#stories">Success Stories</a></li>
              <li><a className="hover:text-white transition" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a className="hover:text-white transition" href="/about">About</a></li>
              <li><a className="hover:text-white transition" href="/careers">Careers</a></li>
              <li><a className="hover:text-white transition" href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a className="hover:text-white transition" href="/terms">Terms</a></li>
              <li><a className="hover:text-white transition" href="/privacy">Privacy</a></li>
              <li><a className="hover:text-white transition" href="/cookies">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-400">© 2025 StudentMentor. Built with Next.js and Tailwind CSS.</p>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="https://www.example.com"
                className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition text-slate-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
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
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-10 bg-white rounded-3xl border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-100/70"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}