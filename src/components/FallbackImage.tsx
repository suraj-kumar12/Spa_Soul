import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  aspectRatio = 'auto',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F4ECE0] to-[#FAF7F2] text-[#8C6830] border border-[#E8DFD1] ${className}`}
        style={aspectRatio !== 'auto' ? { aspectRatio } : undefined}
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8C6830_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="w-12 h-12 rounded-full border border-[#C29B4F] flex items-center justify-center mb-3 bg-white shadow-2xs">
          <Sparkles className="w-5 h-5 text-[#8C6830]" />
        </div>
        
        <p className="font-serif text-lg tracking-wide text-[#1F1424] relative z-10 font-bold">
          {fallbackTitle || alt || 'Spa Soul Sanctuary'}
        </p>
        <p className="text-xs text-[#8C6830] mt-1 uppercase tracking-widest font-sans font-bold">
          Serenity & Equilibrium
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#FAF7F2] animate-pulse flex items-center justify-center text-[#5C4863]">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8C6830]">Loading Sanctuary...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
    </div>
  );
};
