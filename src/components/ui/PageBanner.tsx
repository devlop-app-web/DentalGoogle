import React from 'react';
import clinicImg from '@/public/assets/Image/Clinic.jpeg';

export interface PageBannerProps {
  title: string;
  badge?: string;
  subtitle: string;
  breadcrumb?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="relative w-full h-[180px] sm:h-[200px] md:h-[240px] flex items-center justify-center overflow-hidden bg-slate-900 text-center">
      {/* Background Image */}
      <img
        src={clinicImg}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Premium Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(8,25,35,0.55), rgba(8,25,35,0.75))',
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
          {title}
        </h1>

        {/* Short Page Description */}
        <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal max-w-2xl line-clamp-2 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
