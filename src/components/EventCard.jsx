import React from 'react';
import { Calendar, MapPin, Bookmark, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { CAELESTIA_SPRING, staggerCardItem } from './MotionPrimitives';

export default function EventCard({ event, onSelect, onBookmark, isBookmarked }) {
  return (
    <motion.div
      variants={staggerCardItem}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={CAELESTIA_SPRING}
      onClick={() => onSelect(event)}
      className="cursor-pointer bg-[#FFF9FB] border border-pink-200/60 rounded-[28px] overflow-hidden group hover:border-pink-400/80 flex flex-col justify-between shadow-[0_4px_20px_rgba(24,24,27,0.03)] hover:shadow-[0_18px_36px_rgba(219,39,119,0.13)]"
    >
      <div>
        <div className="relative h-56 overflow-hidden bg-pink-50 m-2.5 rounded-[22px]">
          <motion.img
            src={event.image}
            alt={event.title}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-3 left-3 bg-[#FFF9FB]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-zinc-900 border border-pink-200/60 flex items-center gap-1.5 shadow-xs"
          >
            <Tag className="w-3 h-3 text-pink-600" />
            {event.category}
          </motion.div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.72 }}
            transition={CAELESTIA_SPRING}
            onClick={(e) => {
              e.stopPropagation();
              onBookmark(event.id);
            }}
            aria-label="Bookmark event"
            className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center ${
              isBookmarked
                ? 'bg-pink-600 text-white shadow-md shadow-pink-600/30'
                : 'bg-[#FFF9FB]/90 backdrop-blur-md text-zinc-700 hover:bg-white border border-pink-200/60'
            }`}
          >
            <motion.span
              key={isBookmarked ? 'saved' : 'unsaved'}
              initial={{ scale: 0.6, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={CAELESTIA_SPRING}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </motion.span>
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={CAELESTIA_SPRING}
            className="absolute bottom-3 right-3 bg-zinc-900/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide shadow-sm"
          >
            ${event.price}
          </motion.div>
        </div>

        <div className="px-5 pt-2 pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-700 bg-pink-100/80 px-3 py-1 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5" />
            {event.date}
          </div>
          <h3 className="text-lg font-extrabold text-zinc-900 group-hover:text-pink-600 transition-colors line-clamp-1 mb-2 tracking-tight">
            {event.title}
          </h3>
          <p className="text-xs font-medium text-zinc-600 flex items-center gap-1.5 mb-3">
            <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
            <span className="truncate">{event.venue}</span>
          </p>
          <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-1">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          transition={CAELESTIA_SPRING}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(event);
          }}
          className="w-full bg-[#FFE4D6] hover:bg-pink-600 text-pink-950 hover:text-white font-bold py-3 px-5 rounded-full text-sm transition-colors flex items-center justify-center gap-2 group/btn shadow-xs hover:shadow-md hover:shadow-pink-600/20"
        >
          <span>View Details & Register</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
}