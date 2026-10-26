import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, Clock, ArrowRight, Check } from 'lucide-react';
import { SPA_SERVICES } from '../data/services';
import { FallbackImage } from '../components/FallbackImage';

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Massage Therapy', 'Specialty & Couple', 'Body & Skin Rituals'];

  const filteredServices = SPA_SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white pb-24">
      {/* Editorial Header (Bright & Clean) */}
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
            Therapeutic Menu
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1424]" style={{ textWrap: 'balance' }}>
            Our Spa & Massage Therapies
          </h1>
          <p className="text-base text-[#3B2A40] mt-3 leading-relaxed font-normal">
            Ten bespoke rituals curated to melt fatigue, ease neuromuscular tension, and cultivate deep bodily peace in Surat.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-white border-b border-[#E8DFD1] sticky top-[65px] z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F2] border border-[#E8DFD1] rounded-lg overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#38162B] text-white shadow-xs'
                    : 'text-[#3E2B43] hover:text-[#1F1424] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8C6830] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments..."
              className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-[#FAF7F2] border border-[#E8DFD1] rounded-lg text-[#1F1424] placeholder-[#5C4863] focus:outline-none focus:ring-2 focus:ring-[#C29B4F] focus:bg-white transition-all"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-[#FAF7F2] border-2 border-[#E8DFD1] rounded-2xl p-8 max-w-lg mx-auto">
              <Sparkles className="w-8 h-8 text-[#8C6830] mx-auto mb-3" />
              <h3 className="font-serif text-2xl font-bold text-[#1F1424]">No Treatments Found</h3>
              <p className="text-xs text-[#3B2A40] mt-1 mb-4 font-normal">
                We couldn't find any treatments matching "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#38162B] text-white rounded-md hover:bg-[#522144]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border-2 border-[#E8DFD1] hover:border-[#C29B4F] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  {/* Service Image with Price Tag */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <FallbackImage
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      fallbackTitle={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#38162B] text-white text-xs font-mono font-bold px-3 py-1.5 rounded-md shadow-sm border border-[#B88E3E]/40">
                      From {service.pricePlaceholder}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col grow justify-between space-y-4">
                    <div>
                      {/* Zero-Pill metadata */}
                      <div className="flex items-center gap-2 text-xs font-bold text-[#8C6830] mb-1.5">
                        <span>{service.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.durationMinutes.join(' / ')} mins</span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-[#1F1424] group-hover:text-[#7D4971] transition-colors">
                        <Link to={`/services/${service.slug}`}>{service.name}</Link>
                      </h3>

                      <p className="text-xs text-[#3B2A40] leading-relaxed mt-2 font-normal">
                        {service.description}
                      </p>

                      {/* Key benefits list */}
                      <div className="mt-4 pt-3 border-t border-[#F2ECE1] space-y-2">
                        {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#3B2A40] font-medium">
                            <Check className="w-3.5 h-3.5 text-[#8C6830] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-xs font-bold text-[#1F1424] hover:text-[#7D4971] transition-colors inline-flex items-center gap-1"
                      >
                        Details <ArrowRight className="w-3 h-3 text-[#8C6830]" />
                      </Link>

                      <Link
                        to={`/book?treatment=${encodeURIComponent(service.name)}`}
                        className="px-4 py-2.5 rounded-md bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#522144] transition-colors shadow-2xs"
                      >
                        Book Session
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#FAF7F2] border-2 border-[#E2C288] rounded-2xl p-6 text-xs text-[#3B2A40] leading-relaxed shadow-2xs">
          <p className="font-bold text-[#1F1424] text-sm mb-1">Configurable Pricing Note</p>
          <p>
            Prices displayed are introductory starting placeholders and can be tailored based on chosen session duration (60 / 90 / 120 mins) or customized multi-therapy rituals.
          </p>
        </div>
      </section>
    </div>
  );
};
