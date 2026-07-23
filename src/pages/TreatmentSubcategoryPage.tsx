import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sparkles, CheckCircle, HelpCircle, ArrowRight, ArrowLeft, 
  Calendar, Phone, Cpu, UserCheck, Activity, Shield, ChevronRight
} from 'lucide-react';
import { getSubcategoryBySlug } from '../data/treatmentsData';
import { CLINIC_INFO } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';

interface TreatmentSubcategoryPageProps {
  onOpenBooking: () => void;
}

export const TreatmentSubcategoryPage: React.FC<TreatmentSubcategoryPageProps> = ({ onOpenBooking }) => {
  const { categorySlug, subcategorySlug } = useParams<{ categorySlug: string; subcategorySlug: string }>();

  const data = getSubcategoryBySlug(categorySlug || '', subcategorySlug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, subcategorySlug]);

  if (!data) {
    return (
      <PageWrapper className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Procedure Not Found</h2>
        <p className="text-slate-500 text-sm mt-2">The requested dental procedure could not be located.</p>
        <Link to="/treatments" className="mt-4 bg-[#0B4F6C] text-white px-5 py-2.5 rounded-xl font-bold text-sm">
          Return to Treatments Hub
        </Link>
      </PageWrapper>
    );
  }

  const { category, subcategory } = data;

  // Previous & Next Subcategory within same category
  const subIndex = category.subcategories.findIndex(s => s.id === subcategory.id);
  const prevSub = category.subcategories[subIndex - 1] || category.subcategories[category.subcategories.length - 1];
  const nextSub = category.subcategories[subIndex + 1] || category.subcategories[0];

  // Schema Markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": subcategory.title,
    "description": subcategory.overview,
    "bodyLocation": "Mouth/Teeth",
    "procedureType": "Dental Procedure",
    "provider": {
      "@type": "Dentist",
      "name": "Dr. Sheekha Shah DENTAL STUDIO",
      "telephone": CLINIC_INFO.phone,
      "address": CLINIC_INFO.address
    }
  };

  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Schema Script */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="max-w-7xl mx-auto space-y-12">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2 flex-wrap gap-y-1">
          <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/treatments" className="hover:text-[#0B4F6C] transition-colors">Treatments</Link>
          <span>/</span>
          <Link to={`/treatments/${category.slug}`} className="hover:text-[#0B4F6C] transition-colors">{category.title}</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">{subcategory.title}</span>
        </nav>

        {/* Subcategory Hero Banner */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                {category.title}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              {subcategory.title}
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {subcategory.shortDesc}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <motion.button
                onClick={onOpenBooking}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center space-x-2 border border-cyan-400/20"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book This Procedure</span>
              </motion.button>
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors flex items-center space-x-2 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 h-60 sm:h-72 group">
            <img 
              src="/assets/Waiting.jpeg" 
              alt={`Dr. Sheekha Shah DENTAL STUDIO ${subcategory.title}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Overview & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-4">
            <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#0B4F6C]" />
              Procedure Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {subcategory.overview}
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Key Benefits</h3>
              <div className="space-y-2">
                {subcategory.benefits.map((b, i) => (
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
                Who Needs {subcategory.title}?
              </h3>
              <ul className="space-y-2">
                {subcategory.whoNeedsThis.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B4F6C] mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/80 rounded-3xl p-6 border border-amber-200/80 shadow-md space-y-3">
              <h3 className="text-lg font-bold font-heading text-amber-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-600" />
                Symptoms & Indications
              </h3>
              <ul className="space-y-2">
                {subcategory.symptoms.map((symptom, i) => (
                  <li key={i} className="text-xs sm:text-sm text-amber-800 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Treatment Options & Procedure Steps */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
          <h2 className="text-2xl font-bold font-heading text-slate-800">
            Clinical Procedure Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subcategory.procedureSteps.map((step, i) => (
              <motion.div key={i} whileHover={{ y: -2 }} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-2xl font-black text-[#0B4F6C]/20 block">0{i + 1}</span>
                <h3 className="text-base font-bold text-slate-800">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Used */}
        <div className="bg-teal-900 text-white rounded-3xl p-8 shadow-xl space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-heading flex items-center gap-2">
            <Cpu className="w-6 h-6 text-teal-300" />
            Equipment & Technology Used
          </h2>
          <div className="flex flex-wrap gap-3 pt-2">
            {subcategory.technologyUsed.map((tech, i) => (
              <span key={i} className="bg-teal-800/80 backdrop-blur-md text-teal-100 text-xs font-semibold px-3.5 py-2 rounded-xl border border-teal-700/60 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-300" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
          <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#0B4F6C]" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {subcategory.faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                <h3 className="text-base font-bold text-slate-800">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal SEO Links to Sister Subcategories */}
        <div className="bg-slate-100/80 rounded-3xl p-6 space-y-4 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Related Procedures in {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((sub) => (
              <Link
                key={sub.id}
                to={`/treatments/${category.slug}/${sub.slug}`}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                  sub.id === subcategory.id
                    ? 'bg-[#0B4F6C] text-white border-[#0B4F6C]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#0B4F6C] hover:text-[#0B4F6C]'
                }`}
              >
                {sub.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Previous & Next Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-slate-200">
          <Link
            to={`/treatments/${category.slug}/${prevSub.slug}`}
            className="w-full sm:w-auto bg-white border border-slate-200 hover:border-[#0B4F6C] p-4 rounded-2xl shadow-sm text-left flex items-center space-x-3 group"
          >
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-[#0B4F6C] transition-colors" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Previous Procedure</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#0B4F6C] transition-colors">{prevSub.title}</span>
            </div>
          </Link>

          <Link
            to={`/treatments/${category.slug}/${nextSub.slug}`}
            className="w-full sm:w-auto bg-white border border-slate-200 hover:border-[#0B4F6C] p-4 rounded-2xl shadow-sm text-right flex items-center space-x-3 group"
          >
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Next Procedure</span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-[#0B4F6C] transition-colors">{nextSub.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#0B4F6C] transition-colors" />
          </Link>
        </div>

        {/* Book Appointment CTA */}
        <div className="bg-gradient-to-br from-[#0B4F6C] to-[#083A50] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-cyan-500/20">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">Book {subcategory.title} Today</h3>
            <p className="text-cyan-100 text-sm">Consult with Dr. Sheekha Shah for zero-pain precision care.</p>
          </div>
          <motion.button
            onClick={onOpenBooking}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-[#0B4F6C] hover:bg-cyan-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all shrink-0"
          >
            Book Appointment
          </motion.button>
        </div>

      </div>
    </PageWrapper>
  );
};

