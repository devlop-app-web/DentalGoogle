import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, CheckCircle, HelpCircle, ArrowRight, ArrowLeft, 
  Calendar, Phone, Cpu, Activity, UserCheck, Shield, ChevronRight
} from 'lucide-react';
import { TREATMENT_CATEGORIES, getCategoryBySlug } from '../data/treatmentsData';
import { CLINIC_INFO } from '../data/homeData';

interface TreatmentCategoryPageProps {
  onOpenBooking: () => void;
}

export const TreatmentCategoryPage: React.FC<TreatmentCategoryPageProps> = ({ onOpenBooking }) => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();

  const category = getCategoryBySlug(categorySlug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!category) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Treatment Category Not Found</h2>
        <p className="text-slate-500 text-sm mt-2">The requested dental category could not be located.</p>
        <Link to="/treatments" className="mt-4 bg-[#0F6CBD] text-white px-5 py-2.5 rounded-xl font-bold text-sm">
          Return to Treatments Hub
        </Link>
      </div>
    );
  }

  // Find previous and next category for seamless navigation
  const currentIndex = TREATMENT_CATEGORIES.findIndex(cat => cat.id === category.id);
  const prevCategory = TREATMENT_CATEGORIES[currentIndex - 1] || TREATMENT_CATEGORIES[TREATMENT_CATEGORIES.length - 1];
  const nextCategory = TREATMENT_CATEGORIES[currentIndex + 1] || TREATMENT_CATEGORIES[0];

  // Inject Schema Markup (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": category.title,
    "description": category.overview,
    "bodyLocation": "Mouth/Teeth/Gums",
    "procedureType": "Dental Procedure",
    "howPerformed": category.procedureSteps.map(step => step.desc).join(" "),
    "provider": {
      "@type": "Dentist",
      "name": "Dr. Sheekha Shah DENTAL STUDIO",
      "telephone": CLINIC_INFO.phone,
      "address": CLINIC_INFO.address
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Schema Script */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="max-w-7xl mx-auto space-y-12">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0F6CBD]">Home</Link>
          <span>/</span>
          <Link to="/treatments" className="hover:text-[#0F6CBD]">Treatments</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">{category.title}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Care Category
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              {category.title}
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {category.shortDesc}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#0F6CBD] hover:bg-[#0B5598] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book Consultation</span>
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 h-60 sm:h-72">
            <img 
              src="/assets/Clinic 2.jpeg" 
              alt={`Dr. Sheekha Shah DENTAL STUDIO ${category.title}`} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Category Overview & Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Overview */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-4">
            <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#0F6CBD]" />
              Treatment Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {category.overview}
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Key Clinical Benefits</h3>
              <div className="space-y-2">
                {category.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3 text-slate-700 text-sm">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Who Needs This & Symptoms */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-3">
              <h3 className="text-lg font-bold font-heading text-slate-800 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-teal-600" />
                Who Needs This Treatment?
              </h3>
              <ul className="space-y-2">
                {category.whoNeedsThis.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F6CBD] mt-2 flex-shrink-0"></span>
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
              <div 
                key={sub.id} 
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-heading text-slate-800 group-hover:text-[#0F6CBD] transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {sub.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/treatments/${category.slug}/${sub.slug}`}
                    className="text-xs font-bold text-[#0F6CBD] hover:text-[#0B5598] flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Procedure Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Procedure Timeline */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
          <h2 className="text-2xl font-bold font-heading text-slate-800">
            Step-by-Step Treatment Procedure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.procedureSteps.map((step, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2 relative">
                <span className="text-2xl font-black text-[#0F6CBD]/20 block">0{i + 1}</span>
                <h3 className="text-base font-bold text-slate-800">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Used */}
        <div className="bg-teal-900 text-white rounded-3xl p-8 shadow-xl space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-heading flex items-center gap-2">
            <Cpu className="w-6 h-6 text-teal-300" />
            Advanced Technology Used in {category.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {category.technologyUsed.map((tech, i) => (
              <div key={i} className="bg-teal-800/80 p-4 rounded-xl border border-teal-700/60 text-xs font-semibold text-teal-100 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-teal-300 flex-shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
          <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#0F6CBD]" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {category.faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <h3 className="text-base font-bold text-slate-800">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Previous / Next Treatment Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-slate-200">
          <Link
            to={`/treatments/${prevCategory.slug}`}
            className="w-full sm:w-auto bg-white border border-slate-200 hover:border-[#0F6CBD] p-4 rounded-2xl shadow-sm text-left flex items-center space-x-3 group"
          >
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-[#0F6CBD] transition-colors" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Previous Category</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#0F6CBD] transition-colors">{prevCategory.title}</span>
            </div>
          </Link>

          <Link
            to={`/treatments/${nextCategory.slug}`}
            className="w-full sm:w-auto bg-white border border-slate-200 hover:border-[#0F6CBD] p-4 rounded-2xl shadow-sm text-right flex items-center space-x-3 group"
          >
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Next Category</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#0F6CBD] transition-colors">{nextCategory.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#0F6CBD] transition-colors" />
          </Link>
        </div>

        {/* Book Appointment CTA Banner */}
        <div className="bg-gradient-to-br from-[#0F6CBD] to-[#0B5598] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">Schedule Your {category.title} Consultation</h3>
            <p className="text-blue-100 text-sm">Experience gentle, high-precision care with Dr. Sheekha Shah.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-white text-[#0F6CBD] hover:bg-blue-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
};
