import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle, HelpCircle, ArrowRight, ArrowLeft,
  Calendar, Activity, UserCheck, Shield, ChevronRight,
  Eye, X, Clock, ShieldCheck, Phone
} from 'lucide-react';
import { TREATMENT_CATEGORIES, getCategoryBySlug, TreatmentSubcategory } from '../data/treatmentsData';
import { CLINIC_INFO } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';

import { PageBanner } from '../components/ui/PageBanner';

interface TreatmentCategoryPageProps {
  onOpenBooking: () => void;
}

export const TreatmentCategoryPage: React.FC<TreatmentCategoryPageProps> = ({ onOpenBooking }) => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const [selectedQuickViewSub, setSelectedQuickViewSub] = useState<TreatmentSubcategory | null>(null);

  const category = getCategoryBySlug(categorySlug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedQuickViewSub(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!category) {
    return (
      <PageWrapper className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Treatment Category Not Found</h2>
        <p className="text-slate-500 text-sm mt-2">The requested dental category could not be located.</p>
        <Link to="/treatments" className="mt-4 bg-[#2E5B5B] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#204242]">
          Return to Treatments Hub
        </Link>
      </PageWrapper>
    );
  }

  // Previous & Next Category
  const catIndex = TREATMENT_CATEGORIES.findIndex(c => c.id === category.id);
  const prevCat = TREATMENT_CATEGORIES[catIndex - 1] || TREATMENT_CATEGORIES[TREATMENT_CATEGORIES.length - 1];
  const nextCat = TREATMENT_CATEGORIES[catIndex + 1] || TREATMENT_CATEGORIES[0];

  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent(`Hello, I am interested in ${selectedQuickViewSub?.title || category.title} treatment.`)}`;

  return (
    <PageWrapper className="min-h-screen bg-slate-50">
      <PageBanner
        badge="TREATMENT CATEGORY"
        title={category.title}
        subtitle={category.shortDesc || `Specialized ${category.title} procedures offered at Dr. Sheekha Shah DENTAL STUDIO.`}
        breadcrumb={category.title}
      />
      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">

        {/* Category Overview & Indications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-4">
            <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#2E5B5B]" />
              Category Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {category.overview}
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Key Clinical Benefits</h3>
              <div className="space-y-2">
                {category.benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-3 text-slate-700 text-sm">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-3">
              <h3 className="text-lg font-bold font-heading text-slate-800 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-teal-600" />
                Who Needs This Treatment?
              </h3>
              <ul className="space-y-2">
                {category.whoNeedsThis.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E5B5B] mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/80 rounded-3xl p-6 border border-amber-200/80 shadow-md space-y-3">
              <h3 className="text-lg font-bold font-heading text-amber-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-600" />
                Common Indications & Symptoms
              </h3>
              <ul className="space-y-2">
                {category.symptoms.map((symptom, i) => (
                  <li key={i} className="text-xs sm:text-sm text-amber-800 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Subcategories Dedicated Navigation Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-heading text-slate-800">
              Dedicated {category.title} Procedures ({category.subcategories.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((sub) => (
              <motion.div
                key={sub.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-heading text-slate-800 group-hover:text-[#2E5B5B] transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {sub.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedQuickViewSub(sub)}
                    className="w-full text-xs font-bold text-[#2E5B5B] hover:text-white bg-teal-50 hover:bg-[#2E5B5B] px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-2xs border border-teal-200/80"
                  >
                    <Eye className="w-4 h-4 text-[#2E5B5B] group-hover:text-teal-200" />
                    <span>Explore More</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Previous & Next Category Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-slate-200">
          <Link
            to={`/treatments/${prevCat.slug}`}
            className="w-full sm:w-auto bg-white border border-slate-200 hover:border-[#2E5B5B] p-4 rounded-2xl shadow-sm text-left flex items-center space-x-3 group"
          >
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-[#2E5B5B] transition-colors" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Previous Category</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#2E5B5B] transition-colors">{prevCat.title}</span>
            </div>
          </Link>

          <Link
            to={`/treatments/${nextCat.slug}`}
            className="w-full sm:w-auto bg-white border border-slate-200 hover:border-[#2E5B5B] p-4 rounded-2xl shadow-sm text-right flex items-center space-x-3 group"
          >
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Next Category</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#2E5B5B] transition-colors">{nextCat.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#2E5B5B] transition-colors" />
          </Link>
        </div>

      </div>

      {/* Quick View Modal Popup */}
      <AnimatePresence>
        {selectedQuickViewSub && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedQuickViewSub(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto my-auto space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedQuickViewSub(null)}
                className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Title */}
              <div className="space-y-2 pr-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-tight">
                  {selectedQuickViewSub.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedQuickViewSub.shortDesc}
                </p>
              </div>

              {/* Procedure Quick Info Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#2E5B5B]" />
                    Duration
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800">45–60 Mins</p>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-600" />
                    Recovery Time
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800">Same Day / Immediate</p>
                </div>

                <div className="space-y-0.5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#2E5B5B]" />
                    Warranty & Scan
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-800">Free 3D iTero® Scan</p>
                </div>
              </div>

              {/* Treatment Benefits & Ideal Candidates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 p-4 rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
                  <h4 className="text-xs font-extrabold text-[#2E5B5B] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Treatment Benefits
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedQuickViewSub.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E5B5B] mt-1.5 shrink-0"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 p-4 rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
                  <h4 className="text-xs font-extrabold text-[#2E5B5B] uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-teal-600" />
                    Ideal Candidate
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedQuickViewSub.whoNeedsThis.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Treatment Process (3-5 steps) */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  Treatment Process ({selectedQuickViewSub.procedureSteps.length} Steps)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedQuickViewSub.procedureSteps.map((step, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <span className="text-xs font-black text-[#2E5B5B] block">Step 0{i + 1}</span>
                      <h5 className="text-xs font-bold text-slate-800">{step.title}</h5>
                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {selectedQuickViewSub.faqs && selectedQuickViewSub.faqs.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-[#2E5B5B]" />
                    Frequently Asked Questions
                  </h4>
                  <div className="space-y-2">
                    {selectedQuickViewSub.faqs.slice(0, 3).map((faq, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                        <p className="font-bold text-slate-800">{faq.question}</p>
                        <p className="text-slate-600 text-[11px] leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/919924083567?text=${encodeURIComponent(`Hello Dr. Sheekha Shah Dental Studio,\n\nI would like to book an appointment for ${selectedQuickViewSub.title}.\n\nThis is a demo website for your clinic. Kindly let me know the available appointment slots.\n\nThank you.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#2E5B5B] hover:bg-[#204242] text-white font-extrabold text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-md flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                >
                  <Calendar className="w-4 h-4 text-teal-200" />
                  <span>Book Appointment</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedQuickViewSub(null);
                    navigate('/contact');
                  }}
                  className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-md flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Contact Us</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};
