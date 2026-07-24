import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          id="back-to-top-btn"
          className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 p-3.5 bg-[#0B4F6C] text-white rounded-full shadow-2xl border-2 border-white backdrop-blur-md hover:bg-[#083A50] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-cyan-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
