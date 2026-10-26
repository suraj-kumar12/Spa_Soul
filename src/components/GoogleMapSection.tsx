import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, Check, Copy } from 'lucide-react';
import { BUSINESS_INFO, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECTIONS_URL } from '../data/business';

export const GoogleMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
            Sanctuary Destination · Surat
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
            Find Serenity at Spa Soul
          </h2>
          <p className="text-sm text-[#3B2A40] mt-3 leading-relaxed font-normal">
            G-2,3 Safal Square, University Road, Vesu, Surat (Near i contrast Ice Cream – Depot).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Location & Contact Card (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white border-2 border-[#E8DFD1] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C6830] font-bold">
                  Primary Location
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F1424] mt-1">
                  Spa Soul Sanctuary
                </h3>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                  <MapPin className="w-5 h-5 text-[#8C6830]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1F1424]">
                    {BUSINESS_INFO.address.line1}
                  </p>
                  <p className="text-xs text-[#3B2A40] mt-1 leading-relaxed font-normal">
                    {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                  </p>
                  <p className="text-[11px] text-[#8C6830] font-semibold mt-1">
                    Landmark: {BUSINESS_INFO.address.landmark}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F1424] hover:text-[#7D4971] transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#8C6830]" />
                      Get Directions
                    </a>
                    <span className="text-[#D5C9B8]">·</span>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C4863] hover:text-[#1F1424] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-700" />
                          <span className="text-green-700 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#8C6830]" />
                          Copy Address
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#F2ECE1]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                  <Clock className="w-5 h-5 text-[#8C6830]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1F1424]">Spa Operating Hours</p>
                  <p className="text-xs text-[#1F1424] mt-0.5 font-bold">{BUSINESS_INFO.openingHours.days}</p>
                  <p className="text-xs text-[#5C4863]">{BUSINESS_INFO.openingHours.hours}</p>
                </div>
              </div>

              {/* Direct Phone Concierge */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#F2ECE1]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                  <Phone className="w-5 h-5 text-[#8C6830]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1F1424]">Direct Spa Desk</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-sm font-mono font-bold text-[#1F1424] hover:text-[#7D4971] transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-[#5C4863] mt-0.5">Click to call direct for instant booking</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#F2ECE1]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                  <Mail className="w-5 h-5 text-[#8C6830]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1F1424]">Email Concierge</p>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-xs font-semibold text-[#3B2A40] hover:text-[#1F1424] transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#F2ECE1]">
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider text-center block hover:bg-[#522144] transition-colors shadow-xs"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Frame (7 cols on lg) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#E8DFD1] shadow-sm relative min-h-[480px] bg-white group">
            {/* Branded Floating Location Badge on Map */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-white/95 backdrop-blur-md border border-[#E8DFD1] rounded-xl p-3 sm:p-4 shadow-md max-w-[280px] sm:max-w-xs pointer-events-auto transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8C6830] ring-4 ring-[#8C6830]/20 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6830]">
                  Sanctuary Location
                </span>
              </div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-[#1F1424] leading-tight">
                Spa Soul
              </h4>
              <p className="text-[11px] text-[#3B2A40] mt-1 leading-snug">
                G-2,3 Safal Square, University Road, Vesu, Surat
              </p>
              <p className="text-[10px] text-[#8C6830] font-semibold mt-0.5">
                Near i contrast Ice Cream – Depot
              </p>
              <div className="mt-2.5 flex items-center justify-between gap-2 pt-2 border-t border-[#F0E6D8] text-[11px]">
                <span className="text-[#8C6830] font-bold">★ 4.9 · Luxury Spa</span>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#38162B] hover:text-[#7D4971] transition-colors"
                >
                  <Navigation className="w-3 h-3 text-[#8C6830]" />
                  Directions
                </a>
              </div>
            </div>

            <iframe
              title="Spa Soul - G-2,3 Safal Square, University Road, Vesu, Surat"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '480px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
