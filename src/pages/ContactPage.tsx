import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const phoneClean = CLINIC_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneClean}?text=${encodeURIComponent('Hello Dr. Sheekha Shah DENTAL STUDIO, I am writing to inquire about your dental services.')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">Contact Us</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              Get In Touch With Us
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Contact Dr. Sheekha Shah DENTAL STUDIO
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We are always here to answer your dental queries, schedule appointments, or handle emergency dental care.
            </p>
          </div>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Clinic Information Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
              <h2 className="text-xl font-bold font-heading text-slate-800">
                Clinic Details
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#0B4F6C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Address</span>
                    <span className="text-slate-600 text-xs">{CLINIC_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#0B4F6C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Phone Support</span>
                    <a href={`tel:${phoneClean}`} className="text-xs text-[#0B4F6C] font-semibold hover:underline block">{CLINIC_INFO.phone}</a>
                    <a href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`} className="text-xs text-rose-600 font-semibold block mt-0.5">Emergency: {CLINIC_INFO.emergencyPhone}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#0B4F6C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Email Inquiries</span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-xs text-[#0B4F6C] font-semibold hover:underline">{CLINIC_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#0B4F6C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block">Clinic Hours</span>
                    <span className="text-xs text-slate-600 block">Mon-Fri: {CLINIC_INFO.hours.weekdays}</span>
                    <span className="text-xs text-slate-600 block">Sat: {CLINIC_INFO.hours.saturday} | Sun: {CLINIC_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Direct Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
            <h2 className="text-2xl font-bold font-heading text-slate-800 mb-2">
              Send Us a Message
            </h2>
            <p className="text-slate-500 text-xs mb-6">
              Fill out the form below and our clinical team will get back to you within 2 business hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold">Thank You for Reaching Out!</h3>
                <p className="text-xs leading-relaxed text-emerald-800">
                  Your message has been delivered to Dr. Sheekha Shah's team. We will contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Inquiry *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                    placeholder="Tell us about your dental needs or preferred appointment time..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Global CTA */}
        <div className="bg-gradient-to-br from-[#0B4F6C] to-[#083A50] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-cyan-500/20">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">Prefer Instant Online Booking?</h3>
            <p className="text-cyan-100 text-sm">Select your treatment and reserve your slot instantly on our calendar.</p>
          </div>
          <motion.button
            onClick={onOpenBooking}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-[#0B4F6C] hover:bg-cyan-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 shrink-0"
          >
            <Calendar className="w-4 h-4 text-[#0B4F6C]" />
            <span>Book Appointment Now</span>
          </motion.button>
        </div>

      </div>
    </PageWrapper>
  );
};

