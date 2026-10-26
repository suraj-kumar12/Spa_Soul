import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, AlertCircle, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BUSINESS_INFO, GOOGLE_MAPS_DIRECTIONS_URL } from '../data/business';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit mobile number' }),
  subject: z.string().min(3, { message: 'Please provide a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSent(true);
    reset();
  };

  return (
    <div className="bg-white">
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
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1424]" style={{ textWrap: 'balance' }}>
            Contact Spa Soul Surat
          </h1>
          <p className="text-base text-[#3B2A40] mt-3 leading-relaxed font-normal">
            Have questions about our treatments, private couple suites, or custom wellness packages? Our team is at your service.
          </p>
        </div>
      </section>

      {/* Contact Details & Direct Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Business Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF7F2] border-2 border-[#E8DFD1] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8C6830] font-bold">
                    Concierge & Enquiries
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#1F1424] mt-1">
                    Connect With Us
                  </h2>
                </div>

                <div className="space-y-4 text-xs text-[#3B2A40]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                      <MapPin className="w-5 h-5 text-[#8C6830]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1F1424] text-sm">Sanctuary Address</p>
                      <p className="leading-relaxed mt-0.5 font-normal">
                        {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                      </p>
                      <a
                        href={GOOGLE_MAPS_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#8C6830] font-bold mt-2 hover:underline"
                      >
                        <Navigation className="w-3.5 h-3.5" /> Get Driving Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-[#E8DFD1]">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                      <Phone className="w-5 h-5 text-[#8C6830]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1F1424] text-sm">Direct Phone Line</p>
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="font-mono text-sm font-bold text-[#1F1424] hover:text-[#7D4971] transition-colors"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                      <p className="text-xs text-[#5C4863] mt-0.5 font-medium">Instant booking and concierge support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-[#E8DFD1] bg-[#EBF7F0]/40 -mx-3 p-3 rounded-xl border border-[#25D366]/30">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <WhatsAppIcon className="w-6 h-6" color="#FFFFFF" />
                    </div>
                    <div className="grow">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-[#1F1424] text-sm">WhatsApp Concierge</p>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#25D366] text-white px-2 py-0.5 rounded-full">
                          Online
                        </span>
                      </div>
                      <p className="font-mono text-sm font-bold text-[#075E54] mt-0.5">
                        {BUSINESS_INFO.whatsappDisplay}
                      </p>
                      <p className="text-xs text-[#5C4863] mt-0.5 font-medium">Instant reply &lt; 5 mins · Slot booking &amp; inquiries</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Link
                          to="/whatsapp"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#075E54] hover:bg-[#128C7E] text-white text-xs font-bold transition-colors shadow-xs"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" color="#FFFFFF" />
                          <span>Open WhatsApp Desk</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-[#E8DFD1]">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                      <Mail className="w-5 h-5 text-[#8C6830]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1F1424] text-sm">Email Address</p>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-xs font-semibold text-[#1F1424] hover:text-[#7D4971] transition-colors"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-[#E8DFD1]">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E2C288] flex items-center justify-center shrink-0 text-[#8C6830]">
                      <Clock className="w-5 h-5 text-[#8C6830]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1F1424] text-sm">Operating Hours</p>
                      <p className="mt-0.5 text-[#1F1424] font-bold">{BUSINESS_INFO.openingHours.days}</p>
                      <p className="text-xs text-[#5C4863]">{BUSINESS_INFO.openingHours.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Message Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border-2 border-[#E8DFD1] rounded-3xl p-6 sm:p-10 shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#1F1424] mb-1">
                Send a Message
              </h2>
              <p className="text-xs text-[#5C4863] mb-6 font-medium">
                Fill out the form below and our wellness coordinator will respond promptly.
              </p>

              {isSent ? (
                <div className="bg-[#FAF7F2] border-2 border-[#E2C288] rounded-2xl p-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-[#38162B] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7 text-[#E2C288]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F1424]">
                    Message Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3B2A40] max-w-sm mx-auto leading-relaxed font-normal">
                    Thank you for reaching out to Spa Soul. Our wellness coordinator will review your note and contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="mt-3 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md bg-[#38162B] text-white shadow-xs"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        {...register('name')}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 bg-white border rounded-lg text-sm text-[#1F1424] font-medium focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
                          errors.name ? 'border-red-400' : 'border-[#D5C9B8]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        maxLength={10}
                        {...register('phone')}
                        placeholder="9876543210"
                        className={`w-full px-4 py-3 bg-white border rounded-lg text-sm text-[#1F1424] font-mono font-medium focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
                          errors.phone ? 'border-red-400' : 'border-[#D5C9B8]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      {...register('email')}
                      placeholder="guest@example.com"
                      className={`w-full px-4 py-3 bg-white border rounded-lg text-sm text-[#1F1424] font-medium focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
                        errors.email ? 'border-red-400' : 'border-[#D5C9B8]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      {...register('subject')}
                      placeholder="e.g. Couple Package inquiry or bridal consultation"
                      className={`w-full px-4 py-3 bg-white border rounded-lg text-sm text-[#1F1424] font-medium focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
                        errors.subject ? 'border-red-400' : 'border-[#D5C9B8]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#1F1424] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      {...register('message')}
                      placeholder="How may our wellness team assist you?"
                      className={`w-full px-4 py-3 bg-white border rounded-lg text-sm text-[#1F1424] font-medium focus:outline-none focus:ring-2 focus:ring-[#C29B4F] ${
                        errors.message ? 'border-red-400' : 'border-[#D5C9B8]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-[#38162B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#522144] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-md border border-[#B88E3E]/40"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Transmit Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
