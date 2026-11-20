import React from 'react';
import { X, QrCode, Calendar, MapPin, User } from 'lucide-react';
import { motion } from 'motion/react';
import { CAELESTIA_SPRING, M3E_SURFACE_SPRING } from './MotionPrimitives';

export default function QrCodeModal({ registration, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-zinc-950/45 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 14 }}
        transition={M3E_SURFACE_SPRING}
        className="bg-[#FFF9FB] rounded-[32px] max-w-sm w-full border border-pink-200/80 overflow-hidden shadow-2xl p-7 text-center"
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-extrabold text-pink-600 tracking-widest uppercase bg-pink-100 px-3 py-1 rounded-full">
            Official Pass
          </span>
          <motion.button
            whileHover={{ scale: 1.08, rotate: 90 }}
            whileTap={{ scale: 0.85 }}
            transition={CAELESTIA_SPRING}
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FCEEF3] hover:bg-pink-200/70 flex items-center justify-center text-zinc-700"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        <h3 className="text-lg font-extrabold text-zinc-900 mb-1">{registration.eventTitle}</h3>
        <p className="text-xs font-mono font-semibold text-pink-700 mb-5">{registration.passId}</p>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ...CAELESTIA_SPRING, delay: 0.06 }}
          className="bg-[#FCEEF3] border border-pink-200/80 p-5 rounded-[24px] inline-block mb-5"
        >
          <div className="w-40 h-40 bg-white border border-pink-100 rounded-2xl flex items-center justify-center mx-auto p-3 shadow-xs">
            <QrCode className="w-full h-full text-zinc-900" />
          </div>
          <span className="text-[11px] font-medium text-zinc-500 mt-2.5 block">
            Scan at event entrance
          </span>
        </motion.div>

        <div className="text-left space-y-2.5 bg-[#FCEEF3]/60 border border-pink-200/60 p-4 rounded-2xl text-xs mb-6">
          <div className="flex items-center gap-2 text-zinc-800">
            <User className="w-3.5 h-3.5 text-pink-600" />
            <span className="font-bold">{registration.name}</span> ({registration.ticketType})
          </div>
          <div className="flex items-center gap-2 text-zinc-700">
            <Calendar className="w-3.5 h-3.5 text-pink-600" />
            {registration.eventDate}
          </div>
          <div className="flex items-center gap-2 text-zinc-700">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            {registration.eventVenue}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          transition={CAELESTIA_SPRING}
          onClick={onClose}
          className="w-full bg-zinc-900 hover:bg-pink-600 text-white font-bold py-3 rounded-full text-sm transition-colors"
        >
          Done
        </motion.button>
      </motion.div>
    </motion.div>
  );
}