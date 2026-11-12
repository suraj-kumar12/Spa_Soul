import { BusinessConfig } from '../types';

export const TARGET_SEO_KEYWORDS = [
  'Spa in Vesu Surat',
  'Full Body Massage in Vesu Surat',
  'Couple Spa in Vesu Surat',
  'Luxury Spa in Vesu Surat',
  'Best Spa in Surat',
  'Spa in Surat',
  'Body Massage in Surat',
  'Luxury Spa in Surat',
  'Thai Massage in Surat',
  'Full Body Massage in Surat',
  'Spa Near Me',
] as const;

export const TARGET_KEYWORDS_STRING = TARGET_SEO_KEYWORDS.join(', ');

export const BUSINESS_INFO: BusinessConfig = {
  name: 'Spa Soul',
  tagline: 'Sanctuary of Equilibrium & Holistic Rejuvenation',
  legalEntity: 'Spa Soul Wellness Centre',
  website: 'https://spa-soul.shop/',
  address: {
    line1: '3rd Floor, Safal Square, S-10',
    line2: 'Vesu',
    landmark: 'Safal Square',
    area: 'Vesu',
    city: 'Surat',
    state: 'Gujarat',
    pincode: '395007',
    fullFormatted: '3rd Floor, Safal Square, S-10, Vesu, Surat, Gujarat 395007, India',
  },
  phone: '8893885879',
  phoneDisplay: '+91 88938 85879',
  whatsapp: '918893885879',
  whatsappDisplay: '+91 88938 85879',
  whatsappUrl: 'https://wa.me/918893885879',
  email: 'chandanbhai11331@gmail.com',
  openingHours: {
    days: 'Monday – Sunday (All 7 Days)',
    hours: '10:00 AM – 09:30 PM',
  },
  socials: {
    instagram: 'https://instagram.com/spasoul_surat',
    facebook: 'https://facebook.com/spasoulsurat',
  },
};

export const BUSINESS_COORDINATES = {
  latitude: 21.141776,
  longitude: 72.77094199999999,
};

export const GOOGLE_MAPS_REFERENCE_URL =
  'https://www.google.com/maps/dir/?api=1&destination=21.141776%2C72.770942';

export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2668523634666!2d72.77094199999999!3d21.141776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dede26bafc9%3A0xb7c12e4f4dda99d0!2sSpa%20Soul%20Massage%20Spa%20Vesu%20Surat!5e0!3m2!1sen!2sin!4v1793866957621!5m2!1sen!2sin';

export const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=21.141776%2C72.770942';

