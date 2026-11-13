import React, { useState } from 'react';
import { X, User, Mail, Phone, Ticket, CreditCard, ShieldCheck, AlertCircle } from 'lucide-react';

export default function RegistrationModal({ event, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ticketType: 'General Admission',
    quantity: 1,
    dietary: 'None'
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Strict Email Validation Regex ensuring proper domain name (e.g. user@domain.com)
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handlePhoneChange = (e) => {
    // Restrict input to numbers only and max 10 digits
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: numericValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate phone number (must be exactly 10 digits)
    if (formData.phone.length !== 10) {
      setError('Please enter a valid 10-digit numeric phone number.');
      return;
    }

    // Validate email domain structure
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address with a proper domain name (e.g., name@domain.com).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        ...formData,
        eventTitle: event.title,
        eventDate: event.date,
        eventVenue: event.venue,
        eventImage: event.image,
        totalPrice: (formData.ticketType === 'VIP All-Access' ? event.price + 75 : formData.ticketType === 'Speaker & Corporate Pass' ? event.price + 150 : event.price) * formData.quantity,
        passId: 'PLS-' + Math.floor(100000 + Math.random() * 900000),
        registeredAt: new Date().toLocaleDateString()
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-zinc-200 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200 bg-zinc-50">
          <div>
            <h2 className="text-lg font-bold text-zinc-900">Event Registration</h2>
            <p className="text-xs text-zinc-500 truncate max-w-xs">{event.title}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-200/60 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                required
                placeholder="your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-pink-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-pink-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Phone Number (10 Digits)
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  required
                  maxLength={10}
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-pink-600"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Ticket Type
              </label>
              <select
                value={formData.ticketType}
                onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-pink-600"
              >
                <option value="General Admission">General Admission (${event.price})</option>
                <option value="VIP All-Access">VIP All-Access (${event.price + 75})</option>
                <option value="Speaker & Corporate Pass">Corporate Pass (${event.price + 150})</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Quantity
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-pink-600"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Ticket' : 'Tickets'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-zinc-500 block">Total Amount Due</span>
              <span className="text-xl font-bold text-zinc-900">
                ${(formData.ticketType === 'VIP All-Access' ? event.price + 75 : formData.ticketType === 'Speaker & Corporate Pass' ? event.price + 150 : event.price) * formData.quantity}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              Secure Checkout
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                Confirm Registration & Generate Pass
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}