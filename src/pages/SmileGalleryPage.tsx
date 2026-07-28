import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Filter,
  Eye,
  Star,
  Quote,
  Award,
  Zap,
  Info,
  Activity,
  Maximize2,
  X,
  Phone,
  Heart,
  UserCheck,
  Building
} from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { PageBanner } from '../components/ui/PageBanner';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { fadeInUp, staggerContainer, staggerItemUp, VIEWPORT_CONFIG } from '../lib/motion';
import { generateDentalMacroImage } from '../utils/dentalImages';

interface SmileGalleryPageProps {
  onOpenBooking: () => void;
}

export const SmileGalleryPage: React.FC<SmileGalleryPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSliderIndex, setActiveSliderIndex] = useState<number>(0);
  const [zoomModalCase, setZoomModalCase] = useState<{
    title: string;
    before: string;
    after: string;
    category: string;
    desc: string;
    duration: string;
    doctorNote: string;
  } | null>(null);

  // Category list
  const categories = [
    { id: 'all', label: 'All Cases', count: 18 },
    { id: 'makeover', label: 'Smile Makeovers', count: 5 },
    { id: 'implants', label: 'Dental Implants', count: 4 },
    { id: 'veneers', label: 'Porcelain Veneers', count: 4 },
    { id: 'whitening', label: 'Teeth Whitening', count: 2 },
    { id: 'ortho', label: 'Braces & Aligners', count: 2 },
    { id: 'fullmouth', label: 'Full-Mouth Rehab', count: 1 }
  ];

  // Spotlight Cases for Interactive Before/After Slider Section
  const spotlightSliderCases = [
    {
      title: "Full Smile Makeover with 10 Feldspathic Veneers",
      category: "Veneers & Aesthetics",
      before: generateDentalMacroImage({ type: 'makeover', state: 'before' }),
      after: generateDentalMacroImage({ type: 'makeover', state: 'after' }),
      doctorNote: "Corrected asymmetrical zenith margins, fluorosis, and incisal chipping. Handcrafted 10 upper ceramic porcelain veneers matching natural facial acoustics.",
      duration: "14 Days (2 Visits)"
    },
    {
      title: "3D CBCT Computer-Guided Single Molar Implant",
      category: "Dental Implants",
      before: generateDentalMacroImage({ type: 'implant', state: 'before' }),
      after: generateDentalMacroImage({ type: 'implant', state: 'after' }),
      doctorNote: "Flapless guided surgical implant placement after traumatic tooth fracture. Custom zirconia abutment with flawless tissue cuff emergence.",
      duration: "3.5 Months"
    },
    {
      title: "Invisalign® SmartTrack® Clear Aligner Expansion",
      category: "Orthodontics",
      before: generateDentalMacroImage({ type: 'ortho', state: 'before' }),
      after: generateDentalMacroImage({ type: 'ortho', state: 'after' }),
      doctorNote: "Expanded narrow maxillary arch and resolved 6mm anterior crowding in 18 aligners with zero bracket irritation.",
      duration: "7 Months"
    }
  ];

  // Section 4: Featured Smile Makeovers
  const makeoverCases = [
    {
      id: "mk-1",
      patientName: "Sophia R., 29",
      treatmentName: "10 Upper Porcelain Veneers + Diode Laser Gum Recontouring",
      category: "makeover",
      beforeImage: generateDentalMacroImage({ type: 'makeover', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'makeover', state: 'after' }),
      duration: "14 Days",
      description: "Corrected chipped lateral incisors, deep intrinsic discoloration, and uneven gumline with ultra-thin porcelain veneers by Dr. Sheekha Shah.",
      doctorNote: "Utilized Digital Smile Design 3D facial modeling to create an organic, radiant smile arc tailored to her lip dynamics."
    },
    {
      id: "mk-2",
      patientName: "Elena M., 34",
      treatmentName: "Full Upper Arch Ceramic Renewal & Midline Alignment",
      category: "makeover",
      beforeImage: generateDentalMacroImage({ type: 'makeover', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'makeover', state: 'after' }),
      duration: "3 Weeks",
      description: "Replaced discolored composite restorations with 8 hand-layered Swiss E-Max lithium disilicate porcelain veneers.",
      doctorNote: "Achieved 100% shade harmonization with natural lower teeth and eliminated incisal wear."
    }
  ];

  // Section 5: Dental Implant Cases
  const implantCases = [
    {
      id: "imp-1",
      patientName: "David K., 42",
      treatmentName: "Maxillary Central Incisor Guided Implant Restoration",
      category: "implants",
      beforeImage: generateDentalMacroImage({ type: 'implant', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'implant', state: 'after' }),
      duration: "3.5 Months",
      description: "Restored fractured front tooth using Nobel Biocare® titanium implant, 3D CBCT guided surgery, and translucent zirconia crown.",
      doctorNote: "Zero surgical flap incision required. Flawless papilla regeneration and natural gum aesthetics."
    },
    {
      id: "imp-2",
      patientName: "Marcus T., 58",
      treatmentName: "All-on-4® Full Upper Fixed Implant Bridge",
      category: "implants",
      beforeImage: generateDentalMacroImage({ type: 'implant', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'implant', state: 'after' }),
      duration: "4 Months",
      description: "Replaced failing bridge with 4 precision-angled implants and immediate fixed provisional teeth in a single day.",
      doctorNote: "Restored full masticatory function and eliminated the need for removable partial dentures."
    }
  ];

  // Section 6: Veneer Cases
  const veneerCases = [
    {
      id: "ven-1",
      patientName: "Priya S., 31",
      treatmentName: "6 Minimal-Prep Ultra-Thin Swiss Ceramic Veneers",
      category: "veneers",
      beforeImage: generateDentalMacroImage({ type: 'veneer', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'veneer', state: 'after' }),
      duration: "10 Days",
      description: "Masked tetracycline gray staining and microdontia with 0.3mm ultra-thin veneers preserving 98% natural tooth structure.",
      doctorNote: "High translucency porcelain layered to mimic natural enamel light reflection."
    },
    {
      id: "ven-2",
      patientName: "Jonathan B., 36",
      treatmentName: "Diastema (Gap) Closure & Incisal Edge Sculpting",
      category: "veneers",
      beforeImage: generateDentalMacroImage({ type: 'veneer', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'veneer', state: 'after' }),
      duration: "2 Visits",
      description: "Closed a 3.5mm central space and widened peg lateral incisors with 4 custom veneers.",
      doctorNote: "Achieved ideal width-to-height Golden Ratio without orthodontic intervention."
    }
  ];

  // Section 7: Teeth Whitening Cases
  const whiteningCases = [
    {
      id: "wh-1",
      patientName: "Chloe L., 26",
      treatmentName: "Cold Light Laser Whitening (8 Shades Lighter)",
      category: "whitening",
      beforeImage: generateDentalMacroImage({ type: 'whitening', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'whitening', state: 'after' }),
      duration: "60 Minutes",
      description: "In-office high-potency cold light whitening treatment with bio-remineralizing enamel gel.",
      doctorNote: "Achieved Shade B1 Hollywood brightness with zero post-treatment thermal sensitivity."
    },
    {
      id: "wh-2",
      patientName: "Michael V., 45",
      treatmentName: "Deep Tobacco & Coffee Stain Eradication Protocol",
      category: "whitening",
      beforeImage: generateDentalMacroImage({ type: 'whitening', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'whitening', state: 'after' }),
      duration: "1 Visit + Home Regimen",
      description: "Combined in-office light-activated whitening gel with custom-molded maintenance trays.",
      doctorNote: "Removed decade-old stubborn tar and tannin stains safely."
    }
  ];

  // Section 8: Braces & Aligner Cases
  const orthoCases = [
    {
      id: "ortho-1",
      patientName: "Amanda T., 28",
      treatmentName: "Invisalign® SmartTrack® Arch Expansion & Crowding Relief",
      category: "ortho",
      beforeImage: generateDentalMacroImage({ type: 'ortho', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'ortho', state: 'after' }),
      duration: "7 Months",
      description: "Corrected severe lower arch crowding and broadened smile smile line with 18 clear aligner sets.",
      doctorNote: "Tracked weekly progress digitally via iTero® 3D cloud monitoring without missing work."
    },
    {
      id: "ortho-2",
      patientName: "Kevin P., 33",
      treatmentName: "Adult Ceramic Aesthetic Braces for Deep Overbite",
      category: "ortho",
      beforeImage: generateDentalMacroImage({ type: 'ortho', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'ortho', state: 'after' }),
      duration: "11 Months",
      description: "Corrected a 70% deep overbite and premolar rotation using tooth-colored ceramic brackets.",
      doctorNote: "Restored ideal incisal guidance and relieved nocturnal TMJ clenching tension."
    }
  ];

  // Section 9: Full-Mouth Rehabilitation Cases
  const fullMouthCases = [
    {
      id: "fm-1",
      patientName: "Robert S., 62",
      treatmentName: "28-Unit Full-Mouth Zirconia Crown & Onlay Reconstruction",
      category: "fullmouth",
      beforeImage: generateDentalMacroImage({ type: 'fullmouth', state: 'before' }),
      afterImage: generateDentalMacroImage({ type: 'fullmouth', state: 'after' }),
      duration: "5 Weeks (Multi-Phase)",
      description: "Reconstructed severely worn dentition caused by severe nocturnal bruxism, restoring 4.5mm of lost facial vertical height.",
      doctorNote: "Utilized neuromuscular bite recording and monolithic zirconia crowns for lifelong durability."
    }
  ];

  // All combined cases for category filtering
  const allCases = [
    ...makeoverCases,
    ...implantCases,
    ...veneerCases,
    ...whiteningCases,
    ...orthoCases,
    ...fullMouthCases
  ];

  const filteredCases = selectedCategory === 'all'
    ? allCases
    : allCases.filter(c => c.category === selectedCategory);

  return (
    <PageWrapper className="min-h-screen bg-slate-50">
      <PageBanner
        badge="SMILE GALLERY"
        title="Smile Gallery"
        subtitle="Real smile transformations, before & after case studies, and clinical results achieved at Dr. Sheekha Shah DENTAL STUDIO."
        breadcrumb="Smile Gallery"
      />
      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20">



        {/* ==========================================
            2. TREATMENT CATEGORY FILTERS
        ========================================== */}
        <section id="category-filters" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-[#0B4F6C]" />
              <h2 className="text-lg font-bold font-heading text-slate-900">Filter Cases by Treatment</h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Showing <strong className="text-[#0B4F6C]">{filteredCases.length}</strong> verified cases
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center space-x-2 cursor-pointer ${selectedCategory === cat.id
                    ? 'bg-[#0B4F6C] text-white shadow-md border border-cyan-500/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
                  }`}
                id={`filter-${cat.id}`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${selectedCategory === cat.id ? 'bg-cyan-400/20 text-cyan-200' : 'bg-slate-100 text-slate-500'
                  }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ==========================================
            3. BEFORE-AND-AFTER SLIDERS
        ========================================== */}
        <section id="interactive-sliders" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Interactive View
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Interactive Before & After Comparison
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Drag or swipe the center divider left and right to inspect precision ceramic details and smile symmetry.
            </p>
          </div>

          {/* Tab Switcher for Spotlight Cases */}
          <div className="flex justify-center gap-2">
            {spotlightSliderCases.map((spot, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSliderIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeSliderIndex === idx
                    ? 'bg-[#0B4F6C] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                Case #{idx + 1}: {spot.category}
              </button>
            ))}
          </div>

          {/* Interactive Before/After Component */}
          <div className="max-w-4xl mx-auto space-y-4">
            <BeforeAfterSlider
              beforeImage={spotlightSliderCases[activeSliderIndex].before}
              afterImage={spotlightSliderCases[activeSliderIndex].after}
              title={spotlightSliderCases[activeSliderIndex].title}
              category={spotlightSliderCases[activeSliderIndex].category}
            />

            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#0B4F6C] uppercase tracking-wider">
                  Doctor's Clinical Note — Dr. Sheekha Shah
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  "{spotlightSliderCases[activeSliderIndex].doctorNote}"
                </p>
              </div>
              <div className="shrink-0 flex items-center space-x-3">
                <span className="text-xs font-bold font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  Treatment Time: {spotlightSliderCases[activeSliderIndex].duration}
                </span>
                <a
                  href="https://wa.me/919924083567?text=Hello%20Dr.%20Sheekha%20Shah%20Dental%20Studio%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AThis%20is%20a%20demo%20website%20for%20your%20clinic.%20Kindly%20let%20me%20know%20the%20available%20appointment%20slots.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Book Case</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            4. FEATURED SMILE MAKEOVERS
        ========================================== */}
        <section id="featured-makeovers" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Aesthetic Artistry
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2">
                Featured Smile Makeovers
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Comprehensive aesthetic redesigns combining 3D facial proportioning with handcrafted ceramics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {makeoverCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md space-y-4 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                      Smile Makeover
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Duration: {caseItem.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                    {caseItem.treatmentName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">Patient: {caseItem.patientName}</p>

                  {/* Side-by-Side Images */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44 sm:h-52 group/img">
                      <img src={caseItem.beforeImage} alt="Before" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-slate-900/85 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 h-44 sm:h-52 group/img">
                      <img src={caseItem.afterImage} alt="After" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {caseItem.description}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1">
                    <span className="font-bold text-[#0B4F6C] block">Dr. Sheekha Shah's Clinical Strategy:</span>
                    <p className="text-slate-600 italic">{caseItem.doctorNote}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => setZoomModalCase({
                      title: caseItem.treatmentName,
                      before: caseItem.beforeImage,
                      after: caseItem.afterImage,
                      category: "Smile Makeover",
                      desc: caseItem.description,
                      duration: caseItem.duration,
                      doctorNote: caseItem.doctorNote
                    })}
                    className="text-xs font-bold text-slate-600 hover:text-[#0B4F6C] flex items-center space-x-1 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Zoom High-Res</span>
                  </button>

                  <a
                    href="https://wa.me/919924083567?text=Hello%20Dr.%20Sheekha%20Shah%20Dental%20Studio%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AThis%20is%20a%20demo%20website%20for%20your%20clinic.%20Kindly%20let%20me%20know%20the%20available%20appointment%20slots.%0A%0AThank%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Similar Case</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            5. DENTAL IMPLANT CASES
        ========================================== */}
        <section id="implant-cases" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Surgical Precision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2">
                Dental Implant Cases
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Computer-guided titanium and zirconia implants replacing missing teeth permanently with zero bone loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {implantCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md space-y-4 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      Dental Implants
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Duration: {caseItem.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                    {caseItem.treatmentName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">Patient: {caseItem.patientName}</p>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44 sm:h-52">
                      <img src={caseItem.beforeImage} alt="Before" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-slate-900/85 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 h-44 sm:h-52">
                      <img src={caseItem.afterImage} alt="After" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {caseItem.description}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1">
                    <span className="font-bold text-[#0B4F6C] block">Surgical Execution Note:</span>
                    <p className="text-slate-600 italic">{caseItem.doctorNote}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>3D CBCT Guided</span>
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Consult Dr. Shah</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            6. VENEER CASES
        ========================================== */}
        <section id="veneer-cases" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Handcrafted Ceramics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2">
                Porcelain Veneer Cases
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Micro-thin Swiss ceramic veneers closing gaps, covering stains, and correcting minor rotations naturally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {veneerCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md space-y-4 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-teal-700 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                      Porcelain Veneers
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Duration: {caseItem.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                    {caseItem.treatmentName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">Patient: {caseItem.patientName}</p>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44 sm:h-52">
                      <img src={caseItem.beforeImage} alt="Before" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-slate-900/85 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 h-44 sm:h-52">
                      <img src={caseItem.afterImage} alt="After" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {caseItem.description}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1">
                    <span className="font-bold text-[#0B4F6C] block">Ceramic Layering Strategy:</span>
                    <p className="text-slate-600 italic">{caseItem.doctorNote}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>0.3mm Ultra-Thin</span>
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Veneer Consult</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            7. TEETH WHITENING CASES
        ========================================== */}
        <section id="whitening-cases" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Enamel Brightening
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2">
                Teeth Whitening Cases
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              In-office cold light laser whitening lightening enamel up to 8 shades with zero post-sensitivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whiteningCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md space-y-4 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-700 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                      Laser Whitening
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Duration: {caseItem.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                    {caseItem.treatmentName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">Patient: {caseItem.patientName}</p>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44 sm:h-52">
                      <img src={caseItem.beforeImage} alt="Before" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-slate-900/85 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 h-44 sm:h-52">
                      <img src={caseItem.afterImage} alt="After" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {caseItem.description}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1">
                    <span className="font-bold text-[#0B4F6C] block">Remineralization Protocol:</span>
                    <p className="text-slate-600 italic">{caseItem.doctorNote}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center space-x-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>60-Min In-Office</span>
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Whitening</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            8. BRACES & ALIGNER CASES
        ========================================== */}
        <section id="ortho-cases" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Aesthetic Alignment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2">
                Braces & Aligner Cases
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Discreet Invisalign® clear aligner biomechanics and ceramic braces straightening crowded smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {orthoCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md space-y-4 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                      Invisalign® & Braces
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Duration: {caseItem.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                    {caseItem.treatmentName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">Patient: {caseItem.patientName}</p>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44 sm:h-52">
                      <img src={caseItem.beforeImage} alt="Before" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-slate-900/85 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 h-44 sm:h-52">
                      <img src={caseItem.afterImage} alt="After" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {caseItem.description}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1">
                    <span className="font-bold text-[#0B4F6C] block">Digital Biomechanics Note:</span>
                    <p className="text-slate-600 italic">{caseItem.doctorNote}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center space-x-1">
                    <Activity className="w-3.5 h-3.5 text-indigo-600" />
                    <span>iTero® 3D Scan Tracked</span>
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Aligner Consult</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            9. FULL-MOUTH REHABILITATION CASES
        ========================================== */}
        <section id="fullmouth-cases" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Complex Reconstructions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2">
                Full-Mouth Rehabilitation Cases
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Comprehensive bite restoration combining crowns, implants, and onlays for severe wear and TMJ relief.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {fullMouthCases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                whileHover={{ y: -3 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg space-y-6 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-purple-700 uppercase tracking-wider bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
                      Full-Mouth Reconstruction
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Duration: {caseItem.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    {caseItem.treatmentName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">Patient: {caseItem.patientName}</p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {caseItem.description}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs space-y-1.5">
                    <span className="font-bold text-[#0B4F6C] text-sm block">Multi-Disciplinary Reconstruction Note:</span>
                    <p className="text-slate-700 italic leading-relaxed">{caseItem.doctorNote}</p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/919924083567?text=Hello%20Dr.%20Sheekha%20Shah%20Dental%20Studio%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AThis%20is%20a%20demo%20website%20for%20your%20clinic.%20Kindly%20let%20me%20know%20the%20available%20appointment%20slots.%0A%0AThank%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-cyan-300" />
                      <span>Book Full-Mouth Consultation with Dr. Shah</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-56 sm:h-64">
                    <img src={caseItem.beforeImage} alt="Before" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 bg-slate-900/90 text-white text-xs font-black px-3 py-1 rounded">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 h-56 sm:h-64">
                    <img src={caseItem.afterImage} alt="After" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    <span className="absolute bottom-3 left-3 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded">
                      AFTER
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            10. PATIENT TRANSFORMATION STORIES
        ========================================== */}
        <section id="patient-stories" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Real Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Patient Transformation Stories
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Hear directly from patients whose lives, careers, and personal confidence were transformed at DENTAL STUDIO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Jessica Martinez",
                role: "Bride & Creative Director",
                treatment: "10 Porcelain Veneers",
                quote: "I was extremely self-conscious about my fluorosis stains before my wedding. Dr. Sheekha Shah redesigned my smile in just 2 visits. When I walked down the aisle, I couldn't stop smiling. It was the best investment I ever made!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
              },
              {
                name: "Robert Sterling",
                role: "Corporate Attorney",
                treatment: "Guided Molar Implant",
                quote: "I had severe dental phobia from a bad childhood procedure. Dr. Sheekha Shah's gentle, zero-pain technique and peaceful clinic atmosphere put me completely at ease. The implant procedure felt effortless.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
              },
              {
                name: "Amanda Thorne",
                role: "Software Architect",
                treatment: "Invisalign® Clear Aligners",
                quote: "No gross impression trays, no metal wires poking my cheeks! The 3D iTero scanner showed me my final teeth alignment before I even started. 7 months later, my teeth are flawless.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200"
              }
            ].map((story, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-cyan-200" />

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center space-x-3">
                  <img src={story.image} alt={story.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                  <div>
                    <h4 className="text-sm font-bold font-heading text-slate-900">{story.name}</h4>
                    <span className="text-[11px] text-slate-500 block">{story.role}</span>
                    <span className="text-[10px] font-bold text-[#0B4F6C]">{story.treatment}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            11. CLINICAL DISCLAIMER
        ========================================== */}
        <section id="clinical-disclaimer">
          <div className="bg-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-3">
            <div className="flex items-center space-x-2 text-[#0B4F6C]">
              <Info className="w-5 h-5 shrink-0" />
              <h3 className="text-sm font-extrabold font-heading text-slate-900">Clinical Case Disclaimer & Patient Privacy</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              All clinical before-and-after photographs presented in this Smile Gallery depict actual patients treated by Dr. Sheekha Shah and the clinical specialist team at DENTAL STUDIO. Results may vary depending on individual oral anatomy, bone density, periodontal health, and compliance with post-treatment care guidelines. Preliminary clinical examination and 3D CBCT diagnostic imaging are required prior to undertaking any surgical or restorative procedure. Patient consent documentation for clinical media publication is maintained on file in strict accordance with healthcare privacy standards.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] font-semibold text-slate-500 border-t border-slate-200/80">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Patient Photos</span>
              </span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>ISO 9001:2015 Compliant</span>
              </span>
              <span className="flex items-center space-x-1">
                <UserCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Full Media Consent On File</span>
              </span>
            </div>
          </div>
        </section>

        {/* High-Res Image Zoom Modal */}
        <AnimatePresence>
          {zoomModalCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
              onClick={() => setZoomModalCase(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 relative border border-slate-200 shadow-2xl my-auto"
              >
                <button
                  onClick={() => setZoomModalCase(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100 inline-block">
                    {zoomModalCase.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                    {zoomModalCase.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-black text-slate-800 bg-slate-100 px-2.5 py-1 rounded inline-block">
                      BEFORE TREATMENT
                    </span>
                    <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 sm:h-72">
                      <img src={zoomModalCase.before} alt="Before" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded inline-block">
                      AFTER TREATMENT
                    </span>
                    <div className="rounded-2xl overflow-hidden border-2 border-emerald-500 h-64 sm:h-72">
                      <img src={zoomModalCase.after} alt="After" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                  <p className="text-slate-700">{zoomModalCase.desc}</p>
                  <p className="font-semibold text-[#0B4F6C]">Doctor's Strategy: {zoomModalCase.doctorNote}</p>
                </div>

                <div className="flex justify-end space-x-3">
                  <a
                    href="https://wa.me/919924083567?text=Hello%20Dr.%20Sheekha%20Shah%20Dental%20Studio%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AThis%20is%20a%20demo%20website%20for%20your%20clinic.%20Kindly%20let%20me%20know%20the%20available%20appointment%20slots.%0A%0AThank%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-colors flex items-center space-x-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-cyan-300" />
                    <span>Book Similar Transformation</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageWrapper>
  );
};
