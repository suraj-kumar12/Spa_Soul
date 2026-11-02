import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GoogleMapSection } from '../components/GoogleMapSection';
import { ScrollToTop } from '../components/ScrollToTop';
import { WhatsAppWidget } from '../components/WhatsAppWidget';
import { initGA, trackPageView } from '../utils/analytics';

export const MainLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F1424] selection:bg-[#E2C288]/40 selection:text-[#1F1424]">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <GoogleMapSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};
