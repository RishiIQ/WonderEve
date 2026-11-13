import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-white border-t border-zinc-200 mt-20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('discover')}>
          <div className="w-10 h-10 rounded-xl  flex items-center justify-center text-white font-bold text-xl shadow-sm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QBQJcGS-KVWLk9P0oUU4HA56WC6pt8JRItgXgJEz4ZF01q8ArXpYFjkb&s=10" className='w-12 h-12 rounded-full' alt="logo" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-pink-900 italic">Wonder<span className='text-orange-500'>Eve</span></span>
            <span className="text-xs block text-zinc-500 font-medium">Event Operations Hub</span>
          </div>
        </div>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-sm leading-relaxed">
              The premier event management ecosystem for discovering world-class conferences, workshops, festivals, and managing secure digital QR passes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <button onClick={() => setActiveTab('discover')} className="hover:text-pink-600 transition-colors">
                  Discover Events
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('bookmarks')} className="hover:text-pink-600 transition-colors">
                  Saved Events
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('my-events')} className="hover:text-pink-600 transition-colors">
                  My Tickets
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-pink-600 transition-colors">
                  About Us & History
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links with SVG Icons */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">Connect With Us</h4>
            <div className="flex items-center gap-3">
              

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-pink-600 hover:text-white text-zinc-700 flex items-center justify-center transition-all"
                title="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-pink-600 hover:text-white text-zinc-700 flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-pink-600 hover:text-white text-zinc-700 flex items-center justify-center transition-all"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} WonderEve Event Management Hub. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Crafted with <Heart className="w-3.5 h-3.5 text-pink-600 fill-current" /> for event professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}