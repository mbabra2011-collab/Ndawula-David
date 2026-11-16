import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenTracking: () => void;
  onOpenFlyer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenTracking,
  onOpenFlyer,
}) => {
  return (
    <section className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading Matching Flier & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Motto from Flier */}
            <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
              <span className="font-serif italic font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200/80">
                "We bring Freshness, Health &amp; Peace of Mind"
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Lungujja - Kampala
              </span>
            </div>

            {/* Display Headline EXACTLY as on the Flier with Official Flier Logo */}
            <div className="mb-4 flex items-center gap-3.5 sm:gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-amber-300 bg-white p-1 shadow-sm shrink-0 flex items-center justify-center">
                <img
                  src="/assets/aistudio/sunrise_logo_flier.png"
                  alt="Sunrise Official Logo from Flier"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block text-amber-600 font-heading text-xl sm:text-2xl font-black uppercase tracking-wider mb-0.5">
                  Sunrise
                </span>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                  CLEANING AND FUMIGATION SERVICE
                </h1>
              </div>
            </div>

            {/* Sub-headline directly from the flier */}
            <div className="bg-slate-100/80 p-4 rounded-xl border border-slate-200/90 mb-6">
              <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1">
                Offer the best cleaning and fumigation services.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                With high quality odourless chemicals that eliminate all pests. Deal in home and corporate places across Kampala and all over Uganda.
              </p>
            </div>

            {/* Flier Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Safe for Family &amp; Environment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Eco-Friendly &amp; Odourless Chemicals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Eliminates All Pests Effectively</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reliable &amp; Professional Uniformed Staff</span>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Book Service &amp; Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTracking}
                className="px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Customer Tracking Portal</span>
              </button>

              <button
                onClick={onOpenFlyer}
                className="px-4 py-3.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-transparent hover:border-slate-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Inspect Flier</span>
              </button>
            </div>

            {/* Contacts Directly from Flier */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-3 border-t border-slate-200/80">
              <span className="font-bold text-slate-800">Our Location: Lungujja – Kampala</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-bold text-slate-800">Tel:</span>
              <a href="tel:+256743320856" className="text-slate-700 hover:text-amber-600 font-mono font-medium">
                +256 743 320 856
              </a>
              <span>/</span>
              <a href="tel:+256776476010" className="text-slate-700 hover:text-amber-600 font-mono font-medium">
                +256 776 476 010
              </a>
              <span className="text-slate-400 font-mono hidden xl:inline">(0758819863 / 0776476040)</span>
            </div>

            {/* Bottom Slogan from Flier */}
            <div className="mt-2 text-xs font-serif italic text-amber-800">
              "A Cleaner Environment, A Healthier You."
            </div>

          </div>

          {/* Right Column: Authentic Ugandan Technician in Branded Sunrise Uniform */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              
              {/* Main Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/hero_sunrise_worker_1794341612717.jpg"
                  alt="Sunrise Certified Fumigation Technician in Uniform with Sunrise Logo and Eco Cold Fogger"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Contrast gradient overlay for badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge: Service Coverage */}
                <div className="absolute top-3.5 left-3.5 bg-slate-900/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-medium">Sunrise Certified Protective Uniform</span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                    Home &amp; Corporate Places
                  </div>
                  <p className="text-sm font-medium leading-snug drop-shadow-sm">
                    Technician in full protective gear with Sunrise embroidered crest operating odorless precision misting technology.
                  </p>
                </div>
              </div>

              {/* Card Footer Strip with Quick Metrics */}
              <div className="p-4 bg-slate-50/90 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Odourless Chemicals</span>
                    <span className="text-slate-500">Eliminates all pests safely</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Home &amp; Corporate</span>
                    <span className="text-slate-500">Lungujja &amp; all Uganda</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Quantitative Rigor Row */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              1,850+
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Completed Homes &amp; Offices in Uganda
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-700 tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              WHO Class III Odourless Formulations
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-600 tabular-nums">
              1 Week
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Written Re-Treatment Warranty
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              12 Districts
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Kampala, Entebbe, Jinja &amp; Nationwide
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
