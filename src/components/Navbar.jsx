import React, { useState } from 'react';
import { Compass, Bookmark, Ticket, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, myEventsCount, bookmarksCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/50 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('discover')}>
          <div className="w-10 h-10 rounded-xl  flex items-center justify-center text-white font-bold text-xl shadow-sm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QBQJcGS-KVWLk9P0oUU4HA56WC6pt8JRItgXgJEz4ZF01q8ArXpYFjkb&s=10" className='w-12 h-12 rounded-full' alt="logo" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-pink-900 italic">Wonder<span className='text-orange-500'>Eve</span></span>
            <span className="text-xs block text-zinc-500 font-medium">Event Operations Hub</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100 p-1.5 rounded-full border border-zinc-200">
          <button
            onClick={() => handleNavClick('discover')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'discover'
                ? 'bg-pink-600 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            Discover Events
          </button>
          <button
            onClick={() => handleNavClick('bookmarks')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all relative ${
              activeTab === 'bookmarks'
                ? 'bg-pink-600 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            Saved
            {bookmarksCount > 0 && (
              <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                activeTab === 'bookmarks' ? 'bg-white text-pink-600' : 'bg-pink-600 text-white'
              }`}>
                {bookmarksCount}
              </span>
            )}
          </button>
          <button
            onClick={() => handleNavClick('my-events')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all relative ${
              activeTab === 'my-events'
                ? 'bg-pink-600 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <Ticket className="w-4 h-4" />
            My Tickets
            {myEventsCount > 0 && (
              <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                activeTab === 'my-events' ? 'bg-white text-pink-600' : 'bg-pink-600 text-white'
              }`}>
                {myEventsCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right side avatar & mobile menu toggle */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 font-semibold text-sm">
            RM
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('discover')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'discover' ? 'bg-pink-600 text-white' : 'text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            Discover Events
          </button>
          <button
            onClick={() => handleNavClick('bookmarks')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'bookmarks' ? 'bg-pink-600 text-white' : 'text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <span className="flex items-center gap-3">
              <Bookmark className="w-4 h-4" />
              Saved Events
            </span>
            {bookmarksCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-pink-600 text-xs font-bold flex items-center justify-center">
                {bookmarksCount}
              </span>
            )}
          </button>
          <button
            onClick={() => handleNavClick('my-events')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'my-events' ? 'bg-pink-600 text-white' : 'text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <span className="flex items-center gap-3">
              <Ticket className="w-4 h-4" />
              My Tickets
            </span>
            {myEventsCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-pink-600 text-xs font-bold flex items-center justify-center">
                {myEventsCount}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
}