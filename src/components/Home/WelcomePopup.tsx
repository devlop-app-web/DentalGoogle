import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import welcomeImg from '@/public/assets/Image/Welcomepop.png';

// Module-level JS runtime flag. Re-initialized to false on EVERY real browser page load (F5, Ctrl+Shift+R, new tab, direct URL).
let hasShownWelcomeThisBrowserLoad = false;

export const WelcomePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // If the popup has already been evaluated/shown in this browser session runtime, exit immediately
    if (hasShownWelcomeThisBrowserLoad) {
      return;
    }
    // Mark immediately so SPA route changes (e.g. Home -> About -> Home, clicking Home menu, Back/Forward) will NOT re-trigger
    hasShownWelcomeThisBrowserLoad = true;

    // Show popup after a 700ms delay on real browser load
    const timer = setTimeout(() => {
      setIsOpen(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShowPopup(true);
        });
      });
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Disable background scroll when popup is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Wait for the fade-out animation to complete
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close only if clicking the backdrop, not the popup content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 lg:p-12 transition-all duration-300 ${
        showPopup ? 'opacity-100 backdrop-blur-sm bg-black/40' : 'opacity-0 backdrop-blur-none bg-black/0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative w-[95%] sm:w-[92%] md:w-[90%] max-w-[1000px] transition-all duration-300 transform flex items-center justify-center ${
          showPopup ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
      >
        <div className="relative inline-flex items-center justify-center max-w-full">
          <button 
            onClick={handleClose}
            className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10 p-2 bg-white/95 hover:bg-white text-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <img 
            src={welcomeImg} 
            alt="Welcome Promotion" 
            className="max-w-full h-auto max-h-[80vh] md:max-h-[85vh] lg:max-h-[90vh] object-contain rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] block"
          />
        </div>
      </div>
    </div>
  );
};

