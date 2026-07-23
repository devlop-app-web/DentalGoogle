import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { TREATMENTS, DOCTORS, CLINIC_INFO } from '../../data/homeData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, preselectedServiceId }) => {
  const [serviceId, setServiceId] = useState(preselectedServiceId || 'invisalign');
  const [doctorId, setDoctorId] = useState('dr-sheekha-shah');
  const [date, setDate] = useState(new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedService = TREATMENTS.find(t => t.id === serviceId) || TREATMENTS[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          id="appointment-modal-close-btn"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#0F6CBD] uppercase tracking-wider block">Dr. Sheekha Shah DENTAL STUDIO Reservation</span>
              <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading">
                Book Consultation
              </h3>
              <p className="text-xs text-slate-500">Includes free 3D iTero® oral scanning & personalized treatment estimate.</p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Procedure / Care Type
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#0F6CBD] focus:outline-none"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title} ({t.startingPrice})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Specialist
                  </label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#0F6CBD] focus:outline-none"
                  >
                    {DOCTORS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#0F6CBD] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#0F6CBD] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#0F6CBD] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#0F6CBD] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#0F6CBD] hover:bg-[#0B5598] text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Confirm Reservation</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-heading">Reservation Sent!</h3>
            <p className="text-xs text-slate-600">
              We have received your appointment request for <span className="font-bold">{selectedService.title}</span> on <span className="font-bold">{date}</span>. Our clinic coordinator will call you shortly to finalize details.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#0F6CBD] text-white font-bold text-xs px-6 py-2.5 rounded-xl"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
