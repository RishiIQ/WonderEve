import React, { useState } from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import EventCard from '../components/EventCard';

const categories = ['All', 'Conferences', 'Workshops', 'Webinars', 'Masterclasses', 'Festivals'];

export default function DiscoverPage({ events, onSelectEvent, bookmarks, onToggleBookmark }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredEvents = events.filter((ev) => {
    const matchesSearch = ev.title.toLowerCase().includes(search.toLowerCase()) ||
                          ev.venue.toLowerCase().includes(search.toLowerCase()) ||
                          ev.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || ev.category === selectedCategory;
    const matchesPrice = priceFilter === 'all' ||
                         (priceFilter === 'free' && ev.price === 0) ||
                         (priceFilter === 'under100' && ev.price < 100) ||
                         (priceFilter === 'premium' && ev.price >= 100);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="space-y-10 pb-16 max-w-7xl mx-auto">
     {/* Hero Section */}
<div className="bg-zinc-700 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
  {/* Background Image with Dark Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
    style={{
      backgroundImage: `url('https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=')`
    }}
  />

  <div className="max-w-2xl relative z-10">
    <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6">
      <Sparkles className="w-3.5 h-3.5" />
      PulseLive Event Management Hub
    </div>
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
          className="w-full bg-zinc-800/90 border border-zinc-700 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-pink-500"
        />
      </div>
      <select
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
        className="bg-zinc-800/90 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500"
      >
        <option value="all">All Prices</option>
        <option value="free">Free Events</option>
        <option value="under100">Under $100</option>
        <option value="premium">$100 & Above</option>
      </select>
    </div>
  </div>
</div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-pink-600 text-white shadow-sm'
                : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-zinc-900">
            Upcoming Events <span className="text-sm font-normal text-zinc-500">({filteredEvents.length})</span>
          </h2>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-white border border-zinc-200 rounded-2xl">
            <p className="text-zinc-500 text-sm">No events found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelect={onSelectEvent}
                onBookmark={onToggleBookmark}
                isBookmarked={bookmarks.includes(event.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}