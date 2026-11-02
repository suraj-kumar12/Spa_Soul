import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const PackagesPage = lazy(() => import('./pages/PackagesPage').then(m => ({ default: m.PackagesPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const BookAppointmentPage = lazy(() => import('./pages/BookAppointmentPage').then(m => ({ default: m.BookAppointmentPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const WhatsAppPage = lazy(() => import('./pages/WhatsAppPage').then(m => ({ default: m.WhatsAppPage })));
const FaqsPage = lazy(() => import('./pages/FaqsPage').then(m => ({ default: m.FaqsPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-white text-[#8C6830]">
    <div className="w-10 h-10 border-2 border-[#C29B4F] border-t-transparent rounded-full animate-spin mb-4" />
    <span className="text-xs uppercase tracking-widest font-bold font-sans">Loading Sanctuary...</span>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />
            <Route path="packages" element={<PackagesPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="book" element={<BookAppointmentPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="whatsapp" element={<WhatsAppPage />} />
            <Route path="faqs" element={<FaqsPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
