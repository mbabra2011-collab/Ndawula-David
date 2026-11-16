import React from 'react';
import { MapPin, Navigation, Clock, Truck, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const CoverageMap: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
              <Navigation className="w-4 h-4 text-emerald-600" />
              <span>Nationwide Logistics Network</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              Rapid Response Fleet Across All Uganda
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Headquartered in Lungujja - Kampala, Sunrise operates dedicated rapid dispatch vehicles equipped with ULV cold foggers, high-pressure washers, and certified technicians.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>HQ: Lungujja, Rubaga Division</span>
          </div>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Kampala Core & Metropolitan */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-mono font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                  Tier 1 Corridor
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">
                  30–45 Mins Arrival
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Kampala Metropolitan &amp; Rubaga HQ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Immediate doorstep dispatch from our central operations base in Lungujja.
              </p>

              <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Rubaga, Lungujja, Mengo, Busega, Nateete</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Central CBD, Nakasero, Kololo, Bugolobi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Makindye, Muyenga, Kansanga, Ggaba</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Nakawa, Ntinda, Kiwatule, Naguru</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Rapid Fleet 1 &amp; 2 Active</span>
              <span className="font-mono text-emerald-600 font-medium">UBK 412X / UBM 883P</span>
            </div>
          </div>

          {/* Card 2: Greater Kampala, Wakiso & Entebbe */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-mono font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                  Tier 2 Corridor
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">
                  Same-Day Scheduled
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Entebbe, Wakiso, Mukono &amp; Kira
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Full-service residential estates, lakeside residences, and institutional compounds.
              </p>

              <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Entebbe Municipality &amp; Airport Corridor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Wakiso, Kira, Nansana, Gayaza, Namugongo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mukono, Seeta, Namanve Industrial Park</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bwerenga, Lubowa &amp; Akright City</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Scheduled Daily Routes</span>
              <span className="font-mono text-slate-700">7 Days a Week</span>
            </div>
          </div>

          {/* Card 3: Regional & Upcountry Uganda */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-mono font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                  Tier 3 Nationwide
                </span>
                <span className="text-xs font-mono text-amber-700 font-semibold">
                  24–48 Hr Dispatch
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Upcountry &amp; Industrial Operations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Heavy industrial warehouses, commercial farms, agro-processing facilities, and hotels.
              </p>

              <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Jinja, Iganga, Mbale &amp; Eastern Uganda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mbarara, Masaka &amp; Western Uganda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Gulu, Lira &amp; Northern Region</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Fort Portal &amp; Albertine Oil Region</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Industrial Fleet Unit</span>
              <span className="font-mono text-emerald-600 font-medium">UBJ 209Y Regional</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
