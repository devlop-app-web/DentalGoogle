import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, FileText, CreditCard, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/homeData';
import { PageWrapper } from '../components/ui/PageWrapper';

interface PatientInfoPageProps {
  onOpenBooking: () => void;
  onOpenClinicTour: () => void;
}

export const PatientInfoPage: React.FC<PatientInfoPageProps> = ({ onOpenBooking, onOpenClinicTour }) => {
  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">Patient Information</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              Comprehensive Patient Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Patient Information & Care Guide
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Everything you need to know about visiting Dr. Sheekha Shah DENTAL STUDIO — from your very first appointment to flexible financing and post-procedure guidelines.
            </p>
          </div>
        </div>

        {/* First Visit Process Cards */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-heading text-slate-800">
            What to Expect During Your First Visit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -4 }} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-50 flex items-center justify-center text-[#0B4F6C]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-800">1. Digital Registration</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Seamless digital check-in review of your medical and dental history in our comfortable, quiet lounge area.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-800">2. 3D iTero® Scan</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                High-definition digital intraoral scanning capturing full 3D tooth geometry without messy impression trays.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-800">3. Specialist Consultation</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                In-depth discussion with Dr. Sheekha Shah outlining transparent treatment options, timelines, and exact pricing.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Financial & Payment Options */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
          <h2 className="text-2xl font-bold font-heading text-slate-800 flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-[#0B4F6C]" />
            Flexible Payment Options & Insurance Guidance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-800">Payment Modes Accepted</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> All Major Credit & Debit Cards (Visa, Mastercard, Amex)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Instant Bank Transfers & Digital Wallets</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> 0% Interest Monthly EMI Plans</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-slate-800">Insurance & Claims</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We assist patients with full itemized dental documentation, diagnostic radiographs, and claim vouchers required for medical insurance reimbursements.
              </p>
            </div>
          </div>
        </div>

        {/* Clinic Hours & Directions */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-heading flex items-center gap-2">
            <Clock className="w-6 h-6 text-teal-300" />
            Clinic Operating Hours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div>
              <span className="font-bold text-white block">Monday – Friday</span>
              <span>{CLINIC_INFO.hours.weekdays}</span>
            </div>
            <div>
              <span className="font-bold text-white block">Saturday</span>
              <span>{CLINIC_INFO.hours.saturday}</span>
            </div>
            <div>
              <span className="font-bold text-white block">Sunday</span>
              <span>{CLINIC_INFO.hours.sunday}</span>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="bg-gradient-to-br from-[#0B4F6C] to-[#083A50] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-cyan-500/20">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">Have Questions Before Your Visit?</h3>
            <p className="text-cyan-100 text-sm">Call our front desk for immediate assistance or book online.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#0B4F6C] hover:bg-cyan-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center space-x-2 shrink-0"
            >
              <Calendar className="w-4 h-4 text-[#0B4F6C]" />
              <span>Book Appointment</span>
            </motion.button>
            <button
              onClick={onOpenClinicTour}
              className="border border-white/30 hover:bg-white/10 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors backdrop-blur-sm shrink-0"
            >
              Take Virtual Tour
            </button>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

