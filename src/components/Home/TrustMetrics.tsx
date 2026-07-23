import React from 'react';
import { Award, ShieldCheck, Smile, Star, Users, CheckCircle } from 'lucide-react';
import { METRICS } from '../../data/homeData';

export const TrustMetrics: React.FC = () => {
  return (
    <section className="bg-white py-10 border-y border-slate-200/80 shadow-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accreditation Logos & Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          <div className="pt-4 md:pt-0 px-2 space-y-1">
            <div className="flex items-center justify-center space-x-2 text-[#0F6CBD]">
              <Users className="w-5 h-5 text-[#24BEC8]" />
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-800 tracking-tight">
                12,500+
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">Happy Patients Restored</p>
          </div>

          <div className="pt-4 md:pt-0 px-2 space-y-1">
            <div className="flex items-center justify-center space-x-2 text-[#0F6CBD]">
              <Award className="w-5 h-5 text-[#24BEC8]" />
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-800 tracking-tight">
                16+ Years
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">Clinical Excellence</p>
          </div>

          <div className="pt-4 md:pt-0 px-2 space-y-1">
            <div className="flex items-center justify-center space-x-2 text-[#0F6CBD]">
              <ShieldCheck className="w-5 h-5 text-[#00A99D]" />
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-800 tracking-tight">
                99.8%
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">Procedure Success Rate</p>
          </div>

          <div className="pt-4 md:pt-0 px-2 space-y-1">
            <div className="flex items-center justify-center space-x-1.5 text-amber-400">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-800 tracking-tight">
                4.9 / 5.0
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">Google Verified Reviews</p>
          </div>

        </div>

        {/* Partner / Certification Row */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-400 text-xs font-bold uppercase tracking-wider">
          <span className="flex items-center space-x-1.5 text-slate-600">
            <CheckCircle className="w-4 h-4 text-[#0F6CBD]" />
            <span>ADA Accredited Clinic</span>
          </span>
          <span className="flex items-center space-x-1.5 text-slate-600">
            <CheckCircle className="w-4 h-4 text-[#0F6CBD]" />
            <span>AACD Fellow Specialists</span>
          </span>
          <span className="flex items-center space-x-1.5 text-slate-600">
            <CheckCircle className="w-4 h-4 text-[#0F6CBD]" />
            <span>Diamond Invisalign Provider</span>
          </span>
          <span className="flex items-center space-x-1.5 text-slate-600">
            <CheckCircle className="w-4 h-4 text-[#0F6CBD]" />
            <span>ISO 9001 Hygiene Certified</span>
          </span>
        </div>

      </div>
    </section>
  );
};
