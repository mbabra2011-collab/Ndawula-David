import React from 'react';
import { Sun, Phone, Mail, MapPin, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenTracking: () => void;
  onOpenFlyer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenTracking,
  onOpenFlyer,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl overflow-hidden border border-amber-400/40 bg-white p-0.5 shadow-xs shrink-0 flex items-center justify-center">
                <img
                  src="/assets/aistudio/sunrise_logo_flier.png"
                  alt="Sunrise Cleaning and Fumigation Service"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">
                Sunrise Cleaning &amp; Fumigation
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              A cleaner environment, a healthier you. Providing hospital-grade eco-friendly cleaning, hot water steam upholstery extraction, and 100% odourless fumigation services across Kampala and all regions of Uganda.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>WHO Class III Non-Toxic Formulations · UNBS Standard Compliant</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenFlyer}
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
              >
                View Official Company Flier &amp; Credentials &rarr;
              </button>
            </div>
          </div>

          {/* Direct Hotlines & Contacts Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
              Contact &amp; 24/7 Dispatch
            </h4>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Headquarters:</span>
                  <span>Lungujja, Rubaga Division, Kampala, Uganda</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Official Phone Lines:</span>
                  <div className="flex flex-wrap gap-2 font-mono">
                    <a href={`tel:${COMPANY_INFO.phoneRaw[0]}`} className="hover:text-amber-400">
                      {COMPANY_INFO.phones[0]}
                    </a>
                    <span>·</span>
                    <a href={`tel:${COMPANY_INFO.phoneRaw[1]}`} className="hover:text-amber-400">
                      {COMPANY_INFO.phones[1]}
                    </a>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Alt: {COMPANY_INFO.flyerPhones.join(' / ')}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">WhatsApp Real-Time Updates:</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Sunrise Services, I would like to inquire about cleaning/fumigation services.')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-400 font-mono"
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Detailed Quotes &amp; RFP:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation & Portal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
              Customer Portals
            </h4>

            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={onOpenBooking}
                className="text-left py-2 px-3 rounded-lg bg-amber-600/20 text-amber-300 hover:bg-amber-600/30 transition-colors font-medium cursor-pointer"
              >
                Automated Online Booking
              </button>

              <button
                onClick={onOpenTracking}
                className="text-left py-2 px-3 rounded-lg bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30 transition-colors font-medium cursor-pointer"
              >
                Project Tracking &amp; Warranty Portal
              </button>

              <a
                href="#services"
                className="py-1.5 text-slate-400 hover:text-white transition-colors"
              >
                Services &amp; Scope Catalog
              </a>

              <a
                href="#standards"
                className="py-1.5 text-slate-400 hover:text-white transition-colors"
              >
                Integrated Pest Management (IPM)
              </a>

              <a
                href="#gallery"
                className="py-1.5 text-slate-400 hover:text-white transition-colors"
              >
                Completed Project Gallery
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Quiet Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Sunrise Cleaning and Fumigation Services. All rights reserved. Lungujja - Kampala, Uganda.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">A Cleaner Environment, A Healthier You.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
