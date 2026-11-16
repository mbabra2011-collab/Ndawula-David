import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, ShieldCheck, Clock, Cpu } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';

interface InstantCostCalculatorProps {
  onOpenBookingWithService: (serviceId: string) => void;
}

export const InstantCostCalculator: React.FC<InstantCostCalculatorProps> = ({
  onOpenBookingWithService,
}) => {
  const [selectedService, setSelectedService] = useState<string>('fumigation-pest');
  const [propertyScale, setPropertyScale] = useState<string>('medium');
  const [pestSeverity, setPestSeverity] = useState<string>('moderate');
  const [frequency, setFrequency] = useState<string>('once');

  const srv = SERVICES_LIST.find((s) => s.id === selectedService) || SERVICES_LIST[0];

  const getEstimatedDuration = () => {
    if (propertyScale === 'small') return '1.0 – 1.5 Hours';
    if (propertyScale === 'medium') return '1.5 – 2.5 Hours';
    if (propertyScale === 'large') return '3.0 – 4.5 Hours';
    return 'Full Day / Tailored Commercial Shift';
  };

  const getRecommendedProtocol = () => {
    if (selectedService === 'fumigation-pest') {
      return pestSeverity === 'severe'
        ? 'Dual-Action: ULV Cold Fogging + Microencapsulated Wall Injection + Perimeter Foundation Barrier'
        : 'Standard IPM: Precision Odourless Misting + Crack/Crevice Treatment + Cockroach Gel Matrix';
    }
    if (selectedService === 'steam-carpet-upholstery') {
      return '110°C High-Pressure Continuous Hot Water Extraction + Citrus Fiber Neutralizer';
    }
    if (selectedService === 'corporate-office') {
      return 'Discreet Commercial Janitorial: Electrostatic Sanitization + Rotary Floor Burnishing';
    }
    return 'Comprehensive Sanitary Deep Scrub + HEPA-13 Sealed Extraction';
  };

  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Explanatory Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Scientific Service Protocol Generator</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Instant Treatment &amp; Scope Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed mb-6">
              Determine the exact equipment, technician team size, and tailored scope for your home or corporate premises. Every Sunrise treatment includes WHO-grade odourless chemicals, complete PPE, and a written 1-week warranty certificate.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complimentary on-site property inspection in Kampala</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero advance deposit required · Pay upon inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Written 1-week (7-day) free re-treatment guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Scope Box */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
            
            <div className="space-y-4">
              
              {/* Service Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  1. Select Service Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_LIST.slice(0, 4).map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                        selectedService === s.id
                          ? 'border-amber-600 bg-amber-50 text-slate-950 font-bold ring-1 ring-amber-500'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="truncate font-semibold">{s.title}</div>
                      <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
                        {s.quoteType}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Scale */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  2. Property Scale
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'small', label: '1-2 Beds / Apt' },
                    { id: 'medium', label: '3-4 Bedrooms' },
                    { id: 'large', label: 'Villa / 5+ Beds' },
                    { id: 'commercial', label: 'Corporate Office' },
                  ].map((scale) => (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setPropertyScale(scale.id)}
                      className={`p-2 rounded-lg border text-xs text-center transition-colors cursor-pointer ${
                        propertyScale === scale.id
                          ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {scale.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Infestation Level / Soil Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    3. Infestation / Soil Severity
                  </label>
                  <select
                    value={pestSeverity}
                    onChange={(e) => setPestSeverity(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="light">Mild / Routine Preventive Treatment</option>
                    <option value="moderate">Moderate (Standard Household Activity)</option>
                    <option value="heavy">Heavy Infestation (Regular Sightings)</option>
                    <option value="severe">Severe Outbreak (Immediate Knockdown Needed)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    4. Servicing Cadence
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="once">One-Time Intensive Treatment</option>
                    <option value="monthly">Monthly Preventive Contract</option>
                    <option value="quarterly">Quarterly Seasonal Shield</option>
                  </select>
                </div>
              </div>

              {/* Protocol Scope Output Box */}
              <div className="mt-4 pt-4 border-t border-slate-200 bg-slate-50 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-amber-800 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Recommended Treatment Protocol:</span>
                  </div>
                  <div className="text-xs font-bold text-slate-950">
                    {getRecommendedProtocol()}
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      Duration: <strong>{getEstimatedDuration()}</strong>
                    </span>
                    <span>·</span>
                    <span className="text-emerald-700 font-medium">
                      1-Week Written Warranty Included
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBookingWithService(selectedService)}
                  className="w-full sm:w-auto px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0"
                >
                  <span>Request Official Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
