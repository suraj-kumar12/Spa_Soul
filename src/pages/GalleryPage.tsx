import React, { useState } from 'react';
import { X, Sparkles, ZoomIn, Play, Film, MessageSquare, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { SPA_GALLERY } from '../data/gallery';
import { GalleryItem } from '../types';
import { FallbackImage } from '../components/FallbackImage';
import { VideoShowcase } from '../components/VideoShowcase';
import { BUSINESS_INFO } from '../data/business';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Videos & Reels',
    'Treatment Suites',
    'Ambience',
    'Therapies',
    'Couple Suites',
    'Botanicals & Oils',
  ];

  const filteredGallery =
    activeCategory === 'All'
      ? SPA_GALLERY
      : SPA_GALLERY.filter((item) => item.category === activeCategory);

  const handleWhatsAppBooking = (title: string) => {
    const text = encodeURIComponent(
      `Hello Spa Soul, I am looking at "${title}" in your gallery and would like to check availability for an appointment in Surat.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${text}`, '_blank');
  };

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
            Sanctuary Atmosphere & Reels
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1F1424]" style={{ textWrap: 'balance' }}>
            The Spa Soul Visual Gallery
          </h1>
          <p className="text-base text-[#3B2A40] mt-3 leading-relaxed font-normal">
            Immerse yourself in our private therapy suites, authentic video reels, tranquil lounges, and pure botanical elements at Safal Square, Vesu, Surat.
          </p>
        </div>
      </section>

      {/* Featured Video Ambience Reel Section */}
      <section className="py-12 bg-[#FAF7F2] border-b border-[#E8DFD1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38162B]/5 border border-[#E2C288] text-[#8C6830] text-xs font-bold uppercase tracking-wider mb-2">
              <Film className="w-3.5 h-3.5 text-[#8C6830]" />
              <span>Cinematic Experience</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1424]">
              Watch the Ambience & Therapy Reel
            </h2>
            <p className="text-xs sm:text-sm text-[#5C4863] mt-2">
              Experience the gentle sensory lighting, therapeutic hot stones, and calm acoustics before your visit.
            </p>
          </div>

          <VideoShowcase className="max-w-5xl mx-auto" autoPlayMuted={false} />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-[#E8DFD1] sticky top-[65px] z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F2] border border-[#E8DFD1] rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-md whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? 'bg-[#38162B] text-white shadow-xs'
                    : 'text-[#3E2B43] hover:text-[#1F1424] hover:bg-white'
                }`}
              >
                {cat === 'Videos & Reels' && <Film className="w-3 h-3 text-[#E2C288]" />}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`bg-white border-2 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer group flex flex-col ${
                  item.isVideo
                    ? 'border-[#C29B4F] ring-1 ring-[#C29B4F]/30 hover:ring-[#C29B4F]'
                    : 'border-[#E8DFD1] hover:border-[#C29B4F]'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-[#1F1424]">
                  <FallbackImage
                    src={item.imageUrl}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark gradient for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Hover or Video indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.isVideo ? (
                      <div className="w-14 h-14 rounded-full bg-[#38162B]/90 border-2 border-[#E2C288] text-[#E2C288] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-white/90 text-[#1F1424] flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-5 h-5 text-[#8C6830]" />
                      </div>
                    )}
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-[#38162B] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-md shadow-xs border border-[#E2C288]/40">
                      {item.category}
                    </span>
                    {item.isVideo && item.duration && (
                      <span className="bg-black/70 backdrop-blur-xs text-[#E2C288] text-[10px] font-mono font-bold px-2 py-1 rounded-md border border-white/20">
                        {item.duration}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-2 flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1F1424] group-hover:text-[#7D4971] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#3B2A40] leading-relaxed font-normal mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F2ECE1] flex items-center justify-between text-xs">
                    <span className="text-[#8C6830] font-bold inline-flex items-center gap-1">
                      {item.isVideo ? 'Watch Video' : 'View High-Res'} <ArrowRight className="w-3 h-3" />
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppBooking(item.title);
                      }}
                      className="text-[#075E54] hover:text-[#25D366] font-semibold inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" /> Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Video Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1F1424]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-[#1C1220] text-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border-2 border-[#E2C288]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-6 py-4 bg-[#28182E] border-b border-white/10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#E2C288] font-bold">
                {activeItem.category} {activeItem.isVideo && '· 4K Reel'}
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Box */}
            <div className="relative aspect-[16/10] bg-black flex items-center justify-center">
              {activeItem.isVideo && activeItem.videoUrl ? (
                <video
                  src={activeItem.videoUrl}
                  poster={activeItem.imageUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <FallbackImage
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  fallbackTitle={activeItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 bg-[#1C1220] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-normal">
                  {activeItem.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleWhatsAppBooking(activeItem.title)}
                  className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve This Suite / Therapy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
