import { BUSINESS_INFO, GOOGLE_MAPS_REFERENCE_URL } from '../data/business';
import { Service, FAQItem } from '../types';

export const SITE_URL = 'https://spa-soul.shop';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/spa/hero_sanctuary.jpg`;
export const LOGO_IMAGE = `${SITE_URL}/assets/aistudio/image_7dcfa224.png`;

export interface BreadcrumbEntry {
  name: string;
  item: string;
}

export const getBaseDaySpaSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'DaySpa',
    '@id': `${SITE_URL}/#dayspa`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalEntity,
    url: SITE_URL,
    logo: LOGO_IMAGE,
    image: [
      `${SITE_URL}/assets/spa/hero_sanctuary.jpg`,
      `${SITE_URL}/assets/spa/couple_spa.jpg`,
      LOGO_IMAGE
    ],
    description: 'Premier luxury wellness and massage sanctuary in Surat offering Swedish Massage, Deep Tissue, Thai, Aromatherapy, Body Scrubs, and VIP Couple Spa rituals at Someshwara Enclave, Vesu.',
    telephone: '+918893885879',
    email: BUSINESS_INFO.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
    hasMap: GOOGLE_MAPS_REFERENCE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.line1,
      addressLocality: BUSINESS_INFO.address.area,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1490625,
      longitude: 72.7760625
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '10:00',
        closes: '21:30'
      }
    ],
    sameAs: [
      BUSINESS_INFO.socials.instagram,
      BUSINESS_INFO.socials.facebook
    ].filter(Boolean)
  };
};

export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    url: SITE_URL,
    logo: LOGO_IMAGE,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+918893885879',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati']
    },
    sameAs: [
      BUSINESS_INFO.socials.instagram,
      BUSINESS_INFO.socials.facebook
    ].filter(Boolean)
  };
};

export const getWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS_INFO.name,
    url: SITE_URL,
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
};

export const getServiceSchema = (service: Service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}#service`,
    name: `${service.name} in Surat`,
    serviceType: service.category,
    description: service.description,
    provider: {
      '@type': 'DaySpa',
      name: BUSINESS_INFO.name,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.line1,
        addressLocality: BUSINESS_INFO.address.area,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.pincode,
        addressCountry: 'IN'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Surat'
    },
    offers: {
      '@type': 'Offer',
      price: service.startingPrice,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/services/${service.slug}`
    }
  };
};

export const getFAQSchema = (faqs: FAQItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const getBreadcrumbSchema = (breadcrumbs: BreadcrumbEntry[]) => {
  const items = [
    { name: 'Home', item: SITE_URL },
    ...breadcrumbs.map((b) => ({
      name: b.name,
      item: b.item.startsWith('http') ? b.item : `${SITE_URL}${b.item.startsWith('/') ? '' : '/'}${b.item}`
    }))
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.item
    }))
  };
};
