import React, { useState } from 'react';
import { Ticket, Calendar, MapPin, QrCode, Trash2, AlertTriangle, X } from 'lucide-react';

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
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mb-2">My Registered Events</h1>
        <p className="text-zinc-600 text-sm">Manage your tickets, access digital QR passes, and view schedule details.</p>
      </div>

      {registeredEvents.length === 0 ? (
        <div className="text-center py-20 bg-white border border-zinc-200 rounded-3xl">
          <Ticket className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-zinc-800 mb-1">No Registered Tickets Yet</h3>
          <p className="text-zinc-500 text-sm">Explore upcoming events and secure your passes today.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registeredEvents.map((reg, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xs hover:border-pink-300 transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-44 bg-zinc-100 overflow-hidden">
                  <img src={reg.eventImage} alt={reg.eventTitle} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-pink-600 border border-zinc-200">
                    {reg.ticketType} ({reg.quantity}x)
                  </div>
                  <div className="absolute bottom-3 right-3 bg-zinc-900 text-white px-3 py-1 rounded-lg text-xs font-bold">
                    Pass: {reg.passId}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-zinc-900 line-clamp-1">{reg.eventTitle}</h3>
                  <div className="text-xs text-zinc-600 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                    {reg.eventDate}
                  </div>
                  <div className="text-xs text-zinc-600 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                    <span className="truncate">{reg.eventVenue}</span>
                  </div>
                  <div className="pt-2 text-xs text-zinc-500 border-t border-zinc-100 flex justify-between">
                    <span>Attendee: {reg.name}</span>
                    <span className="font-bold text-zinc-900">${reg.totalPrice} USD</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => onViewQr(reg)}
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                >
                  <QrCode className="w-4 h-4" />
                  View QR Pass
                </button>
                <button
                  onClick={() => setConfirmPassId(reg.passId)}
                  className="bg-zinc-100 hover:bg-red-50 text-zinc-600 hover:text-red-600 font-medium p-2.5 rounded-xl transition-all"
                  title="Cancel Registration"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom Confirmation Popup Modal */}
      {confirmPassId && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full border border-zinc-200 overflow-hidden shadow-2xl p-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-zinc-900 mb-1">Cancel Registration?</h3>
            <p className="text-xs text-zinc-500 mb-6">
              Are you sure you want to cancel your pass ({confirmPassId})? This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleConfirmCancel}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-xl text-sm transition-all shadow-sm"
              >
                Yes, Cancel
              </button>
              <button
                onClick={() => setConfirmPassId(null)}
                className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium py-2.5 rounded-xl text-sm transition-all"
              >
                Keep Pass
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}