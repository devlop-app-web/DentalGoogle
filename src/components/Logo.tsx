import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  lightText?: boolean;
  inlineText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 42,
  showText = true,
  lightText = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Uploaded Logo Image */}
      <img 
        src="/assets/Logo2.png" 
        alt="Dr. Sheekha Shah DENTAL STUDIO Logo"
        className="flex-shrink-0 object-contain rounded-full shadow-xs"
        style={{ width: size, height: size }}
      />

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-extrabold text-base md:text-lg tracking-tight ${lightText ? 'text-white' : 'text-slate-900'}`}>
            Dr. Sheekha Shah
          </span>
          <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase ${lightText ? 'text-cyan-200' : 'text-[#0B4F6C]'}`}>
            DENTAL STUDIO
          </span>
        </div>
      )}
    </div>
  );
};
