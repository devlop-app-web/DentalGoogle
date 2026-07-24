import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, ChevronRight, Play, ShieldCheck, Heart, Sparkles, Eye, X, ChevronLeft } from 'lucide-react';
import ceoBgImg from '@/public/assets/Image/CEO BG.png';
import ceoJpegImg from '@/public/assets/Image/CEO.jpeg';
import ceo2Img from '@/public/assets/Image/CEO2.png';
import clinicImg from '@/public/assets/Image/Clinic.jpeg';
import clinic2Img from '@/public/assets/Image/Clinic 2.jpeg';
import entryImg from '@/public/assets/Image/Entry.jpeg';
import waitingImg from '@/public/assets/Image/Waiting.jpeg';
import waiting2Img from '@/public/assets/Image/Waiting 2.jpeg';
import { ClinicTourModal } from './ClinicTourModal';

interface MeetTheDentistPreviewProps {
  onOpenBooking: () => void;
  onOpenClinicTour?: () => void;
}

interface GalleryImage {
  src: string;
  title: string;
  category: string;
  desc: string;
}

export const MeetTheDentistPreview: React.FC<MeetTheDentistPreviewProps> = ({ onOpenBooking, onOpenClinicTour }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleTourClick = () => {
    if (onOpenClinicTour) {
      onOpenClinicTour();
    } else {
      setIsTourOpen(true);
    }
  };

  const clinicPhotos: GalleryImage[] = [
    {
      src: entryImg,
      title: "Clinic Entrance & Foyer",
      category: "Reception",
      desc: "Welcoming luxury entry area designed for patient relaxation and comfort."
    },
    {
      src: clinicImg,
      title: "Treatment Room 1",
      category: "Operatory",
      desc: "State-of-the-art dental suite with ergonomic chairs and 3D digital scanners."
    },
    {
      src: clinic2Img,
      title: "Modern Operatory Suite 2",
      category: "Surgical Suite",
      desc: "Hospital-grade sterile surgical room for computer-guided implantology."
    },
    {
      src: waitingImg,
      title: "Patient Waiting Lounge",
      category: "Lounge",
      desc: "Peaceful, serene waiting environment equipped with modern amenities."
    },
    {
      src: waiting2Img,
      title: "Consultation & Diagnostics",
      category: "Consultation",
      desc: "Private room for digital smile simulations and transparent treatment plans."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">

          {/* Left Column: Doctor Photo & Real Clinic Photo Cards */}
          <div className="lg:col-span-5 relative space-y-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Doctor Main Portrait Card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#2B4748] via-[#243E3F] to-[#1D3334] relative group">
                <img
                  src={ceoBgImg}
                  alt="Dr. Sheekha Shah DENTAL STUDIO Background"
                  className="w-full h-[440px] sm:h-[480px] object-contain object-bottom pt-4 group-hover:scale-105 transition-transform duration-500"
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
              {/* <div className="absolute -top-5 -left-5 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 flex items-center space-x-3 hidden sm:flex">
                <img
                  src={ceo2Img}
                  alt="Dr. Sheekha Shah Professional Portrait"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0B4F6C]"
                />
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">AACD Accredited Fellow</span>
                  <span className="text-[10px] text-[#0B4F6C] font-extrabold">Top 1% Aesthetic Specialist</span>
                </div>
              </div> */}

              {/* Virtual Clinic Tour Button */}
              <button
                onClick={handleTourClick}
                className="absolute top-5 right-5 bg-white/95 backdrop-blur-md hover:bg-white text-slate-900 font-extrabold text-xs px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center space-x-2 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 text-[#0B4F6C] fill-[#0B4F6C]" />
                <span>Virtual Clinic Tour</span>
              </button>

            </div>

            {/* Premium Real Clinic Photo Grid */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider flex items-center space-x-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#00B4D8]" />
                  <span>Real Clinic Environment & Suites</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400">Click image to expand</span>
              </div>

              <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
                {clinicPhotos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLightboxIndex(index)}
                    className="group relative rounded-2xl overflow-hidden border-2 border-white shadow-md hover:shadow-xl hover:border-[#0B4F6C] transition-all duration-300 aspect-square bg-slate-200 cursor-pointer focus:outline-none"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white drop-shadow-md" />
                    </div>
                  </button>
                ))}
              </div>
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
            {/* <div className="pt-2 flex items-center space-x-3">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Clinical Gallery:</span>
              <div className="flex items-center space-x-2">
                <img src={ceoBgImg} alt="Dr. Sheekha BG" className="w-10 h-10 rounded-xl object-cover border border-slate-300 shadow-2xs" />
                <img src={ceoJpegImg} alt="Dr. Sheekha Clinical" className="w-10 h-10 rounded-xl object-cover border border-slate-300 shadow-2xs" />
                <img src={ceo2Img} alt="Dr. Sheekha Portrait" className="w-10 h-10 rounded-xl object-cover border border-slate-300 shadow-2xs" />
              </div>
            </div> */}

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

      {/* Lightbox Modal for Real Clinic Photos */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden border border-slate-700/60 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[360px] sm:h-[480px] bg-slate-950 flex items-center justify-center">
              <img
                src={clinicPhotos[activeLightboxIndex].src}
                alt={clinicPhotos[activeLightboxIndex].title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next navigation */}
              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev === 0 ? clinicPhotos.length - 1 : prev! - 1))}
                className="absolute left-4 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors border border-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev === clinicPhotos.length - 1 ? 0 : prev! + 1))}
                className="absolute right-4 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors border border-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                  {clinicPhotos[activeLightboxIndex].category}
                </span>
                <h4 className="text-lg font-bold font-heading text-white">
                  {clinicPhotos[activeLightboxIndex].title}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {clinicPhotos[activeLightboxIndex].desc}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 font-mono">
                  {activeLightboxIndex + 1} / {clinicPhotos.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <img src={ceo2Img} alt="Dr. Sheekha Shah" className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0B4F6C]" />
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

