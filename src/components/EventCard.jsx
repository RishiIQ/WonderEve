import React from 'react';
import { Calendar, MapPin, Bookmark, ArrowRight, Tag } from 'lucide-react';

export default function EventCard({ event, onSelect, onBookmark, isBookmarked }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden group hover:border-pink-300 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md">
      <div>
        <div className="relative h-52 overflow-hidden bg-zinc-100">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-zinc-800 border border-zinc-200 flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-pink-600" />
            {event.category}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark(event.id);
            }}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isBookmarked
                ? 'bg-pink-600 text-white shadow-sm'
                : 'bg-white/90 text-zinc-600 hover:bg-white border border-zinc-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          <div className="absolute bottom-3 right-3 bg-zinc-900 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm">
            ${event.price}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-4 text-xs font-medium text-pink-600 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {event.date}
            </span>
          </div>
          <h3 className="text-lg font-bold text-zinc-900 group-hover:text-pink-600 transition-colors line-clamp-1 mb-2">
            {event.title}
          </h3>
          <p className="text-sm text-zinc-600 flex items-center gap-1.5 mb-4">
            <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
            <span className="truncate">{event.venue}</span>
          </p>
          <p className="text-xs text-zinc-500 line-clamp-2 mb-4 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        <button
          onClick={() => onSelect(event)}
          className="w-full bg-orange-200 hover:bg-pink-600 hover:text-white text-zinc-800 font-medium py-2.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 group/btn"
        >
          View Details & Register
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}