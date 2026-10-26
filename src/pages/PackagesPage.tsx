import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, Check, Heart, ArrowRight } from 'lucide-react';
import { SPA_PACKAGES } from '../data/packages';
import { BUSINESS_INFO } from '../data/business';

export const PackagesPage: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      {/* Header (Bright & Clean) */}
      <section className="bg-gradient-to-b from-[#FDFCF9] via-[#FAF7F2] to-white border-b border-[#E8DFD1] py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-block mb-3">
            <img
              src="/assets/aistudio/image_7dcfa224.png"
              alt="Spa Soul"
              className="h-14 w-auto object-contain mx-auto"
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
            Multi-Therapy Journeys
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1424]" style={{ textWrap: 'balance' }}>
            Curated Spa Packages & Pricing
          </h1>
          <p className="text-base text-[#3B2A40] mt-3 leading-relaxed font-normal">
            Thoughtfully orchestrated multi-hour rituals that combine exfoliating body scrubs, therapeutic massages, and facial touch for holistic renewal.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SPA_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white border-2 rounded-2xl p-8 shadow-xs flex flex-col justify-between transition-all hover:shadow-md ${
                  pkg.isFeatured ? 'border-[#C29B4F] ring-2 ring-[#C29B4F]/20 bg-[#FAF8F5]' : 'border-[#E8DFD1]'
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-wider text-[#8C6830] font-bold">
                        {pkg.durationMinutes} Minutes Experience
                      </span>
                      {pkg.isFeatured && (
                        <span className="text-[10px] uppercase tracking-wider bg-[#38162B] text-white px-2.5 py-1 rounded-sm font-bold">
                          Signature Ritual
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-2xl font-bold text-[#1F1424]">
                      {pkg.pricePlaceholder}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1424]">
                      {pkg.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8C6830] font-serif italic mt-1 font-semibold">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#3B2A40] leading-relaxed font-normal">
                    {pkg.description}
                  </p>

                  <div className="pt-4 border-t border-[#F2ECE1]">
                    <p className="text-xs uppercase tracking-wider font-bold text-[#1F1424] mb-3">
                      Complete Ritual Inclusions:
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#3B2A40]">
                      {pkg.includedTreatments.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 font-medium">
                          <Check className="w-4 h-4 text-[#8C6830] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E8DFD1] text-xs text-[#5C4863]">
                    <strong className="text-[#1F1424] font-bold">Best Suited For:</strong> {pkg.idealFor}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE1] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#5C4863] font-medium">
                    Advance booking recommended for suite prep
                  </span>
                  <Link
                    to={`/book?treatment=${encodeURIComponent(pkg.name)}`}
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider text-center hover:bg-[#522144] transition-colors shadow-xs"
                  >
                    Reserve This Ritual
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Rituals & Gift Inquiries (Bright & Warm) */}
          <div className="bg-[#FAF7F2] border-2 border-[#E2C288] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1424]">
              Custom Packages & Bridal Wellness
            </h3>
            <p className="text-sm text-[#3B2A40] leading-relaxed max-w-xl mx-auto font-normal">
              Planning a pre-wedding bridal glow sequence, anniversary celebration, or corporate executive retreat? Our wellness director can curate bespoke combinations of treatments tailored to your schedule.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#522144] transition-colors shadow-md"
              >
                Inquire with Concierge: {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
