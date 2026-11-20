import React, { useState } from 'react';
import { Ticket, Calendar, MapPin, QrCode, Trash2, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAELESTIA_SPRING, M3E_SURFACE_SPRING, StaggerCardGrid, staggerCardItem } from '../components/MotionPrimitives';

export default function MyEventsPage({ registeredEvents, onViewQr, onCancelRegistration }) {
  const [confirmPassId, setConfirmPassId] = useState(null);

  const handleConfirmCancel = () => {
    if (confirmPassId) {
      onCancelRegistration(confirmPassId);
      setConfirmPassId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 relative">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-2">
          My Registered Events
        </h1>
        <p className="text-zinc-600 text-sm">
          Manage your tickets, access digital QR passes, and view schedule details.
        </p>
      </div>

      {registeredEvents.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={M3E_SURFACE_SPRING}
          className="text-center py-20 bg-[#FFF9FB] border border-pink-200/70 rounded-[32px]"
        >
          <Ticket className="w-12 h-12 text-pink-300 mx-auto mb-4" />
          <h3 className="text-lg font-extrabold text-zinc-800 mb-1">No Registered Tickets Yet</h3>
          <p className="text-zinc-500 text-sm">Explore upcoming events and secure your passes today.</p>
        </motion.div>
      ) : (
        <StaggerCardGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registeredEvents.map((reg) => (
            <motion.div
              key={reg.passId}
              variants={staggerCardItem}
              whileHover={{ y: -5 }}
              transition={CAELESTIA_SPRING}
              className="bg-[#FFF9FB] border border-pink-200/60 rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgba(24,24,27,0.03)] hover:border-pink-400/80 hover:shadow-[0_16px_32px_rgba(219,39,119,0.11)] flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 bg-pink-50 m-2.5 rounded-[22px] overflow-hidden">
                  <motion.img
                    src={reg.eventImage}
                    alt={reg.eventTitle}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFF9FB]/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-pink-700 border border-pink-200/60">
                    {reg.ticketType} ({reg.quantity}x)
                  </div>
                  <div className="absolute bottom-3 right-3 bg-zinc-900/90 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-xs font-extrabold">
                    Pass: {reg.passId}
                  </div>
                </div>

                <div className="px-6 pt-2 pb-5 space-y-2.5">
                  <h3 className="text-lg font-extrabold text-zinc-900 line-clamp-1">{reg.eventTitle}</h3>
                  <div className="text-xs font-medium text-zinc-600 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                    {reg.eventDate}
                  </div>
                  <div className="text-xs font-medium text-zinc-600 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="truncate">{reg.eventVenue}</span>
                  </div>
                  <div className="pt-2.5 text-xs text-zinc-500 border-t border-pink-100 flex justify-between items-center">
                    <span>Attendee: <strong className="text-zinc-800">{reg.name}</strong></span>
                    <span className="font-extrabold text-sm text-zinc-900">${reg.totalPrice} USD</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.94 }}
                  transition={CAELESTIA_SPRING}
                  onClick={() => onViewQr(reg)}
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2.5 px-4 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-sm shadow-pink-600/20"
                >
                  <QrCode className="w-4 h-4" />
                  View QR Pass
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.88 }}
                  transition={CAELESTIA_SPRING}
                  onClick={() => setConfirmPassId(reg.passId)}
                  className="bg-[#FCEEF3] hover:bg-red-100 text-zinc-700 hover:text-red-600 font-medium p-2.5 rounded-full transition-colors"
                  title="Cancel Registration"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </StaggerCardGrid>
      )}

      {/* Custom Confirmation Popup Modal */}
      <AnimatePresence>
        {confirmPassId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-zinc-950/45 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={M3E_SURFACE_SPRING}
              className="bg-[#FFF9FB] rounded-[32px] max-w-sm w-full border border-pink-200/80 overflow-hidden shadow-2xl p-7 text-center"
            >
              <motion.div
                animate={{ rotate: [0, -8, 8, -4, 0] }}
                transition={{ duration: 0.45 }}
                className="w-14 h-14 bg-red-100 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600"
              >
                <AlertTriangle className="w-7 h-7" />
              </motion.div>

              <h3 className="text-lg font-extrabold text-zinc-900 mb-1">Cancel Registration?</h3>
              <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
                Are you sure you want to cancel your pass (<span className="font-mono font-bold text-zinc-800">{confirmPassId}</span>)? This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.94 }}
                  transition={CAELESTIA_SPRING}
                  onClick={handleConfirmCancel}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-full text-sm transition-colors shadow-sm"
                >
                  Yes, Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.94 }}
                  transition={CAELESTIA_SPRING}
                  onClick={() => setConfirmPassId(null)}
                  className="flex-1 bg-[#FCEEF3] hover:bg-pink-200/60 text-zinc-800 font-bold py-2.5 rounded-full text-sm transition-colors"
                >
                  Keep Pass
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}