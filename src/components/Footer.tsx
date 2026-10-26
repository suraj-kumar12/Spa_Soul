import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, GOOGLE_MAPS_DIRECTIONS_URL } from '../data/business';
import { SPA_SERVICES } from '../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] text-[#1F1424] border-t border-[#E8DFD1] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E8DFD1]">
          {/* Column 1: Brand & Philosophy (2 Cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showTagline />
            <p className="text-sm text-[#3E2D44] leading-relaxed max-w-sm pt-2 font-normal">
              Spa Soul is a premier luxury wellness sanctuary in Surat, dedicated to unhurried restorative therapies, 
              authentic touch rituals, and pure botanical care.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#8C6830] flex flex-wrap items-center gap-2">
              <span>Luxury Spa</span>
              <span>·</span>
              <span>Massage Sanctuary</span>
              <span>·</span>
              <span>Wellness Centre Surat</span>
            </div>
          </div>

          {/* Column 2: Signature Services */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#1F1424] tracking-wide mb-4">
              Spa Treatments
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#3E2D44]">
              {SPA_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#7D4971] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-[#8C6830] font-bold pt-1 hover:underline"
                >
                  View All 10 Treatments <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#1F1424] tracking-wide mb-4">
              Explore Sanctuary
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#3E2D44]">
              <li>
                <Link to="/about" className="hover:text-[#7D4971] transition-colors">
                  About Spa Soul
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#7D4971] transition-colors">
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#7D4971] transition-colors">
                  Spa Ambience Gallery
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-[#7D4971] transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link to="/whatsapp" className="hover:text-[#7D4971] transition-colors flex items-center gap-1.5 font-semibold text-[#075E54]">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Booking</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#7D4971] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#7D4971] transition-colors">
                  Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Direct Contact */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#1F1424] tracking-wide mb-4">
              Visit Spa Soul
            </h4>
            <div className="space-y-3.5 text-xs text-[#3E2D44]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C6830] shrink-0 mt-0.5" />
                <div>
                  <p className="leading-relaxed font-medium">
                    {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                  </p>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#8C6830] font-bold mt-1.5 hover:underline"
                  >
                    Get Directions <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#8C6830] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-mono font-bold text-sm text-[#1F1424] hover:text-[#7D4971] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <Link
                  to="/whatsapp"
                  className="font-mono font-bold text-sm text-[#075E54] hover:text-[#128C7E] transition-colors flex items-center gap-1"
                >
                  {BUSINESS_INFO.whatsappDisplay}
                  <span className="text-[10px] uppercase font-semibold bg-[#EBF7F0] text-[#075E54] px-1.5 py-0.5 rounded font-sans">Chat</span>
                </Link>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8C6830] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="font-medium hover:text-[#7D4971] transition-colors truncate max-w-[200px]"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#8C6830] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1F1424]">{BUSINESS_INFO.openingHours.days}</p>
                  <p className="text-[11px] text-[#5C4863]">{BUSINESS_INFO.openingHours.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#5C4863]">
          <p>© {new Date().getFullYear()} Spa Soul. All rights reserved. G-2,3 Safal Square, University Road, Vesu, Surat.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-[#1F1424] transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-[#1F1424] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
