import React from 'react';
import { CheckCircle2, QrCode, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function SuccessModal({ registration, onViewTicket, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full border border-zinc-200 overflow-hidden shadow-2xl text-center p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-pink-50 border border-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h2 className="text-xl font-bold text-zinc-900 mb-1">Registration Successful!</h2>
        <p className="text-sm text-zinc-600 mb-6">
          Your digital pass has been generated and added to your My Tickets section.
        </p>

        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-left mb-6 space-y-2">
          <div className="text-xs font-semibold text-pink-600">PASS ID: {registration.passId}</div>
          <div className="font-bold text-zinc-900 text-sm">{registration.eventTitle}</div>
          <div className="text-xs text-zinc-600 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            {registration.eventDate}
          </div>
          <div className="text-xs text-zinc-600 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            {registration.eventVenue}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              onViewTicket(registration);
            }}
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
          >
            <QrCode className="w-4 h-4" />
            View Digital Pass
          </button>
          <button
            onClick={onClose}
            className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium py-2.5 px-4 rounded-xl text-sm transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}