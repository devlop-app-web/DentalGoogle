import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, ShieldCheck, Sparkles, Star, ChevronRight, CheckCircle2, Award, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../../data/homeData';
import clinicImg from '@/public/assets/Image/Clinic.jpeg';
import clinic2Img from '@/public/assets/Image/Clinic 2.jpeg';
import waiting2Img from '@/public/assets/Image/Waiting 2.jpeg';
import {
  staggerContainer,
  staggerItemUp,
  staggerItemLeft,
  staggerItemRight,
  buttonHover,
  floatAnimation,
  VIEWPORT_CONFIG
} from '../../lib/motion';

const heroSlides = [
  {
    image: clinicImg,
    title: "Ahmedabad's Premier Cosmetic Dentistry & Smile Clinic",
    description: "Experience painless, technology-driven dental care with Dr. Sheekha Shah. From smile makeovers to advanced dental implants, we create confident smiles in a comfortable and welcoming environment.",
    features: ["Zero-Pain Dentistry", "Digital Smile Design", "Lifetime Warranty*"]
  },
  {
    image: clinic2Img,
    title: "Precision Dentistry Powered by Advanced Technology",
    description: "Discover world-class dental treatments using modern digital equipment, personalised care, and minimally invasive techniques for healthier, brighter smiles.",
    features: ["3D Digital Scanning", "Advanced Dental Implants", "Same-Day Consultation"]
  },
  {
    image: waiting2Img,
    title: "Relax. Smile. You're in Expert Hands.",
    description: "Enjoy a calm, patient-first dental experience where comfort meets clinical excellence. Every visit is designed to make your treatment stress-free and reassuring.",
    features: ["Comfortable Clinic", "Friendly Care Team", "Trusted by 12,500+ Patients"]
  }
];

interface HeroProps {
  onOpenBookingWithService?: (serviceId: string) => void;
  onOpenBooking: () => void;
  onSelectTreatment?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingWithService, onOpenBooking }) => {
  const [selectedQuickService, setSelectedQuickService] = useState('invisalign');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenBookingWithService) {
      onOpenBookingWithService(selectedQuickService);
    } else {
      onOpenBooking();
    }
  };

  const whatsappNumber = CLINIC_INFO.whatsapp || '919825000000';
  const phoneFormatted = CLINIC_INFO.phone.replace(/[^0-9+]/g, '');

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-slate-900">

      {/* Full-width Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide}
            src={heroSlides[currentSlide].image}
            alt="Clinic Environment"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark Premium Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(8,22,34,0.85) 0%, rgba(8,22,34,0.65) 45%, rgba(8,22,34,0.2) 100%)'
          }}
        />
      </div>

      {/* Slider Controls - Bottom Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 z-20 flex items-center space-x-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slider Controls - Arrows (Desktop) */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition hidden md:block"
      >
        <ChevronRight className="w-6 h-6 rotate-180" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition hidden md:block"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="visible"
          className="max-w-[650px] space-y-6 text-center md:text-left mx-auto md:mx-0 pt-16 md:pt-0"
        >

          {/* Badges Bar */}
          <motion.div variants={staggerItemUp} className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            {/* Google Rating */}
            <div className="inline-flex items-center space-x-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 shadow-2xs text-xs font-bold text-white">
              <div className="flex items-center space-x-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.9 / 5.0 Rating</span>
              <span className="text-white/50">•</span>
              <span className="text-teal-200">850+ Reviews</span>
            </div>

            {/* Lifetime Warranty Badge */}
            <div className="inline-flex items-center space-x-1.5 bg-[#1E3A3A]/80 backdrop-blur-md text-teal-100 border border-[#2C5454]/60 px-3 py-1 rounded-full text-xs font-extrabold shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              <span>Lifetime Warranty Protection</span>
            </div>


          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={staggerItemUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
            {heroSlides[currentSlide].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={staggerItemUp} className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
            {heroSlides[currentSlide].description}
          </motion.p>

          {/* Key Value Bullets */}
          <motion.div variants={staggerItemUp} className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-left">
            {heroSlides[currentSlide].features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons: Book, Call, WhatsApp */}
          <motion.div variants={staggerItemUp} className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <motion.a
              {...buttonHover}
              href="https://wa.me/919924083567?text=Hello%20Dr.%20Sheekha%20Shah%20Dental%20Studio%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AThis%20is%20a%20demo%20website%20for%20your%20clinic.%20Kindly%20let%20me%20know%20the%20available%20appointment%20slots.%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              id="hero-book-consultation-btn"
              className="bg-[#2E5B5B] hover:bg-[#204242] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#2E5B5B]/30 border border-teal-400/30 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-teal-200" />
              <span>Book Appointment</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </motion.a>

            <motion.a
              {...buttonHover}
              href={`tel:${phoneFormatted}`}
              id="hero-phone-call-btn"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-2xs hover:shadow flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Now</span>
            </motion.a>
          </motion.div>



        </motion.div>
      </div>
    </section>
  );
};
