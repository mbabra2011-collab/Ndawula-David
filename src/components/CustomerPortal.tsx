import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Truck, 
  Phone, 
  MessageSquare, 
  Download, 
  Award
} from 'lucide-react';
import { TrackingJob } from '../types';
import { SAMPLE_TRACKING_JOBS, COMPANY_INFO } from '../data/mockData';

interface CustomerPortalProps {
  isOpen: boolean;
  onClose: () => void;
  activeJobs: TrackingJob[];
  onOpenBooking: () => void;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({
  isOpen,
  onClose,
  activeJobs,
  onOpenBooking,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('SUN-7842-KLA');
  const [selectedJob, setSelectedJob] = useState<TrackingJob | null>(
    activeJobs.find((j) => j.trackingId === 'SUN-7842-KLA') || activeJobs[0] || SAMPLE_TRACKING_JOBS[0]
  );
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanQuery = searchQuery.trim().toLowerCase();
    
    // Search in current active jobs + sample jobs
    const allJobs = [...activeJobs, ...SAMPLE_TRACKING_JOBS];
    const found = allJobs.find(
      (job) =>
        job.trackingId.toLowerCase() === cleanQuery ||
        job.customerPhone.replace(/\s+/g, '').includes(cleanQuery.replace(/\s+/g, '')) ||
        job.customerName.toLowerCase().includes(cleanQuery)
    );

    setSelectedJob(found || null);
  };

  const getStatusColor = (status: TrackingJob['status']) => {
    switch (status) {
      case 'received':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'dispatched':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'in-progress':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'ventilation':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getStatusLabel = (status: TrackingJob['status']) => {
    switch (status) {
      case 'received':
        return 'Order Received & Scheduled';
      case 'dispatched':
        return 'Technician Team Dispatched En Route';
      case 'in-progress':
        return 'Active Treatment & Misting in Progress';
      case 'ventilation':
        return 'Ventilation & Air Quality Verification';
      case 'completed':
        return 'Completed & Certified (Warranty Active)';
      default:
        return status;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-base sm:text-lg leading-tight text-white flex items-center gap-2">
                <span>Sunrise Secure Project Portal</span>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
                  Live Dispatch System
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                Track real-time technician status, chemical formulations, and warranty certificates
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer text-lg leading-none"
            aria-label="Close portal"
          >
            ✕
          </button>
        </div>

        {/* Search Bar & Sample ID Shortcuts */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2.5 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Tracking ID (e.g. SUN-7842-KLA) or phone number..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Lookup Project
            </button>
          </form>

          {/* Quick Click Sample IDs */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500">
            <span className="font-medium text-slate-700">Quick Demo Records:</span>
            {SAMPLE_TRACKING_JOBS.map((j) => (
              <button
                key={j.trackingId}
                onClick={() => {
                  setSearchQuery(j.trackingId);
                  setSelectedJob(j);
                }}
                className={`font-mono px-2 py-1 rounded text-[11px] border transition-colors cursor-pointer ${
                  selectedJob?.trackingId === j.trackingId
                    ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {j.trackingId} ({j.region.split('-')[1]?.trim() || j.region})
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {selectedJob ? (
            <div className="space-y-6">
              
              {/* Top Overview Strip */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-slate-500 font-medium">Tracking Code:</span>
                    <span className="font-mono text-base font-extrabold text-slate-950">
                      {selectedJob.trackingId}
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getStatusColor(selectedJob.status)}`}>
                      {getStatusLabel(selectedJob.status)}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    {selectedJob.serviceTitle}
                  </h3>
                  <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{selectedJob.propertyAddress}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="font-medium text-slate-700">{selectedJob.customerName}</span>
                  </p>
                </div>

                <div className="text-left md:text-right shrink-0">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500">Billing Status</div>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 block mt-1">
                    {selectedJob.billingStatus}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-slate-700">Protocol Execution Progress</span>
                  <span className="font-mono font-bold text-amber-700">{selectedJob.progressPercent}% Complete</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 rounded-full transition-all duration-700"
                    style={{ width: `${selectedJob.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Grid: Technician & Safety Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Assigned Technician Card */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3 flex items-center justify-between">
                    <span>Lead Field Specialist</span>
                    <span className="font-mono text-emerald-600 font-semibold">{selectedJob.leadTechnician.badgeId}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold font-heading text-sm">
                      {selectedJob.leadTechnician.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{selectedJob.leadTechnician.name}</div>
                      <div className="text-xs text-slate-500">
                        {selectedJob.leadTechnician.certifications.join(' · ')}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-600">
                      <Truck className="w-3.5 h-3.5 text-slate-400" />
                      <span>{selectedJob.vehiclePlate}</span>
                    </span>
                    <a
                      href={`tel:${selectedJob.leadTechnician.phone}`}
                      className="text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Tech</span>
                    </a>
                  </div>
                </div>

                {/* Safety & Chemical Formulation Card */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>WHO-Grade Safety Formulation</span>
                  </div>

                  <div className="text-xs font-mono bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-800 mb-3">
                    {selectedJob.chemicalUsed}
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Safety Clearance:</span>
                      <span className="font-medium text-emerald-700">{selectedJob.reentrySafetyTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Warranty Coverage:</span>
                      <span className="font-semibold text-slate-900">{selectedJob.warrantyExpiryDate}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Real-time Milestones Timeline */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>On-Site Protocol Execution Timeline</span>
                </h4>

                <div className="space-y-4">
                  {selectedJob.milestones.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {m.completed ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 border border-slate-300 flex items-center justify-center text-[10px] font-mono">
                            {idx + 1}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-semibold ${m.completed ? 'text-slate-900' : 'text-slate-500'}`}>
                            {m.title}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{m.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{m.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Warranty Certificate & WhatsApp Update */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
                <button
                  onClick={() => setShowCertificate(true)}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>View Official Warranty Certificate</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello Sunrise Support, I am following up on my project tracking ID: ${selectedJob.trackingId}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Lead Tech</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw[0]}`}
                    className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl flex items-center gap-1 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                No Project Found for "{searchQuery}"
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                Please check your tracking code or phone number. You can also click any of the demo records above to view active project workflows.
              </p>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg cursor-pointer"
              >
                Schedule New Service
              </button>
            </div>
          )}
        </div>

        {/* Digital Warranty Certificate Modal Overlay */}
        {showCertificate && selectedJob && (
          <div className="absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-4 border-amber-600/30 p-6 sm:p-8 text-slate-900">
              
              {/* Certificate Border Design */}
              <div className="text-center pb-4 border-b-2 border-slate-900/10">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white mx-auto flex items-center justify-center mb-2 shadow-md">
                  <Award className="w-7 h-7" />
                </div>
                <div className="text-[11px] uppercase tracking-widest font-extrabold text-amber-700">
                  Republic of Uganda · UNBS Standard Compliant
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-950 mt-1">
                  OFFICIAL SERVICE &amp; WARRANTY CERTIFICATE
                </h3>
                <p className="text-xs text-slate-500">
                  Sunrise Cleaning and Fumigation Service · Lungujja - Kampala
                </p>
              </div>

              {/* Certificate Details */}
              <div className="py-4 space-y-3 text-xs">
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Certificate / Tracking No:</span>
                  <span className="font-mono font-bold text-slate-900">{selectedJob.trackingId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Issued To:</span>
                  <span className="font-bold text-slate-900">{selectedJob.customerName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Location of Treatment:</span>
                  <span className="text-slate-800 text-right">{selectedJob.propertyAddress}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Service Executed:</span>
                  <span className="font-semibold text-emerald-700">{selectedJob.serviceTitle}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Active Formulation:</span>
                  <span className="text-slate-700 font-mono text-[11px]">{selectedJob.chemicalUsed}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-1.5">
                  <span className="text-slate-500">Warranty Coverage:</span>
                  <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    {selectedJob.warrantyExpiryDate}
                  </span>
                </div>
              </div>

              {/* Guarantee Disclaimer */}
              <div className="bg-slate-50 p-3 rounded-lg text-[11px] text-slate-600 leading-snug border border-slate-200 mb-5">
                This document certifies that the aforementioned premises have been scientifically treated according to WHO and Integrated Pest Management (IPM) guidelines with odorless, low-toxicity eco-compounds. Sunrise Services guarantees free re-treatment should target pests recur during the warranty period.
              </div>

              {/* Footer Stamp & Close */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-left">
                  <div className="font-heading font-bold text-xs text-slate-900">Dr. S. Kato</div>
                  <div className="text-[10px] text-slate-400">Chief Chemical Officer</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      alert(`Certificate for ${selectedJob.trackingId} ready for printing. In production, this generates a high-res PDF.`);
                    }}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Print PDF</span>
                  </button>

                  <button
                    onClick={() => setShowCertificate(false)}
                    className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
