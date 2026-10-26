import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Sparkles, Phone, Clock, ShieldCheck, MapPin, Calendar, Heart } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BookingForm } from '../components/BookingForm';
import { BUSINESS_INFO } from '../data/business';

export const BookAppointmentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const treatmentParam = searchParams.get('treatment') || undefined;

  return (
    <div className="bg-white pb-24">
      {/* Header (Bright & Clean) */}
      <section className="bg-gradient-to-b from-[#FDFCF9] via-[#FAF7F2] to-white border-b border-[#E8DFD1] py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl relative z-10">
          <div className="inline-block mb-3">
            <img
              src="/assets/aistudio/image_7dcfa224.png"
              alt="Spa Soul"
              className="h-14 w-auto object-contain mx-auto"
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
            Concierge Scheduling
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1F1424]" style={{ textWrap: 'balance' }}>
            Reserve Your Spa Soul Journey
          </h1>
          <p className="text-sm text-[#3B2A40] mt-3 leading-relaxed font-normal">
            Fill in your preferred therapy and time slot. Our concierge will review therapist availability and call you directly to finalize your appointment.
          </p>
        </div>
      </section>

      {/* Booking Form & Etiquette Section */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF7F2] border-2 border-[#E8DFD1] rounded-3xl p-6 sm:p-10 shadow-xs">
              <div className="mb-6 pb-4 border-b border-[#E8DFD1]">
                <h2 className="font-serif text-2xl font-bold text-[#1F1424]">
                  Appointment Request Form
                </h2>
                <p className="text-xs text-[#5C4863] mt-1 font-medium">
                  Required fields are marked with an asterisk (*). No advance payment needed online.
                </p>
              </div>

              <BookingForm initialTreatment={treatmentParam} />
            </div>

            {/* Sidebar Guidelines & Immediate Assistance (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Immediate Call Card (Bright Warm Ivory & Gold) */}
              <div className="bg-[#FAF5ED] border-2 border-[#E2C288] rounded-2xl p-7 shadow-xs space-y-3.5">
                <span className="text-xs uppercase tracking-wider text-[#8C6830] font-bold">
                  Prefer Immediate Confirmation?
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F1424]">Call Reception Directly</h3>
                <p className="text-xs sm:text-sm text-[#3B2A40] leading-relaxed font-normal">
                  For same-day appointments, immediate therapist scheduling, or custom couple package queries, speak with our wellness desk now.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <Link
                    to="/whatsapp"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" /> Chat on WhatsApp
                  </Link>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#522144] transition-colors shadow-md"
                  >
                    <Phone className="w-4 h-4 text-[#E2C288]" /> Call {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Spa Preparation Guidelines (Clean White Card) */}
              <div className="bg-white border-2 border-[#E8DFD1] rounded-2xl p-7 shadow-xs space-y-5">
                <h3 className="font-serif text-xl font-bold text-[#1F1424]">
                  Appointment Etiquette & Tips
                </h3>

                <div className="space-y-4 text-xs text-[#3B2A40]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1F1424] font-bold text-sm">Arrive 10–15 Minutes Early:</strong>
                      <p className="mt-0.5 font-normal">Allows time to enjoy our herbal welcome tea and complete your health intake card.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1F1424] font-bold text-sm">Dignified Modesty:</strong>
                      <p className="mt-0.5 font-normal">Fresh disposable undergarments and plush linens provided. Professional draping is strictly respected.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1F1424] font-bold text-sm">Health & Pressure:</strong>
                      <p className="mt-0.5 font-normal">Please inform your therapist of any target aches, pressure preferences, or sensitivities.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1F1424] font-bold text-sm">Parking at Safal Square:</strong>
                      <p className="mt-0.5 font-normal">Dedicated customer parking is available on-site at Safal Square, University Road, Vesu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
