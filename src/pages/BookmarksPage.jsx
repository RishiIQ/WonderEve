import React from 'react';
import { Bookmark } from 'lucide-react';
import { motion } from 'motion/react';
import EventCard from '../components/EventCard';
import { M3E_SURFACE_SPRING, StaggerCardGrid } from '../components/MotionPrimitives';

export default function BookmarksPage({ events, bookmarks, onSelectEvent, onToggleBookmark }) {
  const bookmarkedEvents = events.filter((ev) => bookmarks.includes(ev.id));

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-2">Saved Events</h1>
        <p className="text-zinc-600 text-sm">Quick access to events you have bookmarked for later.</p>
      </div>

      {bookmarkedEvents.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={M3E_SURFACE_SPRING}
          className="text-center py-20 bg-[#FFF9FB] border border-pink-200/70 rounded-[32px]"
        >
          <Bookmark className="w-12 h-12 text-pink-300 mx-auto mb-4" />
          <h3 className="text-lg font-extrabold text-zinc-800 mb-1">No Saved Events</h3>
          <p className="text-zinc-500 text-sm">Click the bookmark icon on any event card to save it here.</p>
        </motion.div>
      ) : (
        <StaggerCardGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={onSelectEvent}
              onBookmark={onToggleBookmark}
              isBookmarked={true}
            />
          ))}
        </StaggerCardGrid>
      )}
    </div>
  );
}