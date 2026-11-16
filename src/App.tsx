/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LiveWallpaper } from './components/LiveWallpaper';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { InternationalStandards } from './components/InternationalStandards';
import { GallerySection } from './components/GallerySection';
import { InstantCostCalculator } from './components/InstantCostCalculator';
import { CoverageMap } from './components/CoverageMap';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { BookingSystem } from './components/BookingSystem';
import { CustomerPortal } from './components/CustomerPortal';
import { FlyerModal } from './components/FlyerModal';
import { SAMPLE_TRACKING_JOBS, TESTIMONIALS, COMPANY_INFO } from './data/mockData';
import { TrackingJob } from './types';
import { 
  Sparkles, 
  ShieldCheck, 
  Star, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  FileCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [flyerOpen, setFlyerOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('fumigation-pest');

  // Maintain active project tracking state (persisted in localStorage)
  const [activeJobs, setActiveJobs] = useState<TrackingJob[]>(() => {
    try {
      const saved = localStorage.getItem('sunrise_tracking_jobs');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // ignore
    }
    return SAMPLE_TRACKING_JOBS;
  });

  const handleBookingSuccess = (newJob: TrackingJob) => {
    const updated = [newJob, ...activeJobs];
    setActiveJobs(updated);
    try {
      localStorage.setItem('sunrise_tracking_jobs', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      {/* Live Wallpaper Animation */}
      <LiveWallpaper />

      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onOpenTracking={() => setTrackingOpen(true)}
        onOpenFlyer={() => setFlyerOpen(true)}
        activeSection="home"
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => setBookingOpen(true)}
          onOpenTracking={() => setTrackingOpen(true)}
          onOpenFlyer={() => setFlyerOpen(true)}
        />

        {/* Flier & Official Verification Callout Banner */}
        <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white py-4 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <span className="p-1 rounded-md bg-white/20 text-white">
                <FileCheck className="w-4 h-4" />
              </span>
              <span>
                <strong>Official Registered Business:</strong> Based in Lungujja - Kampala, serving all 135+ districts in Uganda.
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setFlyerOpen(true)}
                className="px-3.5 py-1.5 bg-white text-slate-950 hover:bg-slate-100 rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                Inspect Official Flier
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Sunrise Services, I am inquiring about cleaning and fumigation services.')}`}
                target="_blank"
                rel="noreferrer"
                className="text-amber-100 hover:text-white underline underline-offset-2 text-xs font-medium"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <ServicesSection onSelectServiceToBook={handleOpenBookingWithService} />

        {/* International Standards & IPM Scientific Knowledge */}
        <InternationalStandards />

        {/* Completed Projects Gallery with Interactive Before/After Split */}
        <GallerySection onOpenBookingWithCategory={handleOpenBookingWithService} />

        {/* Instant Uganda Cost Calculator */}
        <InstantCostCalculator onOpenBookingWithService={handleOpenBookingWithService} />

        {/* Uganda Nationwide Coverage Map & Corridors */}
        <CoverageMap />

        {/* Testimonials & Proof Section */}
        <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Trusted by Homes &amp; Corporate Leaders in Uganda
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Real feedback from residential property owners, commercial facilities, and corporate offices across Kampala.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.text}"
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-slate-900">
                        {t.author}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {t.role} · {t.company}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {t.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Quick Booking Trigger Strip */}
            <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Ready for a Fresh, Pest-Free, Spotless Environment?
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Book online in 60 seconds with automated quote request and 24/7 rapid dispatch.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md active:scale-95"
                >
                  Schedule Service Online
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw[0]}`}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Call +256 743 320 856
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Corporate Quiet Footer */}
      <Footer
        onOpenBooking={() => setBookingOpen(true)}
        onOpenTracking={() => setTrackingOpen(true)}
        onOpenFlyer={() => setFlyerOpen(true)}
      />

      {/* Mobile Sticky Quick Navigation Bar */}
      <MobileQuickBar
        onOpenBooking={() => setBookingOpen(true)}
        onOpenTracking={() => setTrackingOpen(true)}
      />

      {/* Automated Booking System Modal */}
      <BookingSystem
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        onBookingSuccess={handleBookingSuccess}
        preselectedServiceId={selectedServiceId}
      />

      {/* Secure Customer Project Tracking Portal */}
      <CustomerPortal
        isOpen={trackingOpen}
        onClose={() => setTrackingOpen(false)}
        activeJobs={activeJobs}
        onOpenBooking={() => {
          setTrackingOpen(false);
          setBookingOpen(true);
        }}
      />

      {/* Official Flyer & Verified Credentials Modal */}
      <FlyerModal
        isOpen={flyerOpen}
        onClose={() => setFlyerOpen(false)}
        onOpenBooking={() => setBookingOpen(true)}
      />
    </div>
  );
}
