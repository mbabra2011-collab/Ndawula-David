import React from 'react';
import { ShieldCheck, Phone, MapPin, Download, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-base sm:text-lg leading-tight text-white">
                Official Company Flyer &amp; Verified Credentials
              </h2>
              <p className="text-xs text-slate-300">
                Sunrise Cleaning and Fumigation Services · Lungujja - Kampala, Uganda
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer text-lg leading-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: The Authentic Uploaded Flyer */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-300 max-w-sm group bg-slate-100">
                <img
                  src="/assets/aistudio/sunrise_flier_4eb42f11.jpeg"
                  alt="Sunrise Cleaning and Fumigation Services Official Flier"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-md text-white text-[11px] p-2 rounded-lg text-center">
                  Official Sunrise Flier &amp; Brand Identity
                </div>
              </div>
            </div>

            {/* Right: Key Highlights from the Flyer & Company Details */}
            <div className="md:col-span-6 space-y-5">
              
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-amber-700 font-bold bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Verified Uganda Business
                </span>
                <h3 className="font-heading text-2xl font-bold text-slate-950 mt-2">
                  Sunrise Cleaning &amp; Fumigation Service
                </h3>
                <p className="text-sm font-medium text-amber-800 mt-1 italic">
                  "We bring Freshness, Health &amp; Peace of Mind"
                </p>
                <p className="text-xs text-slate-600 mt-1 font-semibold">
                  Motto: A Cleaner Environment, A Healthier You.
                </p>
              </div>

              {/* Flyer Value Pillars */}
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Safe for Family &amp; Environment:</strong> Child, pet, and garden-safe formulations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Eco-Friendly &amp; Odourless:</strong> High quality chemicals that leave no lingering smell.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Eliminates All Pests:</strong> Eradicates cockroaches, bedbugs, termites, fleas, ticks, and rodents.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Home &amp; Corporate:</strong> Tailored for private residences, executive offices, and commercial spaces.</span>
                </div>
              </div>

              {/* Official Contact Info Box */}
              <div className="border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Headquarters:</span>
                    <span className="text-slate-600">Lungujja - Kampala, Uganda</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Telephone Hotlines:</span>
                    <div className="flex flex-wrap gap-2 text-slate-700 font-mono mt-0.5">
                      <a href="tel:+256743320856" className="hover:text-amber-600 font-medium">+256 743 320 856</a>
                      <span>·</span>
                      <a href="tel:+256776476010" className="hover:text-amber-600 font-medium">+256 776 476 010</a>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      Flyer Tel: 0758819863 / 0776476040
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">WhatsApp Customer Updates:</span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Sunrise Services, I am inquiring based on your flyer.')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-mono font-medium"
                    >
                      {COMPANY_INFO.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-bold rounded-xl shadow cursor-pointer transition-all active:scale-95"
                >
                  Book Online &amp; Request Quote
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw[0]}`}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
                >
                  Call +256 743 320 856
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
