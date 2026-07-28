import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Search, CheckCircle, ArrowRight, Calendar, Shield, Phone } from 'lucide-react';
import { TREATMENT_CATEGORIES } from '../data/treatmentsData';
import { CLINIC_INFO } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';
import clinicImg from '@/public/assets/Image/Clinic.jpeg';
import { buttonHover, staggerContainer, staggerItemUp, VIEWPORT_CONFIG } from '../lib/motion';

import { PageBanner } from '../components/ui/PageBanner';

interface TreatmentsPageProps {
  onOpenBooking: () => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = TREATMENT_CATEGORIES.filter(cat =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.subcategories.some(sub => sub.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <PageWrapper className="min-h-screen bg-slate-50">
      <PageBanner
        badge="TREATMENTS"
        title="Our Treatments"
        subtitle="Explore our complete range of general, cosmetic, restorative, and surgical dental treatments offered at Dr. Sheekha Shah DENTAL STUDIO."
        breadcrumb="Treatments"
      />
      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">

        {/* Quick Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search treatments (e.g., Veneers, Root Canal, Aligners, Implants)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#2E5B5B]/30 shadow-md border border-slate-200"
            />
          </div>
        </div>

        {/* Real Studio Asset Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-64 sm:h-80 group">
            <img
              src={clinicImg}
              alt="Dr. Sheekha Shah DENTAL STUDIO Operatory"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#2E5B5B] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              State-of-the-Art Clinical Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
              Micro-Endodontics, 3D Scanning & Zero-Pain Protocols
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every procedure is tailored by senior specialists using high-precision digital equipment including the 3D iTero® scanner, low-dose digital X-rays, and painless computer-controlled local anesthesia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                <span>100% Sterile German Autoclave</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                <span>Transparent Treatment Options</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories Directory Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-heading text-slate-800">
              Treatment Categories ({filteredCategories.length})
            </h2>
          </div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={staggerItemUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-teal-300/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#2E5B5B] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                      {cat.subcategories.length} Sub-Treatments
                    </span>
                    <Shield className="w-5 h-5 text-[#2E5B5B]" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-800 group-hover:text-[#2E5B5B] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {cat.shortDesc}
                  </p>

                  {/* Subcategories List Preview */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Popular Sub-Procedures:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.subcategories.slice(0, 4).map((sub) => (
                        <Link
                          key={sub.id}
                          to={`/treatments/${cat.slug}`}
                          className="text-[11px] font-medium bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-[#2E5B5B] px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors"
                        >
                          {sub.title}
                        </Link>
                      ))}
                      {cat.subcategories.length > 4 && (
                        <span className="text-[11px] text-slate-400 self-center pl-1">
                          +{cat.subcategories.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/treatments/${cat.slug}`}
                    className="text-xs font-bold text-[#2E5B5B] hover:text-[#204242] flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-slate-600 hover:text-[#2E5B5B] bg-slate-100 hover:bg-teal-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Book Visit
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Global CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-[#2E5B5B] via-[#204242] to-[#152929] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-teal-400/20"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading">Need Help Choosing the Right Treatment?</h3>
            <p className="text-teal-100 text-sm max-w-xl">
              Schedule an in-person or virtual consultation with Dr. Sheekha Shah for personalized clinical guidance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <motion.button
              {...buttonHover}
              onClick={onOpenBooking}
              className="bg-white text-[#2E5B5B] hover:bg-teal-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#2E5B5B]" />
              <span>Book Appointment</span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="border border-white/30 hover:bg-white/10 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors flex items-center space-x-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};


