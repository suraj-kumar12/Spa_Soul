import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ShieldCheck, Check, AlertCircle, ArrowLeft, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SPA_SERVICES } from '../data/services';
import { BUSINESS_INFO } from '../data/business';
import { FallbackImage } from '../components/FallbackImage';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SPA_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SPA_SERVICES.filter(
    (s) => s.id !== service.id && s.category === service.category
  ).slice(0, 3);

  return (
    <div className="bg-white pb-24">
      {/* Breadcrumb Header (Clean & Light) */}
      <div className="bg-[#FAF7F2] border-b border-[#E8DFD1] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-semibold text-[#5C4863] flex items-center gap-2">
          <Link to="/" className="hover:text-[#1F1424] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#1F1424] transition-colors">Treatments</Link>
          <span>/</span>
          <span className="text-[#1F1424] font-bold truncate">{service.name}</span>
        </div>
      </div>

      {/* Hero Split for Service */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Image and Booking Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border-2 border-[#E8DFD1] p-2 bg-white">
                <FallbackImage
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  fallbackTitle={service.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Quick Booking Box */}
              <div className="bg-[#FAF7F2] border-2 border-[#E2C288] rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD1]">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C6830] font-bold">
                      Starting Rate
                    </span>
                    <p className="font-mono text-2xl font-bold text-[#1F1424]">
                      {service.pricePlaceholder}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] uppercase tracking-wider text-[#8C6830] font-bold">
                      Durations Available
                    </span>
                    <p className="font-mono text-sm font-bold text-[#1F1424]">
                      {service.durationMinutes.join(' / ')} Minutes
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Link
                    to={`/book?treatment=${encodeURIComponent(service.name)}`}
                    className="w-full py-3.5 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-widest text-center block hover:bg-[#522144] transition-colors shadow-md border border-[#B88E3E]/40"
                  >
                    Book This Treatment
                  </Link>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(`Hi Spa Soul, I would like to inquire about booking a slot for "${service.name}". Please let me know therapist availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-[#20be5b] transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xs font-medium text-[#3B2A40] hover:text-[#1F1424] inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8C6830]" />
                    Call Concierge: <strong className="font-mono text-[#1F1424] font-bold">{BUSINESS_INFO.phoneDisplay}</strong>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Therapy Anatomy */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#8C6830] font-bold uppercase tracking-wider mb-2">
                  <span>{service.category}</span>
                  <span>·</span>
                  <span>Spa Soul Sanctuary</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1424] leading-tight">
                  {service.name}
                </h1>
                <p className="text-base text-[#8C6830] font-serif italic mt-2 font-medium">
                  "{service.tagline}"
                </p>
              </div>

              {/* Comprehensive Overview */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#1F1424]">
                  Therapy Overview
                </h2>
                <p className="text-sm sm:text-base text-[#3B2A40] leading-relaxed">
                  {service.fullOverview}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#1F1424]">
                  Key Wellness Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.keyBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD1] flex items-start gap-2.5 text-xs text-[#1F1424] font-medium"
                    >
                      <Check className="w-4 h-4 text-[#8C6830] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Steps / Experience */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#1F1424]">
                  What to Expect: Treatment Steps
                </h2>
                <ol className="space-y-3">
                  {service.treatmentSteps.map((step, idx) => (
                    <li
                      key={idx}
                      className="bg-white p-4 rounded-xl border-2 border-[#E8DFD1] flex items-start gap-3.5 text-xs text-[#3B2A40]"
                    >
                      <span className="font-serif font-bold text-base text-[#8C6830] shrink-0">
                        0{idx + 1}.
                      </span>
                      <span className="leading-relaxed font-medium text-[#1F1424]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Recommended For & Contraindications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E8DFD1]">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1F1424] mb-3">
                    Recommended For
                  </h3>
                  <ul className="space-y-2 text-xs text-[#3B2A40]">
                    {service.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#8C6830]" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1F1424] mb-3">
                    Health Contraindications
                  </h3>
                  <ul className="space-y-2 text-xs text-[#3B2A40]">
                    {service.contraindications.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-[#7D4971] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-[#FAF7F2] border-t border-[#E8DFD1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-8">
              Complementary Therapies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border-2 border-[#E8DFD1] rounded-2xl p-6 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#8C6830] font-bold">
                      {rel.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#1F1424]">
                      <Link to={`/services/${rel.slug}`}>{rel.name}</Link>
                    </h3>
                    <p className="text-xs text-[#3B2A40] line-clamp-2 font-normal">{rel.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                    <Link
                      to={`/services/${rel.slug}`}
                      className="text-xs font-bold text-[#1F1424] hover:text-[#7D4971]"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/book?treatment=${encodeURIComponent(rel.name)}`}
                      className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-md bg-[#38162B] text-white"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
