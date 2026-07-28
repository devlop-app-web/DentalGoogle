import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, MessageCircle, AlertTriangle, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../../data/homeData';
import ceoBgImg from '@/public/assets/Image/CEO BG.png';
import { buttonHover, VIEWPORT_CONFIG } from '../../lib/motion';

interface FinalAppointmentCTAProps {
  onOpenBooking: () => void;
}

export const FinalAppointmentCTA: React.FC<FinalAppointmentCTAProps> = ({ onOpenBooking }) => {
  const whatsappNumber = CLINIC_INFO.whatsapp || '919924083567';
  const phoneFormatted = CLINIC_INFO.phone.replace(/[^0-9+]/g, '');

  return (
    <section className="py-20 bg-gradient-to-br from-[#152929] via-[#1E3A3A] to-[#2E5B5B] text-white relative overflow-hidden shadow-2xl">

      {/* Background Lighting Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
          transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#599E9D]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
          transition: { duration: 11, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-teal-300/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >

          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            <div className="inline-flex items-center space-x-2 bg-teal-400/20 text-teal-200 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider border border-teal-300/30">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Transform Your Smile Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Ready To Experience World-Class, Painless Dental Care?
            </h2>

            <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed max-w-xl">
              Schedule your comprehensive consultation with Dr. Sheekha Shah. Take advantage of zero-pain techniques, 3D digital oral scanning, and Lifetime Warranty protection.
            </p>

            {/* Trust Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-teal-100 pt-1">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> ISO 9001:2015 Certified</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Lifetime Warranty</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 0% Interest EMI</span>
            </div>

            {/* Action Buttons Grid */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* Book Appointment */}
              <motion.button
                {...buttonHover}
                onClick={onOpenBooking}
                id="final-cta-book-btn"
                className="bg-[#2E5B5B] hover:bg-[#204242] text-white font-extrabold text-sm px-7 py-4 rounded-2xl shadow-xl flex items-center justify-center space-x-2 uppercase tracking-wider cursor-pointer border border-teal-400/30"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              {/* Call Now */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${phoneFormatted}`}
                id="final-cta-call-btn"
                className="bg-white/15 hover:bg-white/25 text-white font-bold text-sm px-5 py-4 rounded-2xl border border-white/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>Call Now</span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                id="final-cta-whatsapp-btn"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-5 py-4 rounded-2xl shadow transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>

              {/* Emergency Appointment */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenBooking}
                id="final-cta-emergency-btn"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-5 py-4 rounded-2xl shadow transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4 text-white" />
                <span>Emergency Appointment</span>
              </motion.button>
            </div>

          </div>

          {/* Right Column: Doctor Image (CEO BG.png) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-3xl overflow-hidden border-4 border-white/20 bg-gradient-to-b from-[#2B4748] via-[#243E3F] to-[#1D3334] shadow-2xl group">
              <img
                src={ceoBgImg}
                alt="Dr. Sheekha Shah - DENTAL STUDIO"
                className="w-full h-[380px] sm:h-[420px] object-contain object-bottom pt-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs font-bold text-teal-200 block">Dr. Sheekha Shah</span>
                <span className="text-[11px] text-slate-300">Lead Cosmetic Surgeon • DENTAL STUDIO</span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

