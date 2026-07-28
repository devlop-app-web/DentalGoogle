import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';

// Official WhatsApp Vector Icon (32x32 centered)
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-white fill-white" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 2a13.94 13.94 0 0 0-11.95 21.14L2 30l7.05-1.84A13.93 13.93 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.88-1.61l-.42-.25-4.37 1.14 1.17-4.26-.27-.44A11.51 11.51 0 1 1 16 27.5zm6.33-8.63c-.35-.17-2.05-1-2.37-1.12-.32-.11-.55-.17-.78.17-.23.35-.9 1.12-1.1 1.35-.2.23-.4.25-.75.08a9.47 9.47 0 0 1-2.78-1.71 10.45 10.45 0 0 1-1.92-2.39c-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.68-.57-.59-.78-.6h-.67c-.23 0-.6.09-.92.43s-1.22 1.19-1.22 2.9 1.25 3.36 1.42 3.59c.17.23 2.46 3.76 5.96 5.27.83.36 1.48.58 1.99.74.84.27 1.6.23 2.2.14.67-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.09-.15-.32-.23-.67-.4z" />
  </svg>
);

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
  const whatsappMsg = `Hello Dr. Sheekha Shah Dental Studio,\n\nI would like to book an appointment.\n\nThis is a demo website for your clinic. Kindly let me know the available appointment slots.\n\nThank you.`;
  const whatsappUrl = `https://wa.me/919924083567?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center space-y-3 pointer-events-none">
      
      {/* 1. Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat with Dr. Sheekha Shah DENTAL STUDIO on WhatsApp"
        style={{
          background: '#25D366',
          color: '#ffffff',
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.9)',
          boxShadow: '0 12px 30px rgba(37,211,102,.35)'
        }}
        className="w-[60px] h-[60px] flex items-center justify-center text-white transition-all duration-300 group relative cursor-pointer pointer-events-auto focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        whileHover={{
          scale: 1.08,
          y: -2,
          boxShadow: '0 16px 35px rgba(37,211,102,.5)'
        }}
        whileTap={{ scale: 0.94 }}
        animate={{
          scale: [1, 1.04, 1]
        }}
        transition={{
          scale: {
            repeat: Infinity,
            repeatDelay: 4,
            duration: 1.2,
            ease: "easeInOut"
          }
        }}
      >
        <WhatsAppIcon className="w-[32px] h-[32px] text-white fill-white shrink-0" />
        
        {/* Tooltip Label */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform group-hover:translate-x-0 translate-x-1">
          Chat on WhatsApp
          <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-slate-900/95" />
        </span>
      </motion.a>

      {/* 2. Call Button */}
      <motion.a
        href={`tel:${phoneClean}`}
        id="floating-phone-btn"
        aria-label={`Call Dr. Sheekha Shah DENTAL STUDIO: ${CLINIC_INFO.phone}`}
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#2E5B5B] hover:bg-[#204242] flex items-center justify-center text-white shadow-xl transition-all duration-300 border-2 border-white group relative cursor-pointer pointer-events-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
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

      {/* 3. Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            id="floating-back-to-top-btn"
            aria-label="Back to top"
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#2E5B5B] hover:bg-[#204242] flex items-center justify-center text-white shadow-xl transition-all duration-300 border-2 border-white group relative cursor-pointer pointer-events-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            whileHover={{ scale: 1.12, boxShadow: '0 12px 25px -5px rgba(0, 0, 0, 0.25)' }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-teal-200" />

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
