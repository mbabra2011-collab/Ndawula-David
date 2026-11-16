export type ServiceCategory = 
  | 'fumigation'
  | 'deep-cleaning'
  | 'corporate-office'
  | 'post-construction'
  | 'steam-carpet'
  | 'tank-water';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  quoteType: string;
  features: string[];
  equipmentUsed: string[];
  safetyStandard: string;
  warrantyPeriodDays: number;
}

export type UgandaRegion = 
  | 'Kampala - Rubaga & Lungujja'
  | 'Kampala - Central & Nakasero'
  | 'Kampala - Nakawa & Bugolobi'
  | 'Kampala - Makindye & Muyenga'
  | 'Kampala - Kawempe & Ntinda'
  | 'Wakiso & Kira Municipality'
  | 'Entebbe & Airport Corridor'
  | 'Mukono & Seeta'
  | 'Jinja & Eastern Region'
  | 'Mbarara & Western Region'
  | 'Masaka & Central South'
  | 'Gulu & Northern Uganda'
  | 'Other Uganda District';

export type JobStatus = 
  | 'received'
  | 'dispatched'
  | 'in-progress'
  | 'ventilation'
  | 'completed';

export interface TrackingJob {
  trackingId: string;
  customerName: string;
  customerPhone: string;
  serviceTitle: string;
  serviceCategory: ServiceCategory;
  propertyAddress: string;
  region: UgandaRegion;
  status: JobStatus;
  progressPercent: number;
  leadTechnician: {
    name: string;
    phone: string;
    badgeId: string;
    certifications: string[];
  };
  vehiclePlate: string;
  scheduledDate: string;
  scheduledTime: string;
  chemicalUsed: string;
  reentrySafetyTime: string;
  billingStatus: string;
  warrantyExpiryDate: string;
  notes: string;
  milestones: {
    title: string;
    time: string;
    completed: boolean;
    description: string;
  }[];
}

export interface GalleryProject {
  id: string;
  title: string;
  location: string;
  category: ServiceCategory;
  date: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  metric: string;
  technologies: string[];
}

export interface BookingFormData {
  serviceId: string;
  propertyType: 'residential' | 'corporate' | 'industrial' | 'hospitality' | 'institutional';
  propertySize: '1-2 Bedrooms' | '3-4 Bedrooms' | '5+ Bedrooms / Villa' | 'Small Office (<150 sqm)' | 'Medium Office (150-400 sqm)' | 'Large Commercial (>400 sqm)';
  targetPests: string[];
  cleaningFocus: string[];
  region: UgandaRegion;
  specificAddress: string;
  preferredDate: string;
  preferredTime: string;
  isEmergency: boolean;
  frequency: 'one-time' | 'monthly' | 'quarterly' | 'bi-annual';
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialInstructions: string;
}
