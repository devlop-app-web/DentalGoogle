import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TREATMENTS, DOCTORS, CLINIC_INFO } from '../../data/homeData';
import { AppointmentFormData } from '../../types';

interface AppointmentCTAProps {
  initialServiceId?: string;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    serviceId: initialServiceId || 'invisalign',
    preferredDoctorId: 'dr-sheekha-shah',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days from now
    preferredTimeSlot: '10:00 AM',
    fullName: '',
    email: '',
    phone: '',
    isFirstVisit: true,
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const selectedService = TREATMENTS.find(t => t.id === formData.serviceId) || TREATMENTS[0];
  const selectedDoctor = DOCTORS.find(d => d.id === formData.preferredDoctorId) || DOCTORS[0];

  return (
    <section id="appointment-cta-section" className="py-20 bg-gradient-to-br from-[#152929] via-[#1E3A3A] to-[#2E5B5B] text-white relative overflow-hidden">
      
      {/* Background Decorative Ripples */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#599E9D]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Reassurance & Value Banner */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-teal-200 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Instant Online Booking</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Book Your Consultation In Less Than 60 Seconds
            </h2>

            <p className="text-teal-100/90 text-base leading-relaxed">
              Experience personalized, zero-pain dental care. Select your preferred procedure, time, and specialist below.
            </p>

            <div className="space-y-3 pt-2 text-left">
              <div className="flex items-center space-x-3 text-sm text-teal-100/90 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-teal-300 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Free 3D iTero® Scan Included ($250 Value)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-teal-100/90 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-teal-300 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Complimentary Insurance Benefits Check</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-teal-100/90 font-medium">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-teal-300 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>No Same-Day Cancellation Fees</span>
              </div>
            </div>

            {/* Direct Telephone Hotline */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs text-teal-200 block uppercase tracking-wider font-bold">Need Immediate Assistance?</span>
              <a href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-2xl font-extrabold text-white hover:text-teal-200 transition-colors inline-flex items-center space-x-2 mt-1">
                <Phone className="w-5 h-5 text-teal-300" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Appointment Form / Confirmation View */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl border border-slate-100">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                    <h3 className="text-xl font-bold font-heading text-[#1E293B]">
                      Schedule Appointment
                    </h3>
                    <span className="text-xs font-bold text-[#2E5B5B] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                      Step 1 of 1 • Instant Confirmation
                    </span>
                  </div>

                  {/* Procedure & Doctor selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="appointment-service" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Select Care Treatment
                      </label>
                      <select
                        id="appointment-service"
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-3 focus:ring-2 focus:ring-[#2E5B5B] focus:border-[#2E5B5B] focus:outline-none"
                      >
                        {TREATMENTS.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.title} ({t.startingPrice})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="appointment-doctor" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Preferred Specialist
                      </label>
                      <select
                        id="appointment-doctor"
                        value={formData.preferredDoctorId}
                        onChange={(e) => setFormData({ ...formData, preferredDoctorId: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-3 focus:ring-2 focus:ring-[#2E5B5B] focus:border-[#2E5B5B] focus:outline-none"
                      >
                        {DOCTORS.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date & Slot selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="appointment-date" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="appointment-date"
                        value={formData.preferredDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-3 focus:ring-2 focus:ring-[#2E5B5B] focus:border-[#2E5B5B] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="appointment-time" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Time Window
                      </label>
                      <select
                        id="appointment-time"
                        value={formData.preferredTimeSlot}
                        onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-3 focus:ring-2 focus:ring-[#2E5B5B] focus:border-[#2E5B5B] focus:outline-none"
                      >
                        <option value="09:00 AM">09:00 AM (Morning)</option>
                        <option value="10:30 AM">10:30 AM (Morning)</option>
                        <option value="01:30 PM">01:30 PM (Afternoon)</option>
                        <option value="03:30 PM">03:30 PM (Afternoon)</option>
                        <option value="05:00 PM">05:00 PM (Late Shift)</option>
                      </select>
                    </div>
                  </div>

                  {/* Patient Info Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div>
                      <label htmlFor="appointment-name" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="appointment-name"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#2E5B5B] focus:border-[#2E5B5B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="appointment-email" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="appointment-email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#2E5B5B] focus:border-[#2E5B5B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="appointment-phone" className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="appointment-phone"
                        placeholder="(555) 000-0000"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#2E5B5B] focus:border-[#2E5B5B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="appointment-submit-btn"
                      className="w-full bg-[#2E5B5B] hover:bg-[#204242] text-white font-extrabold text-base py-4 rounded-xl shadow-lg shadow-[#2E5B5B]/20 active:scale-[0.99] transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Calendar className="w-5 h-5 text-teal-200" />
                      <span>Confirm & Book Appointment</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    🔒 Your personal details are protected by HIPAA medical privacy standards.
                  </p>

                </form>
              ) : (
                <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-100 text-[#2E5B5B] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading">
                      Appointment Confirmed!
                    </h3>
                    <p className="text-sm text-slate-600">
                      Thank you, <span className="font-bold text-slate-800">{formData.fullName}</span>. We've reserved your session.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-bold text-[#2E5B5B]">{selectedService.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Doctor:</span>
                      <span className="font-bold text-slate-800">{selectedDoctor.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Date & Time:</span>
                      <span className="font-bold text-slate-800">{formData.preferredDate} at {formData.preferredTimeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Location:</span>
                      <span className="font-bold text-slate-800">{CLINIC_INFO.address}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-6 py-2.5 rounded-xl transition-colors"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
