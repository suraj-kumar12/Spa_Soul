import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Droplets,
  Clock,
  MapPin,
  ChevronRight,
  Star,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Film,
} from 'lucide-react';
import { SPA_SERVICES } from '../data/services';
import { SPA_PACKAGES } from '../data/packages';
import { SPA_FAQS } from '../data/faqs';
import { SAMPLE_TESTIMONIALS } from '../data/reviews';
import { SPA_GALLERY } from '../data/gallery';
import { BUSINESS_INFO } from '../data/business';
import { SPA_VIDEOS } from '../data/media';
import { FallbackImage } from '../components/FallbackImage';
import { BookingForm } from '../components/BookingForm';
import { GoogleMapSection } from '../components/GoogleMapSection';
import { VideoShowcase } from '../components/VideoShowcase';
import { VideoModal } from '../components/VideoModal';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [heroVisualMode, setHeroVisualMode] = useState<'video' | 'photo'>('video');
  const [heroMuted, setHeroMuted] = useState<boolean>(true);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  const toggleHeroAudio = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroMuted;
      setHeroMuted(!heroMuted);
    }
  };

  const categories = ['All', 'Massage Therapy', 'Specialty & Couple', 'Body & Skin Rituals'];

  const filteredServices =
    selectedCategory === 'All'
      ? SPA_SERVICES
      : SPA_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-0 bg-white">
      {/* 1. Hero Section (Bright, Clean, and Elegant) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFCF9] via-[#FAF7F2] to-white border-b border-[#EFE8DD] pt-10 pb-20 lg:pt-14 lg:pb-24">
        {/* Subtle Decorative Golden Radiance */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5EAD7]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#EFE4EC]/50 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & Typography */}
            <div className="lg:col-span-7 space-y-6">
              {/* Brand Emblem Spotlight */}
              <div className="inline-block mb-1">
                <img
                  src="/assets/aistudio/image_7dcfa224.png"
                  alt="Spa Soul Luxury Wellness"
                  className="h-16 sm:h-20 w-auto object-contain drop-shadow-xs"
                />
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8C6830] bg-[#FAF3E6] px-3.5 py-1.5 rounded-full border border-[#E2C288]/60">
                <Sparkles className="w-3.5 h-3.5 text-[#9E7528]" />
                <span>Sanctuary of Equilibrium · Surat</span>
              </div>

              <h1
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-[#1F1424] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Where Stillness Awakens <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#8C6830]">Your Inner Soul</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3B2A40] leading-relaxed max-w-xl font-normal">
                Immerse your senses in Surat’s premier wellness haven. From restorative Swedish and therapeutic Deep Tissue bodywork to private VIP couple spa suites, experience bespoke therapies designed to melt fatigue and restore deep serenity.
              </p>

              {/* Action Buttons with High-Contrast Legibility & Video Trigger */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  to="/book"
                  className="px-7 py-4 rounded-md bg-[#38162B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#522144] transition-all text-center shadow-md active:scale-[0.98] border border-[#B88E3E]/40"
                >
                  Reserve Your Treatment
                </Link>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-6 py-4 rounded-md bg-[#FAF5ED] border-2 border-[#E2C288] text-[#1F1424] text-xs font-bold uppercase tracking-widest hover:bg-[#F3E7D3] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer group"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#8C6830] group-hover:scale-110 transition-transform" />
                  <span>Watch 4K Film</span>
                </button>
                <Link
                  to="/services"
                  className="px-6 py-4 rounded-md bg-white border border-[#E8DFD1] text-[#1F1424] text-xs font-bold uppercase tracking-widest hover:bg-[#FAF8F5] transition-all text-center flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>10 Therapies</span> <ArrowRight className="w-3.5 h-3.5 text-[#8C6830]" />
                </Link>
              </div>

              {/* Trust Metadata in High Contrast */}
              <div className="pt-6 border-t border-[#E8DFD1] flex flex-wrap items-center gap-6 text-xs font-semibold text-[#3B2A40]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Hospital-Grade Sanitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                    <Heart className="w-3.5 h-3.5" />
                  </div>
                  <span>Private Climate Suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                    <Droplets className="w-3.5 h-3.5" />
                  </div>
                  <span>100% Pure Botanical Oils</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Anchor with Live Video / Photo Switcher */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-3 bg-white border-2 border-[#E8DFD1] shadow-2xl">
                {/* Visual Mode Selector Tabs */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
                  <button
                    type="button"
                    onClick={() => setHeroVisualMode('video')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1 ${
                      heroVisualMode === 'video'
                        ? 'bg-[#38162B] text-white shadow-sm border border-[#E2C288]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <Film className="w-3 h-3 text-[#E2C288]" />
                    <span>4K Reel</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroVisualMode('photo')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                      heroVisualMode === 'photo'
                        ? 'bg-[#38162B] text-white shadow-sm border border-[#E2C288]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <span>Photo</span>
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative bg-black">
                  {heroVisualMode === 'video' ? (
                    <>
                      <video
                        ref={heroVideoRef}
                        src={SPA_VIDEOS[0].videoUrl}
                        poster={SPA_VIDEOS[0].posterUrl}
                        autoPlay
                        loop
                        muted={heroMuted}
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                      {/* Sound Toggle Button */}
                      <button
                        type="button"
                        onClick={toggleHeroAudio}
                        className="absolute bottom-24 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer shadow-lg"
                        aria-label={heroMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {heroMuted ? (
                          <VolumeX className="w-4 h-4 text-amber-300" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-emerald-400" />
                        )}
                      </button>
                    </>
                  ) : (
                    <>
                      <FallbackImage
                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/6tBfZAW4uxS8gNOJ/dsc08258-50kb-07aNsE0Ln1GSTZ0Y.jpg"
                        alt="Spa Soul luxury massage suite interior"
                        fallbackTitle="Spa Soul Sanctuary"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    </>
                  )}

                  {/* Gradient Overlay with Clean Dark Glass Card */}
                  <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md border border-[#E8DFD1] rounded-2xl p-4 shadow-lg text-[#1F1424]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#8C6830] font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#8C6830] animate-pulse" />
                        {heroVisualMode === 'video' ? 'Cinematic Ambience Reel' : 'Private VIP Suite'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsVideoModalOpen(true)}
                        className="text-[11px] font-bold text-[#8C6830] hover:text-[#38162B] transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        Full Cinema <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-serif text-lg font-bold text-[#1F1424]">
                      Spa Soul Sanctuary
                    </p>
                    <p className="text-xs text-[#5C4863] mt-0.5 font-medium">
                      G-2,3 Safal Square · University Road · Vesu, Surat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Introduction & Wellness Philosophy (Bright & Editorial) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-[#E8DFD1]">
                  <FallbackImage
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/6tBfZAW4uxS8gNOJ/dsc08264-50kb-xkywwEX8g6q2RfQu.jpg"
                    alt="Spa Soul reception sanctuary lounge and herbal tea desk"
                    fallbackTitle="Sanctuary Welcome Lounge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl text-center shadow-2xs">
                  <p className="font-serif text-2xl font-bold text-[#1F1424]">All 7 Days</p>
                  <p className="text-xs text-[#8C6830] uppercase tracking-wider font-bold mt-0.5">10:00 AM – 9:30 PM</p>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="p-5 bg-[#38162B] text-white rounded-xl text-center shadow-md border border-[#B88E3E]/40">
                  <p className="font-serif text-2xl font-bold text-[#FAF8F5]">10</p>
                  <p className="text-xs text-[#E2C288] uppercase tracking-wider font-bold mt-0.5">Signature Therapies</p>
                </div>
                <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-[#E8DFD1]">
                  <FallbackImage
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/6tBfZAW4uxS8gNOJ/dsc08270-50kb-MwzN0z3iAl94SWJO.jpg"
                    alt="Serene spa hallway leading to private treatment suites"
                    fallbackTitle="Tranquil Private Suites"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Philosophy Prose with High Legibility */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold">
                  Our Philosophy
                </p>
                <h2
                  className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Honoring the Sacred Union of Body, Breath & Soul
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#3B2A40] leading-relaxed">
                At <strong className="text-[#1F1424] font-bold">Spa Soul</strong>, we view wellness not as an indulgence, but as an essential practice of somatic restoration. In our modern, high-speed lives, stress accumulates silently in muscles, fascia, and neural pathways.
              </p>

              <p className="text-sm sm:text-base text-[#3B2A40] leading-relaxed">
                Every massage stroke, steam inhalation, and cold-pressed botanical blend is chosen with intention. From our location at <strong className="text-[#1F1424] font-bold">G-2,3 Safal Square on University Road, Vesu (near i contrast Ice Cream – Depot)</strong>, our certified practitioners guide you through personalized sessions that alleviate chronic pain, renew vital energy, and restore restful sleep.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1F1424] hover:text-[#7D4971] uppercase tracking-wider transition-colors group"
                >
                  <span>Learn more about our heritage & standards</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#8C6830]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Cinematic Ambience & Video Reel Showcase */}
      <section className="py-20 bg-[#120B14] text-white border-y border-[#3B253E] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#38162B]/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#8C6830]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38162B] border border-[#E2C288]/50 text-[#E2C288] text-xs font-bold uppercase tracking-widest shadow-sm">
              <Film className="w-3.5 h-3.5 text-[#E2C288]" />
              <span>Cinematic Ambience Reel · 4K UHD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
              Experience the Sanctuary in Motion
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
              From unhurried restorative touch rituals to soothing candlelit suites, immerse yourself in our video reels filmed at Spa Soul Surat.
            </p>
          </div>

          <VideoShowcase autoPlayMuted={false} />
        </div>
      </section>

      {/* 3. Featured Spa Treatments (Bright, High-Contrast Filter) */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#E8DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
                Handcrafted Rituals
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
                Curated Spa Treatments
              </h2>
            </div>

            {/* Interactive Filter Control Tabs with Crisp Active States */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E8DFD1] rounded-lg overflow-x-auto max-w-full shadow-2xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#38162B] text-white shadow-xs'
                      : 'text-[#3E2B43] hover:text-[#1F1424] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#E8DFD1] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Image Container with Price Badge */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <FallbackImage
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fallbackTitle={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#38162B] text-white text-xs font-mono font-bold px-3 py-1 rounded-md shadow-sm border border-[#B88E3E]/40">
                    From {service.pricePlaceholder}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow justify-between">
                  <div className="space-y-2">
                    {/* Clean unboxed metadata with separators (Zero-Pill discipline) */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6830]">
                      <span>{service.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.durationMinutes.join(' / ')} mins</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#1F1424] group-hover:text-[#7D4971] transition-colors">
                      <Link to={`/services/${service.slug}`}>{service.name}</Link>
                    </h3>

                    <p className="text-xs text-[#3B2A40] line-clamp-2 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-bold text-[#1F1424] hover:text-[#7D4971] transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/book?treatment=${encodeURIComponent(service.name)}`}
                      className="px-4 py-2 rounded-md bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#522144] transition-colors shadow-2xs"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-white border-2 border-[#1F1424] text-[#1F1424] text-xs font-bold uppercase tracking-wider hover:bg-[#1F1424] hover:text-white transition-all shadow-xs"
            >
              Browse All 10 Treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Signature Experience Spotlight: Couple Spa Sanctuary (Bright & Elegant) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FAF6EE] to-[#F5ECE1] border border-[#E2C288]/60 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8C6830] bg-white px-3 py-1 rounded-full border border-[#E2C288]/50 shadow-2xs">
                  <Heart className="w-3.5 h-3.5 text-[#8C6830]" />
                  <span>Specialty Sanctuary</span>
                </div>

                <h2
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1F1424]"
                  style={{ textWrap: 'balance' }}
                >
                  The Royal Couple Spa Sanctuary
                </h2>

                <p className="text-sm sm:text-base text-[#3B2A40] leading-relaxed">
                  Step into an expansive private sanctuary designed for shared restoration. Featuring side-by-side plush massage tables, soft ambient candlelight, soothing rose water foot soaks, and dual synchronized therapists dedicated entirely to your comfort.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#38162B] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-[#2B1B30] font-medium">
                      Synchronized 90 or 120-minute customized massage therapy
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#38162B] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-[#2B1B30] font-medium">
                      Private couple dressing lounge and en-suite rainfall shower
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#38162B] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-[#2B1B30] font-medium">
                      Complimentary herbal tea pairing and artisan refreshment service
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    to="/services/couple-spa-experience"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#38162B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#522144] transition-colors text-center shadow-md"
                  >
                    Explore Couple Experience
                  </Link>
                  <Link
                    to="/book?treatment=Couple%20Spa%20Experience"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-white border-2 border-[#38162B] text-[#1F1424] text-xs font-bold uppercase tracking-widest hover:bg-[#FAF8F5] transition-colors text-center"
                  >
                    Book Private Suite
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-[#E8DFD1] bg-white p-2">
                  <FallbackImage
                    src="/assets/spasoul/service_7.jpg"
                    alt="Couple spa private suite at Spa Soul"
                    fallbackTitle="Royal Couple Suite"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Spa Soul (Bright 4-Column Strip) */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#E8DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
              The Spa Soul Standard
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
              Why Guests Return to Spa Soul
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-7 rounded-xl border border-[#E8DFD1] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                <ShieldCheck className="w-5 h-5 text-[#8C6830]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F1424]">Hospital-Grade Hygiene</h3>
              <p className="text-xs text-[#3B2A40] leading-relaxed">
                Sterilized implements, disposable personal items, and freshly sanitized therapy suites for every appointment.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-[#E8DFD1] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                <Heart className="w-5 h-5 text-[#8C6830]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F1424]">Certified Therapists</h3>
              <p className="text-xs text-[#3B2A40] leading-relaxed">
                Skilled practitioners trained in traditional Scandinavian, Thai Nuad Boran, and deep myofascial techniques.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-[#E8DFD1] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                <Droplets className="w-5 h-5 text-[#8C6830]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F1424]">Cold-Pressed Oils</h3>
              <p className="text-xs text-[#3B2A40] leading-relaxed">
                Pure sweet almond, jojoba, and steam-distilled botanical essences free from synthetic perfumes and mineral oils.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-[#E8DFD1] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF5ED] border border-[#E2C288] flex items-center justify-center text-[#8C6830]">
                <MapPin className="w-5 h-5 text-[#8C6830]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1F1424]">Prime Vesu Location</h3>
              <p className="text-xs text-[#3B2A40] leading-relaxed">
                G-2,3 Safal Square, University Road, Vesu, Surat (near i contrast Ice Cream – Depot), with easy accessibility and dedicated parking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Curated Packages Preview (Bright Luxury Cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
              Holistic Programs
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
              Signature Spa Packages
            </h2>
            <p className="text-sm text-[#3B2A40] mt-3 font-normal">
              Multi-therapy rituals carefully structured for comprehensive bodily restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SPA_PACKAGES.slice(0, 2).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border-2 border-[#E8DFD1] hover:border-[#C29B4F] rounded-2xl p-8 shadow-xs flex flex-col justify-between transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#8C6830] font-bold uppercase tracking-wider">
                      {pkg.durationMinutes} Minutes Ritual
                    </span>
                    <span className="font-mono text-xl font-bold text-[#1F1424]">
                      {pkg.pricePlaceholder}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1F1424]">{pkg.name}</h3>
                  <p className="text-xs text-[#3B2A40] leading-relaxed font-normal">{pkg.description}</p>

                  <div className="pt-2">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#1F1424] mb-2">
                      Included in this ritual:
                    </p>
                    <ul className="space-y-2 text-xs text-[#3B2A40]">
                      {pkg.includedTreatments.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C29B4F]" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#F2ECE1] flex items-center justify-between">
                  <span className="text-xs text-[#5C4863] font-medium">{pkg.idealFor}</span>
                  <Link
                    to={`/book?treatment=${encodeURIComponent(pkg.name)}`}
                    className="px-5 py-2.5 rounded-md bg-[#38162B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#522144] transition-colors shadow-2xs"
                  >
                    Reserve Ritual
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1F1424] hover:text-[#7D4971] transition-colors"
            >
              View All Spa Packages & Pricing <ArrowRight className="w-3.5 h-3.5 text-[#8C6830]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Spa Ambience Gallery Preview */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#E8DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
                Atmosphere & Spaces
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
                A Glimpse into Spa Soul
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-xs font-bold text-[#1F1424] hover:text-[#7D4971] transition-colors inline-flex items-center gap-1"
            >
              View Full Gallery <ArrowRight className="w-3.5 h-3.5 text-[#8C6830]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured Video Card */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-md bg-[#180E1C] border-2 border-[#E2C288] cursor-pointer"
            >
              <img
                src={SPA_VIDEOS[0].posterUrl}
                alt="Spa Soul cinematic film"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#38162B]/90 border-2 border-[#E2C288] text-[#E2C288] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-[#38162B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#E2C288]/40 shadow-xs">
                4K Ambience Reel
              </div>
              <div className="absolute inset-x-2 bottom-2 bg-black/80 backdrop-blur-md rounded-xl p-3 text-white border border-white/10 shadow-sm">
                <p className="text-[10px] uppercase tracking-widest text-[#E2C288] font-bold">
                  Ambient Sanctuary Film
                </p>
                <p className="font-serif text-sm font-bold mt-0.5">Watch Video in 4K</p>
              </div>
            </div>

            {/* Real Interior & Suite Photos */}
            {SPA_GALLERY.filter((item) => ['gal-real-1', 'gal-real-2', 'gal-real-7'].includes(item.id)).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xs bg-white border border-[#E8DFD1]"
              >
                <FallbackImage
                  src={item.imageUrl}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-2 bottom-2 bg-white/95 backdrop-blur-md rounded-xl p-3 text-[#1F1424] border border-[#E8DFD1] shadow-sm">
                  <p className="text-[10px] uppercase tracking-widest text-[#8C6830] font-bold">
                    {item.category}
                  </p>
                  <p className="font-serif text-sm font-bold mt-0.5 line-clamp-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Online Reservation Desk Section (Bright, Clean Container) */}
      <section id="book-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-3">
            <img
              src="/assets/aistudio/image_7dcfa224.png"
              alt="Spa Soul"
              className="h-12 w-auto object-contain mx-auto"
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
            Online Reservation Desk
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#1F1424]" style={{ textWrap: 'balance' }}>
            Book Your Spa Soul Experience
          </h2>
          <p className="text-sm text-[#3B2A40] max-w-lg mx-auto mb-10 leading-relaxed font-normal">
            Select your preferred treatment, date, and time. Our concierge will review room availability and contact you on your mobile number to confirm your reservation.
          </p>

          <div className="bg-[#FAF7F2] text-[#1F1424] rounded-2xl p-6 sm:p-10 shadow-lg text-left border border-[#E8DFD1]">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* 9. Clearly Labelled Sample Testimonials (Bright Cards) */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#E8DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-4 py-1.5 bg-white border border-[#E2C288] rounded-full mb-3 text-xs font-bold uppercase tracking-wider text-[#8C6830]">
              Sample Guest Feedback
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
              Words from Our Guests
            </h2>
            <p className="text-xs text-[#5C4863] mt-2 font-medium">
              (Sample guest reviews illustrating the Spa Soul client experience until official review links are synchronized)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAMPLE_TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-[#E8DFD1] rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C29B4F] mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C29B4F]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#3B2A40] leading-relaxed italic mb-4 font-normal">
                    "{review.reviewText}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE1]">
                  <p className="font-serif font-bold text-base text-[#1F1424]">{review.clientName}</p>
                  <div className="flex items-center justify-between text-xs text-[#5C4863] mt-0.5">
                    <span>{review.clientLocation}</span>
                    <span className="text-[#8C6830] font-bold">{review.serviceTaken}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (Bright White Cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#8C6830] font-bold mb-2">
              Common Inquiries
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1424] font-bold" style={{ textWrap: 'balance' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {SPA_FAQS.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className="bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-6 shadow-2xs space-y-2"
              >
                <h3 className="font-serif text-lg font-bold text-[#1F1424]">{faq.question}</h3>
                <p className="text-xs text-[#3B2A40] leading-relaxed font-normal">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1F1424] hover:text-[#7D4971] transition-colors"
            >
              Read All Questions & Spa Etiquette <ArrowRight className="w-3.5 h-3.5 text-[#8C6830]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Location, Address & Google Maps */}
      <GoogleMapSection />

      {/* Cinematic 4K Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        video={SPA_VIDEOS[0]}
      />
    </div>
  );
};
