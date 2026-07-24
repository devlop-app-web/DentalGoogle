import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  GraduationCap,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Award,
  ShieldCheck,
  HeartHandshake,
  Microscope,
  Star,
  Quote,
  Zap,
  Building,
  Users,
  Medal,
  Activity,
  ArrowRight,
  Clock,
  Compass,
  Phone,
  MapPin,
  ChevronRight,
  Eye,
  ThumbsUp,
  ShieldAlert
} from 'lucide-react';
import { DOCTORS, CLINIC_INFO } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { fadeInUp, staggerContainer, staggerItemUp, VIEWPORT_CONFIG } from '../lib/motion';

interface AboutPageProps {
  onOpenBooking: () => void;
  onOpenClinicTour: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onOpenClinicTour }) => {
  const leadDoctor = DOCTORS[0];
  const [activeTechTab, setActiveTechTab] = useState<'tech' | 'sterilisation'>('tech');
  const [selectedTourImage, setSelectedTourImage] = useState<string | null>(null);

  // Clinic Tour Images with real assets
  const clinicTourImages = [
    {
      title: "Studio Reception & Welcome Desk",
      category: "Reception",
      src: "/assets/Entry.jpeg",
      desc: "Warm, serene entry foyer designed to make patients feel immediately relaxed and welcomed."
    },
    {
      title: "Patient Relaxation Lounge",
      category: "Lounge",
      src: "/assets/Waiting.jpeg",
      desc: "Luxurious, whisper-quiet seating zone equipped with ambient lighting and refreshments."
    },
    {
      title: "Private Consultation Suite",
      category: "Consultation",
      src: "/assets/Waiting 2.jpeg",
      desc: "Comfortable private room for digital smile simulations and transparent treatment discussions."
    },
    {
      title: "Digital Operatory Suite 1",
      category: "Operatory",
      src: "/assets/Clinic.jpeg",
      desc: "Ergonomic clinical chair with overhead entertainment and iTero® 3D digital scanner."
    },
    {
      title: "Laser & Surgical Suite 2",
      category: "Operatory",
      src: "/assets/Clinic 2.jpeg",
      desc: "Hospital-grade sterile surgical operatory for computer-guided implantology."
    }
  ];

  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">About Dr. Sheekha Shah & DENTAL STUDIO</span>
        </nav>

        {/* ==========================================
            1. ABOUT HERO
        ========================================== */}
        <section id="about-hero" className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-r from-[#0B4F6C] via-[#09415A] to-[#073348] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden border border-cyan-500/20"
          >
            {/* Ambient Lighting Background Accents */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-400/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-teal-300/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-cyan-300/30 text-cyan-200 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                World-Class Aesthetic & Implant Center
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.15] tracking-tight">
                Redefining Dental Excellence with Precision & Compassion
              </h1>

              <p className="text-cyan-100/90 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Welcome to <strong className="text-white font-semibold">Dr. Sheekha Shah DENTAL STUDIO</strong> — where state-of-the-art digital dentistry meets personalized aesthetic artistry. We deliver painless, transparent, and international-standard oral care engineered around your complete comfort.
              </p>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 block">
                    <AnimatedCounter value={16} suffix="+" />
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-200 font-medium">Years Practice</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 block">
                    <AnimatedCounter value={10000} suffix="+" />
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-200 font-medium">Smiles Restored</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 block">
                    4.9<span className="text-amber-300 text-xl">★</span>
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-200 font-medium">1,280+ Reviews</span>
                </div>
              </div>

              {/* Hero CTA Action Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <motion.button
                  onClick={onOpenBooking}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-cyan-50 text-[#0B4F6C] font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
                  id="about-hero-book-btn"
                >
                  <Calendar className="w-4 h-4 text-[#0B4F6C]" />
                  <span>Schedule Consultation</span>
                </motion.button>

                <motion.button
                  onClick={onOpenClinicTour}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3.5 rounded-xl border border-white/25 transition-colors backdrop-blur-sm cursor-pointer flex items-center space-x-2"
                  id="about-hero-tour-btn"
                >
                  <Building className="w-4 h-4 text-cyan-300" />
                  <span>Virtual Studio Tour</span>
                </motion.button>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-b from-[#0B4F6C] via-[#09415A] to-[#073348] relative w-full max-w-md group"
              >
                <img 
                  src="/assets/CEO BG.png" 
                  alt="Dr. Sheekha Shah DENTAL STUDIO" 
                  className="w-full h-[460px] sm:h-[500px] object-contain object-bottom pt-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-white flex items-center justify-between shadow-xl">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400/40">
                      <ShieldCheck className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-white">ISO 9001:2015 Facility</span>
                      <span className="text-[10px] text-cyan-200">100% Sterile & Painless Tech</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-400/30">
                    Verified
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ==========================================
            2. DR. SHEEKHA SHAH PROFILE
        ========================================== */}
        <section id="doctor-profile">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#0B4F6C] to-cyan-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl bg-slate-100">
                  <img 
                    src="/assets/CEO.jpeg" 
                    alt="Dr. Sheekha Shah" 
                    className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Founder & Master Director
                    </span>
                    <h3 className="text-xl font-bold font-heading">Dr. Sheekha Shah</h3>
                    <p className="text-xs text-slate-300">{leadDoctor.credentials}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                  Doctor Spotlight
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 leading-tight">
                  Meet Dr. Sheekha Shah
                </h2>
                <p className="text-sm font-semibold text-[#0B4F6C]">
                  BDS, MDS (Cosmetic Dentistry & Implantology), FICD
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dr. Sheekha Shah is a internationally recognized cosmetic dentist, implantologist, and pioneer in micro-endodontic dentistry. With over 16 years of devoted clinical experience, she has transformed more than 10,000 smiles through precision diagnosis, gentle techniques, and artistic perfection.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Her treatment philosophy centers on preserving natural tooth structure while utilizing 3D digital scanners, computer-guided surgical templates, and soft-tissue lasers to ensure zero pain, rapid healing, and breathtaking aesthetics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Fellow, International College of Dentists (FICD)",
                  "Master Clinician in Digital Smile Design (DSD)",
                  "Specialist in Minimally Invasive Porcelain Veneers",
                  "Expert in CBCT 3D Guided Implant Surgery"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
                  id="doctor-profile-consult-btn"
                >
                  <Calendar className="w-4 h-4 text-cyan-300" />
                  <span>Book Private Consultation with Dr. Shah</span>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ==========================================
            3. PROFESSIONAL JOURNEY
        ========================================== */}
        <section id="professional-journey" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Clinical Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Professional Journey & Milestones
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              A decade and a half of non-stop learning, international training, and pioneering modern dental care.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_CONFIG}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                year: "2008",
                title: "BDS Honors Graduation",
                desc: "Graduated with distinction in Oral Surgery and Restorative Dentistry, receiving academic excellence commendations.",
                icon: GraduationCap
              },
              {
                year: "2012",
                title: "Master of Dental Surgery (MDS)",
                desc: "Completed 3-year intensive MDS specialization in Cosmetic Dentistry & Advanced Implantology.",
                icon: Award
              },
              {
                year: "2015",
                title: "FICD Global Fellowship",
                desc: "Conferred Fellowship of the International College of Dentists (FICD) for outstanding contributions to oral care.",
                icon: ShieldCheck
              },
              {
                year: "2018",
                title: "DSD Master Certification",
                desc: "Certified Master Clinician in Digital Smile Design, bringing 3D facial aesthetic architecture to her practice.",
                icon: Zap
              },
              {
                year: "2021",
                title: "DENTAL STUDIO Launch",
                desc: "Established a luxury, state-of-the-art studio equipped with iTero® 3D scanning and hospital-grade sterilization.",
                icon: Building
              },
              {
                year: "Present",
                title: "10,000+ Smiles Transformed",
                desc: "Leading a premier multidisciplinary clinic delivering laser endodontics, clear aligners, and guided implantology.",
                icon: HeartHandshake
              }
            ].map((milestone, i) => (
              <motion.div 
                key={i} 
                variants={staggerItemUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold font-mono text-[#0B4F6C] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                      {milestone.year}
                    </span>
                    <milestone.icon className="w-5 h-5 text-[#0B4F6C] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ==========================================
            4. QUALIFICATIONS & CERTIFICATIONS
        ========================================== */}
        <section id="qualifications" className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900 via-[#0D2833] to-[#091F28] rounded-3xl p-8 sm:p-12 text-white shadow-2xl space-y-8 border border-slate-700/60"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-700/80 pb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-300" />
                  Academic Standing
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-2">
                  Qualifications & Global Certifications
                </h2>
              </div>
              <p className="text-xs text-slate-300 max-w-md">
                Dr. Sheekha Shah maintains rigorous ongoing certifications from world-renowned dental academies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Master of Dental Surgery (MDS)",
                  sub: "Cosmetic Dentistry & Implantology",
                  desc: "Advanced 3-year postgraduate degree specializing in complex restorations, smile makeovers, and bone grafting."
                },
                {
                  title: "Fellowship, ICD (FICD)",
                  sub: "International College of Dentists",
                  desc: "Prestigious global honor recognizing ethical leadership, clinical mastery, and community service."
                },
                {
                  title: "DSD Master Clinician",
                  sub: "Digital Smile Design Architecture",
                  desc: "Certified in 3D facial aesthetic analysis and digital smile simulations prior to treatment execution."
                },
                {
                  title: "Invisalign® Platinum Certified",
                  sub: "Orthodontic Aligner Specialist",
                  desc: "Expert in SmartTrack® clear aligner biomechanics for discreet teen and adult teeth straightening."
                },
                {
                  title: "Certified Micro-Endodontist",
                  sub: "Advanced Rotary Endodontics",
                  desc: "Specialized training in single-visit pain-free root canals using high-power operating microscopes."
                },
                {
                  title: "ISO 9001:2015 Accreditation",
                  sub: "Clinical Safety & Hygiene Standard",
                  desc: "Fully certified clinic audit for 100% sterile cross-contamination prevention."
                }
              ].map((cert, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-colors space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white font-heading">{cert.title}</h3>
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-200 block">{cert.sub}</span>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">{cert.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ==========================================
            5. EXPERIENCE & EXPERTISE
        ========================================== */}
        <section id="experience-expertise" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Experience & Clinical Expertise
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Combining 16+ years of hands-on surgical practice with advanced technological tools for flawless results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Porcelain Veneers & Smile Design",
                count: "5,000+ Veneers Placed",
                desc: "Handcrafted, ultra-thin ceramic veneers that eliminate chips, gaps, and dark discolorations while preserving natural enamel.",
                icon: Sparkles
              },
              {
                title: "Guided Dental Implantology",
                count: "3,500+ Implants Placed",
                desc: "3D CBCT guided titanium implants with 99.4% long-term success for single teeth, bridges, or full-arch All-on-4® restoration.",
                icon: Activity
              },
              {
                title: "Single-Visit Painless Root Canals",
                count: "4,200+ Teeth Saved",
                desc: "Rotary endodontics under magnification that relieve acute toothache completely in 60 minutes with zero pain.",
                icon: Zap
              },
              {
                title: "Laser Teeth Whitening",
                count: "6,000+ Whitening Sessions",
                desc: "In-office high-potency cold light whitening brightening enamel up to 8 shades with zero post-treatment sensitivity.",
                icon: Star
              },
              {
                title: "Invisalign® Clear Aligners",
                count: "1,200+ Cases Completed",
                desc: "Removable 3D customized clear aligners that straighten crowded or spaced teeth comfortably and discreetly.",
                icon: CheckCircle
              },
              {
                title: "Full-Mouth Rehabilitation",
                count: "800+ Full Restorations",
                desc: "Comprehensive bite reconstruction combining crowns, implants, and veneers to restore complete oral function and youthfulness.",
                icon: ShieldCheck
              }
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#0B4F6C] border border-cyan-100 flex items-center justify-center">
                  <exp.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">{exp.title}</h3>
                <span className="text-xs font-bold font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full inline-block border border-emerald-200">
                  {exp.count}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            6. TREATMENT PHILOSOPHY
        ========================================== */}
        <section id="treatment-philosophy" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Our Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Treatment Philosophy — Four Pillars of Care
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every procedure at DENTAL STUDIO is governed by these uncompromising principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Minimally Invasive",
                desc: "We prioritize preserving natural tooth structure. Ultra-thin veneers and micro-drilling ensure maximum healthy enamel protection.",
                icon: Microscope
              },
              {
                num: "02",
                title: "100% Painless Tech",
                desc: "Advanced local anesthesia techniques, soothing ambient acoustic environments, and gentle gentle touch relieve all dental anxiety.",
                icon: HeartHandshake
              },
              {
                num: "03",
                title: "Biocompatible Materials",
                desc: "We strictly utilize high-grade Swiss ceramics, German titanium, and BPA-free composite resins that harmonize with body biology.",
                icon: ShieldCheck
              },
              {
                num: "04",
                title: "Total Transparency",
                desc: "Clear 3D scan visualization before starting, detailed step-by-step guidance, and zero surprise costs or hidden fees.",
                icon: Eye
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 relative overflow-hidden group">
                <span className="text-3xl font-extrabold font-mono text-cyan-200/80 group-hover:text-[#0B4F6C] transition-colors">
                  {pillar.num}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-heading text-slate-900">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            7. MESSAGE FROM THE DENTIST
        ========================================== */}
        <section id="dentist-message">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#0B4F6C] to-[#083E55] rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden border border-cyan-500/20"
          >
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-800 shrink-0">
                <img 
                  src="/assets/CEO2.png" 
                  alt="Dr. Sheekha Shah Signature" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 relative z-10">
              <Quote className="w-12 h-12 text-cyan-300/40" />
              <blockquote className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-cyan-50 italic">
                “To me, dentistry is the delicate union of high science and artistic craftsmanship. A smile is not merely teeth — it is the mirror of your health, your confidence, and your joy. When you step into DENTAL STUDIO, my promise to you is simple: complete transparency, uncompromised safety, and care so gentle you'll look forward to your visits. We don't just treat teeth; we build lifelong relationships.”
              </blockquote>
              <div className="pt-2 border-t border-cyan-400/20 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-extrabold font-heading text-white">Dr. Sheekha Shah</h4>
                  <p className="text-xs text-cyan-200">Founder & Studio Director, DENTAL STUDIO</p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest block">
                    Care • Precision • Artistry
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ==========================================
            8. MEET THE TEAM
        ========================================== */}
        <section id="meet-the-team" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Clinical Specialists
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Meet Our Dental Specialists
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              A highly trained, compassionate team dedicated to giving you an exceptional dental experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.map((doc) => (
              <motion.div 
                key={doc.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md flex flex-col justify-between group"
              >
                <div className="h-64 sm:h-72 bg-slate-100 overflow-hidden relative">
                  <img 
                    src={doc.imageUrl} 
                    alt={doc.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full border border-white/20">
                    {doc.experienceYears}+ Yrs Exp
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0B4F6C] mt-0.5">{doc.role}</p>
                    <p className="text-[11px] text-slate-500">{doc.credentials}</p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {doc.specialties.map((spec, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="w-full bg-slate-100 hover:bg-[#0B4F6C] hover:text-white text-slate-800 font-bold text-xs py-2.5 rounded-xl border border-slate-200 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Appointment</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            9. CLINIC TOUR
        ========================================== */}
        <section id="clinic-tour" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Clinic Atmosphere
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2">
                Virtual Tour — Inside DENTAL STUDIO
              </h2>
            </div>
            <button
              onClick={onOpenClinicTour}
              className="text-xs font-extrabold text-[#0B4F6C] bg-cyan-50 hover:bg-cyan-100 px-4 py-2.5 rounded-xl border border-cyan-200 transition-colors flex items-center space-x-2 shrink-0 cursor-pointer"
              id="clinic-tour-open-btn"
            >
              <Eye className="w-4 h-4 text-[#0B4F6C]" />
              <span>Launch Interactive Tour</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicTourImages.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedTourImage(img.src)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm cursor-pointer group space-y-0"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full border border-white/20">
                    {img.category}
                  </div>
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {img.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Modal Lightbox */}
          <AnimatePresence>
            {selectedTourImage && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTourImage(null)}
                className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative"
                >
                  <img src={selectedTourImage} alt="Clinic Large View" className="w-full h-full object-contain" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ==========================================
            10. TECHNOLOGY & STERILISATION
        ========================================== */}
        <section id="technology-sterilisation" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Clinical Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Technology & Sterilisation Protocols
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We invest in world-leading technology and hospital-grade sterilization protocols to guarantee safety and comfort.
            </p>

            {/* Toggle Tab */}
            <div className="inline-flex bg-slate-200/80 p-1 rounded-2xl border border-slate-300/80 mt-2">
              <button
                onClick={() => setActiveTechTab('tech')}
                className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeTechTab === 'tech'
                    ? 'bg-[#0B4F6C] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Advanced Equipment
              </button>
              <button
                onClick={() => setActiveTechTab('sterilisation')}
                className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeTechTab === 'sterilisation'
                    ? 'bg-[#0B4F6C] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Hospital Sterilisation
              </button>
            </div>
          </div>

          {activeTechTab === 'tech' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "iTero® Element 5D Digital Scanner",
                  desc: "Captures 6,000 optical frames per second for high-precision 3D digital impressions without sticky impression trays."
                },
                {
                  title: "Low-Dose CBCT 3D X-Ray",
                  desc: "Ultra-low radiation high-resolution bone scanning providing pinpoint accuracy for implant placement and nerve mapping."
                },
                {
                  title: "Diode Soft-Tissue Dental Lasers",
                  desc: "Enables painless, bloodless gum contouring, cold sore healing, and accelerated periodontal sterilization."
                },
                {
                  title: "Operating Microscope & Rotary Endodontics",
                  desc: "25x optical magnification allowing complete root canal disinfection and tooth-saving micro-restorations."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-[#0B4F6C] flex items-center justify-center shrink-0 border border-cyan-100">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold font-heading text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Class B Vacuum Autoclave",
                  desc: "Highest international medical grade sterilization guaranteeing 100% spore elimination under high pressure and temperature."
                },
                {
                  title: "Ultrasonic Instrument Scrubbing",
                  desc: "Multi-stage automated ultrasonic bath cleaning to remove microscopic debris prior to sterile pouch sealing."
                },
                {
                  title: "Medical HEPA Air Purification",
                  desc: "Continuous airborne virus, bacteria, and particulate filtration across all operatories and waiting areas."
                },
                {
                  title: "Single-Use Sterile Pouches",
                  desc: "Every instrument set is sealed in color-indicator pouches and opened strictly in front of the patient."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold font-heading text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ==========================================
            11. CORE VALUES
        ========================================== */}
        <section id="core-values" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The fundamental beliefs that shape every patient interaction, diagnosis, and treatment plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clinical Perfection",
                desc: "Zero compromise on materials, techniques, or time required to achieve long-lasting dental craftsmanship.",
                icon: Award
              },
              {
                title: "Empathetic Comfort",
                desc: "Treating every patient like family, actively listening to concerns, and respecting individual anxiety levels.",
                icon: HeartHandshake
              },
              {
                title: "Uncompromising Integrity",
                desc: "Honest diagnosis, transparent treatment plans, and zero unnecessary procedures.",
                icon: Compass
              },
              {
                title: "Continuous Innovation",
                desc: "Constantly integrating the latest global research, digital tools, and pain-free protocols.",
                icon: Sparkles
              },
              {
                title: "Hygiene Supremacy",
                desc: "Surpassing international infection control guidelines to ensure absolute patient and staff safety.",
                icon: ShieldCheck
              },
              {
                title: "Patient Empowerment",
                desc: "Educating patients through 3D scans so you are always an informed partner in your dental health.",
                icon: ThumbsUp
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 text-[#0B4F6C] flex items-center justify-center border border-slate-200">
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            12. AWARDS & ACHIEVEMENTS
        ========================================== */}
        <section id="awards-achievements" className="space-y-8 pb-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#0B4F6C] uppercase tracking-wider bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
                Honors & Recognition
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-slate-900">
                Awards & Achievements
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Recognized locally and internationally for clinical excellence, patient care, and digital innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Best Aesthetic Dental Studio 2024",
                  org: "Healthcare Excellence Awards",
                  desc: "Awarded for outstanding cosmetic smile transformation outcomes and patient satisfaction."
                },
                {
                  title: "Top Invisalign® Provider",
                  org: "Align Technology Global",
                  desc: "Recognized among top tier providers for complex clear aligner orthodontic cases."
                },
                {
                  title: "Excellence in Digital Dentistry",
                  org: "International Dental Congress",
                  desc: "Commended for 3D guided implantology and digital smile workflow integration."
                },
                {
                  title: "Patient Choice Award (4.9/5★)",
                  org: "1,280+ Verified Reviews",
                  desc: "Rated highest in patient comfort, gentle care, and transparent pricing."
                }
              ].map((award, i) => (
                <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-center space-y-2">
                  <Medal className="w-8 h-8 text-[#0B4F6C] mx-auto" />
                  <h3 className="text-sm font-bold font-heading text-slate-900">{award.title}</h3>
                  <span className="text-[11px] font-semibold text-[#0B4F6C] block">{award.org}</span>
                  <p className="text-[11px] text-slate-500 leading-relaxed pt-1">{award.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom Global CTA */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#0B4F6C] to-[#083E55] p-8 rounded-2xl text-white">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl font-bold font-heading text-white">
                  Experience World-Class Dental Care
                </h3>
                <p className="text-cyan-100 text-xs">
                  Schedule your consultation with Dr. Sheekha Shah today.
                </p>
              </div>
              <div className="flex items-center space-x-3 shrink-0">
                <button
                  onClick={onOpenBooking}
                  className="bg-white text-[#0B4F6C] hover:bg-cyan-50 font-extrabold text-xs px-5 py-3 rounded-xl shadow transition-all cursor-pointer"
                  id="about-bottom-book-btn"
                >
                  Book Consultation
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-3 rounded-xl border border-white/20 transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </PageWrapper>
  );
};



