import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Globe,
  Navigation,
  AlertTriangle,
  Plane,
  Copy,
  Check,
  Printer,
  ExternalLink,
  ShieldAlert,
  Video,
  PhoneCall,
  ArrowRight,
  Car,
  Building2,
  ShieldCheck,
  FileText,
  User,
  Info,
  CheckCircle,
  HelpCircle,
  Upload,
  Paperclip,
  Trash2,
  Star,
  CreditCard,
  Lock,
  FileCheck,
  Image as ImageIcon,
  CheckSquare,
  Square,
  Building,
  Search,
  Award,
  AlertCircle,
  X
} from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';
import { TREATMENT_CATEGORIES } from '../data/treatmentsData';
import { PageWrapper } from '../components/ui/PageWrapper';
import { PageBanner } from '../components/ui/PageBanner';
import { fadeInUp, VIEWPORT_CONFIG } from '../lib/motion';

interface ContactPageProps {
  onOpenBooking: () => void;
}

const ENQUIRY_TYPE_OPTIONS = [
  { value: 'General Enquiry', label: 'General Enquiry', desc: 'Questions about location, services, or general information' },
  { value: 'Treatment Enquiry', label: 'Treatment Enquiry', desc: 'Questions about specific dental procedures & options' },
  { value: 'Appointment Enquiry', label: 'Appointment Enquiry', desc: 'Schedule or inquire about consultation availability' },
  { value: 'Emergency Enquiry', label: 'Emergency Enquiry', desc: 'Severe tooth pain, trauma, swelling, or urgent care' },
  { value: 'Virtual Consultation', label: 'Virtual Consultation', desc: 'Remote video assessment with Dr. Sheekha Shah' },
  { value: 'Dental Warranty', label: 'Dental Warranty', desc: 'Warranty registration, claims, or restoration guarantees' },
  { value: 'Payment & Finance', label: 'Payment & Finance', desc: '0% EMI financing, insurance claims, and payment options' },
  { value: 'Second Opinion', label: 'Second Opinion', desc: 'Upload previous diagnosis or scans for expert review' },
  { value: 'Post-Treatment Support', label: 'Post-Treatment Support', desc: 'Post-operative instructions, healing checks, or follow-up' },
  { value: 'Feedback & Complaint', label: 'Feedback & Complaint', desc: 'Share your clinical experience or suggest improvements' },
];

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  // Clean phone numbers for tel: links
  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const emergencyPhoneClean = CLINIC_INFO.emergencyPhone.replace(/[^0-9]/g, '');

  const reportsInputRef = useRef<HTMLInputElement>(null);
  const xraysInputRef = useRef<HTMLInputElement>(null);

  // Initial treatment category & subcategory defaults
  const defaultCategory = TREATMENT_CATEGORIES[0]?.title || 'General Dentistry';
  const defaultSubcategory = TREATMENT_CATEGORIES[0]?.subcategories[0]?.title || 'Dental Consultation';

  // Comprehensive Form State
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    phone: '',
    countryCode: '+1',
    email: '',
    country: 'United States',
    city: '',
    patientType: 'new', // 'new' | 'existing'
    enquiryType: 'General Enquiry',
    treatmentCategory: defaultCategory,
    treatmentSubcategory: defaultSubcategory,
    preferredContactMethod: 'WhatsApp', // 'WhatsApp' | 'Phone Call' | 'Email'
    preferredDate: '',
    preferredTime: 'morning', // 'morning' | 'afternoon' | 'evening'
    message: '',
    emergencyUrgency: 'Moderate Pain / Sensitivity',
    warrantyId: '',
    virtualPlatform: 'Google Meet',
    financingOption: '0% Interest EMI Installments',
    feedbackRating: '5',
    privacyConsent: false,
  });

  const [reportsFiles, setReportsFiles] = useState<File[]>([]);
  const [xrayFiles, setXrayFiles] = useState<File[]>([]);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<{
    referenceId: string;
    fullName: string;
    email: string;
    phone: string;
    countryCity: string;
    patientType: string;
    enquiryType: string;
    treatmentCategory: string;
    treatmentSubcategory: string;
    preferredContactMethod: string;
    preferredDate: string;
    preferredTime: string;
    message: string;
    uploadedReportsCount: number;
    uploadedXraysCount: number;
    submittedAt: string;
  } | null>(null);

  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [whatsappTemplate, setWhatsappTemplate] = useState(
    'Hello Dr. Sheekha Shah DENTAL STUDIO, I am writing to inquire about scheduling a consultation.'
  );

  // Real-time clinic open status calculation
  const [isClinicOpen, setIsClinicOpen] = useState(true);
  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 6 = Sat
    const hour = now.getHours();
    if (day === 0) {
      setIsClinicOpen(false); // Sunday
    } else if (day === 6) {
      setIsClinicOpen(hour >= 9 && hour < 16); // Sat 9am-4pm
    } else {
      setIsClinicOpen(hour >= 8 && hour < 19); // Mon-Fri 8am-7pm
    }
  }, []);

  // Update subcategories list when selected category changes
  const currentCategoryObj = TREATMENT_CATEGORIES.find(
    c => c.title === bookingForm.treatmentCategory
  ) || TREATMENT_CATEGORIES[0];

  const subcategoriesList = currentCategoryObj?.subcategories || [];

  const handleCategoryChange = (catTitle: string) => {
    const matchedCategory = TREATMENT_CATEGORIES.find(c => c.title === catTitle);
    const newSubcat = matchedCategory?.subcategories[0]?.title || '';
    setBookingForm(prev => ({
      ...prev,
      treatmentCategory: catTitle,
      treatmentSubcategory: newSubcat,
    }));
  };

  // Dynamic field visibility rules based on Enquiry Type
  const needsTreatmentCategory = [
    'Treatment Enquiry',
    'Appointment Enquiry',
    'Virtual Consultation',
    'Second Opinion',
    'Post-Treatment Support',
    'Dental Warranty',
    'General Enquiry'
  ].includes(bookingForm.enquiryType);

  const needsDateTime = [
    'Appointment Enquiry',
    'Virtual Consultation',
    'Emergency Enquiry',
    'Treatment Enquiry',
    'Second Opinion'
  ].includes(bookingForm.enquiryType);

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

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!bookingForm.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!bookingForm.email.trim() || !/\S+@\S+\.\S+/.test(bookingForm.email)) {
      errors.email = 'Valid email address is required';
    }
    if (!bookingForm.phone.trim() || bookingForm.phone.trim().length < 6) {
      errors.phone = 'Valid phone number is required';
    }
    if (!bookingForm.country.trim()) {
      errors.country = 'Country is required';
    }
    if (!bookingForm.city.trim()) {
      errors.city = 'City is required';
    }
    if (needsDateTime && !bookingForm.preferredDate) {
      errors.preferredDate = 'Please select a preferred date';
    }
    if (!bookingForm.privacyConsent) {
      errors.privacyConsent = 'You must agree to the privacy policy to submit';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const randomId = 'DSS-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      referenceId: randomId,
      fullName: bookingForm.fullName,
      email: bookingForm.email,
      phone: `${bookingForm.countryCode} ${bookingForm.phone}`,
      countryCity: `${bookingForm.city}, ${bookingForm.country}`,
      patientType: bookingForm.patientType === 'new' ? 'New Patient' : 'Existing Patient',
      enquiryType: bookingForm.enquiryType,
      treatmentCategory: bookingForm.treatmentCategory,
      treatmentSubcategory: bookingForm.treatmentSubcategory,
      preferredContactMethod: bookingForm.preferredContactMethod,
      preferredDate: bookingForm.preferredDate || 'Flexible Schedule',
      preferredTime: bookingForm.preferredTime,
      message: bookingForm.message,
      uploadedReportsCount: reportsFiles.length,
      uploadedXraysCount: xrayFiles.length,
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setSubmittedBooking(newBooking);

    // Scroll smoothly to Section 12 (Confirmation)
    setTimeout(() => {
      const confirmEl = document.getElementById('sec-confirmation');
      if (confirmEl) {
        confirmEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // File Handlers
  const handleReportsUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setReportsFiles(prev => [...prev, ...filesArray]);
    }
  };

  const handleXrayUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setXrayFiles(prev => [...prev, ...filesArray]);
    }
  };

  const removeReportFile = (index: number) => {
    setReportsFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeXrayFile = (index: number) => {
    setXrayFiles(prev => prev.filter((_, i) => i !== index));
  };

  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent(whatsappTemplate)}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_INFO.address)}`;

  return (
    <PageWrapper className="min-h-screen bg-slate-50">
      <PageBanner
        badge="CONTACT US"
        title="Contact Us"
        subtitle="Get in touch with our dental care team for enquiries, consultations, emergency appointments, or clinic location details."
        breadcrumb="Contact Us"
      />
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">

        {/* Quick Jump Links Bar */}
        <div className="space-y-4">

          {/* Jump Section Bar */}
          <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none text-xs font-semibold">
            <span className="text-slate-400 uppercase tracking-wider shrink-0 text-[10px] font-bold">Jump to Section:</span>
            {[
              { id: 'sec-hero', label: '1. Hero' },
              { id: 'sec-contactdetails', label: '2. Contact Details' },
              { id: 'sec-timings', label: '3. Timings' },
              { id: 'sec-googlemap', label: '4. Google Map' },
              { id: 'sec-bookingform', label: '5. Enquiry & Booking Form' },
              { id: 'sec-callbutton', label: '6. Call Us' },
              { id: 'sec-whatsapp', label: '7. WhatsApp' },
              { id: 'sec-email', label: '8. Email' },
              { id: 'sec-getdirections', label: '9. Directions' },
              { id: 'sec-emergency', label: '10. Emergency' },
              { id: 'sec-international', label: '11. International' },
              { id: 'sec-confirmation', label: '12. Confirmation' },
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
            SECTION 2: CLINIC CONTACT DETAILS
           ========================================== */}
        <section id="sec-contactdetails" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 2</span>
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
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors"
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
                    <span className="text-slate-500">International Desk:</span>
                    <span className="font-bold text-slate-800">+1 (800) DENTAL-STUDIO</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(CLINIC_INFO.phone, 'phone')}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center space-x-2 transition-colors"
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
            SECTION 3: CLINIC TIMINGS
           ========================================== */}
        <section id="sec-timings" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 3</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Clinic Operating Hours
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Flexible appointment hours engineered to accommodate busy local professionals and international travelers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
            
            {/* Live Open / Closed Status Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 text-white shadow-inner">
              <div className="flex items-center gap-3">
                <div className={`w-3.5 h-3.5 rounded-full animate-ping ${isClinicOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300 block">Real-time Status</span>
                  <h3 className="text-base font-extrabold text-white font-heading">
                    {isClinicOpen ? '🟢 CLINIC IS OPEN NOW' : '🟡 CLINIC IS CURRENTLY CLOSED'}
                  </h3>
                </div>
              </div>

              <div className="text-right text-xs text-slate-300">
                <span>Current Timezone: <strong className="text-teal-300">IST (GMT +5:30)</strong></span>
                <span className="block text-[11px] text-slate-400">24/7 Virtual WhatsApp & Emergency lines active</span>
              </div>
            </div>

            {/* Hours Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>MON - FRI</span>
                  <span className="text-[#0B4F6C] bg-cyan-50 px-2 py-0.5 rounded">Regular Days</span>
                </div>
                <div className="text-lg font-black text-slate-800 font-heading">
                  {CLINIC_INFO.hours.weekdays}
                </div>
                <p className="text-[11px] text-slate-500">Full clinical consultations, surgeries & smile makeovers.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>SATURDAY</span>
                  <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded">Weekend</span>
                </div>
                <div className="text-lg font-black text-slate-800 font-heading">
                  {CLINIC_INFO.hours.saturday}
                </div>
                <p className="text-[11px] text-slate-500">Ideal for working professionals & express weekend procedures.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>SUNDAY</span>
                  <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Special</span>
                </div>
                <div className="text-lg font-black text-slate-800 font-heading">
                  {CLINIC_INFO.hours.sunday}
                </div>
                <p className="text-[11px] text-slate-500">Prior appointment & emergency trauma procedures only.</p>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-rose-700">
                  <span>24/7 ON-CALL</span>
                  <span className="text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Emergency</span>
                </div>
                <div className="text-lg font-black text-rose-900 font-heading">
                  Always Active
                </div>
                <p className="text-[11px] text-rose-700">Direct access to lead endodontist for severe toothache relief.</p>
              </div>
            </div>

          </div>
        </section>


        {/* ==========================================
            SECTION 4: GOOGLE MAP
           ========================================== */}
        <section id="sec-googlemap" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 4</span>
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
                  href={mapsDirectionsUrl}
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


        {/* ==========================================
            SECTION 5: ENHANCED MULTI-FUNCTIONAL CONTACT & ENQUIRY FORM
           ========================================== */}
        <section id="sec-bookingform" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 5</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
                Clinical Enquiry & Appointment Desk
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                All patient inquiries, appointments, second opinions, emergency requests, and reports are processed right here.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-teal-50 text-teal-800 px-3 py-1.5 rounded-full border border-teal-200 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>256-Bit SSL Encrypted Health Data</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
            <form onSubmit={handleFormSubmit} className="space-y-8">
              
              {/* Step 1: Patient Classification & Enquiry Purpose */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">1</span>
                  <h3 className="text-base font-extrabold font-heading text-slate-800">
                    Select Your Enquiry Category & Patient Status
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Patient Type Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Patient Type <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setBookingForm({ ...bookingForm, patientType: 'new' })}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                          bookingForm.patientType === 'new'
                            ? 'bg-[#0B4F6C] border-[#0B4F6C] text-white shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <User className="w-4 h-4" />
                        <span>New Patient</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingForm({ ...bookingForm, patientType: 'existing' })}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                          bookingForm.patientType === 'existing'
                            ? 'bg-[#0B4F6C] border-[#0B4F6C] text-white shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Existing Patient</span>
                      </button>
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Enquiry Type <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <HelpCircle className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <select
                        value={bookingForm.enquiryType}
                        onChange={(e) => setBookingForm({ ...bookingForm, enquiryType: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                      >
                        {ENQUIRY_TYPE_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label} — {opt.desc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                </div>
              </div>


              {/* Step 2: Personal Contact Details & Location */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">2</span>
                  <h3 className="text-base font-extrabold font-heading text-slate-800">
                    Personal Contact Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. Dr. Sarah Jenkins"
                        value={bookingForm.fullName}
                        onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                        } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                      />
                    </div>
                    {formErrors.fullName && (
                      <span className="text-[10px] text-rose-500 font-bold block">{formErrors.fullName}</span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        placeholder="e.g. sarah@example.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.email ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                        } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                      />
                    </div>
                    {formErrors.email && (
                      <span className="text-[10px] text-rose-500 font-bold block">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Phone & Country Code */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={bookingForm.countryCode}
                        onChange={(e) => setBookingForm({ ...bookingForm, countryCode: e.target.value })}
                        className="px-2 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                      >
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+1-CA">🇨🇦 +1</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                      </select>
                      <div className="relative flex-1">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          placeholder="e.g. 98765 43210"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                            formErrors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                          } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                        />
                      </div>
                    </div>
                    {formErrors.phone && (
                      <span className="text-[10px] text-rose-500 font-bold block">{formErrors.phone}</span>
                    )}
                  </div>

                  {/* Country */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Country <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. United States / India"
                        value={bookingForm.country}
                        onChange={(e) => setBookingForm({ ...bookingForm, country: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.country ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                        } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                      />
                    </div>
                    {formErrors.country && (
                      <span className="text-[10px] text-rose-500 font-bold block">{formErrors.country}</span>
                    )}
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      City <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. New York / Mumbai"
                        value={bookingForm.city}
                        onChange={(e) => setBookingForm({ ...bookingForm, city: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.city ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                        } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                      />
                    </div>
                    {formErrors.city && (
                      <span className="text-[10px] text-rose-500 font-bold block">{formErrors.city}</span>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['WhatsApp', 'Phone Call', 'Email'].map(method => (
                        <button
                          type="button"
                          key={method}
                          onClick={() => setBookingForm({ ...bookingForm, preferredContactMethod: method })}
                          className={`py-2.5 px-2 rounded-xl border text-[11px] font-bold text-center transition-all ${
                            bookingForm.preferredContactMethod === method
                              ? 'bg-teal-700 border-teal-700 text-white shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>


              {/* Step 3: Dynamic Category & Procedure Fields */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">3</span>
                  <h3 className="text-base font-extrabold font-heading text-slate-800">
                    Clinical Treatment & Specific Enquiry Details
                  </h3>
                </div>

                {/* EMERGENCY ENQUIRY SPECIFIC BANNER */}
                {bookingForm.enquiryType === 'Emergency Enquiry' && (
                  <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
                    <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm">
                      <ShieldAlert className="w-5 h-5 text-rose-600 animate-pulse" />
                      <span>Emergency Triage Mode Activated</span>
                    </div>
                    <p className="text-xs text-rose-700">
                      For acute severe pain or bleeding, call our direct 24/7 hotline <a href={`tel:${emergencyPhoneClean}`} className="font-bold underline">{CLINIC_INFO.emergencyPhone}</a> immediately.
                    </p>
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-rose-900">Select Severity / Primary Issue:</label>
                      <select
                        value={bookingForm.emergencyUrgency}
                        onChange={(e) => setBookingForm({ ...bookingForm, emergencyUrgency: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-rose-300 text-xs font-bold text-rose-900 focus:outline-none"
                      >
                        <option value="Severe Unbearable Toothache">Severe Unbearable Toothache</option>
                        <option value="Knocked Out / Dislodged Permanent Tooth">Knocked Out / Dislodged Permanent Tooth</option>
                        <option value="Broken Crown / Fractured Tooth Structure">Broken Crown / Fractured Tooth Structure</option>
                        <option value="Facial Swelling & Gum Infection">Facial Swelling & Gum Infection</option>
                        <option value="Post-Surgical Bleeding Concern">Post-Surgical Bleeding Concern</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* DENTAL WARRANTY SPECIFIC FIELD */}
                {bookingForm.enquiryType === 'Dental Warranty' && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                    <label className="block text-xs font-bold text-amber-900">
                      Warranty Certificate ID / Treatment Invoice Number:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. WARR-2024-88492"
                      value={bookingForm.warrantyId}
                      onChange={(e) => setBookingForm({ ...bookingForm, warrantyId: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-amber-300 text-xs font-medium text-amber-900 focus:outline-none"
                    />
                  </div>
                )}

                {/* VIRTUAL CONSULTATION SPECIFIC FIELD */}
                {bookingForm.enquiryType === 'Virtual Consultation' && (
                  <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-2">
                    <label className="block text-xs font-bold text-cyan-900">
                      Preferred Video Conference Platform:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Google Meet', 'Zoom', 'WhatsApp Video'].map(platform => (
                        <button
                          type="button"
                          key={platform}
                          onClick={() => setBookingForm({ ...bookingForm, virtualPlatform: platform })}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                            bookingForm.virtualPlatform === platform
                              ? 'bg-[#0B4F6C] border-[#0B4F6C] text-white'
                              : 'bg-white border-cyan-200 text-slate-700 hover:bg-cyan-100/50'
                          }`}
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* PAYMENT & FINANCE SPECIFIC FIELD */}
                {bookingForm.enquiryType === 'Payment & Finance' && (
                  <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                    <label className="block text-xs font-bold text-indigo-900">
                      Interested Financial Program:
                    </label>
                    <select
                      value={bookingForm.financingOption}
                      onChange={(e) => setBookingForm({ ...bookingForm, financingOption: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-indigo-300 text-xs font-bold text-indigo-900 focus:outline-none"
                    >
                      <option value="0% Interest EMI Monthly Installments">0% Interest EMI Monthly Installments</option>
                      <option value="Health Insurance Claim Pre-Authorization">Health Insurance Claim Pre-Authorization</option>
                      <option value="Corporate / Employee Dental Benefits">Corporate / Employee Dental Benefits</option>
                      <option value="International Wire / Credit Card Options">International Wire / Credit Card Options</option>
                    </select>
                  </div>
                )}

                {/* FEEDBACK & COMPLAINT SPECIFIC FIELD */}
                {bookingForm.enquiryType === 'Feedback & Complaint' && (
                  <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300 space-y-2">
                    <label className="block text-xs font-bold text-slate-800">
                      Clinical Visit Experience Rating:
                    </label>
                    <div className="flex items-center gap-3">
                      {['1', '2', '3', '4', '5'].map(rating => (
                        <button
                          type="button"
                          key={rating}
                          onClick={() => setBookingForm({ ...bookingForm, feedbackRating: rating })}
                          className={`w-10 h-10 rounded-xl border font-black text-xs flex items-center justify-center transition-all ${
                            bookingForm.feedbackRating === rating
                              ? 'bg-amber-500 border-amber-500 text-white shadow-sm'
                              : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {rating}★
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Treatment Category & Subcategory Dropdowns */}
                {needsTreatmentCategory && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    
                    {/* Treatment Category */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Treatment Category
                      </label>
                      <select
                        value={bookingForm.treatmentCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                      >
                        {TREATMENT_CATEGORIES.map(cat => (
                          <option key={cat.id} value={cat.title}>
                            {cat.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Treatment Subcategory */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Treatment Procedure / Subcategory
                      </label>
                      <select
                        value={bookingForm.treatmentSubcategory}
                        onChange={(e) => setBookingForm({ ...bookingForm, treatmentSubcategory: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                      >
                        {subcategoriesList.map(subcat => (
                          <option key={subcat.id} value={subcat.title}>
                            {subcat.title}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>
                )}

              </div>


              {/* Step 4: Preferred Date & Time (Conditional) */}
              {needsDateTime && (
                <div className="space-y-4 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">4</span>
                    <h3 className="text-base font-extrabold font-heading text-slate-800">
                      Preferred Consultation Date & Time Slot
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={bookingForm.preferredDate}
                          onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                            formErrors.preferredDate ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                          } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                        />
                      </div>
                      {formErrors.preferredDate && (
                        <span className="text-[10px] text-rose-500 font-bold block">{formErrors.preferredDate}</span>
                      )}
                    </div>

                    {/* Time Slot Selection */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Preferred Time Slot
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'morning', label: 'Morning', time: '9am - 12pm' },
                          { id: 'afternoon', label: 'Afternoon', time: '12pm - 4pm' },
                          { id: 'evening', label: 'Evening', time: '4pm - 7pm' },
                        ].map((slot) => (
                          <button
                            type="button"
                            key={slot.id}
                            onClick={() => setBookingForm({ ...bookingForm, preferredTime: slot.id })}
                            className={`p-2 rounded-xl border text-center transition-all ${
                              bookingForm.preferredTime === slot.id
                                ? 'bg-[#0B4F6C] border-[#0B4F6C] text-white shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <span className="text-xs font-bold block">{slot.label}</span>
                            <span className={`text-[10px] block ${bookingForm.preferredTime === slot.id ? 'text-teal-200' : 'text-slate-500'}`}>
                              {slot.time}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}


              {/* Step 5: Message & Dental Concern */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">
                    {needsDateTime ? '5' : '4'}
                  </span>
                  <h3 className="text-base font-extrabold font-heading text-slate-800">
                    Message & Dental Health Concern Details
                  </h3>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Describe Your Inquiry / Dental Symptoms / Aesthetic Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please share details about your tooth pain, desired smile improvements, previous treatments, or specific questions..."
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  />
                </div>
              </div>


              {/* Step 6: File Uploads (Dental Reports & X-Rays / Photos) */}
              <div className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">
                      {needsDateTime ? '6' : '5'}
                    </span>
                    <h3 className="text-base font-extrabold font-heading text-slate-800">
                      Upload Dental Reports, X-rays & Photos (Optional)
                    </h3>
                  </div>
                  <span className="text-[11px] text-teal-700 font-bold bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    🔒 HIPAA / Confidential
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Upload Reports Box */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-[#0B4F6C]" />
                        <span>Dental Reports / Prescriptions</span>
                      </span>
                      <span className="text-[10px] text-slate-400">PDF, DOCX, TXT (Max 15MB)</span>
                    </div>

                    <input
                      ref={reportsInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleReportsUpload}
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={() => reportsInputRef.current?.click()}
                      className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl bg-white hover:bg-cyan-50/50 hover:border-[#0B4F6C] text-slate-600 transition-all flex flex-col items-center justify-center gap-1 text-xs"
                    >
                      <Upload className="w-5 h-5 text-[#0B4F6C]" />
                      <span className="font-bold text-slate-800">Click to Select Documents</span>
                      <span className="text-[10px] text-slate-400">or drag and drop clinical PDFs here</span>
                    </button>

                    {/* Report File List */}
                    {reportsFiles.length > 0 && (
                      <div className="space-y-2 pt-2">
                        {reportsFiles.map((file, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 truncate">
                              <Paperclip className="w-4 h-4 text-[#0B4F6C] shrink-0" />
                              <span className="font-medium text-slate-800 truncate">{file.name}</span>
                              <span className="text-[10px] text-slate-400 shrink-0">({(file.size / 1024).toFixed(0)} KB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeReportFile(idx)}
                              className="text-rose-500 hover:text-rose-700 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Upload X-rays / Photos Box */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4 text-teal-600" />
                        <span>X-rays, OPG, CBCT & Smile Photos</span>
                      </span>
                      <span className="text-[10px] text-slate-400">JPG, PNG, DICOM (Max 25MB)</span>
                    </div>

                    <input
                      ref={xraysInputRef}
                      type="file"
                      multiple
                      accept="image/*,.dcm"
                      onChange={handleXrayUpload}
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={() => xraysInputRef.current?.click()}
                      className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl bg-white hover:bg-teal-50/50 hover:border-teal-600 text-slate-600 transition-all flex flex-col items-center justify-center gap-1 text-xs"
                    >
                      <ImageIcon className="w-5 h-5 text-teal-600" />
                      <span className="font-bold text-slate-800">Click to Select Images</span>
                      <span className="text-[10px] text-slate-400">or drag and drop intraoral photos</span>
                    </button>

                    {/* X-ray / Image File List */}
                    {xrayFiles.length > 0 && (
                      <div className="space-y-2 pt-2">
                        {xrayFiles.map((file, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 truncate">
                              <ImageIcon className="w-4 h-4 text-teal-600 shrink-0" />
                              <span className="font-medium text-slate-800 truncate">{file.name}</span>
                              <span className="text-[10px] text-slate-400 shrink-0">({(file.size / 1024).toFixed(0)} KB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeXrayFile(idx)}
                              className="text-rose-500 hover:text-rose-700 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>


              {/* Step 7: Consent Checkbox & Submit Button */}
              <div className="space-y-6 pt-2">
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bookingForm.privacyConsent}
                      onChange={(e) => setBookingForm({ ...bookingForm, privacyConsent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-[#0B4F6C] focus:ring-[#0B4F6C]"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      I agree to the privacy terms and grant permission to Dr. Sheekha Shah DENTAL STUDIO to evaluate my dental inquiry and health information confidentially.
                    </span>
                  </label>
                  {formErrors.privacyConsent && (
                    <span className="text-[10px] text-rose-500 font-bold block pl-7">{formErrors.privacyConsent}</span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-sm py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-teal-300" />
                  <span>Submit Clinical Inquiry & Request Consultation</span>
                </motion.button>
              </div>

            </form>
          </div>
        </section>


        {/* ==========================================
            SECTION 6: CALL BUTTON
           ========================================== */}
        <section id="sec-callbutton" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 6</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Direct Phone Call Action
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Connect instantly with our clinical reception desk with one tap.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#0B4F6C] rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-extrabold text-teal-300 uppercase tracking-wider block">
                Instant Reception Access
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-white">
                Speak with Our Clinical Coordinator Now
              </h3>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Our front-desk team provides instant phone assistance for appointment rescheduling, insurance claim verifications, and treatment queries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${phoneClean}`}
                className="bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-sm px-6 py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5 fill-slate-950" />
                <span>Call Clinic ({CLINIC_INFO.phone})</span>
              </a>
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 7: WHATSAPP BUTTON
           ========================================== */}
        <section id="sec-whatsapp" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 7</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Instant WhatsApp Direct Support
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Chat directly with Dr. Sheekha Shah's team for quick photo evaluations and instant responses.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-md space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md">
                <MessageSquare className="w-6 h-6 fill-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-800 font-heading">WhatsApp Direct Chat Desk</h3>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-300">
                    ● Online Now
                  </span>
                </div>
                <p className="text-xs text-slate-500">Average response time: &lt; 5 minutes</p>
              </div>
            </div>

            {/* Template Selector */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Select a Pre-filled WhatsApp Message Template:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    title: 'General Clinical Enquiry',
                    msg: 'Hello Dr. Sheekha Shah DENTAL STUDIO, I have a general clinical question.'
                  },
                  {
                    title: 'Appointment Booking',
                    msg: 'Hello Dr. Sheekha Shah DENTAL STUDIO, I would like to book a consultation for a smile makeover.'
                  },
                  {
                    title: 'Dental Tourism Quote',
                    msg: 'Hi, I am traveling to Mumbai and would like a quote and timeline for porcelain veneers.'
                  }
                ].map((tmpl, i) => (
                  <button
                    key={i}
                    onClick={() => setWhatsappTemplate(tmpl.msg)}
                    className={`p-3 rounded-2xl border text-left text-xs transition-all ${
                      whatsappTemplate === tmpl.msg
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block font-bold text-slate-800 mb-1">{tmpl.title}</span>
                    <span className="text-[11px] text-slate-500 line-clamp-2">"{tmpl.msg}"</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Launch WhatsApp Chat Now</span>
            </a>
          </div>
        </section>


        {/* ==========================================
            SECTION 8: EMAIL BUTTON
           ========================================== */}
        <section id="sec-email" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 8</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Direct Email Dispatch
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Send medical records, dental X-rays, or insurance pre-authorization documents securely.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold font-heading text-slate-800">
                Official Clinical Email Desk
              </h3>
              <p className="text-xs text-slate-600 max-w-lg leading-relaxed">
                You can attach 3D CBCT scans, OPG X-rays, or medical reports directly to our clinical email inbox at <strong className="text-slate-800">{CLINIC_INFO.email}</strong>.
              </p>
            </div>

            <a
              href={`mailto:${CLINIC_INFO.email}?subject=Patient%20Consultation%20Inquiry`}
              className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>Open Email Client</span>
            </a>
          </div>
        </section>


        {/* ==========================================
            SECTION 9: GET DIRECTIONS
           ========================================== */}
        <section id="sec-getdirections" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 9</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Get Directions & Route Planning
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Turn-by-turn navigation instructions for patients arriving by flight, train, or private cab.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#0B4F6C] font-bold text-xs">
                  <Plane className="w-4 h-4" />
                  <span>From International Airport (BOM)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Take the Western Express Highway South. Drive 15 minutes (~7.5 km) directly to Evergreen Medical Plaza.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#0B4F6C] font-bold text-xs">
                  <Car className="w-4 h-4" />
                  <span>By Taxi / Uber / Private Vehicle</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Set destination to "Dr. Sheekha Shah DENTAL STUDIO". Complimentary valet parking at entrance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#0B4F6C] font-bold text-xs">
                  <Building2 className="w-4 h-4" />
                  <span>Metro & Rail Transit</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  5-minute auto-rickshaw ride from the nearest metro station (Line 7 / Line 2A interchange).
                </p>
              </div>
            </div>

            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Live Turn-by-Turn Google Directions</span>
            </a>
          </div>
        </section>


        {/* ==========================================
            SECTION 10: EMERGENCY APPOINTMENT
           ========================================== */}
        <section id="sec-emergency" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-widest">Section 10</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              24/7 Urgent Dental Care & Emergency Desk
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Same-day priority appointments reserved daily for acute pain, trauma, and tooth fractures.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-900 via-slate-900 to-rose-950 rounded-3xl p-8 text-white shadow-2xl space-y-6 relative overflow-hidden border border-rose-500/30">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 text-xs font-extrabold px-3 py-1 rounded-full border border-rose-400/30 uppercase">
                  <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
                  Emergency Trauma Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Sudden Tooth Pain or Facial Swelling?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Do not suffer in pain. Dr. Sheekha Shah guarantees priority same-day emergency slots for knocked-out teeth, severe pulp inflammation, broken crowns, or wisdom tooth infection.
                </p>
              </div>
            </div>

            {/* Emergency Triage Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
                <span className="text-rose-400 font-extrabold block">1. Call Emergency Hotline</span>
                <p className="text-slate-300 text-[11px]">Dial {CLINIC_INFO.emergencyPhone} for immediate phone triage advice.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
                <span className="text-rose-400 font-extrabold block">2. Preserve Tooth / Cold Compress</span>
                <p className="text-slate-300 text-[11px]">Store dislodged teeth in milk or saline solution immediately.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
                <span className="text-rose-400 font-extrabold block">3. Immediate Clinic Entrance</span>
                <p className="text-slate-300 text-[11px]">Fast-track admission directly into our surgical suite.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${emergencyPhoneClean}`}
                className="bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Emergency Hotline Now ({CLINIC_INFO.emergencyPhone})</span>
              </a>
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 11: INTERNATIONAL PATIENT CONTACT
           ========================================== */}
        <section id="sec-international" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 11</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              International Dental Tourism Desk
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Dedicated concierge care for overseas travelers seeking 70% savings with world-class clinical precision.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-cyan-50 text-[#0B4F6C] text-xs font-bold px-3 py-1 rounded-full">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Complete Dental Vacation Package</span>
                </div>
                <h3 className="text-xl font-extrabold font-heading text-slate-800">
                  Seamless Airport-to-Clinic Care Protocol
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We host patients from the UK, USA, UAE, Australia, and Canada. Our international patient liaison coordinates virtual video consultations, pre-flight treatment planning, hotel stay booking, and airport luxury transfers.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Virtual Video Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Same-Week Treatment Completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Medical Visa Invitation Letter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>5-Star Partner Hotel Discounts</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl space-y-4">
                <h4 className="text-sm font-bold text-white font-heading">Book Virtual Video Consultation</h4>
                <p className="text-xs text-slate-300">
                  Have Dr. Sheekha Shah evaluate your smile design or CBCT scan over a 20-minute Zoom session before traveling.
                </p>
                <a
                  href={`https://wa.me/${phoneClean}?text=${encodeURIComponent('Hi Dr. Sheekha Shah, I am an international patient seeking a virtual video consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-teal-400 hover:bg-teal-300 text-slate-950 font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Video className="w-4 h-4" />
                  <span>Request Video Zoom Consultation</span>
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 12: APPOINTMENT CONFIRMATION
           ========================================== */}
        <section id="sec-confirmation" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest">Section 12</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Clinical Enquiry Confirmation Voucher
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Official inquiry pass and receipt confirmation for your submitted clinical communication.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/30 shadow-xl space-y-6">
            
            {submittedBooking ? (
              /* Actual Submitted Confirmation Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider block">
                        Enquiry Received & Registered!
                      </span>
                      <h3 className="text-xl font-black text-slate-900 font-heading">
                        Reference Code: {submittedBooking.referenceId}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        A confirmation email & SMS dispatch have been sent to <strong>{submittedBooking.phone}</strong> and <strong>{submittedBooking.email}</strong>.
                      </p>
                    </div>
                  </div>

                  <span className="bg-white px-3 py-1.5 rounded-xl border border-emerald-300 text-xs font-bold text-emerald-800 shadow-xs">
                    Status: RECEIVED
                  </span>
                </div>

                {/* Printable Voucher Summary */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 text-xs text-slate-700">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-slate-200">
                    <div>
                      <span className="text-slate-400 font-bold block">PATIENT NAME</span>
                      <span className="font-bold text-slate-900 text-sm">{submittedBooking.fullName}</span>
                      <span className="text-[10px] text-teal-700 font-semibold block">{submittedBooking.patientType}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block">ENQUIRY CATEGORY</span>
                      <span className="font-bold text-[#0B4F6C] text-sm">{submittedBooking.enquiryType}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block">LOCATION</span>
                      <span className="font-bold text-slate-900 text-sm">{submittedBooking.countryCity}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block">CONTACT VIA</span>
                      <span className="font-bold text-slate-900 text-sm">{submittedBooking.preferredContactMethod}</span>
                    </div>
                  </div>

                  {/* Treatment Category & Date Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-slate-200">
                    <div>
                      <span className="text-slate-400 font-bold block">TREATMENT CATEGORY</span>
                      <span className="font-semibold text-slate-800">{submittedBooking.treatmentCategory}</span>
                      <span className="text-[11px] text-slate-500 block">{submittedBooking.treatmentSubcategory}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block">PREFERRED DATE & TIME</span>
                      <span className="font-semibold text-slate-800">{submittedBooking.preferredDate}</span>
                      <span className="text-[11px] text-slate-500 block uppercase">{submittedBooking.preferredTime} Slot</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold block">ATTACHED DOCUMENTS</span>
                      <span className="font-semibold text-slate-800">
                        {submittedBooking.uploadedReportsCount} Report(s), {submittedBooking.uploadedXraysCount} X-ray(s)
                      </span>
                    </div>
                  </div>

                  {submittedBooking.message && (
                    <div className="p-3 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Submitted Message / Symptoms:</span>
                      <p className="text-xs text-slate-700 italic">"{submittedBooking.message}"</p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-2">
                    <span className="text-slate-500">
                      Assigned Desk: <strong>Dr. Sheekha Shah Clinical Concierge</strong>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.print()}
                        className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Receipt</span>
                      </button>
                      <button
                        onClick={() => setSubmittedBooking(null)}
                        className="text-[#0B4F6C] font-bold underline"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Sample Confirmation Preview State */
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-dashed border-slate-300 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-[#0B4F6C] flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="max-w-md mx-auto space-y-1">
                  <h3 className="text-base font-bold text-slate-800 font-heading">
                    Confirmation Voucher Standby
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Once you submit the clinical enquiry form in Section 5 above, your verified tracking code, inquiry voucher pass, and calendar sync details will populate here instantly.
                  </p>
                </div>

                <a
                  href="#sec-bookingform"
                  className="inline-flex items-center gap-2 bg-[#0B4F6C] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm hover:bg-[#083A50] transition-colors"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>Fill Clinical Enquiry Form Above</span>
                </a>
              </div>
            )}

          </div>
        </section>

      </div>
    </PageWrapper>
  );
};
