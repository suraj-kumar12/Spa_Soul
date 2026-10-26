import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { SPA_VIDEOS, SpaVideo } from '../data/media';
import { BUSINESS_INFO } from '../data/business';

interface VideoShowcaseProps {
  className?: string;
  autoPlayMuted?: boolean;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ className = '', autoPlayMuted = true }) => {
  const [selectedVideo, setSelectedVideo] = useState<SpaVideo>(SPA_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (autoPlayMuted) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [selectedVideo, autoPlayMuted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Spa Soul, I watched the "${selectedVideo.title}" film on your website and would like to inquire about booking a similar session at Safal Square, Vesu, Surat.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className={`relative ${className}`}>
      {/* Video Container Card */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8DFD1] bg-[#120B14] shadow-2xl">
        {/* Aspect Ratio Video Box */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={selectedVideo.videoUrl}
            poster={selectedVideo.posterUrl}
            playsInline
            loop
            muted={isMuted}
            autoPlay={autoPlayMuted}
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Vignette Overlay for cinematic contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

          {/* Top Bar with Live Indicator & Badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#E2C288]/40 text-[#E2C288] text-[11px] font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#E2C288] animate-pulse" />
                {selectedVideo.badge}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                4K Ultra HD
              </span>
            </div>

            {/* Quick Mute Indicator Badge */}
            <button
              type="button"
              onClick={toggleMute}
              className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold transition-all cursor-pointer shadow-md"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Tap to Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Audio Playing</span>
                </>
              )}
            </button>
          </div>

          {/* Center Play Button Overlay (when paused) */}
          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#38162B]/90 hover:bg-[#522144] border-2 border-[#E2C288] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer z-10"
              aria-label="Play Video"
            >
              <Play className="w-8 h-8 fill-current text-[#E2C288] ml-1" />
            </button>
          )}

          {/* Bottom Video Controls & Info Bar */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
            {/* Left: Titles & Tags */}
            <div className="space-y-1.5 max-w-xl">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#E2C288]">
                {selectedVideo.subtitle}
              </p>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-md">
                {selectedVideo.title}
              </h3>
              <p className="text-xs text-white/80 line-clamp-2 max-w-lg hidden sm:block">
                {selectedVideo.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedVideo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-white/90 bg-white/10 backdrop-blur-xs px-2 py-0.5 rounded border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Interactive Action Buttons */}
            <div className="flex items-center gap-2 pointer-events-auto">
              {/* Play/Pause Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              {/* Sound Toggle */}
              <button
                type="button"
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
              </button>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={handleFullscreen}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* WhatsApp Reserve CTA */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg active:scale-95 cursor-pointer ml-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Reserve on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Selector Reel Bar */}
        <div className="bg-[#1C1220] border-t border-[#3B253E] p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E2C288]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#E2C288]">
                Select Video Experience
              </span>
            </div>

            {/* Thumbnail Switcher Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 grow max-w-2xl">
              {SPA_VIDEOS.map((vid) => {
                const isActive = selectedVideo.id === vid.id;
                return (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => {
                      setSelectedVideo(vid);
                      setIsPlaying(true);
                    }}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#38162B] border-[#E2C288] text-white shadow-md ring-1 ring-[#E2C288]/50'
                        : 'bg-black/40 border-white/10 text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 relative border border-white/20">
                      <img
                        src={vid.posterUrl}
                        alt={vid.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 text-white fill-current opacity-80" />
                      </div>
                    </div>
                    <div className="min-w-0 grow">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#E2C288]">
                        {vid.badge} · {vid.duration}
                      </p>
                      <p className="text-xs font-semibold text-white truncate">
                        {vid.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
