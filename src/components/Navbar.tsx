import React, { useState } from 'react';
import { Sun, Phone, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenTracking: () => void;
  onOpenFlyer: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenTracking,
  onOpenFlyer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark with Official Flier Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-slate-900 group whitespace-nowrap shrink-0"
          aria-label="Sunrise Cleaning and Fumigation Service Home"
        >
          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl overflow-hidden border border-amber-300 bg-white shadow-xs flex items-center justify-center p-0.5 transition-transform group-hover:scale-105 shrink-0">
            <img 
              src="/assets/aistudio/sunrise_logo_flier.png" 
              alt="Sunrise Cleaning and Fumigation Service Official Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base sm:text-lg tracking-tight leading-tight text-slate-950 flex items-center gap-1.5">
              Sunrise <span className="text-amber-600 font-bold text-xs sm:text-sm hidden sm:inline uppercase">Cleaning &amp; Fumigation</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium hidden md:inline">
              We bring Freshness, Health &amp; Peace of Mind
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Services
          </a>
          <a href="#standards" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            International Standards
          </a>
          <a href="#gallery" className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
            Project Gallery
          </a>
          <button 
            onClick={onOpenTracking}
            className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Track Project
          </button>
          <button
            onClick={onOpenFlyer}
            className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0 text-left text-slate-600 cursor-pointer"
          >
            Official Credentials
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (With quick contact pill helper) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
          >
            Book Online
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
            <div className="pb-3 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                Lungujja - Kampala &amp; All Uganda
              </span>
              <span className="font-mono text-emerald-600">24/7 Dispatch</span>
            </div>

            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-600"
            >
              Services &amp; Scope
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-600"
            >
              International Standards (IPM)
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-600"
            >
              Completed Projects &amp; Before/After
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracking();
              }}
              className="py-2 text-left font-semibold text-emerald-700 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>Track Active Project</span>
              <span className="text-xs font-mono bg-emerald-50 px-2 py-0.5 rounded text-emerald-700 border border-emerald-200">
                Customer Portal
              </span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFlyer();
              }}
              className="py-2 text-left hover:text-amber-600"
            >
              View Official Flier &amp; Certifications
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw[0]}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-900 text-xs font-medium"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Call +256 743 320 856
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Sunrise Services, I would like to inquire about cleaning/fumigation.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium"
              >
                WhatsApp Direct Support
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
