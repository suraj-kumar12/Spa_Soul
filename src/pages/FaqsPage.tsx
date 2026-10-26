import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Sparkles, Phone, HelpCircle } from 'lucide-react';
import { SPA_FAQS } from '../data/faqs';
import { BUSINESS_INFO } from '../data/business';

export const FaqsPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true, 'faq-3': true });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Booking & Policies', 'Spa Etiquette', 'Treatments & Health'];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = SPA_FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

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
            Help & Guidelines
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1424]" style={{ textWrap: 'balance' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-base text-[#3B2A40] mt-3 leading-relaxed font-normal">
            Everything you need to know about our treatments, appointment etiquette, suite privacy, and hygiene standards at Spa Soul.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-white border-b border-[#E8DFD1] sticky top-[65px] z-20 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F2] border border-[#E8DFD1] rounded-lg overflow-x-auto w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#38162B] text-white shadow-xs'
                    : 'text-[#3E2B43] hover:text-[#1F1424] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8C6830] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-[#FAF7F2] border border-[#E8DFD1] rounded-lg text-[#1F1424] placeholder-[#5C4863] focus:outline-none focus:ring-2 focus:ring-[#C29B4F] focus:bg-white transition-all"
            />
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-[#FAF7F2] border-2 border-[#E8DFD1] rounded-2xl p-8">
              <HelpCircle className="w-8 h-8 text-[#8C6830] mx-auto mb-2" />
              <h3 className="font-serif text-2xl font-bold text-[#1F1424]">No Matching Answers Found</h3>
              <p className="text-xs text-[#3B2A40] mt-1 mb-4 font-normal">
                Have a specific question not listed here? Our concierge is happy to assist.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#38162B] text-white rounded-md shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#E2C288]" /> Call Concierge: {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className="bg-white border-2 border-[#E8DFD1] hover:border-[#C29B4F] rounded-2xl overflow-hidden shadow-2xs transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#8C6830] font-bold">
                          {faq.category}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-[#1F1424]">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#8C6830] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm text-[#3B2A40] leading-relaxed border-t border-[#F2ECE1] font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Need Further Assistance Box (Bright & Elegant) */}
          <div className="mt-16 bg-[#FAF7F2] border-2 border-[#E2C288] rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1424]">
              Still Have Questions?
            </h3>
            <p className="text-sm text-[#3B2A40] max-w-md mx-auto leading-relaxed font-normal">
              Our wellness concierge is available every day between 10:00 AM and 09:30 PM to discuss personalized treatments or accommodate special requests.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#522144] transition-colors shadow-md"
              >
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white border-2 border-[#1F1424] text-[#1F1424] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF8F5] transition-colors"
              >
                Send Online Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
