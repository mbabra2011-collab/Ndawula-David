import React from 'react';
import { Phone, MessageSquare, Calendar, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
  onOpenTracking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenBooking,
  onOpenTracking,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg md:hidden">
      <div className="grid grid-cols-4 h-14">
        
        {/* Call Action */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw[0]}`}
          className="flex flex-col items-center justify-center text-slate-700 hover:text-amber-600 transition-colors"
          aria-label="Call Sunrise hotline"
        >
          <Phone className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-medium mt-0.5">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Sunrise Services, I would like to inquire about cleaning/fumigation.')}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center text-slate-700 hover:text-emerald-600 transition-colors"
          aria-label="WhatsApp Sunrise Services"
        >
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-medium mt-0.5">WhatsApp</span>
        </a>

        {/* Book Now */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center text-amber-700 bg-amber-50/80 transition-colors cursor-pointer"
          aria-label="Book cleaning or fumigation"
        >
          <Calendar className="w-5 h-5 text-amber-600" />
          <span className="text-[10px] font-bold mt-0.5">Book Now</span>
        </button>

        {/* Track Project */}
        <button
          onClick={onOpenTracking}
          className="flex flex-col items-center justify-center text-slate-700 hover:text-amber-600 transition-colors cursor-pointer"
          aria-label="Track active project"
        >
          <ShieldCheck className="w-5 h-5 text-slate-700" />
          <span className="text-[10px] font-medium mt-0.5">Track Job</span>
        </button>

      </div>
    </div>
  );
};
