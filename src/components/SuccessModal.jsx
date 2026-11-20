import React from 'react';
import { CheckCircle2, QrCode, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { CAELESTIA_SPRING, M3E_SURFACE_SPRING } from './MotionPrimitives';

export default function SuccessModal({ registration, onViewTicket, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-zinc-950/45 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 14 }}
        transition={M3E_SURFACE_SPRING}
        className="bg-[#FFF9FB] rounded-[32px] max-w-md w-full border border-pink-200/80 overflow-hidden shadow-2xl text-center p-7"
      >
        <motion.div
          initial={{ scale: 0, rotate: -35 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ ...CAELESTIA_SPRING, delay: 0.08 }}
          className="w-16 h-16 bg-pink-100 border border-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600"
        >
          <CheckCircle2 className="w-8 h-8" />
        </motion.div>

        <h2 className="text-2xl font-extrabold text-zinc-900 mb-1 tracking-tight">
          Registration Confirmed!
        </h2>
        <p className="text-sm text-zinc-600 mb-6">
          Your digital QR pass is ready in your My Tickets wallet.
        </p>

        <div className="bg-[#FCEEF3]/80 border border-pink-200/70 rounded-2xl p-4 text-left mb-6 space-y-2">
          <div className="text-xs font-extrabold text-pink-600 tracking-wider">
            PASS ID: {registration.passId}
          </div>
          <div className="font-bold text-zinc-900 text-sm">{registration.eventTitle}</div>
          <div className="text-xs text-zinc-600 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-pink-500" />
            {registration.eventDate}
          </div>
          <div className="text-xs text-zinc-600 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            {registration.eventVenue}
          </div>
        </div>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={CAELESTIA_SPRING}
            onClick={() => {
              onClose();
              onViewTicket(registration);
            }}
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-pink-600/20"
          >
            <QrCode className="w-4 h-4" />
            View Digital Pass
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={CAELESTIA_SPRING}
            onClick={onClose}
            className="bg-[#FCEEF3] hover:bg-pink-200/60 text-pink-950 font-bold py-3 px-5 rounded-full text-sm transition-colors"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}