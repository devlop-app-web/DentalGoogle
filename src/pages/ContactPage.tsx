import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  Building2,
  Car,
  Plane,
  Navigation
} from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';
import { PageBanner } from '../components/ui/PageBanner';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  // Clean phone numbers for tel: links
  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const emergencyPhoneClean = CLINIC_INFO.emergencyPhone.replace(/[^0-9]/g, '');

  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'address' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <PageWrapper className="min-h-screen bg-slate-50">
      <PageBanner
        badge="CONTACT US"
        title="Contact Us"
        subtitle="Get in touch with Dr. Sheekha Shah DENTAL STUDIO for appointments, inquiries, and directions."
        breadcrumb="Contact Us"
      />
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">

        {/* Quick Jump Links Bar */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none text-xs font-semibold">
            <span className="text-slate-400 uppercase tracking-wider shrink-0 text-[10px] font-bold">Jump to Section:</span>
            {[
              { id: 'sec-contactdetails', label: '1. Contact Details' },
              { id: 'sec-googlemap', label: '2. Google Map' },
            ].map((pill) => (
              <a
                key={pill.id}
                href={`#${pill.id}`}
                className="shrink-0 bg-white hover:bg-[#0B4F6C] hover:text-white text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs transition-all"
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>

        {/* ==========================================
            SECTION 1: CLINIC CONTACT DETAILS
           ========================================== */}
        <section id="sec-contactdetails" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 1</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Clinic Contact Details
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Comprehensive contact access points for local and international patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#0B4F6C] flex items-center justify-center font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Clinic Location</span>
                  <h3 className="text-base font-bold text-slate-800 font-heading">Dr. Sheekha Shah DENTAL STUDIO</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
                <p className="text-[11px] text-teal-700 bg-teal-50 p-2.5 rounded-xl border border-teal-100 font-medium">
                  📍 Landmark: 15 mins from International Airport (BOM). Complimentary Valet Parking available.
                </p>
              </div>

              <button
                onClick={() => handleCopy(CLINIC_INFO.address, 'address')}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                {copiedAddress ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copiedAddress ? 'Address Copied!' : 'Copy Full Address'}</span>
              </button>
            </div>

            {/* Phone Support Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Direct Phone Lines</span>
                  <h3 className="text-base font-bold text-slate-800 font-heading">Clinic Hotline & Reception</h3>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Main Reception:</span>
                    <a href={`tel:${phoneClean}`} className="font-bold text-[#0B4F6C] hover:underline">{CLINIC_INFO.phone}</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">24/7 Emergency Line:</span>
                    <a href={`tel:${emergencyPhoneClean}`} className="font-bold text-rose-600 hover:underline">{CLINIC_INFO.emergencyPhone}</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">WhatsApp Desk:</span>
                    <a href="https://wa.me/919924083567" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:underline">+91 99240 83567</a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(CLINIC_INFO.phone, 'phone')}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copiedPhone ? 'Phone Copied!' : 'Copy Phone Number'}</span>
              </button>
            </div>

            {/* Email Support Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Communications</span>
                  <h3 className="text-base font-bold text-slate-800 font-heading">Clinical Desk & Tourism</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] block uppercase font-bold">General Patient Enquiries</span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="font-bold text-[#0B4F6C] hover:underline">{CLINIC_INFO.email}</a>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block uppercase font-bold">International Tourism Concierge</span>
                    <a href="mailto:tourism@drsheekhashah.com" className="font-bold text-[#0B4F6C] hover:underline">tourism@drsheekhashah.com</a>
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>

          </div>
        </section>

        {/* ==========================================
            SECTION 2: GOOGLE MAP
           ========================================== */}
        <section id="sec-googlemap" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 2</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Interactive Google Location Map
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Located in a prime medical plaza with seamless highway connectivity and airport accessibility.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl space-y-0">
            {/* Interactive Embedded Google Map Container */}
            <div className="relative w-full h-[400px] sm:h-[480px] bg-slate-200">
              <iframe
                title="Dr. Sheekha Shah DENTAL STUDIO Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.005470000000!2d72.850000!3d19.100000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTkuMTAnMDAuMCJOIDcywrA1MScwMC4wIkU!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Info Box */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-slate-900/90 backdrop-blur-md text-white p-5 rounded-2xl border border-white/20 shadow-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-teal-400" />
                  <h3 className="text-sm font-bold text-white font-heading">Clinic Navigation Hub</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] space-y-1 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-teal-300" />
                    <span>Free Valet Parking Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="w-3.5 h-3.5 text-teal-300" />
                    <span>15 mins from BOM Airport Terminal 2</span>
                  </div>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsUrl || "https://maps.google.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 bg-teal-400 hover:bg-teal-300 text-slate-950 font-extrabold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageWrapper>
  );
};
