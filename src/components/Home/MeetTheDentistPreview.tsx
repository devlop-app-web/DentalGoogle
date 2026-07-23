import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, ChevronRight, Play, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { ClinicTourModal } from './ClinicTourModal';

interface MeetTheDentistPreviewProps {
  onOpenBooking: () => void;
  onOpenClinicTour?: () => void;
}

export const MeetTheDentistPreview: React.FC<MeetTheDentistPreviewProps> = ({ onOpenBooking, onOpenClinicTour }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const handleTourClick = () => {
    if (onOpenClinicTour) {
      onOpenClinicTour();
    } else {
      setIsTourOpen(true);
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Doctor Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Main Portrait Card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#2B4748] via-[#243E3F] to-[#1D3334] relative group">
                <img
                  src="/assets/CEO BG.png"
                  alt="Dr. Sheekha Shah Lead Dental Surgeon"
                  className="w-full h-[480px] sm:h-[520px] object-contain object-bottom pt-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">Founder & Lead Director</span>
                  <h3 className="text-2xl font-extrabold font-heading text-white">Dr. Sheekha Shah</h3>
                  <p className="text-xs text-slate-200 mt-1">BDS, MDS • Fellow, AACD USA (Cosmetic & Implantology)</p>
                </div>
              </div>

              {/* Doctor Secondary Thumbnail Badge */}
              <div className="absolute -top-5 -left-5 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 flex items-center space-x-3 hidden sm:flex">
                <img
                  src="/assets/CEO2.png"
                  alt="Dr. Sheekha Shah Thumbnail"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0B4F6C]"
                />
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">AACD Accredited Fellow</span>
                  <span className="text-[10px] text-[#0B4F6C] font-extrabold">Top 1% Aesthetic Specialist</span>
                </div>
              </div>

              {/* Virtual Clinic Tour Button */}
              <button
                onClick={handleTourClick}
                className="absolute top-5 right-5 bg-white/95 backdrop-blur-md hover:bg-white text-slate-900 font-extrabold text-xs px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center space-x-2 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 text-[#0B4F6C] fill-[#0B4F6C]" />
                <span>Virtual Clinic Tour</span>
              </button>

            </div>
          </div>

          {/* Right Column: Information */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-white border border-cyan-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>Meet The Lead Specialist</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Gentle, Science-Backed Dentistry By Experienced Masters
            </h2>

            {/* Doctor Philosophy Quote */}
            <div className="bg-white border-l-4 border-[#0B4F6C] p-5 rounded-r-2xl shadow-2xs italic text-slate-700 text-sm sm:text-base leading-relaxed">
              "My mission is to create healthy, radiant smiles in a peaceful environment where fear is completely replaced by comfort, empathy, and advanced technology."
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dr. Sheekha Shah brings over 16 years of clinical excellence in cosmetic smile redesign, microscopic root canal therapy, and implantology. Having completed advanced fellowships in the USA and Europe, she combines biological preservation with state-of-the-art digital aesthetics.
            </p>

            {/* Qualifications & Experience Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
                <span className="text-[11px] font-extrabold text-[#0B4F6C] uppercase tracking-wider block">Qualifications</span>
                <p className="text-xs font-bold text-slate-800">BDS, MDS (Endodontics & Restorative)</p>
                <p className="text-[11px] font-medium text-slate-500">Fellowship in AACD Cosmetic Dentistry (USA)</p>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-1">
                <span className="text-[11px] font-extrabold text-[#0B4F6C] uppercase tracking-wider block">Clinical Experience</span>
                <p className="text-xs font-bold text-slate-800">16+ Years Active Practice</p>
                <p className="text-[11px] font-medium text-slate-500">12,500+ Successful Smile Transformations</p>
              </div>
            </div>

            {/* Doctor Image Thumbnails Gallery */}
            <div className="pt-2 flex items-center space-x-3">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Clinical Gallery:</span>
              <div className="flex items-center space-x-2">
                <img src="/assets/CEO BG.png" alt="Dr. Sheekha BG" className="w-10 h-10 rounded-xl object-cover border border-slate-300 shadow-2xs" />
                <img src="/assets/CEO.jpeg" alt="Dr. Sheekha Clinical" className="w-10 h-10 rounded-xl object-cover border border-slate-300 shadow-2xs" />
                <img src="/assets/CEO2.png" alt="Dr. Sheekha Portrait" className="w-10 h-10 rounded-xl object-cover border border-slate-300 shadow-2xs" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                id="meet-dentist-book-btn"
                className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book Consultation With Dr. Shah</span>
              </button>

              <button
                onClick={() => setShowProfileModal(true)}
                id="meet-dentist-profile-btn"
                className="bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-center space-x-1.5"
              >
                <span>Read Full Profile</span>
                <ChevronRight className="w-4 h-4 text-[#0B4F6C]" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Full Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowProfileModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-4">
                <img src="/assets/CEO2.png" alt="Dr. Sheekha Shah" className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0B4F6C]" />
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">Dr. Sheekha Shah</h3>
                  <p className="text-xs font-bold text-[#0B4F6C]">Founder & Chief Dental Officer • BDS, MDS</p>
                  <p className="text-[11px] text-slate-500">Fellow, American Academy of Cosmetic Dentistry (AACD)</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Clinical Philosophy</h4>
                <p>
                  Dr. Sheekha Shah completed her Master of Dental Surgery with honors and subsequently pursued international fellowships in advanced smile design and microscopic endodontics. She believes in zero-pain dentistry, biological tooth structure preservation, and meticulous aesthetic alignment.
                </p>

                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider pt-2">Specialized Expertise</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                  <li>Digital Smile Design (DSD) & Porcelain Veneer Artistry</li>
                  <li>Microscopic Single-Visit Root Canal Therapy</li>
                  <li>Guided Swiss & German Dental Implant Surgery</li>
                  <li>Invisalign® & Clear Aligner Orthodontics</li>
                  <li>Laser Gum Contouring & Aesthetic Reconstruction</li>
                </ul>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setShowProfileModal(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold py-3.5 rounded-xl shadow text-xs sm:text-sm flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-cyan-300" />
                  <span>Book Consultation With Dr. Sheekha Shah</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isTourOpen && <ClinicTourModal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />}
    </section>
  );
};
