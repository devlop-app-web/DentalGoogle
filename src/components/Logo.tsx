import React from 'react';
import logoImg from '@/Logo2.png';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 52,
  showText = true,
  lightText = false,
}) => {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Official Uploaded Logo Image */}
      <img
        src={logoImg}
        alt="Dr. Sheekha Shah DENTAL STUDIO Logo"
        className="flex-shrink-0 object-contain w-auto transition-transform duration-300 group-hover:scale-105"
        style={{
          height: `${size}px`,
          maxHeight: '60px',
          aspectRatio: '1/1'
        }}
        loading="eager"
      />

      {showText && (
        <div className="flex flex-col leading-tight select-none">
          <span className={`font-extrabold text-base sm:text-lg md:text-xl tracking-tight ${lightText ? 'text-white' : 'text-slate-900'}`}>
            Dr. Sheekha Shah
          </span>
          <span className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase ${lightText ? 'text-teal-200' : 'text-[#2E5B5B]'}`}>
            DENTAL STUDIO
          </span>
        </div>
      )}
    </div>
  );
};

