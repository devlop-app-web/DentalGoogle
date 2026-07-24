import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle, Clock, ShieldAlert, Calendar, Info } from 'lucide-react';
import { TREATMENTS } from '../../data/homeData';
import { Treatment } from '../../types';
const waiting2Img = '/assets/Image/Waiting 2.jpeg';
import {
  staggerContainer,
  staggerItemUp,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  buttonHover,
  VIEWPORT_CONFIG
} from '../../lib/motion';

interface TreatmentsSectionProps {
  onOpenBookingWithService: (serviceId: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenBookingWithService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <section id="treatments" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200/80 rounded-full px-3.5 py-1.5 text-xs font-bold text-[#2E5B5B] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2E5B5B]" />
            <span>Advanced Care Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E293B] font-heading tracking-tight">
            Comprehensive Dental Treatments & Cosmetic Procedures
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From routine checkups to complete full-mouth smile makeovers, we utilize micro-endodontics, 3D CBCT scanners, and zero-pain techniques in our serene studio environment.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'cosmetic', label: 'Cosmetic Dentistry' },
              { id: 'orthodontic', label: 'Invisalign & Braces' },
              { id: 'restorative', label: 'Implants & Crowns' },
              { id: 'preventative', label: 'Preventative & Kids' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`treatment-filter-${cat.id}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${selectedCategory === cat.id
                    ? 'bg-[#2E5B5B] text-white shadow-md shadow-[#2E5B5B]/20'
                    : 'bg-white text-slate-600 hover:bg-teal-50/60 border border-slate-200'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Real Studio Environment Feature Banner */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-3">
            <span className="text-xs font-extrabold text-[#2E5B5B] tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              State-of-the-Art Care Facility
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
              Designed For Fear-Free Patient Relaxation
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every operatory suite at Dr. Sheekha Shah DENTAL STUDIO is equipped with ergonomic dental chairs, noise-canceling headphones, and soothing ambient lighting to ensure maximum comfort during every procedure.
            </p>
            <div className="flex items-center space-x-6 pt-2 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#2E5B5B]" /> 100% Sterile Instrumentation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#2E5B5B]" /> HEPA 14 Air Scrubbers</span>
            </div>
          </div>
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[220px] relative overflow-hidden group">
            <img
              src={waiting2Img}
              alt="Dr. Sheekha Shah DENTAL STUDIO Lounge"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </motion.div>

        {/* Treatment Cards Grid with Stagger */}
        <motion.div
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTreatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              variants={staggerItemUp}
              whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col overflow-hidden group"
            >

              {/* Image Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                <img
                  src={treatment.imageUrl}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Popular Pill */}
                {treatment.popular && (
                  <span className="absolute top-4 left-4 bg-[#2E5B5B] text-white font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-teal-400/30">
                    Most Requested
                  </span>
                )}

                {/* Starting Price Pill */}
                <span className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-slate-800 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-slate-200 shadow-md">
                  From <span className="text-[#2E5B5B]">{treatment.startingPrice}</span>
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#2E5B5B]" />
                    <span>Duration: {treatment.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E293B] font-heading group-hover:text-[#2E5B5B] transition-colors">
                    {treatment.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {treatment.shortDescription}
                  </p>
                </div>

                {/* Feature Bullet List */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {treatment.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2E5B5B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenBookingWithService(treatment.id)}
                    id={`book-treatment-${treatment.id}`}
                    className="flex-1 bg-[#2E5B5B] hover:bg-[#204242] text-white font-bold text-xs py-3 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-teal-200" />
                    <span>Book Service</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveModalTreatment(treatment)}
                    id={`details-treatment-${treatment.id}`}
                    className="p-3 bg-slate-50 hover:bg-teal-50/60 text-[#2E5B5B] font-semibold rounded-xl border border-slate-200 transition-colors cursor-pointer"
                    aria-label={`View details for ${treatment.title}`}
                  >
                    <Info className="w-4 h-4 text-[#2E5B5B]" />
                  </motion.button>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Detailed Treatment Modal */}
      <AnimatePresence>
        {activeModalTreatment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalTreatment(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="space-y-4">
                <span className="bg-teal-50 text-[#2E5B5B] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-md border border-teal-100">
                  {activeModalTreatment.category} Care
                </span>

                <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading">
                  {activeModalTreatment.title}
                </h3>

                <div className="h-48 rounded-2xl overflow-hidden bg-slate-100">
                  <img src={activeModalTreatment.imageUrl} alt={activeModalTreatment.title} className="w-full h-full object-cover" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalTreatment.fullDescription}
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Typical Duration:</span>
                    <span className="text-[#2E5B5B]">{activeModalTreatment.duration}</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Estimated Investment:</span>
                    <span className="text-[#2E5B5B]">{activeModalTreatment.startingPrice}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Key Clinical Benefits</span>
                  <div className="grid grid-cols-2 gap-2">
                    {activeModalTreatment.features.map((f, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E5B5B]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const id = activeModalTreatment.id;
                      setActiveModalTreatment(null);
                      onOpenBookingWithService(id);
                    }}
                    className="w-full bg-[#2E5B5B] hover:bg-[#204242] text-white font-bold py-3.5 rounded-xl shadow-md text-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-teal-200" />
                    <span>Reserve Treatment Spot</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

