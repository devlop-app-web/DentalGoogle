import React from 'react';
import { X, ShieldCheck, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../../data/homeData';
import entryImg from '@/public/assets/Image/Entry.jpeg';
import waitingImg from '@/public/assets/Image/Waiting.jpeg';
import clinicImg from '@/public/assets/Image/Clinic.jpeg';
import clinic2Img from '@/public/assets/Image/Clinic 2.jpeg';

interface ClinicTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ClinicTourModal: React.FC<ClinicTourModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          id="tour-modal-close-btn"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close tour modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div>
            <span className="text-xs font-bold text-[#00A99D] uppercase tracking-wider block">Virtual Experience</span>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading">
              Dr. Sheekha Shah DENTAL STUDIO Tour & Safety Standards
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Explore our state-of-the-art facility featuring private treatment suites, HEPA 14 air filtration, and zero-pain technology.
            </p>
          </div>

          {/* Feature Clinic Photos Grid - Real Studio Assets */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-36 sm:h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
              <img
                src={entryImg}
                alt="Studio Main Entrance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                <p className="text-white text-xs font-bold shadow-sm">Reception Foyer</p>
              </div>
            </div>

            <div className="relative h-36 sm:h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
              <img
                src={waitingImg}
                alt="Luxury Waiting Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                <p className="text-white text-xs font-bold shadow-sm">Patient Lounge</p>
              </div>
            </div>

            <div className="relative h-36 sm:h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
              <img
                src={clinicImg}
                alt="Digital Treatment Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                <p className="text-white text-xs font-bold shadow-sm">Digital Operatory</p>
              </div>
            </div>

            <div className="relative h-36 sm:h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
              <img
                src={clinic2Img}
                alt="Advanced Operatory Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                <p className="text-white text-xs font-bold shadow-sm">Surgery Suite</p>
              </div>
            </div>
          </div>

          {/* Sterilization Highlights */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-[#00A99D]" />
              <span>Hospital-Grade Sterilization Protocols</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#00A99D] shrink-0" />
                <span>Medical-grade Class B Autoclaves</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#00A99D] shrink-0" />
                <span>Single-use sterile cassette instruments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#00A99D] shrink-0" />
                <span>HEPA 14 Continuous Air Scrubber</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#00A99D] shrink-0" />
                <span>Distilled Purified Waterlines</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full bg-[#0F6CBD] hover:bg-[#0B5598] text-white font-bold py-3.5 rounded-xl shadow-md text-sm"
            >
              Book In-Person Clinic Tour
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
