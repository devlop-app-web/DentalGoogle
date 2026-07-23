import React from 'react';
import { motion } from 'motion/react';
import { Calendar, UserCheck, Stethoscope, Sparkles, HeartPulse, ShieldCheck } from 'lucide-react';
import { staggerContainer, staggerItemUp, buttonHover, VIEWPORT_CONFIG } from '../../lib/motion';

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Book Appointment',
      subtitle: 'Fast 60-Second Slot Booking',
      description: 'Select your preferred time online or give us a call. Instant confirmation with zero wait time upon arrival.',
      icon: Calendar,
      color: 'bg-[#0B4F6C] text-white'
    },
    {
      num: '02',
      title: 'Consultation',
      subtitle: 'Warm Greeting & Assessment',
      description: 'Dr. Sheekha Shah listens attentively to your dental goals, aesthetic preferences, and health concerns.',
      icon: UserCheck,
      color: 'bg-[#00B4D8] text-white'
    },
    {
      num: '03',
      title: 'Diagnosis',
      subtitle: '3D Scan & Transparent Plan',
      description: 'High-definition 3D iTero® digital scanning and transparent cost breakdown with zero hidden fees.',
      icon: Stethoscope,
      color: 'bg-emerald-600 text-white'
    },
    {
      num: '04',
      title: 'Treatment',
      subtitle: 'Painless Gentle Procedure',
      description: 'Relax in our ergonomic chairs with noise-canceling headphones while receiving precision care.',
      icon: Sparkles,
      color: 'bg-[#0B4F6C] text-white'
    },
    {
      num: '05',
      title: 'Recovery',
      subtitle: 'Post-Op Comfort Guidance',
      description: 'Clear aftercare instructions, pain-prevention regimen, and personal check-in call from our care team.',
      icon: HeartPulse,
      color: 'bg-[#00B4D8] text-white'
    },
    {
      num: '06',
      title: 'Follow-up',
      subtitle: 'Lifetime Warranty Support',
      description: 'Routine 6-month checkups to maintain your radiant smile and preserve full Lifetime Warranty protection.',
      icon: ShieldCheck,
      color: 'bg-emerald-600 text-white'
    }
  ];

  return (
    <section className="py-20 bg-white relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Seamless Care Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Your Seamless 6-Step Patient Journey
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From initial booking to long-term follow-up care, we ensure a transparent, comfortable, and stress-free dental experience.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <motion.div 
          variants={staggerContainer(0.15, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItemUp}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                className="bg-slate-50 hover:bg-white p-6 rounded-3xl border border-slate-200 hover:border-cyan-300 shadow-2xs hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 6 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shadow-md`}
                    >
                      <IconComp className="w-6 h-6" />
                    </motion.div>
                    <span className="text-3xl font-extrabold font-heading text-slate-300 group-hover:text-[#0B4F6C] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-extrabold text-[#0B4F6C] uppercase tracking-wider block">
                      Step {step.num}: {step.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 font-heading mt-0.5">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center text-xs font-extrabold text-[#0B4F6C]">
                  <span>Step {idx + 1} of 6</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <motion.button
            {...buttonHover}
            onClick={onOpenBooking}
            className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-md inline-flex items-center space-x-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-cyan-300" />
            <span>Start Your Journey - Book Appointment</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

