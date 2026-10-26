import React, { useEffect, useRef, useState } from 'react';
import { X, Volume2, VolumeX, Play, Pause, Sparkles, MessageSquare } from 'lucide-react';
import { SpaVideo } from '../data/media';
import { BUSINESS_INFO } from '../data/business';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: SpaVideo;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [isOpen, video]);

  if (!isOpen) return null;

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

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Spa Soul, I watched your video "${video.title}" and would like to book a luxury session in Surat.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#180E1C] border-2 border-[#E2C288]/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#231427] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E2C288]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2C288]">
              {video.subtitle} · {video.badge}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.posterUrl}
            playsInline
            controls
            autoPlay
            muted={isMuted}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Details & CTAs */}
        <div className="p-6 bg-[#180E1C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif text-xl font-bold text-white">
              {video.title}
            </h4>
            <p className="text-xs text-white/70 max-w-lg">
              {video.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book This Experience</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
