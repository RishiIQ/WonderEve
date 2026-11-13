import React from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Tag, CheckCircle2, Ticket } from 'lucide-react';

export default function EventDetailPage({ event, onBack, onRegister }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-pink-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Discover
      </button>

      <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-xs">
        <div className="relative h-72 sm:h-96 bg-zinc-100">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-800 border border-zinc-200 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-pink-600" />
            {event.category}
          </div>
          <div className="absolute bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-xl text-lg font-bold shadow-md">
            ${event.price} USD
          </div>
        </div>

        <div className="p-8 sm:p-10 space-y-8">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 mb-4">
              {event.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-600 bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-pink-600 shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pink-600 shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-pink-600 shrink-0" />
                <span className="truncate">{event.venue}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">About This Event</h3>
                <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                  {event.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">Event Agenda</h3>
                <div className="space-y-2.5">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-zinc-50 border border-zinc-200 p-3.5 rounded-xl text-sm text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">Featured Speakers</h3>
                <div className="flex flex-wrap gap-3">
                  {event.speakers.map((speaker, idx) => (
                    <div key={idx} className="bg-pink-50 border border-pink-200 text-pink-700 px-4 py-2 rounded-xl text-sm font-medium">
                      {speaker}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl h-fit space-y-6">
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-1">Organizer</span>
                <span className="font-bold text-zinc-900 text-sm">{event.organizer}</span>
              </div>

              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-1">Capacity</span>
                <div className="flex items-center gap-2 text-sm text-zinc-800 font-medium">
                  <Users className="w-4 h-4 text-pink-600" />
                  {event.registeredCount} / {event.capacity} registered
                </div>
              </div>

              <button
                onClick={() => onRegister(event)}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Ticket className="w-4 h-4" />
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}