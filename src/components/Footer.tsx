import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight, 
  ArrowUp, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Map,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/homeData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    quickLinks: false,
    treatments: false,
    contact: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Smile Gallery', path: '/smile-gallery' },
    { label: 'Patient Information', path: '/patient-info' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'General Enquiry', path: '/general-enquiry' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Book Appointment', action: onOpenBooking },
  ];

  const treatments = [
    { label: 'General Dentistry', path: '/treatments' },
    { label: 'Cosmetic Dentistry', path: '/treatments' },
    { label: 'Dental Implants', path: '/treatments' },
    { label: 'Root Canal Treatment', path: '/treatments' },
    { label: 'Orthodontics', path: '/treatments' },
    { label: 'Teeth Whitening', path: '/treatments' },
    { label: 'Children\'s Dentistry', path: '/treatments' },
    { label: 'Gum Treatment', path: '/treatments' },
    { label: 'Oral Surgery', path: '/treatments' },
    { label: 'Emergency Dentistry', path: '/treatments' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600 hover:bg-blue-50' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600 hover:bg-pink-50' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600 hover:bg-red-50' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700 hover:bg-blue-50' },
    { name: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/${phoneClean}`, color: 'hover:text-emerald-600 hover:bg-emerald-50' },
  ];

  return (
    <footer className="bg-[#395B5C] text-slate-100 border-t-2 border-[#2C4849] pt-12 pb-8 relative overflow-hidden shadow-2xl">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-emerald-300/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top CTA Banner - Rich Accent Container */}
        <div className="bg-gradient-to-r from-[#2B4748] via-[#243E3F] to-[#1D3334] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#4E7879]">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-cyan-200 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              ISO 9001:2015 Certified Facility
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-teal-100/90 text-sm max-w-xl leading-relaxed">
              Experience modern, painless dental care crafted with precision and empathy by Dr. Sheekha Shah.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              id="footer-banner-book-cta"
              className="bg-white hover:bg-teal-50 text-[#2B4748] font-extrabold px-6 py-3.5 rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 text-[#2B4748]" />
              <span>Book Appointment</span>
            </button>
            <Link
              to="/general-enquiry"
              id="footer-banner-contact-cta"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-2xl border border-white/25 transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
            >
              <Mail className="w-4 h-4 text-cyan-300" />
              <span>General Enquiry</span>
            </Link>
          </div>
        </div>

        {/* Four Column Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 pb-8 border-b border-[#4B7374]">
          
          {/* Column 1: Branding & About */}
          <div className="space-y-4">
            <Logo size={44} showText={true} lightText={true} />

            <div className="inline-flex items-center space-x-1.5 bg-[#2B4748] text-teal-200 border border-[#4B7374] px-3 py-1.5 rounded-full text-xs font-extrabold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              <span>ISO 9001:2015 Certified Facility</span>
            </div>

            <p className="text-teal-100/90 text-xs leading-relaxed font-medium">
              We provide state-of-the-art dental treatments using modern technology, personalized care, and evidence-based dentistry to help patients achieve healthy, confident smiles in a comfortable and welcoming environment.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200/80 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      aria-label={social.name}
                      className="w-9 h-9 rounded-xl bg-[#2B4748] text-teal-100 hover:text-white hover:bg-white/20 flex items-center justify-center transition-all duration-200 border border-[#4B7374] shadow-2xs hover:scale-105 active:scale-95"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="border-t md:border-t-0 border-[#4B7374] pt-4 md:pt-0">
            {/* Accordion Header for Mobile */}
            <button
              onClick={() => toggleSection('quickLinks')}
              className="w-full flex items-center justify-between md:cursor-default py-2 text-left"
            >
              <h4 className="text-white font-extrabold text-base font-heading tracking-tight border-b-2 border-cyan-300 pb-1 inline-block">
                Quick Links
              </h4>
              <span className="md:hidden text-teal-200">
                {openSections.quickLinks ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>

            {/* Accordion Content */}
            <div className={`mt-3 ${openSections.quickLinks ? 'block' : 'hidden md:block'}`}>
              <ul className="space-y-2 text-xs font-medium text-teal-100">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="hover:text-white transition-colors flex items-center space-x-1.5 py-1 text-left w-full group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                        <span>{link.label}</span>
                      </button>
                    ) : (
                      <Link
                        to={link.path!}
                        className="hover:text-white transition-colors flex items-center space-x-1.5 py-1 group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                        <span>{link.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Treatments */}
          <div className="border-t md:border-t-0 border-[#4B7374] pt-4 md:pt-0">
            {/* Accordion Header for Mobile */}
            <button
              onClick={() => toggleSection('treatments')}
              className="w-full flex items-center justify-between md:cursor-default py-2 text-left"
            >
              <h4 className="text-white font-extrabold text-base font-heading tracking-tight border-b-2 border-cyan-300 pb-1 inline-block">
                Treatments
              </h4>
              <span className="md:hidden text-teal-200">
                {openSections.treatments ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>

            {/* Accordion Content */}
            <div className={`mt-3 ${openSections.treatments ? 'block' : 'hidden md:block'}`}>
              <ul className="space-y-2 text-xs font-medium text-teal-100">
                {treatments.map((treatment) => (
                  <li key={treatment.label}>
                    <Link
                      to={treatment.path}
                      className="hover:text-white transition-colors flex items-center space-x-1.5 py-1 group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                      <span>{treatment.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact & Clinic Details */}
          <div className="border-t md:border-t-0 border-[#4B7374] pt-4 md:pt-0">
            {/* Accordion Header for Mobile */}
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between md:cursor-default py-2 text-left"
            >
              <h4 className="text-white font-extrabold text-base font-heading tracking-tight border-b-2 border-cyan-300 pb-1 inline-block">
                Contact & Clinic Details
              </h4>
              <span className="md:hidden text-teal-200">
                {openSections.contact ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>

            {/* Accordion Content */}
            <div className={`mt-3 space-y-3.5 ${openSections.contact ? 'block' : 'hidden md:block'}`}>
              
              {/* Address */}
              <div className="flex items-start space-x-2.5 text-xs">
                <MapPin className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="font-bold text-white block">Clinic Address</span>
                  <span className="text-teal-100 text-[11px] block mt-0.5 bg-[#2B4748] px-2.5 py-1.5 rounded-lg border border-[#4B7374] shadow-2xs">
                    {CLINIC_INFO.address}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-2.5 text-xs">
                <Phone className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="font-bold text-white block">Phone</span>
                  <a href={`tel:${phoneClean}`} className="text-cyan-200 hover:underline font-mono text-[11px] block mt-0.5 bg-[#2B4748] px-2.5 py-1.5 rounded-lg border border-[#4B7374] shadow-2xs">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-2.5 text-xs">
                <Mail className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="font-bold text-white block">Email</span>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="text-cyan-200 hover:underline text-[11px] block mt-0.5 bg-[#2B4748] px-2.5 py-1.5 rounded-lg border border-[#4B7374] shadow-2xs">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-2.5 text-xs">
                <Clock className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                <div className="space-y-1 w-full">
                  <span className="font-bold text-white block">Clinic Timings</span>
                  <div className="bg-[#2B4748] p-2.5 rounded-xl border border-[#4B7374] space-y-1 text-[11px] shadow-2xs">
                    <div className="flex justify-between text-teal-100">
                      <span className="font-semibold">Monday – Saturday:</span>
                      <span className="font-mono text-cyan-200 font-bold">{CLINIC_INFO.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between text-teal-100 pt-1 border-t border-[#4B7374]/60">
                      <span className="font-semibold">Sunday:</span>
                      <span className="font-bold text-amber-300">{CLINIC_INFO.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Map Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#2B4748] hover:bg-white hover:text-[#2B4748] text-teal-100 font-extrabold text-xs py-2.5 px-4 rounded-xl border border-[#4B7374] flex items-center justify-center space-x-2 transition-all duration-200 shadow-sm group"
                >
                  <Map className="w-4 h-4 text-cyan-300 group-hover:text-[#2B4748] transition-colors" />
                  <span>Get Directions / Open Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-cyan-300 group-hover:text-[#2B4748] transition-colors" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer Section */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-100/90 gap-4">
          <p className="font-medium text-center sm:text-left">
            © 2026 Dr. Sheekha Shah Dental Studio. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold text-teal-200">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-teal-300/40">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-teal-300/40">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Warranty Policy</Link>
            <span className="text-teal-300/40">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Medical Disclaimer</Link>

            <button
              onClick={scrollToTop}
              className="ml-2 bg-[#2B4748] hover:bg-white hover:text-[#2B4748] text-teal-100 p-2 rounded-xl transition-all duration-200 flex items-center space-x-1 border border-[#4B7374] shadow-2xs"
              id="footer-back-to-top-btn"
              aria-label="Back to top"
            >
              <span className="text-[11px] font-bold">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

