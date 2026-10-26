import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      {/* Header (Bright & Clean) */}
      <section className="bg-gradient-to-b from-[#FDFCF9] via-[#FAF7F2] to-white border-b border-[#E8DFD1] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-3">
            <img
              src="/assets/aistudio/image_7dcfa224.png"
              alt="Spa Soul"
              className="h-12 w-auto object-contain mx-auto"
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
            Spa Soul Policies
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1424]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#5C4863] mt-2 font-medium">
            Effective as of October 2026 · Spa Soul Wellness Centre
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#FAF7F2] border-2 border-[#E8DFD1] rounded-3xl p-8 sm:p-12 shadow-xs text-sm text-[#3B2A40] leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website or scheduling treatments at <strong>Spa Soul</strong> (G-2,3 Safal Square, University Road, Vesu, Surat, Gujarat 395007), you acknowledge and agree to abide by the policies and conditions outlined herein.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              2. Appointment Scheduling & Confirmation
            </h2>
            <p>
              Submissions made through our website represent an appointment request. A booking is only finalized after our concierge verifies suite and therapist availability and communicates direct confirmation to you via phone or email.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              3. Arrival Time & Grace Periods
            </h2>
            <p>
              Guests are kindly requested to arrive 10 to 15 minutes prior to their scheduled time to complete client intake cards and unwind. In the event of late arrival, treatments will conclude at the scheduled finishing time to ensure the next scheduled guest is not inconvenienced.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              4. Cancellations & Rescheduling
            </h2>
            <p>
              We request at least 3 hours advance notice for rescheduling or cancelling individual therapy appointments, and 6 hours advance notice for couple packages or rituals.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              5. Dignity, Professionalism & Modesty
            </h2>
            <p>
              Spa Soul is a certified therapeutic wellness establishment. Professional draping techniques are strictly adhered to by all therapists. Any inappropriate conduct, harassment, or suggestive language toward any staff member will result in immediate termination of the treatment and full forfeiture of fees.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              6. Health & Wellness Disclosures
            </h2>
            <p>
              Spa therapies are designed for muscular relaxation and general wellbeing. They do not substitute for medical treatment or clinical physical therapy. Guests are responsible for disclosing any acute health conditions, pregnancies, heart conditions, or open skin lesions prior to the start of treatment.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E8DFD1]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F1424] hover:text-[#7D4971] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#8C6830]" /> Return to Spa Soul Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
