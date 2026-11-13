import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DiscoverPage from './pages/DiscoverPage';
import EventDetailPage from './pages/EventDetailPage';
import MyEventsPage from './pages/MyEventsPage';
import BookmarksPage from './pages/BookmarksPage';
import RegistrationModal from './components/RegistrationModal';
import SuccessModal from './components/SuccessModal';
import QrCodeModal from './components/QrCodeModal';
import { initialEvents } from './data/eventsData';

export default function App() {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeringEvent, setRegisteringEvent] = useState(null);
  const [successRegistration, setSuccessRegistration] = useState(null);
  const [activeQrPass, setActiveQrPass] = useState(null);

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('wondereve_bookmarks');
      return saved ? JSON.parse(saved) : [1, 4];
    } catch {
      return [1, 4];
    }
  });

  const [registeredEvents, setRegisteredEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('wondereve_registrations');
      return saved ? JSON.parse(saved) : [
        {
          passId: 'PLS-482910',
          eventTitle: 'Global Event Tech Summit 2026',
          eventDate: 'Dec 12, 2026',
          eventVenue: 'Silicon Convention Center, Austin, TX',
          eventImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
          name: 'NANDHA',
          email: 'nandhanan0@gmail.com',
          phone: '+91 78718 27659',
          ticketType: 'VIP All-Access',
          quantity: 1,
          totalPrice: 224,
          registeredAt: '11/13/2026'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('wondereve_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('wondereve_registrations', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  const handleToggleBookmark = (eventId) => {
    setBookmarks((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  const handleRegistrationSuccess = (newReg) => {
    setRegisteredEvents((prev) => [newReg, ...prev]);
    setRegisteringEvent(null);
    setSuccessRegistration(newReg);
  };

  const handleCancelRegistration = (passId) => {
    if (window.confirm('Are you sure you want to cancel this registration?')) {
      setRegisteredEvents((prev) => prev.filter((reg) => reg.passId !== passId));
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 text-zinc-900 font-sans antialiased selection:bg-pink-600 selection:text-white">
      {/* Background Floating Vent Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => {
          // Randomize positioning, size, and animation duration for organic flow
          const randomLeft = Math.random() * 100;
          const randomSize = Math.random() * 6 + 2; // 2px to 8px
          const randomDuration = Math.random() * 10 + 8; // 8s to 18s
          const randomDelay = Math.random() * 5;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-pink-500 particle-vent"
              style={{
                left: `${randomLeft}%`,
                bottom: `-20px`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
              }}
            />
          );
        })}
      </div>  
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedEvent(null);
        }}
        myEventsCount={registeredEvents.length}
        bookmarksCount={bookmarks.length}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {selectedEvent ? (
          <EventDetailPage
            event={selectedEvent}
            onBack={() => setSelectedEvent(null)}
            onRegister={(ev) => setRegisteringEvent(ev)}
          />
        ) : activeTab === 'discover' ? (
          <DiscoverPage
            events={initialEvents}
            onSelectEvent={(ev) => setSelectedEvent(ev)}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        ) : activeTab === 'bookmarks' ? (
          <BookmarksPage
            events={initialEvents}
            bookmarks={bookmarks}
            onSelectEvent={(ev) => setSelectedEvent(ev)}
            onToggleBookmark={handleToggleBookmark}
          />
        ) : (
          <MyEventsPage
            registeredEvents={registeredEvents}
            onViewQr={(reg) => setActiveQrPass(reg)}
            onCancelRegistration={handleCancelRegistration}
          />
        )}
      </main>

      {/* Modals */}
      {registeringEvent && (
        <RegistrationModal
          event={registeringEvent}
          onClose={() => setRegisteringEvent(null)}
          onSuccess={handleRegistrationSuccess}
        />
      )}

      {successRegistration && (
        <SuccessModal
          registration={successRegistration}
          onViewTicket={(reg) => setActiveQrPass(reg)}
          onClose={() => setSuccessRegistration(null)}
        />
      )}

      {activeQrPass && (
        <QrCodeModal
          registration={activeQrPass}
          onClose={() => setActiveQrPass(null)}
        />
      )}
    </div>
  );
}