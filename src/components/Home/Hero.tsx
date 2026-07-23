import React, { useState } from 'react';
import { Calendar, Phone, ShieldCheck, Sparkles, Star, ChevronRight, CheckCircle2, Award, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../../data/homeData';

interface HeroProps {
  onOpenBookingWithService?: (serviceId: string) => void;
  onOpenBooking: () => void;
  onSelectTreatment?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingWithService, onOpenBooking }) => {
  const [selectedQuickService, setSelectedQuickService] = useState('invisalign');

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
    <section className="relative bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-left-4 duration-700">
            
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
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
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] font-heading tracking-tight leading-[1.12]">
              World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0083B0] to-[#00B4D8]">Dental Care</span> By Dr. Sheekha Shah
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experience gentle, state-of-the-art cosmetic dentistry, Invisalign®, dental implants, and micro-endodontics in a serene, fear-free clinic environment.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-left max-w-xl mx-auto lg:mx-0">
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
            </div>

            {/* Action Buttons: Book, Call, WhatsApp */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenBooking}
                id="hero-book-consultation-btn"
                className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-cyan-950/15 hover:shadow-xl active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2 border border-cyan-400/30"
              >
                <Calendar className="w-5 h-5 text-cyan-300" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href={`tel:${phoneFormatted}`}
                id="hero-phone-call-btn"
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-2xs hover:shadow transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#0B4F6C]" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-2xs hover:shadow transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Service Selection Bar */}
            <div className="pt-2 max-w-xl mx-auto lg:mx-0">
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

                <button
                  type="submit"
                  id="hero-quick-submit-btn"
                  className="w-full sm:w-auto bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow transition-all duration-200 flex items-center justify-center space-x-1.5 whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Reserve Slot</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Doctor Image Hero Banner */}
          <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Frame with CEO BG.png */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#395B5C] via-[#2D4A4B] to-[#1E3435] group">
                <img
                  src="/assets/CEO BG.png"
                  alt="Dr. Sheekha Shah Lead Dental Surgeon"
                  className="w-full h-[460px] sm:h-[500px] object-contain object-bottom pt-4 group-hover:scale-105 transition-transform duration-700 ease-out"
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
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-3 shadow-xl border border-cyan-100 flex items-center space-x-3 hidden sm:flex">
                <img
                  src="/assets/CEO2.png"
                  alt="Dr. Sheekha Shah Avatar"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#0B4F6C]"
                />
                <div>
                  <span className="text-xs font-extrabold text-slate-800 block">16+ Years Experience</span>
                  <span className="text-[10px] text-[#0B4F6C] font-extrabold block">12,500+ Happy Patients</span>
                </div>
              </div>

              {/* Floating Badge 2: Lifetime Warranty */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-3.5 shadow-xl border border-cyan-100 hidden sm:flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-[#0B4F6C]">
                  <ShieldCheck className="w-6 h-6 text-[#00B4D8]" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-slate-900 block font-heading leading-tight">Lifetime Warranty</span>
                  <span className="text-[10px] font-bold text-slate-500">On Crowns & Implants</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
