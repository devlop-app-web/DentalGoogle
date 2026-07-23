import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';
import { TRANSFORMATION_CASES } from '../../data/homeData';
import { fadeInUp, buttonHover, VIEWPORT_CONFIG } from '../../lib/motion';

interface BeforeAfterGalleryProps {
  onOpenBooking: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentCase = TRANSFORMATION_CASES[activeCaseIndex];

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-3.5 py-1.5 text-xs font-bold text-[#0F6CBD] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#24BEC8]" />
            <span>Proven Clinical Results</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E293B] font-heading tracking-tight">
            Smile Transformations & Real Patient Results
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Drag the slider interactively to see how our porcelain veneers, Invisalign®, and implants restore natural radiance.
          </p>

          {/* Case Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {TRANSFORMATION_CASES.map((c, idx) => (
              <motion.button
                key={c.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                id={`case-tab-${c.id}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCaseIndex === idx 
                    ? 'bg-[#0F6CBD] text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {c.patientName} • {c.category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Comparison Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 lg:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentCase.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left: Interactive Split Image Comparison View */}
              <div className="lg:col-span-7">
                <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden select-none border border-slate-200 shadow-md">
                  
                  {/* AFTER Image (Full background) */}
                  <img
                    src={currentCase.afterImage}
                    alt={`After ${currentCase.treatmentName}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-emerald-600/90 text-white font-extrabold text-xs uppercase px-3 py-1 rounded-md shadow-md z-10">
                    AFTER TRANSFORMATION
                  </span>

                  {/* BEFORE Image (Clipped width based on slider position) */}
                  <div 
                    className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl z-20"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={currentCase.beforeImage}
                      alt={`Before ${currentCase.treatmentName}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ width: '100%', maxWidth: 'none' }}
                    />
                    <span className="absolute top-4 left-4 bg-slate-900/90 text-white font-extrabold text-xs uppercase px-3 py-1 rounded-md shadow-md">
                      BEFORE
                    </span>
                  </div>

                  {/* Slider Handle Divider Line */}
                  <div 
                    className="absolute inset-y-0 z-30 pointer-events-none flex items-center justify-center"
                    style={{ left: `calc(${sliderPosition}% - 18px)` }}
                  >
                    <div className="w-9 h-9 rounded-full bg-[#0F6CBD] text-white border-2 border-white shadow-xl flex items-center justify-center font-bold text-xs">
                      ↔
                    </div>
                  </div>

                  {/* Range Controller Overlay */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    id="before-after-range-input"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                    aria-label="Drag to compare before and after photos"
                  />
                </div>

                <div className="text-center mt-3 text-xs text-slate-500 font-semibold">
                  👈 Drag slider left or right to compare transformation 👉
                </div>
              </div>

              {/* Right: Case Details & CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#0F6CBD] uppercase tracking-wider block mb-1">
                    Patient Case Study
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading">
                    {currentCase.treatmentName}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block mt-1">
                    Patient: {currentCase.patientName}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {currentCase.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                    <span className="text-slate-500 font-medium block">Treatment Duration</span>
                    <span className="text-[#0F6CBD] font-bold text-base block">{currentCase.durationMonths} Months</span>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                    <span className="text-slate-500 font-medium block">Clinical Outcome</span>
                    <span className="text-emerald-700 font-bold text-base block">100% Satisfaction</span>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    {...buttonHover}
                    onClick={onOpenBooking}
                    id="gallery-book-similar-btn"
                    className="w-full bg-[#0F6CBD] hover:bg-[#0B5598] text-white font-bold py-3.5 rounded-xl shadow-md text-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-cyan-300" />
                    <span>Book Similar Smile Consultation</span>
                  </motion.button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

