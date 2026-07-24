import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  Upload,
  Paperclip,
  Trash2,
  FileText,
  AlertCircle,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  Stethoscope,
  Award,
  Star,
  Zap,
  Globe,
  Navigation,
  Printer,
  Copy,
  Check,
  Building2,
  Car,
  Plane,
  CreditCard,
  Lock,
  MessageCircle,
  Video,
  Info,
  ChevronRight,
  ArrowRight,
  X
} from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/homeData';
import { TREATMENT_CATEGORIES } from '../data/treatmentsData';
import { PageWrapper } from '../components/ui/PageWrapper';
import { fadeInUp, VIEWPORT_CONFIG } from '../lib/motion';

export const BookAppointmentPage: React.FC = () => {
  const location = useLocation();
  const preselectedFromRoute = (location.state as { serviceId?: string })?.serviceId;

  // File input refs
  const reportInputRef = useRef<HTMLInputElement>(null);
  const xrayInputRef = useRef<HTMLInputElement>(null);

  // Doctors list
  const DOCTORS = [
    {
      id: 'dr-sheekha-shah',
      name: 'Dr. Sheekha Shah',
      title: 'MDS - Master Endodontist & Implant Specialist',
      experience: '15+ Years Clinical Mastery',
      specialty: 'Microscopic Root Canal & Implantology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
      tag: 'Lead Specialist'
    },
    {
      id: 'dr-aarav-mehta',
      name: 'Dr. Aarav Mehta',
      title: 'MDS - Senior Orthodontist & Cosmetic Dentist',
      experience: '12+ Years Clinical Practice',
      specialty: 'Invisalign & Smile Architecture',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
      tag: 'Aligner Certified'
    },
    {
      id: 'first-available',
      name: 'First Available Specialist',
      title: 'Senior Clinical Team',
      experience: 'Priority Scheduling Desk',
      specialty: 'Recommended for Urgent & General Consultations',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400',
      tag: 'Fastest Slot'
    }
  ];

  // Medical conditions checkboxes
  const MEDICAL_CONDITIONS = [
    'Diabetes (Type 1/2)',
    'High Blood Pressure / Hypertension',
    'Heart Condition / Pacemaker',
    'Allergies (Penicillin / Local Anesthesia)',
    'Bleeding Disorder / Blood Thinners',
    'Currently Pregnant',
    'Asthma / Respiratory Issue',
    'None / No Known Conditions'
  ];

  // FAQ Items
  const FAQ_ITEMS = [
    {
      q: 'How quickly will my appointment request be confirmed?',
      a: 'Our clinical front desk reviews all online requests immediately. You will receive an official confirmation call or WhatsApp message within 30-60 minutes during working hours.'
    },
    {
      q: 'What should I bring for my first consultation visit?',
      a: 'Please bring any recent dental X-rays, OPG scans, or medical records if available. Also bring a photo ID and details of any ongoing medications.'
    },
    {
      q: 'Is there a consultation fee, and can I get 0% EMI financing?',
      a: 'Yes, our comprehensive consultation includes 3D Intraoral Scanning and digital diagnostic evaluation. Flexible 0% EMI payment options are available for all major treatments.'
    },
    {
      q: 'What if I need to reschedule or cancel my appointment?',
      a: 'We understand schedules change! You can easily reschedule or cancel by calling us at +91 98765 43210 or messaging us on WhatsApp at least 4 hours in advance.'
    },
    {
      q: 'Are microscopic root canals and procedures 100% painless?',
      a: 'Yes! We use computer-controlled painless local anesthesia systems and high-magnification Carl Zeiss microscopes, ensuring virtually zero discomfort during treatment.'
    }
  ];

  // Initial state setup
  const [selectedCategory, setSelectedCategory] = useState<string>(
    TREATMENT_CATEGORIES[0]?.title || 'General Dentistry'
  );

  const matchedCatObj = TREATMENT_CATEGORIES.find(c => c.title === selectedCategory) || TREATMENT_CATEGORIES[0];
  const availableSubcategories = matchedCatObj?.subcategories || [];

  const [selectedTreatment, setSelectedTreatment] = useState<string>(
    preselectedFromRoute || availableSubcategories[0]?.title || 'Comprehensive Oral Examination'
  );

  const [selectedDoctor, setSelectedDoctor] = useState<string>('dr-sheekha-shah');
  const [visitType, setVisitType] = useState<'in-person' | 'virtual'>('in-person');
  
  // Date & Time
  const todayStr = new Date().toISOString().split('T')[0];
  const [preferredDate, setPreferredDate] = useState<string>(todayStr);
  const [preferredTime, setPreferredTime] = useState<string>('Morning (09:00 AM - 12:00 PM)');

  // Patient Info
  const [patientName, setPatientName] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientType, setPatientType] = useState<'new' | 'existing'>('new');
  const [patientCity, setPatientCity] = useState<string>('');
  const [patientCountry, setPatientCountry] = useState<string>('United States');

  // Concern & Medical
  const [primaryConcern, setPrimaryConcern] = useState<string>('Toothache / Severe Pain');
  const [concernDetails, setConcernDetails] = useState<string>('');
  const [medicalConditions, setMedicalConditions] = useState<string[]>([]);
  const [medicalNotes, setMedicalNotes] = useState<string>('');

  // Files
  const [reportFiles, setReportFiles] = useState<File[]>([]);
  const [xrayFiles, setXrayFiles] = useState<File[]>([]);

  // Contact Method & Consent
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');
  const [callbackTime, setCallbackTime] = useState<string>('Anytime');
  const [privacyConsent, setPrivacyConsent] = useState<boolean>(false);
  const [whatsappConsent, setWhatsappConsent] = useState<boolean>(true);

  // Form Validation & Confirmation
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmationData, setConfirmationData] = useState<{
    referenceId: string;
    submittedAt: string;
  } | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Real-time clinic open calculation
  const [isClinicOpen, setIsClinicOpen] = useState(true);
  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    if (day === 0) setIsClinicOpen(false);
    else if (day === 6) setIsClinicOpen(hour >= 9 && hour < 16);
    else setIsClinicOpen(hour >= 8 && hour < 19);
  }, []);

  // Update selected subcategory if category changes
  const handleCategoryChange = (catTitle: string) => {
    setSelectedCategory(catTitle);
    const catObj = TREATMENT_CATEGORIES.find(c => c.title === catTitle);
    if (catObj && catObj.subcategories.length > 0) {
      setSelectedTreatment(catObj.subcategories[0].title);
    }
  };

  const toggleMedicalCondition = (cond: string) => {
    if (cond === 'None / No Known Conditions') {
      setMedicalConditions(['None / No Known Conditions']);
      return;
    }
    setMedicalConditions(prev => {
      const filtered = prev.filter(c => c !== 'None / No Known Conditions');
      if (filtered.includes(cond)) {
        return filtered.filter(c => c !== cond);
      } else {
        return [...filtered, cond];
      }
    });
  };

  const handleReportUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArr = Array.from(e.target.files);
      setReportFiles(prev => [...prev, ...filesArr]);
    }
  };

  const handleXrayUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArr = Array.from(e.target.files);
      setXrayFiles(prev => [...prev, ...filesArr]);
    }
  };

  const removeReport = (index: number) => {
    setReportFiles(prev => prev.filter((_, i) => i !== index));
  };

  const removeXray = (index: number) => {
    setXrayFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!patientName.trim()) errors.patientName = 'Full name is required';
    if (!patientEmail.trim() || !/\S+@\S+\.\S+/.test(patientEmail)) errors.patientEmail = 'Valid email address is required';
    if (!patientPhone.trim() || patientPhone.trim().length < 6) errors.patientPhone = 'Valid phone number is required';
    if (!preferredDate) errors.preferredDate = 'Please select a preferred date';
    if (!privacyConsent) errors.privacyConsent = 'You must agree to the privacy consent to proceed';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const errEl = document.getElementById('sec-summary');
      if (errEl) errEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const refId = 'APT-' + Math.floor(100000 + Math.random() * 900000);
    const submittedTime = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    setConfirmationData({
      referenceId: refId,
      submittedAt: submittedTime
    });

    setIsSubmitted(true);

    setTimeout(() => {
      const confirmSection = document.getElementById('sec-confirmation');
      if (confirmSection) confirmSection.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const emergencyPhoneClean = CLINIC_INFO.emergencyPhone.replace(/[^0-9]/g, '');
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_INFO.address)}`;

  const chosenDoctorObj = DOCTORS.find(d => d.id === selectedDoctor) || DOCTORS[0];

  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Quick Jump Navigation Bar */}
        <div className="space-y-4">
          <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
            <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold">Book Appointment</span>
          </nav>

          <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none text-xs font-semibold">
            <span className="text-slate-400 uppercase tracking-wider shrink-0 text-[10px] font-bold">Quick Jump:</span>
            {[
              { id: 'sec-hero', label: '1. Hero' },
              { id: 'sec-whybook', label: '2. Why Book With Us' },
              { id: 'sec-bookingform', label: '3. Booking Form' },
              { id: 'sec-treatment', label: '4. Treatment' },
              { id: 'sec-doctor', label: '5. Doctor' },
              { id: 'sec-datetime', label: '6. Date & Time' },
              { id: 'sec-patientinfo', label: '7. Patient Info' },
              { id: 'sec-concern', label: '8. Concern' },
              { id: 'sec-medicalhistory', label: '9. Medical' },
              { id: 'sec-upload', label: '10. Upload Scans' },
              { id: 'sec-contactmethod', label: '11. Contact Method' },
              { id: 'sec-consent', label: '12. Consent' },
              { id: 'sec-summary', label: '13. Summary' },
              { id: 'sec-timings', label: '14. Timings' },
              { id: 'sec-map', label: '15. Google Map' },
              { id: 'sec-emergency', label: '16. Emergency' },
              { id: 'sec-faq', label: '17. FAQs' },
              { id: 'sec-confirmation', label: '18. Confirmation' },
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
            SECTION 1: APPOINTMENT HERO
           ========================================== */}
        <section id="sec-hero" className="scroll-mt-24 space-y-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={VIEWPORT_CONFIG}
            className="bg-gradient-to-r from-[#1A3848] via-[#0B4F6C] to-[#125D7F] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                  Section 1: Dedicated Appointment Desk
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-cyan-100 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
                  Zero Wait-Time Guarantee
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
                Book Your Priority Consultation with Dr. Sheekha Shah
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-3xl">
                Experience world-class microscopic dental care, painless procedures, and transparent treatment plans at DENTAL STUDIO. Schedule your visit in 2 minutes with guaranteed instant front-desk confirmation.
              </p>

              {/* Key Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs font-medium">
                <div className="space-y-1">
                  <span className="text-teal-300 font-extrabold text-xl block">100% Pain-Free</span>
                  <span className="text-slate-300">Computerized Anesthesia</span>
                </div>
                <div className="space-y-1">
                  <span className="text-teal-300 font-extrabold text-xl block">Microscopic</span>
                  <span className="text-slate-300">Zeiss 20x Magnification</span>
                </div>
                <div className="space-y-1">
                  <span className="text-teal-300 font-extrabold text-xl block">0% EMI</span>
                  <span className="text-slate-300">Flexible Installments</span>
                </div>
                <div className="space-y-1">
                  <span className="text-teal-300 font-extrabold text-xl block">4.9 ★★★★★</span>
                  <span className="text-slate-300">Verified Patient Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ==========================================
            SECTION 2: WHY BOOK WITH US
           ========================================== */}
        <section id="sec-whybook" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 2</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Why Book Your Care With DENTAL STUDIO?
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Uncompromising clinical excellence, advanced technology, and patient-first empathy in every appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Stethoscope,
                title: 'Microscopic Precision',
                desc: 'Every procedure is performed using German Carl Zeiss microscopes for 20x magnification, preserving max natural tooth structure.',
                color: 'bg-cyan-50 text-[#0B4F6C]'
              },
              {
                icon: Clock,
                title: 'Zero Wait-Time Guarantee',
                desc: 'We strictly honor appointment slots. No sitting in crowded waiting rooms for hours — your time is respected.',
                color: 'bg-emerald-50 text-emerald-700'
              },
              {
                icon: ShieldCheck,
                title: '7-Tier Hospital Sterilization',
                desc: 'Class-B Autoclave 100% biological indicator verified sterilization. Your safety and hygiene are non-negotiable.',
                color: 'bg-indigo-50 text-indigo-700'
              },
              {
                icon: CreditCard,
                title: '0% Interest EMI Financing',
                desc: 'Comprehensive treatment plans with no hidden costs. Pay conveniently with flexible monthly zero-interest EMI options.',
                color: 'bg-amber-50 text-amber-700'
              },
              {
                icon: Award,
                title: '15+ Years Clinical Mastery',
                desc: 'Led by Dr. Sheekha Shah, award-winning endodontist and implant surgeon trusted by thousands of patients globally.',
                color: 'bg-rose-50 text-rose-700'
              },
              {
                icon: Globe,
                title: 'International Patient Concierge',
                desc: 'Dedicated assistance for medical travelers, including airport transfers, hotel coordination, and fast-track procedures.',
                color: 'bg-teal-50 text-teal-700'
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-3">
                <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center font-bold`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-800 font-heading">{card.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            SECTION 3: APPOINTMENT BOOKING FORM (MASTER WRAPPER & STEPS 4-12)
           ========================================== */}
        <section id="sec-bookingform" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 3</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
                Interactive Appointment Booking Form
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Please complete the sections below to configure your appointment parameters.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs font-bold">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Confidential & Secure</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            
            {/* ==========================================
                SECTION 4: TREATMENT SELECTION
               ========================================== */}
            <div id="sec-treatment" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">4</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Treatment & Procedure Selection
                  </h3>
                  <p className="text-slate-500 text-xs">Choose the primary category and procedure you wish to consult for.</p>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">Select Treatment Category:</label>
                <div className="flex flex-wrap gap-2">
                  {TREATMENT_CATEGORIES.map(cat => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.title)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedCategory === cat.title
                          ? 'bg-[#0B4F6C] text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subcategories / Specific Treatments Grid */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold text-slate-700">Select Specific Procedure:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {availableSubcategories.map((subcat) => (
                    <button
                      type="button"
                      key={subcat.id}
                      onClick={() => setSelectedTreatment(subcat.title)}
                      className={`p-4 rounded-2xl border text-left transition-all text-xs flex flex-col justify-between space-y-2 ${
                        selectedTreatment === subcat.title
                          ? 'border-[#0B4F6C] bg-cyan-50/80 text-[#0B4F6C] font-bold shadow-xs ring-2 ring-[#0B4F6C]/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-800">{subcat.title}</span>
                        {selectedTreatment === subcat.title && (
                          <CheckCircle className="w-4 h-4 text-[#0B4F6C] shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2">{subcat.shortDesc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>


            {/* ==========================================
                SECTION 5: DOCTOR SELECTION
               ========================================== */}
            <div id="sec-doctor" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">5</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Doctor & Specialist Selection
                  </h3>
                  <p className="text-slate-500 text-xs">Select your preferred attending dentist or choose first available slot.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {DOCTORS.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-3 relative flex flex-col justify-between ${
                      selectedDoctor === doc.id
                        ? 'border-[#0B4F6C] bg-cyan-50/80 ring-2 ring-[#0B4F6C]/20 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <span className="absolute top-3 right-3 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#0B4F6C] text-white">
                      {doc.tag}
                    </span>

                    <div className="flex items-center gap-3">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-xs"
                      />
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-800">{doc.name}</h4>
                        <p className="text-[11px] text-[#0B4F6C] font-semibold">{doc.title}</p>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-600 space-y-1 pt-2 border-t border-slate-200/60">
                      <p><strong>Experience:</strong> {doc.experience}</p>
                      <p><strong>Specialty:</strong> {doc.specialty}</p>
                    </div>

                    <div className="pt-2 flex items-center justify-end">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedDoctor === doc.id ? 'border-[#0B4F6C] bg-[#0B4F6C] text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {selectedDoctor === doc.id && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* ==========================================
                SECTION 6: PREFERRED DATE & TIME
               ========================================== */}
            <div id="sec-datetime" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">6</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Preferred Visit Date & Time Window
                  </h3>
                  <p className="text-slate-500 text-xs">Choose whether you wish to visit in-person or attend virtually.</p>
                </div>
              </div>

              {/* Visit Type Toggle */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">Appointment Format:</label>
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  <button
                    type="button"
                    onClick={() => setVisitType('in-person')}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      visitType === 'in-person'
                        ? 'bg-[#0B4F6C] border-[#0B4F6C] text-white shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>In-Person Clinic Visit</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisitType('virtual')}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      visitType === 'virtual'
                        ? 'bg-[#0B4F6C] border-[#0B4F6C] text-white shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span>Virtual Video Consult</span>
                  </button>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                        formErrors.preferredDate ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                      } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                    />
                  </div>
                  {formErrors.preferredDate && (
                    <span className="text-[10px] text-rose-500 font-bold block">{formErrors.preferredDate}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Preferred Time Window:
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                    >
                      <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>


            {/* ==========================================
                SECTION 7: PATIENT INFORMATION
               ========================================== */}
            <div id="sec-patientinfo" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">7</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Patient Personal Information
                  </h3>
                  <p className="text-slate-500 text-xs">Enter your primary contact details for appointment confirmation.</p>
                </div>
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
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                        formErrors.patientName ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                      } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                    />
                  </div>
                  {formErrors.patientName && (
                    <span className="text-[10px] text-rose-500 font-bold block">{formErrors.patientName}</span>
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
                      placeholder="sarah@example.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                        formErrors.patientEmail ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                      } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                    />
                  </div>
                  {formErrors.patientEmail && (
                    <span className="text-[10px] text-rose-500 font-bold block">{formErrors.patientEmail}</span>
                  )}
                </div>

                {/* Phone & Country Code */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Phone / Mobile <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="px-2 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+61">🇦🇺 +61</option>
                    </select>
                    <div className="relative flex-1">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border ${
                          formErrors.patientPhone ? 'border-rose-500 bg-rose-50/20' : 'border-slate-200'
                        } text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] transition-all`}
                      />
                    </div>
                  </div>
                  {formErrors.patientPhone && (
                    <span className="text-[10px] text-rose-500 font-bold block">{formErrors.patientPhone}</span>
                  )}
                </div>

                {/* Patient Status */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Patient Status:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPatientType('new')}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                        patientType === 'new'
                          ? 'bg-[#0B4F6C] text-white border-[#0B4F6C]'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      New Patient
                    </button>
                    <button
                      type="button"
                      onClick={() => setPatientType('existing')}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                        patientType === 'existing'
                          ? 'bg-[#0B4F6C] text-white border-[#0B4F6C]'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      Existing Patient
                    </button>
                  </div>
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">City:</label>
                  <input
                    type="text"
                    placeholder="e.g. New York / Mumbai"
                    value={patientCity}
                    onChange={(e) => setPatientCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  />
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Country:</label>
                  <input
                    type="text"
                    placeholder="e.g. United States"
                    value={patientCountry}
                    onChange={(e) => setPatientCountry(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  />
                </div>

              </div>
            </div>


            {/* ==========================================
                SECTION 8: DENTAL CONCERN
               ========================================== */}
            <div id="sec-concern" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">8</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Primary Dental Concern & Symptoms
                  </h3>
                  <p className="text-slate-500 text-xs">Help us prepare the clinical setup by describing your primary issue.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Primary Complaint / Goal:</label>
                  <select
                    value={primaryConcern}
                    onChange={(e) => setPrimaryConcern(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  >
                    <option value="Toothache / Severe Pain">Toothache / Severe Pain</option>
                    <option value="Tooth Sensitivity (Hot/Cold)">Tooth Sensitivity (Hot/Cold)</option>
                    <option value="Crooked / Misaligned Teeth">Crooked / Misaligned Teeth</option>
                    <option value="Missing Teeth / Gap">Missing Teeth / Gap</option>
                    <option value="Discolored / Stained Teeth">Discolored / Stained Teeth</option>
                    <option value="Bleeding or Swollen Gums">Bleeding or Swollen Gums</option>
                    <option value="Broken Crown or Filling">Broken Crown or Filling</option>
                    <option value="Routine Preventive Cleaning">Routine Preventive Cleaning</option>
                    <option value="Full Smile Makeover Consultation">Full Smile Makeover Consultation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Describe Specific Symptoms / History (Optional):</label>
                  <textarea
                    rows={3}
                    placeholder="Mention how long you have experienced pain, sensitivity to sweets or temperature, previous fillings, or specific expectations..."
                    value={concernDetails}
                    onChange={(e) => setConcernDetails(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  />
                </div>
              </div>
            </div>


            {/* ==========================================
                SECTION 9: MEDICAL HISTORY (OPTIONAL)
               ========================================== */}
            <div id="sec-medicalhistory" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">9</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Medical History & Conditions (Optional)
                  </h3>
                  <p className="text-slate-500 text-xs">Essential for safe anesthesia and pre-operative antibiotic protocols.</p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700">Select any pre-existing health conditions:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {MEDICAL_CONDITIONS.map((cond) => {
                    const isChecked = medicalConditions.includes(cond);
                    return (
                      <button
                        type="button"
                        key={cond}
                        onClick={() => toggleMedicalCondition(cond)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-teal-50 border-teal-600 text-teal-900 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="pr-2">{cond}</span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ongoing Medications / Additional Medical Notes:</label>
                  <input
                    type="text"
                    placeholder="e.g. Taking Aspirin 75mg daily, allergic to Penicillin..."
                    value={medicalNotes}
                    onChange={(e) => setMedicalNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  />
                </div>
              </div>
            </div>


            {/* ==========================================
                SECTION 10: UPLOAD DENTAL REPORTS / X-RAYS
               ========================================== */}
            <div id="sec-upload" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">10</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Upload Dental Reports & X-rays (Optional)
                  </h3>
                  <p className="text-slate-500 text-xs">Attach previous OPG scans, CBCT 3D files, or photos for pre-visit doctor evaluation.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Reports Upload */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-[#0B4F6C] flex items-center justify-center mx-auto">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800">Upload Clinical Reports / Prescriptions</h4>
                    <p className="text-[11px] text-slate-500">PDF, DOC, PNG, JPG up to 10MB</p>
                  </div>

                  <input
                    type="file"
                    ref={reportInputRef}
                    onChange={handleReportUpload}
                    multiple
                    className="hidden"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  />

                  <button
                    type="button"
                    onClick={() => reportInputRef.current?.click()}
                    className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all inline-flex items-center gap-2"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Select Report Files</span>
                  </button>

                  {/* List */}
                  {reportFiles.length > 0 && (
                    <div className="space-y-1.5 pt-2 text-left">
                      {reportFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs">
                          <span className="truncate max-w-[180px] font-medium text-slate-700">{file.name}</span>
                          <button type="button" onClick={() => removeReport(idx)} className="text-rose-500 hover:text-rose-700">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* X-Rays Upload */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto">
                    <Paperclip className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800">Upload X-Rays & Dental Scans</h4>
                    <p className="text-[11px] text-slate-500">DICOM, OPG, JPG, PNG up to 25MB</p>
                  </div>

                  <input
                    type="file"
                    ref={xrayInputRef}
                    onChange={handleXrayUpload}
                    multiple
                    className="hidden"
                    accept=".png,.jpg,.jpeg,.dicom,.dcm"
                  />

                  <button
                    type="button"
                    onClick={() => xrayInputRef.current?.click()}
                    className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all inline-flex items-center gap-2"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Select X-Ray / OPG Scans</span>
                  </button>

                  {/* List */}
                  {xrayFiles.length > 0 && (
                    <div className="space-y-1.5 pt-2 text-left">
                      {xrayFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs">
                          <span className="truncate max-w-[180px] font-medium text-slate-700">{file.name}</span>
                          <button type="button" onClick={() => removeXray(idx)} className="text-rose-500 hover:text-rose-700">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>


            {/* ==========================================
                SECTION 11: PREFERRED CONTACT METHOD
               ========================================== */}
            <div id="sec-contactmethod" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">11</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Preferred Contact Channel & Callback Timing
                  </h3>
                  <p className="text-slate-500 text-xs">How should our clinical concierge team reach out to confirm your slot?</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Preferred Channel:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone Call', 'Email'] as const).map(channel => (
                      <button
                        type="button"
                        key={channel}
                        onClick={() => setPreferredContact(channel)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition-all ${
                          preferredContact === channel
                            ? 'bg-[#0B4F6C] text-white border-[#0B4F6C]'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {channel}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">Best Time for Callback:</label>
                  <select
                    value={callbackTime}
                    onChange={(e) => setCallbackTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  >
                    <option value="Anytime">Anytime</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
              </div>
            </div>


            {/* ==========================================
                SECTION 12: PRIVACY CONSENT
               ========================================== */}
            <div id="sec-consent" className="scroll-mt-24 space-y-4 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">12</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Privacy Consent & Data Authorization
                  </h3>
                  <p className="text-slate-500 text-xs">Your medical privacy is guaranteed under strict HIPAA / ISO 27001 data safety standards.</p>
                </div>
              </div>

              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#0B4F6C] rounded focus:ring-[#0B4F6C]"
                  />
                  <span className="text-xs text-slate-700 leading-relaxed font-medium">
                    I consent to Dr. Sheekha Shah DENTAL STUDIO storing and processing my personal and clinical information strictly for scheduling, diagnostic evaluation, and direct patient communications. <span className="text-rose-500 font-bold">* Required</span>
                  </span>
                </label>
                {formErrors.privacyConsent && (
                  <span className="text-[10px] text-rose-500 font-bold block pl-7">{formErrors.privacyConsent}</span>
                )}

                <label className="flex items-start gap-3 cursor-pointer pt-2 border-t border-slate-200">
                  <input
                    type="checkbox"
                    checked={whatsappConsent}
                    onChange={(e) => setWhatsappConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#0B4F6C] rounded focus:ring-[#0B4F6C]"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to receive automated appointment reminders, post-operative instructions, and pre-visit guidelines via WhatsApp/SMS.
                  </span>
                </label>
              </div>
            </div>


            {/* ==========================================
                SECTION 13: APPOINTMENT SUMMARY & SUBMIT CTA
               ========================================== */}
            <div id="sec-summary" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#0B4F6C] text-white text-xs font-black flex items-center justify-center">13</span>
                <div>
                  <h3 className="text-lg font-extrabold font-heading text-slate-800">
                    Live Appointment Summary & Final Submission
                  </h3>
                  <p className="text-slate-500 text-xs">Review your selected parameters before submitting your request.</p>
                </div>
              </div>

              {/* Summary Card */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300">Selected Configuration</span>
                  <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full text-slate-300">Format: {visitType.toUpperCase()}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Category & Procedure:</span>
                    <strong className="text-white text-sm block font-heading">{selectedTreatment}</strong>
                    <span className="text-teal-300 text-[11px]">{selectedCategory}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Attending Specialist:</span>
                    <strong className="text-white text-sm block font-heading">{chosenDoctorObj.name}</strong>
                    <span className="text-slate-300 text-[11px]">{chosenDoctorObj.title}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Visit Date & Slot:</span>
                    <strong className="text-white text-sm block font-heading">{preferredDate || 'Not selected'}</strong>
                    <span className="text-slate-300 text-[11px]">{preferredTime}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Patient Details:</span>
                    <strong className="text-white text-sm block font-heading">{patientName || 'Name missing'}</strong>
                    <span className="text-slate-300 text-[11px]">{countryCode} {patientPhone || 'Phone missing'}</span>
                  </div>
                </div>

                {/* Additional Summary Details */}
                <div className="pt-3 border-t border-white/10 text-[11px] text-slate-300 flex flex-wrap items-center justify-between gap-2">
                  <span>Primary Issue: <strong className="text-white">{primaryConcern}</strong></span>
                  <span>Uploaded Files: <strong className="text-teal-300">{reportFiles.length + xrayFiles.length} attached</strong></span>
                  <span>Callback Channel: <strong className="text-teal-300">{preferredContact} ({callbackTime})</strong></span>
                </div>

                {/* Validation errors warning banner */}
                {Object.keys(formErrors).length > 0 && (
                  <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Please fix highlighted fields above before submitting.</span>
                  </div>
                )}

                {/* Large Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-teal-400 hover:bg-teal-300 text-slate-950 font-extrabold text-base py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 fill-slate-950" />
                  <span>Confirm & Submit Appointment Request</span>
                </motion.button>
              </div>

            </div>

          </form>
        </section>


        {/* ==========================================
            SECTION 14: CLINIC TIMINGS
           ========================================== */}
        <section id="sec-timings" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 14</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Clinic Operating Hours & Schedule
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Flexible appointment windows structured to fit local schedules and international travel plans.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
            
            {/* Realtime Status Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 text-white shadow-inner">
              <div className="flex items-center gap-3">
                <div className={`w-3.5 h-3.5 rounded-full animate-ping ${isClinicOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300 block">Live Status</span>
                  <h3 className="text-base font-extrabold text-white font-heading">
                    {isClinicOpen ? '🟢 CLINIC IS OPEN NOW' : '🟡 CLINIC IS CURRENTLY CLOSED'}
                  </h3>
                </div>
              </div>

              <div className="text-right text-xs text-slate-300">
                <span>Timezone: <strong className="text-teal-300">IST (GMT +5:30)</strong></span>
                <span className="block text-[11px] text-slate-400">24/7 Virtual WhatsApp & Emergency desks active</span>
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
                <p className="text-[11px] text-slate-500">Full clinical consultations, surgeries & smile restorations.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>SATURDAY</span>
                  <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded">Weekend</span>
                </div>
                <div className="text-lg font-black text-slate-800 font-heading">
                  {CLINIC_INFO.hours.saturday}
                </div>
                <p className="text-[11px] text-slate-500">Ideal for working professionals & express aligner scans.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>SUNDAY</span>
                  <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Special</span>
                </div>
                <div className="text-lg font-black text-slate-800 font-heading">
                  {CLINIC_INFO.hours.sunday}
                </div>
                <p className="text-[11px] text-slate-500">Prior appointment & trauma emergency care only.</p>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-rose-700">
                  <span>24/7 EMERGENCY</span>
                  <span className="text-rose-700 bg-rose-100 px-2 py-0.5 rounded">Always On</span>
                </div>
                <div className="text-lg font-black text-rose-900 font-heading">
                  On-Call Specialist
                </div>
                <p className="text-[11px] text-rose-700">Immediate relief for severe toothache or trauma.</p>
              </div>
            </div>

          </div>
        </section>


        {/* ==========================================
            SECTION 15: GOOGLE MAP
           ========================================== */}
        <section id="sec-map" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 15</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Clinic Location & Navigation Map
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Easily accessible in Central Medical Plaza with complimentary valet parking.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl space-y-0">
            <div className="relative w-full h-[400px] sm:h-[450px] bg-slate-200">
              <iframe
                title="Dr. Sheekha Shah DENTAL STUDIO Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.005470000000!2d72.850000!3d19.100000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTkuMTAnMDAuMCJOIDcywrA1MScwMC4wIkU!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              />

              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-slate-900/90 backdrop-blur-md text-white p-5 rounded-2xl border border-white/20 shadow-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-teal-400" />
                  <h3 className="text-sm font-bold text-white font-heading">Clinic Address</h3>
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
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 16: EMERGENCY CONTACT
           ========================================== */}
        <section id="sec-emergency" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-widest">Section 16</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              24/7 Emergency Dental Trauma Care
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Immediate clinical intervention for severe pain, knocked-out teeth, or facial swelling.
            </p>
          </div>

          <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-rose-500/30">
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-200 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider border border-rose-400/30">
                <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
                Urgent Clinical Triage
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                Experiencing Acute Pain or Trauma?
              </h3>
              <p className="text-rose-100 text-xs sm:text-sm max-w-xl leading-relaxed">
                Do not wait. Call our dedicated emergency helpline directly or text us on WhatsApp for immediate on-call doctor assignment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href={`tel:${emergencyPhoneClean}`}
                className="bg-white hover:bg-rose-50 text-rose-900 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Call Emergency Hotline</span>
              </a>
              <a
                href={`https://wa.me/${phoneClean}?text=EMERGENCY%20REQUEST:%20Severe%20Toothache`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Emergency</span>
              </a>
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 17: FREQUENTLY ASKED QUESTIONS
           ========================================== */}
        <section id="sec-faq" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 17</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Frequently Asked Booking Questions
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Answers to common queries regarding appointments, insurance, and consultation protocols.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 text-sm hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#0B4F6C] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0B4F6C]' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>


        {/* ==========================================
            SECTION 18: APPOINTMENT CONFIRMATION (RECEIPT BLOCK)
           ========================================== */}
        <section id="sec-confirmation" className="scroll-mt-24 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest">Section 18</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Appointment Request Status & Confirmation
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Your generated booking receipt and official consultation reference card.
            </p>
          </div>

          {isSubmitted && confirmationData ? (
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 border-2 border-emerald-500/30 shadow-2xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Official Receipt</span>
                    <h3 className="text-xl font-extrabold text-emerald-950 font-heading">
                      Appointment Request Submitted Successfully!
                    </h3>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Reference ID: <strong className="font-mono font-bold text-emerald-950">{confirmationData.referenceId}</strong>
                    </p>
                  </div>
                </div>

                <div className="text-right text-xs text-emerald-800 font-medium">
                  <span>Submitted At: <strong>{confirmationData.submittedAt}</strong></span>
                  <span className="block text-[11px] text-emerald-600">Front desk review in progress</span>
                </div>
              </div>

              {/* Confirmation Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Patient Name:</span>
                  <span className="font-extrabold text-slate-800 text-sm">{patientName}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Contact Info:</span>
                  <span className="font-bold text-slate-800">{countryCode} {patientPhone}</span>
                  <span className="block text-slate-500">{patientEmail}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Requested Treatment:</span>
                  <span className="font-bold text-[#0B4F6C]">{selectedTreatment}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Preferred Doctor:</span>
                  <span className="font-bold text-slate-800">{chosenDoctorObj.name}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Preferred Date & Slot:</span>
                  <span className="font-bold text-slate-800">{preferredDate} ({preferredTime})</span>
                </div>

                <div className="space-y-1">
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Format & Location:</span>
                  <span className="font-bold text-slate-800">{visitType === 'in-person' ? 'In-Person Clinic Visit' : 'Virtual Video Consultation'}</span>
                </div>
              </div>

              {/* Next Steps Information */}
              <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-900 space-y-1">
                <p className="font-bold">What happens next?</p>
                <p className="text-[11px] leading-relaxed">
                  1. Our front desk coordinator will contact you via <strong>{preferredContact}</strong> within 30-60 minutes to confirm doctor availability.
                  <br />
                  2. If you uploaded X-rays or dental scans, Dr. Sheekha Shah will review them prior to your visit.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Print Receipt</span>
                </button>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${phoneClean}?text=Hello%20DENTAL%20STUDIO,%20I%20have%20submitted%20booking%20request%20${confirmationData.referenceId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Front Desk</span>
                  </a>

                  <Link
                    to="/"
                    className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors"
                  >
                    <span>Return to Home Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">Pending Form Submission</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Please complete and submit the booking form in Section 3 above to generate your official appointment confirmation receipt.
              </p>
              <a
                href="#sec-bookingform"
                className="inline-block text-xs font-extrabold text-[#0B4F6C] hover:underline"
              >
                Go to Booking Form ↑
              </a>
            </div>
          )}
        </section>

      </div>
    </PageWrapper>
  );
};
