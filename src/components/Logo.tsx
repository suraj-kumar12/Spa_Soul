import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  // Height classes calibrated to maintain the logo's natural wide aspect ratio (~3.3:1)
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  return (
    <Link
      to="/"
      className={`inline-flex flex-col items-start group transition-transform duration-200 hover:scale-[1.01] whitespace-nowrap shrink-0 ${className}`}
      aria-label="Spa Soul Home"
    >
      <img
        src="/assets/aistudio/image_7dcfa224.png"
        alt="Spa Soul Luxury Spa & Wellness Sanctuary"
        className={`${heightClasses[size]} w-auto object-contain drop-shadow-2xs`}
        loading="eager"
      />
      {showTagline && (
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold text-[#8C6830] pl-1 mt-0.5">
          Luxury Wellness Sanctuary · Surat
        </span>
      )}
    </Link>
  );
};
