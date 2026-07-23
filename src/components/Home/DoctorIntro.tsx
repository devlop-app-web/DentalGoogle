import React, { useState } from 'react';
import { Award, GraduationCap, Heart, ShieldCheck, Sparkles, Video, Play, Calendar, CheckCircle } from 'lucide-react';
import { DOCTORS } from '../../data/homeData';

interface DoctorIntroProps {
  onOpenBooking: () => void;
  onOpenClinicTour: () => void;
}

export const DoctorIntro: React.FC<DoctorIntroProps> = ({ onOpenBooking, onOpenClinicTour }) => {
  const leadDoctor = DOCTORS[0];
  const secondDoctor = DOCTORS[1];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Gentle background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Lead Doctor Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Doctor Portrait Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#2E4F4F] via-[#243F3F] to-[#1D3232] relative group">
                <img
                  src="/assets/CEO BG.png"
                  alt={leadDoctor.name}
                  className="w-full h-[520px] object-contain object-bottom pt-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">Founder & Studio Director</span>
                  <h3 className="text-2xl font-extrabold font-heading text-white">{leadDoctor.name}</h3>
                  <p className="text-xs text-slate-200 mt-1">{leadDoctor.credentials}</p>
                </div>
              </div>

              {/* Floating Award Emblem */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-800 block">AACD Accredited Fellow</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Top 1% Cosmetic Dentists</span>
                </div>
              </div>

              {/* Video Tour Trigger Overlay Button */}
              <button
                onClick={onOpenClinicTour}
                id="doctor-section-tour-btn"
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md hover:bg-white text-slate-800 font-bold text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center space-x-2 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 text-[#0F6CBD] fill-[#0F6CBD]" />
                <span>Virtual Clinic Tour</span>
              </button>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-3.5 py-1.5 text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#24BEC8]" />
              <span>Meet Our Specialists</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E293B] font-heading tracking-tight leading-tight">
              Gentle, Science-Backed Dentistry By Experienced Masters
            </h2>

            {/* Doctor Quote Card */}
            <div className="bg-slate-50 border-l-4 border-[#0F6CBD] p-5 rounded-r-2xl italic text-slate-700 text-sm sm:text-base leading-relaxed">
              "{leadDoctor.quote}"
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {leadDoctor.bio}
            </p>

            {/* Qualifications Bullet List */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Education & Clinical Credentials</span>
              <div className="space-y-2">
                {leadDoctor.education.map((edu, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <GraduationCap className="w-4 h-4 text-[#0F6CBD] shrink-0 mt-0.5" />
                    <span>{edu}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Specialist Teaser */}
            <div className="pt-4 border-t border-slate-100 flex items-center space-x-4 bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
              <img
                src={secondDoctor.imageUrl}
                alt={secondDoctor.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#24BEC8]"
              />
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-800 block">{secondDoctor.name}</span>
                <span className="text-[11px] text-[#0F6CBD] font-semibold block">{secondDoctor.role}</span>
                <span className="text-[11px] text-slate-500">{secondDoctor.credentials}</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="hidden sm:inline-flex text-xs font-bold text-[#0F6CBD] hover:underline"
              >
                Meet Dr. Chen →
              </button>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                id="about-book-doctor-btn"
                className="bg-[#0F6CBD] hover:bg-[#0B5598] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Schedule Consultation With Dr. Sheekha Shah</span>
              </button>

              <button
                onClick={onOpenClinicTour}
                id="about-clinic-sterilization-btn"
                className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm px-5 py-3.5 rounded-xl flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#00A99D]" />
                <span>Sterilization Standards</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
