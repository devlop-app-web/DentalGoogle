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
    { label: 'Book Appointment', path: '/book-appointment' },
    { label: 'Contact Us', path: '/contact' },
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
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700 hover:bg-blue-50' },
  ];

  return (
    <footer className="bg-[#152929] text-slate-100 border-t-2 border-[#244545] pt-12 pb-8 relative overflow-hidden shadow-2xl">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#2E5B5B]/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-[#599E9D]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top CTA Banner - Slightly lighter than footer */}
        {/* <div className="bg-[#1E3A3A] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#2C5454]">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-teal-200 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
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
              className="bg-[#2E5B5B] hover:bg-[#204242] text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider cursor-pointer border border-[#599E9D]/30"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>
            <Link
              to="/contact"
              id="footer-banner-contact-cta"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-2xl border border-white/25 transition-all duration-200 flex items-center justify-center space-x-2 text-sm cursor-pointer"
            >
              <Mail className="w-4 h-4 text-teal-300" />
              <span>Contact & Enquiry</span>
            </Link>
          </div>
        </div> */}

        {/* Four Column Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 pb-8 border-b border-[#244545]">

          {/* Column 1: Branding & About */}
          <div className="space-y-4">
            <Logo size={44} showText={true} lightText={true} />

            {/* <div className="inline-flex items-center space-x-1.5 bg-[#1E3434] text-teal-200 border border-[#284B4B] px-3 py-1.5 rounded-full text-xs font-extrabold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-teal-300" />
              <span>ISO 9001:2015 Certified Facility</span>
            </div> */}

            <p className="text-slate-300 text-xs leading-relaxed font-medium">
              We provide state-of-the-art dental treatments using modern technology, personalized care, and evidence-based dentistry to help patients achieve healthy, confident smiles in a comfortable and welcoming environment.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300/90 block mb-2.5">
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
                      className="w-9 h-9 rounded-xl bg-[#1E3434] text-slate-200 hover:text-white hover:bg-[#2E5B5B] hover:border-[#599E9D] flex items-center justify-center transition-all duration-200 border border-[#284B4B] shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="border-t md:border-t-0 border-[#244545] pt-4 md:pt-0">
            {/* Accordion Header for Mobile */}
            <button
              onClick={() => toggleSection('quickLinks')}
              className="w-full flex items-center justify-between md:cursor-default py-2 text-left"
            >
              <h4 className="text-white font-extrabold text-base font-heading tracking-tight border-b-2 border-[#599E9D] pb-1 inline-block">
                Quick Links
              </h4>
              <span className="md:hidden text-teal-300">
                {openSections.quickLinks ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>

            {/* Accordion Content */}
            <div className={`mt-3 ${openSections.quickLinks ? 'block' : 'hidden md:block'}`}>
              <ul className="space-y-2 text-xs font-medium text-slate-300">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="hover:text-[#599E9D] transition-colors flex items-center space-x-1.5 py-1 group cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Treatments */}
          <div className="border-t md:border-t-0 border-[#244545] pt-4 md:pt-0">
            {/* Accordion Header for Mobile */}
            <button
              onClick={() => toggleSection('treatments')}
              className="w-full flex items-center justify-between md:cursor-default py-2 text-left"
            >
              <h4 className="text-white font-extrabold text-base font-heading tracking-tight border-b-2 border-[#599E9D] pb-1 inline-block">
                Treatments
              </h4>
              <span className="md:hidden text-teal-300">
                {openSections.treatments ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>

            {/* Accordion Content */}
            <div className={`mt-3 ${openSections.treatments ? 'block' : 'hidden md:block'}`}>
              <ul className="space-y-2 text-xs font-medium text-slate-300">
                {treatments.map((treatment) => (
                  <li key={treatment.label}>
                    <Link
                      to={treatment.path}
                      className="hover:text-[#599E9D] transition-colors flex items-center space-x-1.5 py-1 group cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                      <span>{treatment.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact & Clinic Details */}
          <div className="border-t md:border-t-0 border-[#244545] pt-4 md:pt-0">
            {/* Accordion Header for Mobile */}
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between md:cursor-default py-2 text-left"
            >
              <h4 className="text-white font-extrabold text-base font-heading tracking-tight border-b-2 border-[#599E9D] pb-1 inline-block">
                Contact & Clinic Details
              </h4>
              <span className="md:hidden text-teal-300">
                {openSections.contact ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>

            {/* Accordion Content */}
            <div className={`mt-3 space-y-3.5 ${openSections.contact ? 'block' : 'hidden md:block'}`}>

              {/* Address */}
              <div className="flex items-start space-x-2.5 text-xs">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="font-bold text-white block">Clinic Address</span>
                  <span className="text-slate-200 text-[11px] block mt-0.5 bg-[#1E3434] px-2.5 py-1.5 rounded-lg border border-[#284B4B] shadow-2xs">
                    {CLINIC_INFO.address}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-2.5 text-xs">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="font-bold text-white block">Phone</span>
                  <a href={`tel:${phoneClean}`} className="text-teal-300 hover:text-white hover:underline font-mono text-[11px] block mt-0.5 bg-[#1E3434] px-2.5 py-1.5 rounded-lg border border-[#284B4B] shadow-2xs transition-colors">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-2.5 text-xs">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="w-full">
                  <span className="font-bold text-white block">Email</span>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="text-teal-300 hover:text-white hover:underline text-[11px] block mt-0.5 bg-[#1E3434] px-2.5 py-1.5 rounded-lg border border-[#284B4B] shadow-2xs transition-colors">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              {/* Timings */}
              {/* <div className="flex items-start space-x-2.5 text-xs">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-1 w-full">
                  <span className="font-bold text-white block">Clinic Timings</span>
                  <div className="bg-[#1E3434] p-2.5 rounded-xl border border-[#284B4B] space-y-1 text-[11px] shadow-2xs">
                    <div className="flex justify-between text-slate-200">
                      <span className="font-semibold">Monday – Saturday:</span>
                      <span className="font-mono text-teal-300 font-bold">{CLINIC_INFO.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between text-slate-200 pt-1 border-t border-[#284B4B]/80">
                      <span className="font-semibold">Sunday:</span>
                      <span className="font-bold text-amber-300">{CLINIC_INFO.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Get Directions Map Button */}
              <div className="pt-2">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1E3434] hover:bg-[#2E5B5B] text-slate-200 hover:text-white font-extrabold text-xs py-2.5 px-4 rounded-xl border border-[#284B4B] hover:border-[#599E9D] flex items-center justify-center space-x-2 transition-all duration-200 shadow-sm group cursor-pointer"
                >
                  <Map className="w-4 h-4 text-teal-400 group-hover:text-white transition-colors" />
                  <span>Get Directions / Open Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-teal-400 group-hover:text-white transition-colors" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer Section */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p className="font-medium text-center sm:text-left">
            © 2026 Dr. Sheekha Shah Dental Studio. All Rights Reserved.
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold text-slate-300">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-teal-500/40">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-teal-500/40">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Warranty Policy</Link>
            <span className="text-teal-500/40">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Medical Disclaimer</Link>

            <button
              onClick={scrollToTop}
              className="ml-2 bg-[#1E3434] hover:bg-[#2E5B5B] text-slate-200 hover:text-white p-2 rounded-xl transition-all duration-200 flex items-center space-x-1 border border-[#284B4B] shadow-2xs cursor-pointer"
              id="footer-back-to-top-btn"
              aria-label="Back to top"
            >
              <span className="text-[11px] font-bold">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

