import React, { useState } from 'react';
import { Plus, Check, Calendar, Clock, MapPin, Users, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CAELESTIA_SPRING, staggerCardItem } from './MotionPrimitives';

export default function EventCard({ event, onSelect, onBookmark, isBookmarked }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const tags = [
    event.category,
    event.date,
    event.venue?.split(',')[0] || 'Venue',
    event.price === 0 ? 'Free Pass' : `$${event.price}`,
  ].slice(0, 4);

  const spotsLeft =
    typeof event.capacity === 'number' && typeof event.registeredCount === 'number'
      ? Math.max(event.capacity - event.registeredCount, 0)
      : null;

  return (
    <motion.div
      variants={staggerCardItem}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      onClick={() => onSelect(event)}
      className="cursor-pointer [perspective:1200px] h-[440px] sm:h-[460px] w-full select-none"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 24,
          mass: 0.9,
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* ==================== FRONT FACE ==================== */}
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 bg-[#FFF9FB] border border-pink-200/75 rounded-[28px] p-3 shadow-[0_6px_24px_rgba(219,39,119,0.06)] flex flex-col justify-between"
        >
          {/* Media Frame + Circular '+' Button + Pink/Orange Bottom Strip */}
          <div className="relative rounded-[22px] overflow-hidden bg-[#FCEEF3] flex-1 min-h-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

            {/* Top-Right Circular '+' Bookmark Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.85 }}
              transition={CAELESTIA_SPRING}
              onClick={(e) => {
                e.stopPropagation();
                onBookmark(event.id);
              }}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Save event'}
              title={isBookmarked ? 'Saved' : 'Save event'}
              className={`absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-colors ${
                isBookmarked
                  ? 'bg-pink-600 text-white'
                  : 'bg-[#FFF9FB] text-pink-950 hover:bg-pink-600 hover:text-white border border-pink-200/70'
              }`}
            >
              {isBookmarked ? (
                <Check className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <Plus className="w-4 h-4 stroke-[2.2]" />
              )}
            </motion.button>

            {/* Bottom Highlight Strip */}
            <div className="absolute inset-x-0 bottom-0 bg-pink-600/95 backdrop-blur-xs px-3 py-2 text-center">
              <p className="text-[11px] font-semibold text-white tracking-wide truncate">
                {event.time
                  ? `Live at ${event.time} • Hover to flip details`
                  : 'Hover card to flip & view full event info'}
              </p>
            </div>
          </div>

          {/* Lower Title + Underlined Price + 4 Attribute Pills */}
          <div className="pt-4 px-2 pb-1 shrink-0">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base sm:text-[17px] font-extrabold uppercase tracking-tight text-zinc-900 line-clamp-1">
                {event.title}
              </h3>
              <span className="text-base sm:text-[17px] font-extrabold text-pink-600 underline underline-offset-4 decoration-2 shrink-0">
                {event.price === 0 ? 'Free' : `$${event.price}`}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#FCEEF3] text-pink-950 px-2.5 py-1 rounded-md text-[11px] font-semibold leading-none truncate max-w-[130px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== BACK FACE (ALL EVENT DATA) ==================== */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 bg-[#FFF9FB] border-2 border-pink-500/70 rounded-[28px] p-5 shadow-[0_20px_42px_rgba(219,39,119,0.16)] flex flex-col justify-between overflow-hidden"
        >
          <div className="space-y-3 overflow-y-auto pr-0.5">
            {/* Header Row: Category Badge + Price + Save Toggle */}
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 bg-pink-600 text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                {event.category}
              </span>

              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-pink-600 underline underline-offset-4 decoration-2">
                  {event.price === 0 ? 'Free' : `$${event.price}`}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookmark(event.id);
                  }}
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Save event'}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isBookmarked
                      ? 'bg-pink-600 text-white'
                      : 'bg-[#FCEEF3] text-pink-950 hover:bg-pink-600 hover:text-white'
                  }`}
                >
                  {isBookmarked ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.2]" />
                  )}
                </button>
              </div>
            </div>

            {/* Full Event Title */}
            <h3 className="text-lg font-extrabold uppercase tracking-tight text-zinc-900 leading-snug">
              {event.title}
            </h3>

            {/* Full Description */}
            <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
              {event.description}
            </p>

            {/* Structured Metadata Box */}
            <div className="bg-[#FCEEF3]/80 border border-pink-200/70 rounded-2xl p-3 space-y-2 text-xs font-medium text-pink-950">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                <span>{event.date}</span>
              </div>

              {event.time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{event.time}</span>
                </div>
              )}

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{event.venue}</span>
              </div>

              {(event.organizer || spotsLeft !== null) && (
                <div className="pt-1.5 border-t border-pink-200/70 flex items-center justify-between gap-2 text-[11px]">
                  {event.organizer && (
                    <span className="text-zinc-600 truncate">
                      Host: <strong className="text-zinc-900">{event.organizer}</strong>
                    </span>
                  )}
                  {spotsLeft !== null && (
                    <span className="inline-flex items-center gap-1 font-bold text-pink-700 shrink-0">
                      <Users className="w-3 h-3 text-pink-600" />
                      {spotsLeft} spots left
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={CAELESTIA_SPRING}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(event);
            }}
            className="w-full mt-3 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-pink-600/20 shrink-0"
          >
            <span>View Details & Register</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}