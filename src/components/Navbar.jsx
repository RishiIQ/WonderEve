import React, { useState } from 'react';
import { Compass, Bookmark, Ticket, Menu, X, UserSearch } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAELESTIA_SPRING, M3E_SURFACE_SPRING } from './MotionPrimitives';

export default function Navbar({ activeTab, setActiveTab, myEventsCount, bookmarksCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'discover', label: 'Discover', icon: Compass, count: 0 },
    { id: 'bookmarks', label: 'Saved', icon: Bookmark, count: bookmarksCount },
    { id: 'my-events', label: 'My Tickets', icon: Ticket, count: myEventsCount },
    { id: 'about', label: 'About Us', icon: UserSearch, count: 0 },
  ];

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={M3E_SURFACE_SPRING}
        className="max-w-7xl mx-auto h-20 px-5 sm:px-6 bg-[#FFF9FB]/85 backdrop-blur-2xl border border-pink-200/70 rounded-[32px] shadow-[0_8px_30px_rgba(219,39,119,0.08)] flex items-center justify-between pointer-events-auto"
      >
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={CAELESTIA_SPRING}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('discover')}
        >
          <motion.div
            whileHover={{ rotate: 8 }}
            transition={CAELESTIA_SPRING}
            className="w-11 h-11 rounded-2xl bg-pink-100 p-0.5 flex items-center justify-center shadow-xs"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QBQJcGS-KVWLk9P0oUU4HA56WC6pt8JRItgXgJEz4ZF01q8ArXpYFjkb&s=10"
              className="w-full h-full rounded-[14px] object-cover"
              alt="logo"
            />
          </motion.div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-pink-950 italic block leading-none">
              Wonder<span className="text-orange-500">Eve</span>
            </span>
            <span className="text-[11px] block text-pink-800/60 font-semibold tracking-wide mt-0.5">
              Event Operations Hub
            </span>
          </div>
        </motion.div>

        {/* M3E Floating Pill Nav with Shared Layout Glide */}
        <nav className="hidden md:flex items-center gap-1 bg-[#FCEEF3]/90 p-1.5 rounded-full border border-pink-200/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileTap={{ scale: 0.94 }}
                transition={CAELESTIA_SPRING}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-700 hover:text-pink-950'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="m3eActiveNavPill"
                    transition={CAELESTIA_SPRING}
                    className="absolute inset-0 bg-pink-600 rounded-full shadow-md shadow-pink-600/25 -z-0"
                  />
                )}
                <motion.span
                  animate={isActive ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 flex items-center"
                >
                  <Icon className="w-4 h-4" />
                </motion.span>
                <span className="relative z-10">{item.label}</span>

                <AnimatePresence mode="popLayout">
                  {item.count > 0 && (
                    <motion.span
                      key={item.count}
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.4, opacity: 0 }}
                      transition={CAELESTIA_SPRING}
                      className={`relative z-10 ml-0.5 px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                        isActive ? 'bg-white text-pink-600' : 'bg-pink-600 text-white'
                      }`}
                    >
                      {item.count}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.88 }}
            transition={CAELESTIA_SPRING}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-2xl bg-[#FCEEF3] border border-pink-200/70 flex items-center justify-center text-pink-900 hover:bg-pink-200/60"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Caelestia Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={M3E_SURFACE_SPRING}
            className="md:hidden max-w-7xl mx-auto mt-2.5 bg-[#FFF9FB]/95 backdrop-blur-2xl border border-pink-200/80 rounded-[28px] p-4 shadow-2xl space-y-1.5 pointer-events-auto"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.97 }}
                  transition={CAELESTIA_SPRING}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-pink-600 text-white shadow-sm'
                      : 'text-zinc-700 hover:bg-[#FCEEF3]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </span>
                  {item.count > 0 && (
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                        isActive ? 'bg-white text-pink-600' : 'bg-pink-600 text-white'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}