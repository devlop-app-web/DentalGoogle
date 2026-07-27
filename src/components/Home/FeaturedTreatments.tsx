import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ChevronRight, Clock, CheckCircle2, Info } from 'lucide-react';
import { TREATMENTS } from '../../data/homeData';
import { Treatment } from '../../types';
import {
  fadeInUp,
  staggerContainer,
  staggerCard,
  buttonHover,
  cardHoverPremium,
  VIEWPORT_CONFIG
} from '../../lib/motion';

interface FeaturedTreatmentsProps {
  onOpenBookingWithService: (serviceId: string) => void;
}

const featuredCategories = [
  {
    id: 'general',
    title: 'General Dentistry',
    shortDescription: 'Comprehensive checkups, cavity fillings, scaling, gum therapy, and preventive oral health care for the entire family.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    duration: '30 - 45 Mins',
    startingPrice: '₹1,500',
    features: ['Painless Scaling & Polishing', 'Tooth-Colored Fillings', 'Gum Disease Treatment']
  },
  {
    id: 'veneers',
    title: 'Cosmetic Dentistry',
    shortDescription: 'Custom porcelain veneers, smile makeovers, tooth reshaping, and aesthetic bonding for a picture-perfect smile.',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    duration: '60 - 90 Mins',
    startingPrice: '₹12,000',
    features: ['Digital Smile Design 3D', 'Porcelain Veneers', 'Minimal Enamel Prep']
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    shortDescription: 'Permanent, natural-looking Swiss & German dental implants to replace missing teeth with lifelong durability.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    duration: '45 - 60 Mins',
    startingPrice: '₹25,000',
    features: ['Computer-Guided Surgery', 'Lifetime Implant Warranty', 'Immediate Loading Available']
  },
  {
    id: 'root-canal',
    title: 'Root Canal',
    shortDescription: 'Single-visit microscopic root canal therapy designed to eliminate dental pain and preserve your natural tooth.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    duration: '45 Mins',
    startingPrice: '₹4,500',
    features: ['Micro-Endodontic Tech', '100% Painless Protocol', 'Same-Day Crown Placement']
  },
  {
    id: 'invisalign',
    title: 'Clear Aligners',
    shortDescription: 'Virtually invisible aligners and Invisalign® custom-designed to straighten teeth comfortably without metal braces.',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    duration: '30 Mins Consultation',
    startingPrice: '₹45,000',
    features: ['Free 3D iTero® Scan', 'Invisible & Removable', 'Custom Progress Tracking']
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    shortDescription: 'Advanced laser whitening techniques to lift deep stains and brighten your smile up to 8 shades in just 45 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&w=800&q=80',
    duration: '45 Mins',
    startingPrice: '₹6,000',
    features: ['Instant 8-Shade Lift', 'Enamel-Safe Formulation', 'Sensitivity-Free Tech']
  }
];

const TreatmentCard: React.FC<{ 
  treatment: typeof featuredCategories[0]; 
  onOpenBookingWithService: (id: string) => void;
  setActiveTreatmentModal: (item: Treatment) => void;
}> = ({ 
  treatment, 
  onOpenBookingWithService, 
  setActiveTreatmentModal 
}) => (
  <motion.div
    variants={staggerCard}
    {...cardHoverPremium}
    className="bg-white rounded-3xl border border-slate-200/90 shadow-md transition-all duration-400 flex flex-col overflow-hidden group"
  >
    {/* Image Header */}
    <div className="relative h-56 overflow-hidden bg-slate-100">
      <img
        src={treatment.imageUrl}
        alt={treatment.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

      {/* Duration Badge */}
      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-800 font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow">
        <Clock className="w-3 h-3 inline mr-1 text-[#0B4F6C]" />
        {treatment.duration}
      </span>

      {/* Starting Price Pill */}
      <span className="absolute bottom-4 right-4 bg-[#0B4F6C] text-white font-extrabold text-xs px-3 py-1.5 rounded-xl border border-cyan-300/40 shadow">
        From {treatment.startingPrice}
      </span>
    </div>

    {/* Body Content */}
    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-[#0B4F6C] transition-colors">
          {treatment.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {treatment.shortDescription}
        </p>
      </div>

      {/* Key Benefits */}
      <div className="pt-2 border-t border-slate-100 space-y-1.5">
        {treatment.features.map((feat, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="pt-4 flex items-center gap-2">
        <motion.button
          {...buttonHover}
          onClick={() => onOpenBookingWithService(treatment.id)}
          id={`featured-book-${treatment.id}`}
          className="flex-1 bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs py-3.5 rounded-xl shadow transition-all flex items-center justify-center space-x-1.5"
        >
          <Calendar className="w-3.5 h-3.5 text-cyan-300" />
          <span>Book Service</span>
        </motion.button>

        <motion.button
          {...buttonHover}
          onClick={() => {
            const fullItem = TREATMENTS.find(t => t.id === treatment.id) || {
              id: treatment.id,
              title: treatment.title,
              category: 'General Care',
              shortDescription: treatment.shortDescription,
              fullDescription: treatment.shortDescription + ' Performed by Dr. Sheekha Shah using advanced equipment.',
              startingPrice: treatment.startingPrice,
              duration: treatment.duration,
              imageUrl: treatment.imageUrl,
              features: treatment.features,
              popular: true
            };
            setActiveTreatmentModal(fullItem);
          }}
          id={`featured-readmore-${treatment.id}`}
          className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs rounded-xl transition-colors flex items-center space-x-1"
        >
          <span>Read More</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export const FeaturedTreatments: React.FC<FeaturedTreatmentsProps> = ({ onOpenBookingWithService }) => {
  const [activeTreatmentModal, setActiveTreatmentModal] = useState<Treatment | null>(null);

  return (
    <section id="treatments" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center space-x-2 bg-white border border-cyan-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Featured Clinical Offerings</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Featured Treatment Categories
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From preventive checkups to complete full-mouth smile makeovers, we utilize micro-endodontics, 3D CBCT scanners, and zero-pain protocols.
          </p>
        </motion.div>

        {/* 6 Large Premium Image Cards */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredCategories.map((treatment) => (
            <TreatmentCard 
              key={treatment.id}
              treatment={treatment}
              onOpenBookingWithService={onOpenBookingWithService}
              setActiveTreatmentModal={setActiveTreatmentModal}
            />
          ))}
        </motion.div>

      </div>

      {/* Details Modal */}
      {activeTreatmentModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveTreatmentModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="space-y-4 text-left">
              <span className="bg-cyan-50 text-[#0B4F6C] font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-md">
                Treatment Overview
              </span>

              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                {activeTreatmentModal.title}
              </h3>

              <div className="h-44 rounded-2xl overflow-hidden bg-slate-100">
                <img src={activeTreatmentModal.imageUrl} alt={activeTreatmentModal.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeTreatmentModal.fullDescription}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5 text-xs font-bold text-slate-700">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="text-[#0B4F6C]">{activeTreatmentModal.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-[#0B4F6C]">{activeTreatmentModal.startingPrice}</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    const id = activeTreatmentModal.id;
                    setActiveTreatmentModal(null);
                    onOpenBookingWithService(id);
                  }}
                  className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold py-3.5 rounded-xl shadow text-xs sm:text-sm flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-cyan-300" />
                  <span>Book Appointment Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
