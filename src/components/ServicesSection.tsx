import React from 'react';
import { 
  ShieldAlert, 
  Sparkles, 
  Building2, 
  Armchair, 
  HardHat, 
  Droplets, 
  ArrowRight, 
  Check, 
  ShieldCheck
} from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceToBook,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Armchair':
        return <Armchair className="w-5 h-5" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>High-Grade Cleaning &amp; Odourless Pest Control</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Specialized Services Built for Uganda's Climate &amp; Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            From Lungujja to Entebbe and across the nation, we engineer sanitary and pest-free environments using non-toxic WHO-compliant technology.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => {
            const isFeatured = index === 0 || index === 2;
            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white ${
                  isFeatured
                    ? 'border-amber-300 shadow-md ring-1 ring-amber-500/10'
                    : 'border-slate-200 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Visual Header / Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Icon & Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 text-xs px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 shadow-xs">
                    <span className="text-amber-600">{getIcon(service.iconName)}</span>
                    <span className="capitalize">{service.category.replace('-', ' ')}</span>
                  </div>

                  {/* Warranty Badge */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded font-medium border border-white/20">
                    {service.warrantyPeriodDays === 7 ? '1-Week (7-Day) Warranty' : `${service.warrantyPeriodDays}-Day Warranty`}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-950 leading-tight mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-amber-700 font-medium mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 mb-5 text-xs text-slate-700">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing / Quote Model Strip (No Hardcoded Numbers) */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                          Quotation Model
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          {service.quoteType}
                        </span>
                      </div>

                      <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-medium">
                        Odourless &amp; Safe
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectServiceToBook(service.id)}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors active:scale-98"
                    >
                      <span>Book Service &amp; Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
