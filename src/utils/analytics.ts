// Google Analytics 4 (GA4) Integration for Spa Soul
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID as string | undefined;

let isInitialized = false;

export const initGA = (): void => {
  if (typeof window === 'undefined' || isInitialized) return;
  if (!GA_MEASUREMENT_ID || !GA_MEASUREMENT_ID.startsWith('G-')) {
    // Graceful no-op when Measurement ID is not yet configured in environment variables
    return;
  }

  const existingScript = document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`);
  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer?.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // Handled dynamically on route changes to avoid double counting
  });

  isInitialized = true;
};

export const trackPageView = (path: string, title?: string): void => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

export const trackEvent = (action: string, params: Record<string, any> = {}): void => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag('event', action, params);
};

export const trackWhatsAppClick = (source: string, prefilledText?: string): void => {
  trackEvent('whatsapp_click', {
    event_category: 'Engagement',
    event_label: source,
    prefilled_message: prefilledText,
  });
};

export const trackPhoneCall = (source: string, phoneNumber: string = '+918893885879'): void => {
  trackEvent('phone_call_click', {
    event_category: 'Lead',
    event_label: source,
    phone_number: phoneNumber,
  });
};

export const trackBookingSubmission = (treatment: string, referenceId: string): void => {
  trackEvent('booking_submission', {
    event_category: 'Conversion',
    treatment_name: treatment,
    booking_reference: referenceId,
  });
};

export const trackContactSubmission = (subject: string): void => {
  trackEvent('contact_form_submit', {
    event_category: 'Lead',
    subject,
  });
};

export const trackDirectionsClick = (source: string): void => {
  trackEvent('directions_click', {
    event_category: 'Engagement',
    event_label: source,
    destination: 'Someshwara Enclave, Vesu, Surat',
  });
};
