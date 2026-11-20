import React from 'react';
import { Sparkles, Award, Globe, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { CAELESTIA_SPRING, M3E_SURFACE_SPRING, StaggerCardGrid, staggerCardItem } from '../components/MotionPrimitives';

export default function AboutPage({ onExplore }) {
  const milestones = [
    {
      year: '2023',
      title: 'The Genesis of WonderEve',
      description: 'Founded in Austin, Texas, with a vision to eliminate friction in corporate event planning and digital attendee check-ins.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    },
    {
      year: '2024',
      title: 'Expanding to Hybrid Stages',
      description: 'Rolled out multi-cam streaming infrastructure and live virtual ticketing capabilities, powering over 250 global conferences.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    },
    {
      year: '2025',
      title: 'QR Pass & Automated Kiosks',
      description: 'Introduced lightning-fast self-service QR code badge printing and real-time crowd analytics dashboard for mega festivals.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    },
    {
      year: '2026',
      title: 'Global Ecosystem Scale',
      description: 'Surpassed 50,000 active registered professionals, 12 regional hubs, and end-to-end secure cryptographic pass verification.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const stats = [
    { value: '12+', label: 'Global Event Hubs' },
    { value: '50K+', label: 'Registered Attendees' },
    { value: '100%', label: 'Secure Digital Passes' },
    { value: '24/7', label: 'Operations Support' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-16">
      {/* Hero Intro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={M3E_SURFACE_SPRING}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <div className="inline-flex items-center gap-2 bg-[#FCEEF3] border border-pink-200/80 text-pink-700 px-4 py-1.5 rounded-full text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-pink-600" />
          About WonderEve History & Vision
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
          Our Journey in Crafting Exceptional Events
        </h1>
        <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
          From a boutique local planning startup to a global event operations ecosystem, explore the milestones, imagery, and philosophy that define WonderEve.
        </p>
      </motion.div>

      {/* Stats Bento Grid */}
      <StaggerCardGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={staggerCardItem}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={CAELESTIA_SPRING}
            className="bg-[#FFF9FB] border border-pink-200/60 p-6 rounded-[28px] text-center shadow-[0_4px_20px_rgba(24,24,27,0.03)] hover:border-pink-400/70 hover:shadow-[0_14px_28px_rgba(219,39,119,0.1)]"
          >
            <div className="text-3xl font-extrabold text-pink-600 mb-1">{stat.value}</div>
            <div className="text-xs text-zinc-600 font-semibold">{stat.label}</div>
          </motion.div>
        ))}
      </StaggerCardGrid>

      {/* Milestone Timeline */}
      <div className="space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-2">
            Our Evolution & Milestone Path
          </h2>
          <p className="text-zinc-600 text-sm">
            A visual retrospective of how we scaled live event technology.
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={M3E_SURFACE_SPRING}
              whileHover={{ y: -4 }}
              className={`flex flex-col md:flex-row gap-8 items-center bg-[#FFF9FB] border border-pink-200/60 p-6 sm:p-8 rounded-[32px] shadow-[0_4px_24px_rgba(24,24,27,0.03)] hover:border-pink-400/70 hover:shadow-[0_16px_34px_rgba(219,39,119,0.1)] transition-colors ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 h-64 rounded-[24px] overflow-hidden bg-pink-50 shadow-inner">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-[#FCEEF3] border border-pink-200/80 text-pink-700 px-3.5 py-1 rounded-full text-xs font-extrabold">
                  <Calendar className="w-3.5 h-3.5 text-pink-600" />
                  Milestone Year: {item.year}
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900">{item.title}</h3>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-pink-600">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Operational Growth
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={M3E_SURFACE_SPRING}
          whileHover={{ y: -5 }}
          className="bg-[#FFF9FB] border border-pink-200/60 p-8 rounded-[32px] space-y-4 shadow-[0_4px_20px_rgba(24,24,27,0.03)] hover:shadow-[0_16px_32px_rgba(219,39,119,0.1)]"
        >
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={CAELESTIA_SPRING}
            className="w-12 h-12 bg-[#FCEEF3] border border-pink-200/80 rounded-2xl flex items-center justify-center text-pink-600"
          >
            <Award className="w-6 h-6" />
          </motion.div>
          <h3 className="text-xl font-extrabold text-zinc-900">Our Core Mission</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            To bridge the gap between event creators and enthusiastic participants by offering high-performance digital infrastructure, real-time ticket management, and frictionless registration experiences.
          </p>
          <div className="h-44 rounded-[22px] overflow-hidden mt-4">
            <motion.img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800"
              alt="Mission gallery"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.45 }}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...M3E_SURFACE_SPRING, delay: 0.08 }}
          whileHover={{ y: -5 }}
          className="bg-[#FFF9FB] border border-pink-200/60 p-8 rounded-[32px] space-y-4 shadow-[0_4px_20px_rgba(24,24,27,0.03)] hover:shadow-[0_16px_32px_rgba(219,39,119,0.1)]"
        >
          <motion.div
            whileHover={{ rotate: -8, scale: 1.05 }}
            transition={CAELESTIA_SPRING}
            className="w-12 h-12 bg-[#FCEEF3] border border-pink-200/80 rounded-2xl flex items-center justify-center text-pink-600"
          >
            <Globe className="w-6 h-6" />
          </motion.div>
          <h3 className="text-xl font-extrabold text-zinc-900">The WonderEve Standard</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            We combine sophisticated UI design with robust backend operations. Every conference, masterclass, and festival hosted on WonderEve meets rigorous standards for quality, safety, and engagement.
          </p>
          <div className="h-44 rounded-[22px] overflow-hidden mt-4">
            <motion.img
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
              alt="Standard gallery"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.45 }}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Call to Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={M3E_SURFACE_SPRING}
        className="bg-zinc-900 text-white rounded-[32px] p-8 sm:p-12 space-y-6 relative overflow-hidden shadow-xl"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1600')`,
          }}
        />
        <div className="max-w-2xl relative z-10 space-y-3">
          <span className="inline-block bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Join Our Next Event
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Experience WonderEve Live?
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Explore upcoming conferences, workshops, and festivals. Secure your digital pass today and be part of our ongoing journey.
          </p>
        </div>
        <div className="relative z-10">
          <motion.button
            whileHover={{ scale: 1.04, x: 2 }}
            whileTap={{ scale: 0.94 }}
            transition={CAELESTIA_SPRING}
            onClick={onExplore}
            className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3.5 px-7 rounded-full text-sm transition-colors inline-flex items-center gap-2 shadow-lg shadow-pink-600/30"
          >
            <span>Explore Upcoming Events</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}