import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Send, CheckCircle2, HelpCircle, Phone, Mail, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';

export const GeneralEnquiryPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Treatment Cost & Financing');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent('Hello Dr. Sheekha Shah DENTAL STUDIO, I have a general enquiry.')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const categories = [
    'Treatment Cost & Financing',
    'Invisalign & Braces Enquiry',
    'Swiss Dental Implants Inquiry',
    'Insurance & Payment Options',
    'International Patient Care',
    'Second Opinion Request'
  ];

  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">General Enquiry</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#0B4F6C] via-[#083E55] to-[#052C3E] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 bg-cyan-400/20 border border-cyan-300/30 text-cyan-200 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              Patient Support Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              General Clinical & Treatment Enquiry
            </h1>
            <p className="text-cyan-100/90 text-sm sm:text-base leading-relaxed">
              Have a question about dental treatments, zero-pain options, 0% EMI financing, or scheduling? Ask our patient care specialists.
            </p>
          </div>
        </div>

        {/* Content & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
              <h2 className="text-xl font-extrabold font-heading text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#0B4F6C]" />
                Direct Concierge Contacts
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[11px] font-extrabold text-[#0B4F6C] uppercase tracking-wider block">Front Desk Coordinator</span>
                  <a href={`tel:${phoneClean}`} className="text-sm font-extrabold text-slate-900 hover:text-[#0B4F6C] block">
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">Mon-Fri: {CLINIC_INFO.hours.weekdays}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[11px] font-extrabold text-[#0B4F6C] uppercase tracking-wider block">Email Support</span>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="text-sm font-extrabold text-[#0B4F6C] hover:underline block">
                    {CLINIC_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500">Response guaranteed within 2 business hours</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs py-3.5 rounded-2xl shadow flex items-center justify-center space-x-2 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Instant WhatsApp Guidance</span>
                </a>
              </div>
            </div>

            <div className="bg-cyan-50/80 rounded-3xl p-6 border border-cyan-200 text-slate-800 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-extrabold text-[#0B4F6C]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Strict Patient Confidentiality</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All inquiries submitted to Dr. Sheekha Shah DENTAL STUDIO are securely handled and reviewed directly by senior medical coordinators.
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <h2 className="text-2xl font-extrabold font-heading text-slate-900 mb-2">
              Submit Your General Enquiry
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Please choose a subject below and provide your contact information.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  Enquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-md mx-auto">
                  Thank you <strong>{name}</strong>. Our clinical team has received your enquiry regarding <strong>{inquiryType}</strong> and will reach out via <strong>{phone || email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="bg-[#0B4F6C] text-white font-bold text-xs px-6 py-3 rounded-xl shadow hover:bg-[#083A50] transition-all"
                >
                  Submit Another Question
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Topic Selector Pills */}
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
                    Enquiry Subject
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setInquiryType(cat)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                          inquiryType === cat
                            ? 'bg-[#0B4F6C] text-white border-[#0B4F6C] shadow-2xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Inputs with Focus Ring Effects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ananya Roy"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ananya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">Your Question or Detail *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe your query regarding treatments, pricing, or appointment availability..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C] focus:border-transparent transition-all shadow-2xs"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs sm:text-sm py-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-300" />
                      <span>Send General Enquiry</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

        </div>

      </div>
    </PageWrapper>
  );
};
