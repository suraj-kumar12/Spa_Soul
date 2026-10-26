import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const PrivacyPolicyPage: React.FC = () => {
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
            Legal & Confidentiality
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1424]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#5C4863] mt-2 font-medium">
            Last Updated: October 2026 · Spa Soul Wellness Centre
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#FAF7F2] border-2 border-[#E8DFD1] rounded-3xl p-8 sm:p-12 shadow-xs text-sm text-[#3B2A40] leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              1. Commitment to Guest Confidentiality
            </h2>
            <p>
              At <strong>Spa Soul</strong>, located at G-2,3 Safal Square, University Road, Vesu, Surat, Gujarat 395007, we respect your privacy. This policy outlines how we collect, handle, and protect your personal information when you use our website or schedule services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              2. Information We Collect
            </h2>
            <p>
              When you schedule an appointment or contact us online, we collect:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your full name and contact information (mobile phone number and email address).</li>
              <li>Requested wellness treatments, preferred appointment date, and preferred time slot.</li>
              <li>Optional notes regarding pressure preferences or general relaxation expectations.</li>
              <li>Basic diagnostic health information provided voluntarily on our confidential in-spa intake cards (allergies, pregnancy status, acute muscle injuries).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              3. How We Use Your Data
            </h2>
            <p>
              Your personal data is used solely to coordinate your spa visit, allocate certified therapists, prepare private suites, and communicate directly regarding appointment confirmations, cancellations, or reschedules.
            </p>
            <p className="mt-2">
              We never sell, rent, monetize, or disclose client contact information to third-party marketing firms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              4. In-Spa Health Intake Privacy
            </h2>
            <p>
              Any physical health indications shared with our therapists are strictly confidential and retained solely to ensure treatments are administered safely without adverse reactions.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-2">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions regarding your personal details or wish to have your contact details updated, please contact our data controller directly at:
            </p>
            <div className="mt-3 p-5 bg-white rounded-xl border border-[#E8DFD1] text-xs">
              <p className="font-bold text-[#1F1424] text-sm">Spa Soul Wellness Centre</p>
              <p className="mt-1">{BUSINESS_INFO.address.fullFormatted}</p>
              <p className="mt-1">Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#1F1424] font-bold underline">{BUSINESS_INFO.email}</a></p>
              <p className="mt-0.5">Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#1F1424] font-mono font-bold">{BUSINESS_INFO.phoneDisplay}</a></p>
            </div>
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
