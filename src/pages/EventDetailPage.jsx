import React from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Tag, CheckCircle2, Ticket } from 'lucide-react';
import { motion } from 'motion/react';
import { CAELESTIA_SPRING, M3E_SURFACE_SPRING } from '../components/MotionPrimitives';

export default function EventDetailPage({ event, onBack, onRegister }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      <motion.button
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.94 }}
        transition={CAELESTIA_SPRING}
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-bold text-zinc-700 hover:text-pink-600 bg-[#FFF9FB] border border-pink-200/70 px-4 py-2 rounded-full transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Discover
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={M3E_SURFACE_SPRING}
        className="bg-[#FFF9FB] border border-pink-200/70 rounded-[32px] overflow-hidden shadow-[0_10px_35px_rgba(24,24,27,0.05)]"
      >
        <div className="relative h-72 sm:h-96 bg-pink-50 m-2.5 rounded-[24px] overflow-hidden">
          <motion.img
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#FFF9FB]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-zinc-900 border border-pink-200/60 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-pink-600" />
            {event.category}
          </div>
          <div className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-base font-extrabold shadow-md">
            ${event.price} USD
          </div>
        </div>

        <div className="p-8 sm:p-10 space-y-8">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 mb-4 tracking-tight">
              {event.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-medium text-zinc-700 bg-[#FCEEF3]/80 border border-pink-200/60 p-4 rounded-2xl">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-pink-600 shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pink-600 shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="truncate">{event.venue}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-extrabold text-zinc-900 mb-3">About This Event</h3>
                <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">{event.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-zinc-900 mb-3">Event Agenda</h3>
                <div className="space-y-2.5">
                  {event.agenda.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...CAELESTIA_SPRING, delay: idx * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 bg-[#FCEEF3]/50 border border-pink-200/60 p-3.5 rounded-2xl text-sm text-zinc-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-zinc-900 mb-3">Featured Speakers</h3>
                <div className="flex flex-wrap gap-2.5">
                  {event.speakers.map((speaker, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={CAELESTIA_SPRING}
                      className="bg-[#FCEEF3] border border-pink-200/80 text-pink-800 px-4 py-2 rounded-full text-xs font-bold"
                    >
                      {speaker}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#FCEEF3]/70 border border-pink-200/70 p-6 rounded-[28px] h-fit space-y-6">
              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold block mb-1">
                  Organizer
                </span>
                <span className="font-extrabold text-zinc-900 text-sm">{event.organizer}</span>
              </div>

              <div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold block mb-1">
                  Capacity
                </span>
                <div className="flex items-center gap-2 text-sm text-zinc-800 font-semibold">
                  <Users className="w-4 h-4 text-pink-600" />
                  {event.registeredCount} / {event.capacity} registered
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.94 }}
                transition={CAELESTIA_SPRING}
                onClick={() => onRegister(event)}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 px-5 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-pink-600/25"
              >
                <Ticket className="w-4 h-4" />
                Register Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}