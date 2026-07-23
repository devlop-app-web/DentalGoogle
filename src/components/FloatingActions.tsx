import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent('Hello Dr. Sheekha Shah DENTAL STUDIO, I would like to inquire about booking a dental consultation.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      <div className="flex flex-col space-y-2.5 pointer-events-auto">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white group relative"
          aria-label="Chat with Dr. Sheekha Shah DENTAL STUDIO on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${phoneClean}`}
          className="w-13 h-13 sm:w-14 sm:h-14 bg-[#0F6CBD] hover:bg-[#0B5598] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white group relative"
          aria-label="Call Dr. Sheekha Shah DENTAL STUDIO"
          id="floating-phone-btn"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Call Clinic: {CLINIC_INFO.phone}
          </span>
        </a>

        {/* Floating Quick Book Badge */}
        <button
          onClick={onOpenBooking}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-xl flex items-center space-x-2 border border-slate-700 hover:scale-105 active:scale-95 transition-all duration-300"
          id="floating-book-badge-btn"
        >
          <Calendar className="w-4 h-4 text-cyan-300" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
