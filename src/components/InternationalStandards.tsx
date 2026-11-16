import React from 'react';
import { 
  ShieldCheck, 
  FlaskConical, 
  Leaf, 
  Cpu, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  Activity, 
  AlertTriangle 
} from 'lucide-react';
import { INTERNATIONAL_STANDARDS } from '../data/mockData';

export const InternationalStandards: React.FC = () => {
  return (
    <section id="standards" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2.5">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>International Benchmark Standards</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How Sunrise Matches Global Pest Control &amp; Cleaning Protocols
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            In prominent global markets (UK BPCA, US NPMA, European CEPA), fumigation has evolved beyond blind chemical dousing. Sunrise Cleaning and Fumigation Services enforces hospital-grade scientific standards right here in Kampala.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INTERNATIONAL_STANDARDS.map((std, i) => (
            <div 
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                  0{i + 1}. {std.badge}
                </span>
                <h3 className="font-heading font-bold text-base text-slate-900 mt-3 mb-2">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {std.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>UNBS &amp; WHO Compliant</span>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Comparison: Modern Eco-Tech vs Outdated Methods */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 overflow-hidden relative">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block mb-2">
              Technology Architecture
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Why Odourless ULV Cold Fogging Outperforms Primitive Smoke
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Traditional local contractors often use kerosene-based thermal foggers that create choking smoke, stain curtains, and pose severe fire risks. Here is how our modern equipment protects your family:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Sunrise Modern Standard */}
            <div className="p-5 rounded-xl bg-slate-800/80 border border-emerald-500/40">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
                <ShieldCheck className="w-5 h-5" />
                <span>Sunrise International Standard</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>ULV Cold Mist Fogging:</strong> 5–30 micron droplets that stay suspended in air without heat, penetrating false ceilings and electrical ducts safely.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Odourless Microencapsulation:</strong> Active agents release over 90 days. Zero burning smell, zero nausea, and safe for infants.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Insect Growth Regulators (IGR):</strong> Disrupts chitin synthesis so pest eggs and larvae cannot mature into fertile adults.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Full PPE &amp; Air Quality Clearance:</strong> Technicians wear 3M organic vapor respirators and issue clear safety re-entry windows.</span>
                </li>
              </ul>
            </div>

            {/* Outdated Primitive Methods */}
            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-3">
                <AlertTriangle className="w-5 h-5" />
                <span>Outdated / Risky Traditional Fumigation</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span><strong>Kerosene Thermal Fogging:</strong> Spews heavy oil exhaust that leaves greasy films on walls, couches, and kitchen counters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span><strong>Choking Organophosphate Smells:</strong> Strong lingering chemical fumes that trigger asthma attacks and respiratory distress for days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span><strong>Blanket Spraying Without Baiting:</strong> Roaches simply scatter to neighbors' compounds and return within 2 weeks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span><strong>Zero Tracking or Written Warranty:</strong> No certificate, untraceable technicians, and no recourse if pests reappear.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Integrated Pest Management (IPM) 4-Tier Workflow */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-4">
              Our 4-Stage Integrated Pest Management (IPM) Cycle
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-mono text-amber-400 font-bold">Phase 1</span>
                <div className="font-bold text-white mt-1 mb-1">Scientific Inspection</div>
                <p className="text-slate-400 text-[11px]">Identifying pest species (German vs American roaches, subterranean vs drywood termites) and breeding pockets.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-mono text-amber-400 font-bold">Phase 2</span>
                <div className="font-bold text-white mt-1 mb-1">Structural Exclusion</div>
                <p className="text-slate-400 text-[11px]">Sealing pipe conduits, sink drainage gaps, and wall cracks to prevent external migration.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-mono text-amber-400 font-bold">Phase 3</span>
                <div className="font-bold text-white mt-1 mb-1">Targeted Bio-Treatment</div>
                <p className="text-slate-400 text-[11px]">Applying pheromone gel matrix, non-repellent barrier liquid, and ULV cold fogging.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700">
                <span className="font-mono text-amber-400 font-bold">Phase 4</span>
                <div className="font-bold text-white mt-1 mb-1">Monitoring &amp; Warranty</div>
                <p className="text-slate-400 text-[11px]">Deploying tamper-proof monitoring traps, digital portal logging, and 1-week (7-day) warranty coverage.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
