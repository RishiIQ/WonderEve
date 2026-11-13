import React from 'react';
import { Sparkles, Award, Globe, ShieldCheck, ArrowRight, Calendar, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function AboutPage({ onExplore }) {
  const milestones = [
    {
      year: "2023",
      title: "The Genesis of WonderEve",
      description: "Founded in Austin, Texas, with a vision to eliminate friction in corporate event planning and digital attendee check-ins.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2024",
      title: "Expanding to Hybrid Stages",
      description: "Rolled out multi-cam streaming infrastructure and live virtual ticketing capabilities, powering over 250 global conferences.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2025",
      title: "QR Pass & Automated Kiosks",
      description: "Introduced lightning-fast self-service QR code badge printing and real-time crowd analytics dashboard for mega festivals.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
    },
    {
      year: "2026",
      title: "Global Ecosystem Scale",
      description: "Surpassed 50,000 active registered professionals, 12 regional hubs, and end-to-end secure cryptographic pass verification.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-16 animate-in fade-in duration-300">
      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-600 px-3.5 py-1.5 rounded-full text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          About WonderEve History & Vision
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
          Our Journey in Crafting Exceptional Events
        </h1>
        <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
          From a boutique local planning startup to a global event operations ecosystem, explore the milestones, imagery, and philosophy that define WonderEve.
        </p>
      </div>

      {/* Stats Bento Grid with Image Accents */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-center shadow-xs hover:border-pink-300 transition-colors">
          <div className="text-3xl font-extrabold text-pink-600 mb-1">12+</div>
          <div className="text-xs text-zinc-500 font-medium">Global Event Hubs</div>
        </div>
        <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-center shadow-xs hover:border-pink-300 transition-colors">
          <div className="text-3xl font-extrabold text-pink-600 mb-1">50K+</div>
          <div className="text-xs text-zinc-500 font-medium">Registered Attendees</div>
        </div>
        <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-center shadow-xs hover:border-pink-300 transition-colors">
          <div className="text-3xl font-extrabold text-pink-600 mb-1">100%</div>
          <div className="text-xs text-zinc-500 font-medium">Secure Digital Passes</div>
        </div>
        <div className="bg-white border border-zinc-200 p-6 rounded-2xl text-center shadow-xs hover:border-pink-300 transition-colors">
          <div className="text-3xl font-extrabold text-pink-600 mb-1">24/7</div>
          <div className="text-xs text-zinc-500 font-medium">Operations Support</div>
        </div>
      </div>

      {/* Detailed Path of Our Past (Timeline with Images) */}
      <div className="space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-2">Our Evolution & Milestone Path</h2>
          <p className="text-zinc-600 text-sm">A visual retrospective of how we scaled live event technology.</p>
        </div>

        <div className="space-y-8">
          {milestones.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-center bg-white border border-zinc-200 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-pink-300 transition-all ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 h-64 rounded-2xl overflow-hidden bg-zinc-100 shadow-inner">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-pink-50 border border-pink-200 text-pink-600 px-3 py-1 rounded-full text-xs font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  Milestone Year: {item.year}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-pink-600">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Operational Growth
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section with Gallery Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-4 shadow-xs">
          <div className="w-12 h-12 bg-pink-50 border border-pink-200 rounded-xl flex items-center justify-center text-pink-600">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900">Our Core Mission</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            To bridge the gap between event creators and enthusiastic participants by offering high-performance digital infrastructure, real-time ticket management, and frictionless registration experiences.
          </p>
          <div className="h-40 rounded-2xl overflow-hidden mt-4">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" 
              alt="Mission gallery" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-4 shadow-xs">
          <div className="w-12 h-12 bg-pink-50 border border-pink-200 rounded-xl flex items-center justify-center text-pink-600">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900">The WonderEve Standard</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            We combine sophisticated UI design with robust backend operations. Every conference, masterclass, and festival hosted on WonderEve meets rigorous standards for quality, safety, and engagement.
          </p>
          <div className="h-40 rounded-2xl overflow-hidden mt-4">
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" 
              alt="Standard gallery" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden shadow-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1600')`
          }}
        />
        <div className="max-w-2xl relative z-10 space-y-3">
          <span className="text-pink-400 text-xs font-bold uppercase tracking-wider">Join Our Next Event</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Experience WonderEve Live?
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Explore upcoming conferences, workshops, and festivals. Secure your digital pass today and be part of our ongoing journey.
          </p>
        </div>
        <div className="relative z-10">
          <button
            onClick={onExplore}
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-xl text-sm transition-all inline-flex items-center gap-2 shadow-sm"
          >
            Explore Upcoming Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}