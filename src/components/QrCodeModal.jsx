import React from 'react';
import { X, QrCode, Calendar, MapPin, User, Ticket } from 'lucide-react';

export default function QrCodeModal({ registration, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full border border-zinc-200 overflow-hidden shadow-2xl p-6 text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-pink-600 tracking-wider uppercase">Official Pass</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 mb-1">{registration.eventTitle}</h3>
        <p className="text-xs text-zinc-500 mb-6">{registration.passId}</p>

        <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl inline-block mb-6">
          <div className="w-40 h-40 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mx-auto p-3 shadow-xs">
            <QrCode className="w-full h-full text-zinc-900" />
          </div>
          <span className="text-[10px] text-zinc-400 mt-2 block">Scan at event entrance</span>
        </div>

        <div className="text-left space-y-2 bg-zinc-50 border border-zinc-200 p-4 rounded-xl text-xs mb-6">
          <div className="flex items-center gap-2 text-zinc-700">
            <User className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-semibold">{registration.name}</span> ({registration.ticketType})
          </div>
          <div className="flex items-center gap-2 text-zinc-700">
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            {registration.eventDate}
          </div>
          <div className="flex items-center gap-2 text-zinc-700">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            {registration.eventVenue}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2.5 rounded-xl text-sm transition-all"
        >
          Done
        </button>
      </div>
    </div>
  );
}