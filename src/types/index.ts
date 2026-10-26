export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'Massage Therapy' | 'Specialty & Couple' | 'Body & Skin Rituals';
  durationMinutes: number[];
  pricePlaceholder: string;
  startingPrice: number;
  description: string;
  fullOverview: string;
  keyBenefits: string[];
  treatmentSteps: string[];
  idealFor: string[];
  contraindications: string[];
  imageUrl: string;
  imageAlt: string;
  isPopular?: boolean;
}

export interface SpaPackage {
  id: string;
  name: string;
  subtitle: string;
  durationMinutes: number;
  pricePlaceholder: string;
  price: number;
  includedTreatments: string[];
  description: string;
  idealFor: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientLocation: string;
  serviceTaken: string;
  rating: number;
  date: string;
  reviewText: string;
  verifiedLabel: string;
}

export interface FAQItem {
  id: string;
  category: 'Booking & Policies' | 'Spa Etiquette' | 'Treatments & Health';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambience' | 'Treatment Suites' | 'Couple Suites' | 'Botanicals & Oils' | 'Therapies' | 'Videos & Reels';
  imageUrl: string;
  description: string;
  isVideo?: boolean;
  videoUrl?: string;
  duration?: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  legalEntity: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  email: string;
  openingHours: {
    days: string;
    hours: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
  };
}
