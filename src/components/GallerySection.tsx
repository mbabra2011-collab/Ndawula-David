import React, { useState } from 'react';
import { Sparkles, MapPin, CheckCircle2, ChevronRight, Sliders, Layers } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/mockData';
import { ServiceCategory } from '../types';

interface GallerySectionProps {
  onOpenBookingWithCategory?: (category: ServiceCategory) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenBookingWithCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100

  const filteredProjects = activeCategory === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-100/70 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Proven Results Across Uganda</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              Completed Projects &amp; Visual Transformations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Inspect our high-standard cleaning, industrial steam extraction, and odorless fumigation results for residential villas, hotels, and corporate offices in Uganda.
            </p>
          </div>

          {/* Category Filter Buttons (Functional Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
            {[
              { id: 'all', label: 'All Showcase' },
              { id: 'steam-carpet', label: 'Steam Restoration' },
              { id: 'fumigation', label: 'Fumigation & Pest' },
              { id: 'corporate-office', label: 'Corporate Janitorial' },
              { id: 'post-construction', label: 'Post-Construction' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Interactive Before / After Split Slider */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-wider font-bold text-amber-700 mb-2">
                Interactive Transformation Visualizer
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                Industrial Hot Steam Upholstery &amp; Rug Extraction
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Red dust and oils embedded in high-traffic commercial furniture are dissolved at 110°C with twin-vacuum extraction. Drag the interactive split bar on the right to reveal the deep fiber difference.
              </p>

              <div className="space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Kills 99.9% of dust mites and allergens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Quick dry formulation: usable within 2–3 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Biodegradable citrus fabric conditioner</span>
                </div>
              </div>

              {/* Slider Controller */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center text-xs font-medium text-slate-700 mb-1.5">
                  <span>Reveal Before (Left)</span>
                  <span className="font-mono text-amber-700">{sliderPosition}% Cleaned</span>
                  <span>Reveal After (Right)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  aria-label="Before and after split slider"
                />
              </div>
            </div>

            {/* Right Split Image Column */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-slate-200 select-none bg-slate-900">
                
                {/* Background (After - Cleaned Image) */}
                <img
                  src="/src/assets/images/steam_carpet_worker_uganda_1794341612479.jpg"
                  alt="Sunrise Technician in Uniform Performing Deep Steam Extraction"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-emerald-400 text-xs px-2.5 py-1 rounded font-semibold border border-white/20">
                  After Treatment: Restored
                </div>

                {/* Foreground Clipped (Before - Grimy Image) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="/src/assets/images/steam_carpet_worker_uganda_1794341612479.jpg"
                    alt="Before Treatment"
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-75 sepia-50"
                    style={{ width: '100%', minWidth: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-amber-300 text-xs px-2.5 py-1 rounded font-semibold border border-white/20">
                    Before: Stained &amp; Dusty
                  </div>
                </div>

                {/* Dividing Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 text-white shadow-md border-2 border-white flex items-center justify-center text-xs">
                    <Sliders className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={project.beforeImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{project.location}</span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] px-2 py-0.5 rounded font-mono">
                  {project.date}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 line-clamp-1 mb-1.5">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100 mb-3">
                    {project.metric}
                  </div>

                  <div className="flex flex-wrap gap-1 text-[10px] text-slate-500 font-mono">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span key={i} className="bg-slate-100 px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
