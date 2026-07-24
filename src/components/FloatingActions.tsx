import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent('Hello Dr. Sheekha Shah DENTAL STUDIO, I would like to inquire about a dental consultation.')}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center space-y-3 pointer-events-none">
      
      {/* 1. WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat with Dr. Sheekha Shah DENTAL STUDIO on WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white shadow-xl transition-all duration-300 border-2 border-white group relative cursor-pointer pointer-events-auto focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        whileHover={{ scale: 1.12, boxShadow: '0 12px 25px -5px rgba(0, 0, 0, 0.25)' }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
        
        {/* Tooltip Label */}
        <span className="absolute right-15 sm:right-16 top-1/2 -translate-y-1/2 bg-slate-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform group-hover:translate-x-0 translate-x-1">
          Chat on WhatsApp
          <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-slate-900/95" />
        </span>
      </motion.a>

      {/* 2. Call Button */}
      <motion.a
        href={`tel:${phoneClean}`}
        id="floating-phone-btn"
        aria-label={`Call Dr. Sheekha Shah DENTAL STUDIO: ${CLINIC_INFO.phone}`}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0F6CBD] hover:bg-[#0B5598] flex items-center justify-center text-white shadow-xl transition-all duration-300 border-2 border-white group relative cursor-pointer pointer-events-auto focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
        whileHover={{ scale: 1.12, boxShadow: '0 12px 25px -5px rgba(0, 0, 0, 0.25)' }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

        {/* Tooltip Label */}
        <span className="absolute right-15 sm:right-16 top-1/2 -translate-y-1/2 bg-slate-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform group-hover:translate-x-0 translate-x-1">
          Call: {CLINIC_INFO.phone}
          <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-slate-900/95" />
        </span>
      </motion.a>

      {/* 3. Back to Top Button (Last in stack, only visible on scroll down) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            id="floating-back-to-top-btn"
            aria-label="Back to top"
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0B4F6C] hover:bg-[#083A50] flex items-center justify-center text-white shadow-xl transition-all duration-300 border-2 border-white group relative cursor-pointer pointer-events-auto focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            whileHover={{ scale: 1.12, boxShadow: '0 12px 25px -5px rgba(0, 0, 0, 0.25)' }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-200" />

            {/* Tooltip Label */}
            <span className="absolute right-15 sm:right-16 top-1/2 -translate-y-1/2 bg-slate-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform group-hover:translate-x-0 translate-x-1">
              Back to Top
              <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-slate-900/95" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};



