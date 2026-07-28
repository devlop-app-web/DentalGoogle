import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import clinicImg from '@/public/assets/Image/Clinic.jpeg';

export interface PageBannerProps {
  title: string;
  badge: string;
  subtitle: string;
  breadcrumb?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  badge,
  subtitle,
  breadcrumb = title,
}) => {
  return (
    <section className="relative w-full h-[220px] sm:h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden bg-slate-900 text-center">
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
        {/* Top: Rounded Breadcrumb Pill */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-medium text-white shadow-2xs">
          <Link to="/" className="inline-flex items-center space-x-1.5 hover:text-teal-300 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/60" />
          <span className="text-teal-200 font-semibold">{breadcrumb}</span>
        </div>

        {/* Middle: Small Section Badge */}
        <div className="inline-block text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-teal-300 bg-teal-950/70 border border-teal-500/30 px-3 py-1 rounded-md shadow-2xs">
          {badge}
        </div>

        {/* Below Badge: Large Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
          {title}
        </h1>

        {/* Below Title: Short Page Description */}
        <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal max-w-2xl line-clamp-2 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
