import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { TRANSFORMATION_CASES } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';

interface SmileGalleryPageProps {
  onOpenBooking: () => void;
}

export const SmileGalleryPage: React.FC<SmileGalleryPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Transformations' },
    { id: 'Veneers', label: 'Porcelain Veneers' },
    { id: 'Invisalign', label: 'Invisalign Aligners' },
    { id: 'Implants', label: 'Dental Implants' }
  ];

  const filteredCases = selectedCategory === 'all'
    ? TRANSFORMATION_CASES
    : TRANSFORMATION_CASES.filter(c => c.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">Smile Gallery</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              Real Patient Transformations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Smile Makeover Gallery
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore documented before and after cases handcrafted by Dr. Sheekha Shah at DENTAL STUDIO.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0B4F6C] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((c, index) => (
            <motion.div 
              key={c.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 p-5 group"
            >
              <span className="inline-block text-[11px] font-extrabold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                {c.category}
              </span>

              <h3 className="text-lg font-bold font-heading text-slate-800 group-hover:text-[#0B4F6C] transition-colors">{c.treatmentName}</h3>

              {/* Before & After Image Comparison */}
              <div className="grid grid-cols-2 gap-2 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-40">
                  <img src={c.beforeImage} alt={`Before ${c.patientName}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute bottom-2 left-2 bg-slate-900/85 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    BEFORE
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-teal-500 h-40">
                  <img src={c.afterImage} alt={`After ${c.patientName}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute bottom-2 left-2 bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    AFTER
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed">
                {c.description}
              </p>

              <div className="pt-2 text-xs text-slate-600 flex justify-between items-center border-t border-slate-100">
                <span>Duration: <strong>{c.durationMonths} Month(s)</strong></span>
                <button
                  onClick={onOpenBooking}
                  className="font-bold text-[#0B4F6C] hover:text-[#083A50] flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Book Similar Case</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="bg-gradient-to-br from-[#0B4F6C] to-[#083A50] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-cyan-500/20">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">Ready for Your Own Transformation?</h3>
            <p className="text-cyan-100 text-sm">Schedule a 3D digital smile scan with Dr. Sheekha Shah today.</p>
          </div>
          <motion.button
            onClick={onOpenBooking}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-[#0B4F6C] hover:bg-cyan-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 shrink-0"
          >
            <Calendar className="w-4 h-4 text-[#0B4F6C]" />
            <span>Book Smile Scan</span>
          </motion.button>
        </div>

      </div>
    </PageWrapper>
  );
};

