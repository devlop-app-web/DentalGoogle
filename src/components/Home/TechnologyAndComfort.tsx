import React from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Sparkles, CheckCircle2, Wind, Waves, Coffee } from 'lucide-react';
const clinicImg = '/assets/Image/Clinic.jpeg';
const clinic2Img = '/assets/Image/Clinic 2.jpeg';
const waitingImg = '/assets/Image/Waiting.jpeg';
const waiting2Img = '/assets/Image/Waiting 2.jpeg';
import { staggerContainer, staggerItemUp, VIEWPORT_CONFIG } from '../../lib/motion';

export const TechnologyAndComfort: React.FC = () => {
  const techItems = [
    {
      title: 'Digital Dentistry',
      subtitle: 'Computer-Assisted Diagnostics',
      description: 'Ultra-fast digital X-rays reducing radiation exposure by 90% while yielding crystal-clear intraoral visualization.',
      image: clinicImg,
      icon: Cpu
    },
    {
      title: '3D iTero® Scanner',
      subtitle: 'Impression-Free Scanning',
      description: 'Replaces uncomfortable goopy molds with instant 3D digital oral scans for Invisalign® and porcelain crown fabrication.',
      image: clinic2Img,
      icon: Waves
    },
    {
      title: 'Laser Dentistry',
      subtitle: 'Painless Soft-Tissue Care',
      description: 'Gentle dental lasers enable bloodless gum reshaping, aphthous ulcer treatment, and rapid cavity sterilization.',
      image: clinicImg,
      icon: Sparkles
    },
    {
      title: 'Hospital Sterilization',
      subtitle: 'ISO 9001:2015 Class-B Autoclaves',
      description: '7-stage instrument sterilization process with sealed cassette packaging and physical spore testing.',
      image: clinic2Img,
      icon: ShieldCheck
    },
    {
      title: 'Comfortable Waiting Lounge',
      subtitle: 'Relaxing Spa Atmosphere',
      description: 'Equipped with comfortable seating, ambient aromatherapy, soothing music, and a complimentary beverage bar.',
      image: waitingImg,
      icon: Coffee
    },
    {
      title: 'Modern Clinic Environment',
      subtitle: 'HEPA 14 Air Scrubbers',
      description: 'Serene treatment operatories equipped with noise-canceling headsets, TV screens, and HEPA 14 medical filtration.',
      image: waiting2Img,
      icon: Wind
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center space-x-2 bg-white border border-cyan-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>State-Of-The-Art Equipment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Advanced Technology & Patient Comfort
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We invest in cutting-edge dental technology and luxury lounge amenities to deliver painless, precise, and relaxing dental care.
          </p>
        </motion.div>

        {/* 6 Grid Cards featuring Clinic.jpeg, Clinic 2.jpeg, Waiting.jpeg, Waiting 2.jpeg */}
        <motion.div
          variants={staggerContainer(0.14, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItemUp}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-200">{item.subtitle}</span>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30"
                    >
                      <IconComp className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-heading group-hover:text-[#0B4F6C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center space-x-2 text-xs font-bold text-[#0B4F6C]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Hospital Safety Standard</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

