import React, { useState, useEffect } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DiscoverPage from './pages/DiscoverPage';
import EventDetailPage from './pages/EventDetailPage';
import MyEventsPage from './pages/MyEventsPage';
import BookmarksPage from './pages/BookmarksPage';
import AboutPage from './pages/AboutPage';
import RegistrationModal from './components/RegistrationModal';
import SuccessModal from './components/SuccessModal';
import QrCodeModal from './components/QrCodeModal';
import { M3EPageTransition } from './components/MotionPrimitives';
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
      return saved
        ? JSON.parse(saved)
        : [
            {
              passId: 'PLS-482910',
              eventTitle: 'Global Event Tech Summit 2026',
              eventDate: 'Dec 12, 2026',
              eventVenue: 'Silicon Convention Center, Austin, TX',
              eventImage:
                'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
              name: 'Rishi Murugan',
              email: 'rishirishim0@gmail.com',
              phone: '7871827659',
              ticketType: 'VIP All-Access',
              quantity: 1,
              totalPrice: 224,
              registeredAt: '11/13/2026',
            },
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
    setRegisteredEvents((prev) => prev.filter((reg) => reg.passId !== passId));
  };

  const viewKey = selectedEvent ? `event-${selectedEvent.id}` : activeTab;

  return (
    <MotionConfig reducedMotion="user">
      <div
        id="root"
        className="min-h-screen bg-[#FDF8FA] text-zinc-900 font-sans antialiased relative selection:bg-pink-600 selection:text-white flex flex-col justify-between"
      >
        {/* Fixed Background Floating Vent Particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(15)].map((_, i) => {
            const leftPos = (i * 7.3) % 100;
            const size = (i % 4) * 2 + 3;
            const duration = (i % 5) * 2 + 10;
            const delay = (i % 6) * 0.8;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-pink-500/20 particle-vent"
                style={{
                  left: `${leftPos}%`,
                  bottom: '-20px',
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>

        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <Navbar
            activeTab={activeTab}
            setActiveTab={(tab) => {
              setActiveTab(tab);
              setSelectedEvent(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            myEventsCount={registeredEvents.length}
            bookmarksCount={bookmarks.length}
          />

          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <AnimatePresence mode="wait">
              <M3EPageTransition key={viewKey} viewKey={viewKey}>
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
                ) : activeTab === 'my-events' ? (
                  <MyEventsPage
                    registeredEvents={registeredEvents}
                    onViewQr={(reg) => setActiveQrPass(reg)}
                    onCancelRegistration={handleCancelRegistration}
                  />
                ) : activeTab === 'about' ? (
                  <AboutPage onExplore={() => setActiveTab('discover')} />
                ) : null}
              </M3EPageTransition>
            </AnimatePresence>
          </main>

          <Footer
            setActiveTab={(tab) => {
              setActiveTab(tab);
              setSelectedEvent(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>

        {/* Modals */}
        <AnimatePresence>
          {registeringEvent && (
            <RegistrationModal
              key="registration-modal"
              event={registeringEvent}
              onClose={() => setRegisteringEvent(null)}
              onSuccess={handleRegistrationSuccess}
            />
          )}

          {successRegistration && (
            <SuccessModal
              key="success-modal"
              registration={successRegistration}
              onViewTicket={(reg) => setActiveQrPass(reg)}
              onClose={() => setSuccessRegistration(null)}
            />
          )}

          {activeQrPass && (
            <QrCodeModal
              key="qr-modal"
              registration={activeQrPass}
              onClose={() => setActiveQrPass(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}