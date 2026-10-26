import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/business';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'WhatsApp', path: '/whatsapp' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD1] py-2.5'
            : 'bg-white border-b border-[#EFE8DD] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
          <div className="flex items-center justify-between gap-8 h-12">
            {/* Zone 1: Brand wordmark featuring official logo */}
            <div className="shrink-0 flex items-center">
              <Logo size="md" />
            </div>

            {/* Zone 2: Clean single-line nav links with crisp contrast */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-[#7D4971] ${
                      isActive
                        ? 'text-[#1F1424] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C29B4F]'
                        : 'text-[#3E2B43]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 transition-colors py-1 hover:text-[#7D4971] ${
                    isActive ? 'text-[#1F1424] font-bold' : 'text-[#3E2B43]'
                  }`
                }
              >
                FAQs
              </NavLink>
            </nav>

            {/* Zone 3: Actions with clear contrast */}
            <div className="hidden sm:flex items-center gap-3.5 shrink-0">
              <Link
                to="/whatsapp"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF7F0] hover:bg-[#D4F4E2] border border-[#25D366]/40 text-[#075E54] text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-xs"
                title="Chat with Spa Soul on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-[#36223B] hover:text-[#7D4971] transition-colors"
                title="Direct Wellness Concierge"
              >
                <div className="w-6 h-6 rounded-full bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#9E7528]">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="font-mono text-sm tracking-tight text-[#1F1424]">{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <Link
                to="/book"
                className="whitespace-nowrap shrink-0 px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-md bg-[#38162B] text-[#FFFFFF] hover:bg-[#522144] transition-all shadow-xs active:scale-[0.98] border border-[#B88E3E]/40"
              >
                Book
              </Link>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Book + Hamburger */}
            <div className="flex items-center gap-2 sm:hidden">
              <Link
                to="/whatsapp"
                className="p-2 rounded-full bg-[#EBF7F0] text-[#25D366] hover:bg-[#D4F4E2] transition-colors flex items-center justify-center shadow-xs"
                aria-label="WhatsApp Chat and Booking"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </Link>
              <Link
                to="/book"
                className="whitespace-nowrap px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md bg-[#38162B] text-white"
              >
                Book
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1F1424] rounded-md hover:bg-[#FAF8F5] transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Bright & Clean) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[65px] z-30 bg-[#1F1424]/30 backdrop-blur-xs sm:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-[#E8DFD1] p-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3 font-semibold text-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-2.5 border-b border-[#F2ECE1] ${isActive ? 'text-[#1F1424] font-bold' : 'text-[#3E2B43]'}`
                }
              >
                Home
              </NavLink>
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `py-2.5 border-b border-[#F2ECE1] ${isActive ? 'text-[#1F1424] font-bold' : 'text-[#3E2B43]'}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  `py-2.5 border-b border-[#F2ECE1] ${isActive ? 'text-[#1F1424] font-bold' : 'text-[#3E2B43]'}`
                }
              >
                Frequently Asked Questions
              </NavLink>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <Link
                to="/whatsapp"
                className="w-full text-center py-2.5 text-xs font-bold tracking-wider uppercase rounded-md bg-[#25D366] text-white shadow-xs flex items-center justify-center gap-2 hover:bg-[#20be5b] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
                Chat on WhatsApp
              </Link>
              <Link
                to="/book"
                className="w-full text-center py-2.5 text-xs font-bold tracking-wider uppercase rounded-md bg-[#38162B] text-white shadow-xs"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full text-center py-2 text-xs font-semibold text-[#1F1424] bg-[#FAF8F5] border border-[#E8DFD1] rounded-md flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E7528]" />
                Call Concierge: {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
