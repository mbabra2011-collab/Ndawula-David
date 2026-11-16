import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  MessageSquare, 
  FileText, 
  Check
} from 'lucide-react';
import { SERVICES_LIST, UGANDA_REGIONS, COMPANY_INFO } from '../data/mockData';
import { BookingFormData, TrackingJob, UgandaRegion } from '../types';

interface BookingSystemProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess: (newJob: TrackingJob) => void;
  preselectedServiceId?: string;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({
  isOpen,
  onClose,
  onBookingSuccess,
  preselectedServiceId = 'fumigation-pest',
}) => {
  const [step, setStep] = useState<number>(1);
  const [submittedJob, setSubmittedJob] = useState<TrackingJob | null>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: preselectedServiceId,
    propertyType: 'residential',
    propertySize: '3-4 Bedrooms',
    targetPests: ['Cockroaches', 'Mosquitoes'],
    cleaningFocus: ['Kitchen degreasing', 'Tile grout scrub'],
    region: 'Kampala - Rubaga & Lungujja',
    specificAddress: '',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: 'Morning (08:00 AM – 11:30 AM)',
    isEmergency: false,
    frequency: 'one-time',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    specialInstructions: '',
  });

  if (!isOpen) return null;

  const currentService = SERVICES_LIST.find((s) => s.id === formData.serviceId) || SERVICES_LIST[0];

  const handlePestToggle = (pest: string) => {
    setFormData((prev) => ({
      ...prev,
      targetPests: prev.targetPests.includes(pest)
        ? prev.targetPests.filter((p) => p !== pest)
        : [...prev.targetPests, pest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName || !formData.customerPhone) {
      alert('Please fill in your contact name and telephone number.');
      return;
    }

    // Generate unique Tracking Code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const regionCode = formData.region.includes('Lungujja') || formData.region.includes('Kampala')
      ? 'KLA'
      : formData.region.includes('Entebbe')
      ? 'EBB'
      : formData.region.includes('Jinja')
      ? 'JJA'
      : 'UGA';

    const trackingId = `SUN-${randomNum}-${regionCode}`;

    const newJob: TrackingJob = {
      trackingId,
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
      serviceTitle: currentService.title,
      serviceCategory: currentService.category,
      propertyAddress: formData.specificAddress || `${formData.region}, Uganda`,
      region: formData.region,
      status: formData.isEmergency ? 'dispatched' : 'received',
      progressPercent: formData.isEmergency ? 30 : 15,
      leadTechnician: {
        name: 'Samuel Kato',
        phone: COMPANY_INFO.phones[0],
        badgeId: 'SN-TECH-04',
        certifications: ['Certified IPM Specialist', 'Odorless Chemical Handling'],
      },
      vehiclePlate: 'UBK 412X (Sunrise Rapid Unit)',
      scheduledDate: formData.preferredDate,
      scheduledTime: formData.preferredTime,
      chemicalUsed: 'WHO Class III Odourless Synthetic Pyrethroid + IGR Compound',
      reentrySafetyTime: 'Immediately safe upon completion (Odourless)',
      billingStatus: 'Custom Quote / Assessment Approved',
      warrantyExpiryDate: new Date(Date.now() + currentService.warrantyPeriodDays * 86400000)
        .toISOString()
        .split('T')[0] + ` (1-Week / ${currentService.warrantyPeriodDays}-Day Guarantee)`,
      notes: formData.specialInstructions || 'Standard eco-friendly treatment booked via website.',
      milestones: [
        {
          title: 'Booking Confirmed & Automated Dispatch Logged',
          time: 'Just now',
          completed: true,
          description: `Booking code ${trackingId} created for ${formData.customerName}.`,
        },
        {
          title: 'Equipment & Eco-Formulation Verification',
          time: formData.isEmergency ? 'In 30 mins' : 'Scheduled morning',
          completed: false,
          description: `Preparing ULV cold fogger and ${currentService.title} supplies.`,
        },
        {
          title: 'On-Site Application & Treatment',
          time: `${formData.preferredDate} ${formData.preferredTime.split('(')[0]}`,
          completed: false,
          description: 'Technician will arrive in full Sunrise uniform and PPE to perform targeted treatment.',
        },
        {
          title: 'Air Quality Clearance & Handover',
          time: 'Post-treatment',
          completed: false,
          description: 'Issuance of 1-week (7-day) written warranty certificate.',
        },
      ],
    };

    setSubmittedJob(newJob);
    onBookingSuccess(newJob);
  };

  const getWhatsAppMessage = () => {
    if (!submittedJob) return '';
    const text = `*Sunrise Cleaning & Fumigation Service Booking*\n\n` +
      `*Tracking ID:* ${submittedJob.trackingId}\n` +
      `*Client:* ${formData.customerName} (${formData.customerPhone})\n` +
      `*Service:* ${currentService.title}\n` +
      `*Property:* ${formData.propertyType} - ${formData.propertySize}\n` +
      `*Location:* ${formData.region} - ${formData.specificAddress || 'Kampala'}\n` +
      `*Target Areas:* ${formData.targetPests.join(', ')}\n` +
      `*Date/Time:* ${formData.preferredDate} (${formData.preferredTime})\n` +
      `*Emergency:* ${formData.isEmergency ? 'YES (Immediate Dispatch)' : 'No'}\n\n` +
      `Please provide the official service quote and confirm technician dispatch. Thank you!`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-base sm:text-lg leading-tight text-white">
                Automated Service Booking &amp; Quote Request
              </h2>
              <p className="text-xs text-slate-300">
                Sunrise Cleaning and Fumigation Service · Lungujja - Kampala &amp; All Uganda
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer text-lg leading-none"
            aria-label="Close booking modal"
          >
            ✕
          </button>
        </div>

        {/* Step Indicator (if not completed) */}
        {!submittedJob && (
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <span className={`font-semibold flex items-center gap-1.5 ${step >= 1 ? 'text-amber-600' : 'text-slate-400'}`}>
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[11px] font-bold">1</span>
                Service
              </span>
              <span className={`font-semibold flex items-center gap-1.5 ${step >= 2 ? 'text-amber-600' : 'text-slate-400'}`}>
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[11px] font-bold">2</span>
                Location &amp; Size
              </span>
              <span className={`font-semibold flex items-center gap-1.5 ${step >= 3 ? 'text-amber-600' : 'text-slate-400'}`}>
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[11px] font-bold">3</span>
                Schedule &amp; Quote
              </span>
            </div>
            <div className="hidden sm:block text-slate-500 font-medium text-[11px]">
              Free On-Site Assessment
            </div>
          </div>
        )}

        {/* Success View */}
        {submittedJob ? (
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-2">
              Booking Confirmed &amp; Logged
            </span>

            <h3 className="font-heading text-2xl font-bold text-slate-950 mb-2">
              Your Service is Scheduled!
            </h3>
            
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Our rapid dispatch team has received your order. Your tracking profile is now active in our secure customer portal.
            </p>

            {/* Tracking ID Spotlight Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left">
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-200 text-xs text-slate-500">
                <span>Unique Project Tracking ID</span>
                <span className="font-mono text-emerald-600 font-semibold">Active in Portal</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="font-mono text-xl font-extrabold text-slate-900 tracking-wider">
                  {submittedJob.trackingId}
                </span>
                <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded">
                  Confirmed
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex justify-between">
                <span>Service: {currentService.title}</span>
                <span className="font-medium text-slate-900">Custom Quote / Free Inspection</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send WhatsApp Dispatch Update</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Track in Customer Portal
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-5">
              Need immediate emergency technician dispatch? Call directly: {COMPANY_INFO.phones[0]}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            
            {/* Step 1: Service and Pest/Focus selection */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Required Service
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES_LIST.map((srv) => (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                          formData.serviceId === srv.id
                            ? 'border-amber-500 bg-amber-50/50 ring-2 ring-amber-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          formData.serviceId === srv.id ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-xs sm:text-sm text-slate-900 truncate">
                            {srv.title}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5">
                            {srv.tagline}
                          </div>
                          <div className="text-xs font-semibold text-emerald-700 mt-1">
                            {srv.quoteType}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Pests or Cleaning Focus */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Target Pests or Primary Concern (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'German Cockroaches',
                      'Bedbugs',
                      'Termites & Woodborers',
                      'Mosquitoes',
                      'Rats & Rodents',
                      'Fleas & Ticks',
                      'Bats or Snakes',
                      'Ants',
                      'General Disinfection',
                    ].map((pest) => {
                      const selected = formData.targetPests.includes(pest);
                      return (
                        <button
                          type="button"
                          key={pest}
                          onClick={() => handlePestToggle(pest)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                            selected
                              ? 'bg-slate-900 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {selected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                          <span>{pest}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Property Type */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {(['residential', 'corporate', 'industrial', 'hospitality', 'institutional'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, propertyType: type })}
                      className={`p-2.5 rounded-lg border text-xs font-medium capitalize text-center transition-colors cursor-pointer ${
                        formData.propertyType === type
                          ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {type} Property
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Next: Location &amp; Property Size</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Location and Size */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Property Scale / Size
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      '1-2 Bedrooms',
                      '3-4 Bedrooms',
                      '5+ Bedrooms / Villa',
                      'Small Office (<150 sqm)',
                      'Medium Office (150-400 sqm)',
                      'Large Commercial (>400 sqm)',
                    ].map((sz) => (
                      <button
                        type="button"
                        key={sz}
                        onClick={() => setFormData({ ...formData, propertySize: sz as any })}
                        className={`p-2.5 rounded-lg border text-xs font-medium text-left transition-colors cursor-pointer ${
                          formData.propertySize === sz
                            ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Uganda Region Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Uganda Region / District
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value as UgandaRegion })}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {UGANDA_REGIONS.map((reg) => (
                      <option key={reg} value={reg}>
                        {reg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Specific Address / Landmark */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Specific Street Address or Nearby Landmark
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lungujja Kosovo Road, Plot 14, Near St. Jude Church"
                    value={formData.specificAddress}
                    onChange={(e) => setFormData({ ...formData, specificAddress: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Our dispatch vehicles use landmarks and GPS coordinates for fast doorstep arrival.
                  </span>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer hover:bg-slate-50"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Next: Schedule &amp; Client Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Date, Time, Emergency, and Customer details */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Early Morning (07:00 AM – 09:30 AM)">Early Morning (07:00 AM – 09:30 AM)</option>
                      <option value="Morning (08:00 AM – 11:30 AM)">Morning (08:00 AM – 11:30 AM)</option>
                      <option value="Afternoon (12:00 PM – 03:30 PM)">Afternoon (12:00 PM – 03:30 PM)</option>
                      <option value="Late Afternoon (03:30 PM – 06:30 PM)">Late Afternoon (03:30 PM – 06:30 PM)</option>
                      <option value="Night / Weekend Corporate Discreet">Night / Weekend Corporate Discreet</option>
                    </select>
                  </div>
                </div>

                {/* Emergency dispatch checkbox */}
                <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/60 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="emergencyToggle"
                    checked={formData.isEmergency}
                    onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                    className="mt-1 w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
                  />
                  <label htmlFor="emergencyToggle" className="cursor-pointer">
                    <span className="font-bold text-xs text-slate-900 block">
                      Emergency / Immediate Same-Day Dispatch Priority
                    </span>
                    <span className="text-[11px] text-slate-600 block">
                      Technician arrival within 60 to 90 minutes anywhere in Kampala/Wakiso/Entebbe.
                    </span>
                  </label>
                </div>

                {/* Customer Contact Info */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Mukasa"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telephone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+256 7XX XXX XXX"
                      value={formData.customerPhone}
                      onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address (For Quote PDF &amp; Warranty Certificate)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. client@example.com"
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Quotation Protocol Card */}
                <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                      Transparent Quality Assurance
                    </div>
                    <div className="font-heading text-lg font-bold text-white">
                      Custom Quote &amp; Pre-Treatment Inspection
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Includes 100% Odourless WHO chemicals + 1-week written warranty certificate
                    </div>
                  </div>

                  <div className="text-right sm:text-right w-full sm:w-auto">
                    <span className="text-[11px] text-emerald-400 block font-medium">
                      ✓ Free On-Site Inspection
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Pay upon inspection &amp; satisfaction
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer hover:bg-slate-50"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm &amp; Generate Job Tracking ID</span>
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
};
