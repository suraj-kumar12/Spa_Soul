import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Heart, Droplets, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { FallbackImage } from '../components/FallbackImage';
import { GoogleMapSection } from '../components/GoogleMapSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Editorial Header (Bright, Clean, and Elegant) */}
      <section className="bg-gradient-to-b from-[#FDFCF9] via-[#FAF7F2] to-white border-b border-[#E8DFD1] py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-block mb-3">
            <img
              src="/assets/aistudio/image_7dcfa224.png"
              alt="Spa Soul"
              className="h-14 w-auto object-contain mx-auto"
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
            About Spa Soul
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-[#1F1424]" style={{ textWrap: 'balance' }}>
            A Sanctuary Dedicated to the Restoration of Human Vitality
          </h1>
          <p className="text-base text-[#3B2A40] mt-4 leading-relaxed font-normal">
            Founded with the belief that true wellness is born from intentional touch, pure botanicals, and unhurried stillness in the heart of Surat.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#8C6830] font-bold">
                  Our Genesis & Vision
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
                  The Spa Soul Essence
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#3B2A40] leading-relaxed">
                In an era where personal time is constantly fragmented, <strong className="text-[#1F1424] font-bold">Spa Soul</strong> was conceived as a true sanctuary—a space where you leave your digital devices, everyday deadlines, and mental noise at the threshold.
              </p>

              <p className="text-sm sm:text-base text-[#3B2A40] leading-relaxed">
                Nestled within <strong className="text-[#1F1424] font-bold">Safal Square on University Road, Vesu</strong> (near i contrast Ice Cream – Depot), our centre is purposefully insulated from the surrounding city bustle. We designed our private therapy suites with sound-dampening architectural elements, soft indirect lighting, and ambient acoustics to foster an immediate sense of nervous system decompression.
              </p>

              <p className="text-sm sm:text-base text-[#3B2A40] leading-relaxed">
                Whether you visit for a targeted 60-minute Deep Tissue session or indulge in an afternoon in our VIP couple suite, every therapy is a ritual designed to restore balance between your body, breath, and inner soul.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border-2 border-[#E8DFD1] p-2 bg-white">
                <FallbackImage
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08264-50kb-xkywwEX8g6q2RfQu.jpg"
                  alt="Spa Soul interior sanctuary reception lounge in Surat"
                  fallbackTitle="Spa Soul Sanctuary"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Bento Grid */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#E8DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
              Our Pillars
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
              The Foundations of Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-[#E8DFD1] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                <Heart className="w-6 h-6 text-[#8C6830]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1424]">Therapist Artistry</h3>
              <p className="text-xs text-[#3B2A40] leading-relaxed font-normal">
                Our practitioners possess extensive hands-on experience in neuromuscular anatomy, traditional Thai Nuad Boran stretching, and Swedish lymphatic flow. Touch is always calibrated to your personal comfort threshold.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#E8DFD1] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                <Droplets className="w-6 h-6 text-[#8C6830]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1424]">Ethical Botanicals</h3>
              <p className="text-xs text-[#3B2A40] leading-relaxed font-normal">
                We believe what touches your skin matters deeply. We strictly use pure cold-pressed sweet almond, organic jojoba, and steam-distilled essential oils free from artificial dyes, paraffin, and harsh fragrances.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#E8DFD1] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                <ShieldCheck className="w-6 h-6 text-[#8C6830]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1424]">Pristine Hygiene</h3>
              <p className="text-xs text-[#3B2A40] leading-relaxed font-normal">
                Every suite undergoes medical-standard disinfection protocols between sessions. We provide single-use disposable garments, hot-water sanitized Egyptian cotton towels, and autoclave-sterilized tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Location Callout (Bright Luxury Container) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F2] border-2 border-[#E2C288] rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#8C6830] font-bold">
                Visit Us in Surat
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-[#1F1424]">
                Experience Spa Soul in Person
              </h2>
              <p className="text-sm text-[#3B2A40] leading-relaxed font-normal">
                Located at G-2,3 Safal Square, University Road, Vesu, Surat (near i contrast Ice Cream – Depot). Open daily from 10:00 AM to 09:30 PM.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/book"
                className="px-7 py-3.5 rounded-md bg-[#38162B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#522144] transition-colors text-center shadow-sm"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-md bg-white border-2 border-[#1F1424] text-[#1F1424] text-xs font-bold uppercase tracking-widest hover:bg-[#FAF8F5] transition-colors text-center"
              >
                Contact & Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary Location Map */}
      <GoogleMapSection />
    </div>
  );
};
