import React, { useState } from 'react';
import { X, User, Mail, Phone, CreditCard, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAELESTIA_SPRING, M3E_SURFACE_SPRING } from './MotionPrimitives';

export default function RegistrationModal({ event, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ticketType: 'General Admission',
    quantity: 1,
    dietary: 'None',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: numericValue });
  };

  const unitPrice =
    formData.ticketType === 'VIP All-Access'
      ? event.price + 75
      : formData.ticketType === 'Speaker & Corporate Pass'
      ? event.price + 150
      : event.price;

  const totalAmount = unitPrice * formData.quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.phone.length !== 10) {
      setError('Please enter a valid 10-digit numeric phone number.');
      return;
    }

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
        totalPrice: totalAmount,
        passId: 'PLS-' + Math.floor(100000 + Math.random() * 900000),
        registeredAt: new Date().toLocaleDateString(),
      });
    }, 800);
  };

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
        className="bg-[#FFF9FB] rounded-[32px] max-w-lg w-full border border-pink-200/80 overflow-hidden shadow-2xl"
      >
        <div className="flex items-center justify-between px-7 py-5 border-b border-pink-100 bg-[#FCEEF3]/70">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-pink-600 block">
              Express Checkout
            </span>
            <h2 className="text-lg font-extrabold text-zinc-900">Event Registration</h2>
            <p className="text-xs text-zinc-500 truncate max-w-xs">{event.title}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.08, rotate: 90 }}
            whileTap={{ scale: 0.85 }}
            transition={CAELESTIA_SPRING}
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-pink-100 border border-pink-200/60 flex items-center justify-center text-zinc-700"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        <form onSubmit={handleSubmit} className="p-7 space-y-4">
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={CAELESTIA_SPRING}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-xs font-medium flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 w-4 h-4 text-pink-500" />
              <input
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#FCEEF3]/50 border border-pink-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-pink-600 focus:ring-4 focus:ring-pink-500/15 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-pink-500" />
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FCEEF3]/50 border border-pink-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-pink-600 focus:ring-4 focus:ring-pink-500/15 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 w-4 h-4 text-pink-500" />
                <input
                  type="text"
                  required
                  maxLength={10}
                  placeholder="10-digit number"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-[#FCEEF3]/50 border border-pink-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-pink-600 focus:ring-4 focus:ring-pink-500/15 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Ticket Tier
              </label>
              <select
                value={formData.ticketType}
                onChange={(e) => setFormData({ ...formData, ticketType: e.target.value })}
                className="w-full bg-[#FCEEF3]/50 border border-pink-200/80 rounded-2xl px-4 py-3 text-sm font-medium text-zinc-900 focus:outline-none focus:bg-white focus:border-pink-600 transition-all"
              >
                <option value="General Admission">General Admission (${event.price})</option>
                <option value="VIP All-Access">VIP All-Access (${event.price + 75})</option>
                <option value="Speaker & Corporate Pass">Corporate Pass (${event.price + 150})</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Quantity
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                className="w-full bg-[#FCEEF3]/50 border border-pink-200/80 rounded-2xl px-4 py-3 text-sm font-medium text-zinc-900 focus:outline-none focus:bg-white focus:border-pink-600 transition-all"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Ticket' : 'Tickets'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-[#FCEEF3] border border-pink-200/70 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-zinc-600 block">Total Amount Due</span>
              <motion.span
                key={totalAmount}
                initial={{ y: -8, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={CAELESTIA_SPRING}
                className="text-2xl font-extrabold text-zinc-900 block"
              >
                ${totalAmount}
              </motion.span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              Secure Checkout
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={loading ? undefined : { scale: 1.02 }}
            whileTap={loading ? undefined : { scale: 0.95 }}
            transition={CAELESTIA_SPRING}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 px-6 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-pink-600/25"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                Confirm & Generate Digital Pass
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}