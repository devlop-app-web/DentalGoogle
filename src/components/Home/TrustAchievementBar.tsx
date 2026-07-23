import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, ShieldCheck, Star, CheckCircle, Sparkles, Smile, Shield } from 'lucide-react';
import { staggerContainer, staggerItemUp, VIEWPORT_CONFIG } from '../../lib/motion';

export const TrustAchievementBar: React.FC = () => {
  const metrics = [
    {
      value: '12,500+',
      label: 'Happy Patients',
      sublabel: 'Transformed Smiles',
      icon: Users,
      color: 'text-[#0B4F6C]'
    },
    {
      value: '16+ Yrs',
      label: 'Years Experience',
      sublabel: 'Clinical Mastery',
      icon: Award,
      color: 'text-[#00B4D8]'
    },
    {
      value: '18,000+',
      label: 'Successful Treatments',
      sublabel: 'Zero Infection Record',
      icon: Smile,
      color: 'text-[#10B981]'
    },
    {
      value: '4.9 / 5.0',
      label: 'Google Rating',
      sublabel: '850+ Verified Reviews',
      icon: Star,
      color: 'text-amber-500'
    },
    {
      value: 'ISO 9001',
      label: 'ISO Certified',
      sublabel: 'Hospital-Grade Safety',
      icon: CheckCircle,
      color: 'text-teal-600'
    },
    {
      value: 'Lifetime',
      label: 'Lifetime Warranty',
      sublabel: '100% Coverage Protection',
      icon: Shield,
      color: 'text-[#0B4F6C]'
    }
  ];

  return (
    <section className="bg-white py-10 border-y border-slate-200 shadow-2xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Counter Grid */}
        <motion.div 
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
        >
          {metrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <motion.div 
                key={idx} 
                variants={staggerItemUp}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className={`${idx > 0 ? 'pt-4 sm:pt-0' : ''} px-2 space-y-1 group`}
              >
                <div className="flex items-center justify-center space-x-1.5">
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <IconComp className={`w-5 h-5 ${m.color}`} />
                  </motion.div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                    {m.value}
                  </span>
                </div>
                <p className="text-xs font-extrabold text-slate-800">{m.label}</p>
                <p className="text-[11px] font-medium text-slate-500">{m.sublabel}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Accreditation Bottom Pill Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-600 text-xs font-bold uppercase tracking-wider"
        >
          <span className="flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-[#0B4F6C]" />
            <span>ADA Accredited Clinic</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-[#0B4F6C]" />
            <span>Fellow AACD Specialists</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-[#0B4F6C]" />
            <span>Diamond Invisalign Provider</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-[#0B4F6C]" />
            <span>ISO 9001:2015 Hygiene Standard</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
};

