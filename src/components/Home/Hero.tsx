import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, ShieldCheck, Sparkles, Star, ChevronRight, CheckCircle2, Award, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../../data/homeData';
import { 
  staggerContainer, 
  staggerItemUp, 
  staggerItemLeft, 
  staggerItemRight, 
  buttonHover, 
  floatAnimation,
  VIEWPORT_CONFIG
} from '../../lib/motion';

interface HeroProps {
  onOpenBookingWithService?: (serviceId: string) => void;
  onOpenBooking: () => void;
  onSelectTreatment?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingWithService, onOpenBooking }) => {
  const [selectedQuickService, setSelectedQuickService] = useState('invisalign');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

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
    <section 
      onMouseMove={handleMouseMove}
      className="relative bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
    >
      
      {/* Background Ambient Floating Glows */}
      <motion.div 
        {...floatAnimation}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div 
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Action CTAs */}
          <motion.div 
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Badges Bar */}
            <motion.div variants={staggerItemUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Google Rating */}
              <div className="inline-flex items-center space-x-1.5 bg-white border border-cyan-200/80 rounded-full px-3.5 py-1.5 shadow-2xs text-xs font-bold text-slate-800">
                <div className="flex items-center space-x-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.9 / 5.0 Rating</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#0B4F6C]">850+ Reviews</span>
              </div>

              {/* Lifetime Warranty Badge */}
              <div className="inline-flex items-center space-x-1.5 bg-cyan-900 text-cyan-100 border border-cyan-700 px-3 py-1 rounded-full text-xs font-extrabold shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
                <span>Lifetime Warranty Protection</span>
              </div>

              {/* ISO Certified */}
              <div className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-extrabold">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO 9001:2015</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={staggerItemUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] font-heading tracking-tight leading-[1.12]">
              World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0083B0] to-[#00B4D8]">Dental Care</span> By Dr. Sheekha Shah
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={staggerItemUp} className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience gentle, state-of-the-art cosmetic dentistry, Invisalign®, dental implants, and micro-endodontics in a serene, fear-free clinic environment.
            </motion.p>

            {/* Key Value Bullets */}
            <motion.div variants={staggerItemUp} className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Zero-Pain Dentistry</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Free 3D iTero® Scan</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>0% Interest EMI</span>
              </div>
            </motion.div>

            {/* Action Buttons: Book, Call, WhatsApp */}
            <motion.div variants={staggerItemUp} className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <motion.button
                {...buttonHover}
                onClick={onOpenBooking}
                id="hero-book-consultation-btn"
                className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-cyan-950/15 border border-cyan-400/30 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-cyan-300" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </motion.button>

              <motion.a
                {...buttonHover}
                href={`tel:${phoneFormatted}`}
                id="hero-phone-call-btn"
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-2xs hover:shadow flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#0B4F6C]" />
                <span>Call Now</span>
              </motion.a>

              <motion.a
                {...buttonHover}
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-2xs hover:shadow flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* Quick Service Selection Bar */}
            <motion.div variants={staggerItemUp} className="pt-2 max-w-xl mx-auto lg:mx-0">
              <form 
                onSubmit={handleQuickBook}
                className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-cyan-200/80 shadow-lg shadow-cyan-900/5 flex flex-col sm:flex-row items-center gap-2.5"
              >
                <div className="w-full sm:w-auto flex-1 text-left">
                  <label htmlFor="hero-quick-service" className="block text-[10px] font-extrabold text-[#0B4F6C] uppercase tracking-wider mb-0.5">
                    Select Preferred Treatment
                  </label>
                  <select
                    id="hero-quick-service"
                    value={selectedQuickService}
                    onChange={(e) => setSelectedQuickService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0B4F6C] focus:outline-none"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} ({t.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  id="hero-quick-submit-btn"
                  className="w-full sm:w-auto bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow flex items-center justify-center space-x-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Reserve Slot</span>
                </motion.button>
              </form>
            </motion.div>

          </motion.div>

          {/* Right Column: Doctor Image Hero Banner with Soft Parallax */}
          <motion.div 
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{
              transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0px)`
            }}
            className="lg:col-span-5 relative transition-transform duration-300 ease-out"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Frame with CEO BG.png */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#395B5C] via-[#2D4A4B] to-[#1E3435] group">
                <img
                  src="/assets/CEO BG.png"
                  alt="Dr. Sheekha Shah Lead Dental Surgeon"
                  className="w-full h-[460px] sm:h-[500px] object-contain object-bottom pt-4 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="eager"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#112324]/90 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 text-xs flex items-center justify-between shadow-lg">
                    <div>
                      <span className="font-extrabold block text-sm text-white">Dr. Sheekha Shah</span>
                      <span className="text-cyan-200 text-[11px] font-semibold">Founder & Lead Cosmetic Surgeon</span>
                    </div>
                    <span className="bg-[#10B981] text-white font-extrabold px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider shadow-2xs">
                      Available Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Doctor Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-5 -left-5 bg-white rounded-2xl p-3 shadow-xl border border-cyan-100 flex items-center space-x-3 hidden sm:flex"
              >
                <img
                  src="/assets/CEO2.png"
                  alt="Dr. Sheekha Shah Avatar"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#0B4F6C]"
                />
                <div>
                  <span className="text-xs font-extrabold text-slate-800 block">16+ Years Experience</span>
                  <span className="text-[10px] text-[#0B4F6C] font-extrabold block">12,500+ Happy Patients</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Lifetime Warranty */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-3.5 shadow-xl border border-cyan-100 hidden sm:flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-[#0B4F6C]">
                  <ShieldCheck className="w-6 h-6 text-[#00B4D8]" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-slate-900 block font-heading leading-tight">Lifetime Warranty</span>
                  <span className="text-[10px] font-bold text-slate-500">On Crowns & Implants</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

