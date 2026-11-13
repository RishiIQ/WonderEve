import React from 'react';
import { Bookmark } from 'lucide-react';
import EventCard from '../components/EventCard';

export default function BookmarksPage({ events, bookmarks, onSelectEvent, onToggleBookmark }) {
  const bookmarkedEvents = events.filter((ev) => bookmarks.includes(ev.id));

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-2">Saved Events</h1>
        <p className="text-zinc-600 text-sm">Quick access to events you have bookmarked for later.</p>
      </div>

      {bookmarkedEvents.length === 0 ? (
        <div className="text-center py-20 bg-white border border-zinc-200 rounded-3xl">
          <Bookmark className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-zinc-800 mb-1">No Saved Events</h3>
          <p className="text-zinc-500 text-sm">Click the bookmark icon on any event card to save it here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={onSelectEvent}
              onBookmark={onToggleBookmark}
              isBookmarked={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}