import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, ChevronRight, CheckCircle, ArrowRight, Calendar, Shield, Phone } from 'lucide-react';
import { TREATMENT_CATEGORIES } from '../data/treatmentsData';
import { CLINIC_INFO } from '../data/homeData';

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
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0F6CBD]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">Treatments Hub</span>
        </nav>

        {/* Page Hero */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#0F6CBD]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Care Directory
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              Advanced Dental Treatments & Procedures
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our complete range of general, cosmetic, restorative, and surgical dental treatments offered at Dr. Sheekha Shah DENTAL STUDIO.
            </p>

            {/* Quick Search Bar */}
            <div className="pt-4 max-w-xl">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search treatments (e.g., Veneers, Root Canal, Aligners, Implants)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#0F6CBD]/30 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Real Studio Asset Feature Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-64 sm:h-80">
            <img 
              src="/assets/Clinic.jpeg" 
              alt="Dr. Sheekha Shah DENTAL STUDIO Operatory" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#0F6CBD] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
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
        </div>

        {/* Categories Directory Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-heading text-slate-800">
              Treatment Categories ({filteredCategories.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((cat) => (
              <div 
                key={cat.id} 
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#0F6CBD] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {cat.subcategories.length} Sub-Treatments
                    </span>
                    <Shield className="w-5 h-5 text-teal-600" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-800 group-hover:text-[#0F6CBD] transition-colors">
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
                          to={`/treatments/${cat.slug}/${sub.slug}`}
                          className="text-[11px] font-medium bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#0F6CBD] px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors"
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
                    className="text-xs font-bold text-[#0F6CBD] hover:text-[#0B5598] flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-slate-600 hover:text-[#0F6CBD] bg-slate-100 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA Section */}
        <div className="bg-gradient-to-br from-[#0F6CBD] to-[#0B5598] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading">Need Help Choosing the Right Treatment?</h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Schedule an in-person or virtual consultation with Dr. Sheekha Shah for personalized clinical guidance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-white text-[#0F6CBD] hover:bg-blue-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="border border-white/30 hover:bg-white/10 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
