import React, { useState } from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2, ChevronRight, FileText, Info } from 'lucide-react';

interface WarrantyHighlightProps {
  onOpenBooking: () => void;
}

export const WarrantyHighlight: React.FC<WarrantyHighlightProps> = ({ onOpenBooking }) => {
  const [showWarrantyModal, setShowWarrantyModal] = useState(false);

  return (
    <section className="py-10 bg-gradient-to-r from-[#0B4F6C] via-[#09415A] to-[#062F41] text-white relative overflow-hidden shadow-xl">
      {/* Background Accent Grids */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-cyan-300/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Badge & Description */}
          <div className="space-y-3 text-center lg:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 bg-cyan-400/20 text-cyan-200 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider border border-cyan-300/30">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                Clinic Guarantee Program
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-300/30">
                <Award className="w-3.5 h-3.5" />
                Zero Cost Replacement Protection
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
              Exclusive Lifetime Dental Warranty Program
            </h2>

            <p className="text-cyan-100/90 text-xs sm:text-sm max-w-2xl leading-relaxed">
              We stand behind our clinical precision with absolute confidence. All premium dental implants, ceramic crowns, porcelain veneers, and structural restorations completed at DENTAL STUDIO are backed by our comprehensive Lifetime Warranty.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs font-semibold text-cyan-100">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Annual Checkup Coverage</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Premium Swiss & German Materials</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Transferable Protection</span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => setShowWarrantyModal(true)}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-white/30 transition-all flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4 text-cyan-300" />
              <span>Learn More</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-white text-[#0B4F6C] hover:bg-cyan-50 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-[#0B4F6C]" />
              <span>Book Covered Care</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Modal for Warranty Details */}
      {showWarrantyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowWarrantyModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-[#0B4F6C] px-3 py-1 rounded-full text-xs font-extrabold border border-cyan-200">
                <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
                <span>Lifetime Warranty Charter</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                How Our Lifetime Dental Warranty Works
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At Dr. Sheekha Shah DENTAL STUDIO, we prioritize long-term treatment stability. Our Lifetime Warranty covers physical structural repairs or full replacements on:
              </p>

              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs font-medium text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Dental Implants:</strong> Titanium post and abutment integrity for life.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Zirconia & E-Max Crowns:</strong> Fracture or chipping repair/replacement.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Porcelain Veneers:</strong> Full bond integrity guarantee.</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Simple Conditions</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To keep your Lifetime Warranty valid, patients simply attend routine 6-month preventive cleanings and oral examinations at our clinic.
                </p>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setShowWarrantyModal(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold py-3.5 rounded-xl shadow text-xs sm:text-sm flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Schedule Consultation Under Warranty</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
