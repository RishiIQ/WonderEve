import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import EventCard from '../components/EventCard';
import { CAELESTIA_SPRING, M3E_SURFACE_SPRING, StaggerCardGrid } from '../components/MotionPrimitives';

const categories = ['All', 'Conferences', 'Workshops', 'Webinars', 'Masterclasses', 'Festivals'];

export default function DiscoverPage({ events, onSelectEvent, bookmarks, onToggleBookmark }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredEvents = events.filter((ev) => {
    const matchesSearch =
      ev.title.toLowerCase().includes(search.toLowerCase()) ||
      ev.venue.toLowerCase().includes(search.toLowerCase()) ||
      ev.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || ev.category === selectedCategory;
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'free' && ev.price === 0) ||
      (priceFilter === 'under100' && ev.price < 100) ||
      (priceFilter === 'premium' && ev.price >= 100);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="space-y-10 pb-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={M3E_SURFACE_SPRING}
        className="bg-zinc-900 text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-xl border border-pink-500/20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=')`,
          }}
        />

        <div className="max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...CAELESTIA_SPRING, delay: 0.08 }}
            className="inline-flex items-center gap-2 bg-pink-500/15 border border-pink-400/30 text-pink-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            PulseLive Event Management Hub
          </motion.div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Discover & Manage World-Class Events
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base mb-8 leading-relaxed">
            Explore industry-leading conferences, masterclasses, workshops, and festivals. Register instantly with secure digital passes and real-time management.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search by event title, venue, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-zinc-800/90 border border-zinc-700/90 rounded-2xl pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 transition-all"
              />
            </div>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-zinc-800/90 border border-zinc-700/90 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 transition-all cursor-pointer"
            >
              <option value="all">All Prices</option>
              <option value="free">Free Events</option>
              <option value="under100">Under $100</option>
              <option value="premium">$100 & Above</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* M3E Animated Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.93 }}
              transition={CAELESTIA_SPRING}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                isSelected ? 'text-white' : 'bg-[#FFF9FB] border border-pink-200/70 text-zinc-700 hover:bg-[#FCEEF3]'
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="m3eCategoryPill"
                  transition={CAELESTIA_SPRING}
                  className="absolute inset-0 bg-pink-600 rounded-full shadow-md shadow-pink-600/25 -z-0"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Staggered Events Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold text-zinc-900">
            Upcoming Events{' '}
            <motion.span
              key={filteredEvents.length}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={CAELESTIA_SPRING}
              className="inline-block text-sm font-semibold text-pink-700 bg-[#FCEEF3] px-2.5 py-0.5 rounded-full ml-1"
            >
              {filteredEvents.length}
            </motion.span>
          </h2>
        </div>

        {filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={M3E_SURFACE_SPRING}
            className="text-center py-16 bg-[#FFF9FB] border border-pink-200/70 rounded-[28px]"
          >
            <p className="text-zinc-500 text-sm font-medium">No events found matching your criteria.</p>
          </motion.div>
        ) : (
          <StaggerCardGrid
            key={`${selectedCategory}-${priceFilter}-${search}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelect={onSelectEvent}
                onBookmark={onToggleBookmark}
                isBookmarked={bookmarks.includes(event.id)}
              />
            ))}
          </StaggerCardGrid>
        )}
      </div>
    </div>
  );
}