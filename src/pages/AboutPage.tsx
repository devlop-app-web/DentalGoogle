import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Shield, Sparkles, Heart, GraduationCap, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO, DOCTORS } from '../data/homeData';

interface AboutPageProps {
  onOpenBooking: () => void;
  onOpenClinicTour: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onOpenClinicTour }) => {
  const leadDoctor = DOCTORS[0];
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0F6CBD]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">About Dr. Sheekha Shah & DENTAL STUDIO</span>
        </nav>

        {/* Doctor Spotlight Hero */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-12 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Founder & Master Implantologist
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              Dr. Sheekha Shah
            </h1>

            <p className="text-teal-200 font-semibold text-base sm:text-lg">
              {leadDoctor.credentials}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {leadDoctor.bio} With over 16 years of clinical excellence, Dr. Sheekha Shah has designed thousands of stunning, natural smiles utilizing digital micro-endodontics, 3D iTero® scans, and zero-pain techniques.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-3xl font-extrabold text-teal-300 block">16+</span>
                <span className="text-xs text-slate-300">Years Clinical Practice</span>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-3xl font-extrabold text-teal-300 block">10,000+</span>
                <span className="text-xs text-slate-300">Smiles Transformed</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#0F6CBD] hover:bg-[#0B5598] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book Consultation</span>
              </button>
              <button
                onClick={onOpenClinicTour}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                Virtual Clinic Tour
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-b from-[#2E4F4F] via-[#243F3F] to-[#1D3232] relative w-full max-w-md">
              <img 
                src="/assets/CEO BG.png" 
                alt="Dr. Sheekha Shah" 
                className="w-full h-[480px] object-contain object-bottom pt-4"
              />
            </div>
          </div>
        </div>

        {/* Doctor Education & Qualifications */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
          <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#0F6CBD]" />
            Academic Qualifications & Specialty Training
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadDoctor.education.map((edu, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{edu}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Clinic Environment Photo Gallery */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-xs font-bold text-[#0F6CBD] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Clinic Atmosphere
              </span>
              <h2 className="text-2xl font-bold font-heading text-slate-800 mt-2">
                Our State-of-the-Art Dental Studio
              </h2>
            </div>
            <button
              onClick={onOpenClinicTour}
              className="text-xs font-bold text-[#0F6CBD] hover:text-[#0B5598] bg-blue-50 px-4 py-2 rounded-xl border border-blue-100"
            >
              Explore Full Studio
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="h-48 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <img src="/assets/Entry.jpeg" alt="Studio Entrance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <img src="/assets/Waiting.jpeg" alt="Lounge Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <img src="/assets/Clinic.jpeg" alt="Operatory Suite 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <img src="/assets/Clinic 2.jpeg" alt="Operatory Suite 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="bg-gradient-to-br from-[#0F6CBD] to-[#0B5598] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">Book an Appointment with Dr. Sheekha Shah</h3>
            <p className="text-blue-100 text-sm">Experience personalized dental care engineered around your comfort.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-white text-[#0F6CBD] hover:bg-blue-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
};
