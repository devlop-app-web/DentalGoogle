import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Clock, User, Phone, CheckCircle, ShieldCheck, Mail } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';

export const BookAppointmentPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(TREATMENTS[0].id);
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (10:00 AM - 1:00 PM)');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">Book Appointment</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden text-center sm:text-left">
          <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            Online Priority Scheduling
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Schedule Your Visit with Dr. Sheekha Shah
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Select your desired treatment and preferred time slot for a personalized consultation at DENTAL STUDIO.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-800">
                Appointment Requested Successfully!
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{patientName}</strong>. Our front desk coordinator will confirm your time slot via SMS/WhatsApp at <strong>{patientPhone}</strong> within 1 hour.
              </p>

              <div className="pt-6">
                <Link
                  to="/"
                  className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all inline-block"
                >
                  Return to Home Page
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Primary Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TREATMENTS.map((service) => (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all text-xs font-semibold flex items-center justify-between ${
                        selectedService === service.id
                          ? 'border-[#0B4F6C] bg-cyan-50/80 text-[#0B4F6C] font-bold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                      }`}
                    >
                      <span>{service.title}</span>
                      {selectedService === service.id && <CheckCircle className="w-4 h-4 text-[#0B4F6C]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    2. Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    3. Preferred Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (2:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Patient Contact Information */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  4. Patient Contact Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1 font-semibold">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-600 mb-1 font-semibold">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-600 mb-1 font-semibold">Specific Symptoms or Requests (Optional)</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention any acute pain, tooth sensitivity, or specific questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-base py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 border border-cyan-400/20"
              >
                <Calendar className="w-5 h-5 text-cyan-300" />
                <span>Confirm & Request Appointment</span>
              </motion.button>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Your information is strictly confidential & protected under HIPAA/GDPR standards.</span>
              </p>
            </form>
          )}
        </div>

      </div>
    </PageWrapper>
  );
};

