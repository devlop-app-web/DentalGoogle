import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, Clock, MapPin, Menu, X, Calendar, Sparkles, ChevronDown, 
  ChevronRight, MessageCircle, Stethoscope, Shield, Activity, Zap, 
  Smile, Sun, Heart, ShieldAlert, Crosshair, AlertCircle, CheckCircle 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';
import { TREATMENT_CATEGORIES } from '../data/treatmentsData';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsMegaOpen, setTreatmentsMegaOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change or click outside
  useEffect(() => {
    setTreatmentsMegaOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setTreatmentsMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent('Hello Dr. Sheekha Shah DENTAL STUDIO, I would like to inquire about booking an appointment.')}`;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/treatments', label: 'Treatments', isMega: true },
    { path: '/smile-gallery', label: 'Smile Gallery' },
    { path: '/patient-info', label: 'Patient Information' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-4 h-4 text-[#0F6CBD]" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-cyan-500" />;
      case 'Shield': return <Shield className="w-4 h-4 text-emerald-500" />;
      case 'Activity': return <Activity className="w-4 h-4 text-rose-500" />;
      case 'Zap': return <Zap className="w-4 h-4 text-amber-500" />;
      case 'Smile': return <Smile className="w-4 h-4 text-teal-500" />;
      case 'Sun': return <Sun className="w-4 h-4 text-yellow-500" />;
      case 'Heart': return <Heart className="w-4 h-4 text-pink-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-indigo-500" />;
      case 'Crosshair': return <Crosshair className="w-4 h-4 text-purple-500" />;
      case 'AlertCircle': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <CheckCircle className="w-4 h-4 text-[#2E4F4F]" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0B4F6C] text-white text-xs py-2 px-4 border-b border-cyan-500/20">
        <div className="max-w-[1536px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 sm:space-x-6 text-cyan-100 font-medium">
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-200 hover:text-white transition-colors py-0.5"
              id="top-bar-whatsapp-link"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300" />
              <span>WhatsApp Direct</span>
            </a>

            <div className="hidden md:flex items-center space-x-1.5 text-cyan-100/90">
              <Clock className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>Mon-Fri: {CLINIC_INFO.hours.weekdays}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${phoneClean}`} 
              className="flex items-center space-x-1.5 text-emerald-300 hover:text-emerald-200 font-semibold text-xs py-0.5 transition-colors"
              id="top-bar-emergency-link"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>24/7 Emergency Dental Care</span>
            </a>
            <span className="hidden sm:inline-block text-cyan-300/40">|</span>
            <div className="hidden lg:flex items-center space-x-1 text-amber-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free 3D iTero® Scan with First Visit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-slate-200/80 ${
        isScrolled ? 'shadow-md py-2.5' : 'py-3.5'
      }`}>
        <div className="max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Brand Link */}
          <Link 
            to="/" 
            className="flex items-center shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] rounded-lg p-0.5 text-left"
            id="header-brand-logo-link"
          >
            <Logo size={40} showText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 relative shrink-0" id="desktop-navbar" ref={megaMenuRef}>
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path);

              if (link.isMega) {
                return (
                  <div key={link.path} className="relative group">
                    <button
                      onClick={() => setTreatmentsMegaOpen(!treatmentsMegaOpen)}
                      className={`px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center space-x-1 ${
                        isActive 
                          ? 'text-[#0B4F6C] bg-cyan-50/90 font-bold' 
                          : 'text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-50'
                      }`}
                      id="mega-menu-trigger-btn"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${treatmentsMegaOpen ? 'rotate-180 text-[#0B4F6C]' : 'text-slate-400'}`} />
                    </button>

                    {/* Mega Menu Dropdown Panel */}
                    {treatmentsMegaOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                          <div>
                            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#0B4F6C]" />
                              All Treatment Categories
                            </h3>
                            <p className="text-xs text-slate-500">Explore specialized procedures at Dr. Sheekha Shah DENTAL STUDIO</p>
                          </div>
                          <Link 
                            to="/treatments" 
                            onClick={() => setTreatmentsMegaOpen(false)}
                            className="text-xs font-bold text-[#0B4F6C] hover:text-[#083A50] flex items-center space-x-1 bg-cyan-50 px-3 py-1.5 rounded-lg whitespace-nowrap"
                          >
                            <span>View Treatments Hub</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* 12 Categories Grid */}
                        <div className="grid grid-cols-3 gap-3 max-h-[420px] overflow-y-auto pr-1">
                          {TREATMENT_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/treatments/${cat.slug}`}
                              onClick={() => setTreatmentsMegaOpen(false)}
                              className="p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all duration-200 text-left group/item flex items-start space-x-3"
                            >
                              <div className="p-2 rounded-xl bg-slate-100 group-hover/item:bg-cyan-50 transition-colors flex-shrink-0">
                                {getCategoryIcon(cat.iconName)}
                              </div>
                              <div className="min-w-0">
                                <span className="text-xs font-bold text-slate-800 group-hover/item:text-[#0B4F6C] block truncate">
                                  {cat.title}
                                </span>
                                <span className="text-[11px] text-slate-500 line-clamp-1 block mt-0.5">
                                  {cat.subcategories.length} sub-treatments
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive 
                      ? 'text-[#0B4F6C] bg-cyan-50/90 font-bold' 
                      : 'text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-50'
                  }`}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Call & Appointment Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5 shrink-0">
            {/* Phone Icon Link */}
            <a
              href={`tel:${phoneClean}`}
              title="Call Clinic Direct"
              aria-label="Call Clinic"
              className="w-10 h-10 rounded-2xl bg-cyan-50 hover:bg-cyan-100 text-[#0B4F6C] flex items-center justify-center transition-all duration-200 border border-cyan-100/80 active:scale-95 shrink-0"
              id="header-phone-icon-btn"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* WhatsApp Icon Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Chat"
              aria-label="WhatsApp Chat"
              className="w-10 h-10 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-all duration-200 border border-emerald-100/80 active:scale-95 shrink-0"
              id="header-whatsapp-icon-btn"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600" />
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              id="header-book-appointment-cta"
              className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold uppercase tracking-wider px-5 xl:px-6 py-2.5 xl:py-3 rounded-2xl shadow-md shadow-cyan-900/20 hover:shadow-lg active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2.5 shrink-0 border border-cyan-500/20"
            >
              <Calendar className="w-5 h-5 text-cyan-300 shrink-0" />
              <div className="flex flex-col items-center justify-center text-center leading-tight text-[11px] xl:text-[12px] font-extrabold tracking-wider">
                <span className="block w-full text-center">BOOK</span>
                <span className="block w-full text-center">APPOINTMENT</span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex lg:hidden items-center space-x-2 shrink-0">
            <a
              href={`tel:${phoneClean}`}
              aria-label="Call Clinic"
              className="sm:hidden w-8 h-8 rounded-lg bg-cyan-50 text-[#0B4F6C] flex items-center justify-center border border-cyan-100"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="sm:hidden w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600" />
            </a>
            <button
              onClick={onOpenBooking}
              className="sm:hidden bg-[#0B4F6C] text-white px-2.5 py-2 rounded-lg shadow-sm font-semibold text-xs flex items-center space-x-1 whitespace-nowrap"
              id="mobile-quick-book-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
              id="mobile-hamburger-toggle"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[108px] bg-white border-b border-slate-200 shadow-2xl p-5 z-50 max-h-[calc(100vh-120px)] overflow-y-auto animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-1 mb-5">
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-base transition-colors ${
                    isActive 
                      ? 'bg-cyan-50 text-[#0B4F6C] font-bold' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-base py-3.5 rounded-xl shadow-md flex items-center justify-center space-x-2"
              id="mobile-drawer-book-btn"
            >
              <Calendar className="w-5 h-5 text-cyan-300" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${phoneClean}`}
              className="w-full border border-slate-200 text-slate-700 hover:text-[#0B4F6C] font-semibold text-sm py-3 rounded-xl flex items-center justify-center space-x-2"
              id="mobile-drawer-call-btn"
            >
              <Phone className="w-4 h-4 text-[#0B4F6C]" />
              <span>Call Clinic Direct</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm py-3 rounded-xl flex items-center justify-center space-x-2"
              id="mobile-drawer-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
