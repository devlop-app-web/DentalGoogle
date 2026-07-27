import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Cpu, HeartHandshake, UserCheck, Stethoscope, ShieldCheck, DollarSign, Heart, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { staggerContainer, staggerItemUp, cardHoverPremium, VIEWPORT_CONFIG } from '../../lib/motion';

const pillars = [
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: '3D CBCT digital scanners, iTero® intraoral cameras, and laser dentistry for pinpoint accuracy.',
    backDescription: 'We invest heavily in state-of-the-art diagnostic tools to ensure every diagnosis is 100% accurate, eliminating guesswork.',
    benefits: ['Pinpoint 3D precision', 'Minimal radiation exposure', 'Faster procedure times']
  },
  {
    icon: HeartHandshake,
    title: 'Pain Free Dentistry',
    description: 'Computer-assisted needleless anesthesia and gentle micro-invasive dental techniques.',
    backDescription: 'Dental anxiety is a thing of the past. Our advanced protocols ensure you remain completely comfortable and relaxed.',
    benefits: ['Needle-free numbing', 'Stress-free environment', 'Post-op pain management']
  },
  {
    icon: UserCheck,
    title: 'Experienced Dentist',
    description: 'Over 16+ years of specialized clinical excellence led by AACD Fellow Dr. Sheekha Shah.',
    backDescription: 'Dr. Shah brings a wealth of international training and a passion for perfection to every single smile transformation.',
    benefits: ['AACD Fellowship credentials', '16+ years clinical mastery', 'International training']
  },
  {
    icon: Stethoscope,
    title: 'Modern Equipment',
    description: 'Ergonomic treatment chairs, ultra-quiet handpieces, and ceiling TV entertainment screens.',
    backDescription: 'Designed around your comfort. You can watch your favorite Netflix show while we take care of your smile.',
    benefits: ['Ergonomic memory foam chairs', 'Noise-canceling headphones', 'Ceiling entertainment']
  },
  {
    icon: ShieldCheck,
    title: 'Sterilization Standards',
    description: 'Hospital-grade 7-step autoclave sterilization conforming strictly to ISO 9001:2015 safety.',
    backDescription: 'Your safety is our absolute highest priority. We exceed global infection control guidelines for every procedure.',
    benefits: ['Class-B Autoclave systems', 'Disposable single-use items', 'UV sterilization protocols']
  },
  {
    icon: DollarSign,
    title: 'Affordable Treatment',
    description: 'Transparent fixed pricing with 0% interest monthly financing and flexible EMI options.',
    backDescription: 'Premium dental care should be accessible. We provide crystal-clear cost breakdowns with absolutely no hidden fees.',
    benefits: ['0% Interest EMI plans', 'Transparent upfront pricing', 'Multiple payment options']
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Tailored aesthetic and restorative treatment plans designed around your individual goals.',
    backDescription: 'We listen to your unique needs and craft bespoke treatment journeys that align perfectly with your lifestyle and budget.',
    benefits: ['1-on-1 dedicated consults', 'Bespoke aesthetic designs', 'Empathetic patient care']
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Backed by our clinic warranty on crowns, porcelain veneers, and Swiss dental implants.',
    backDescription: 'We stand by the quality of our clinical work. Enjoy complete peace of mind with our robust long-term warranty policies.',
    benefits: ['Implant lifetime guarantee', 'Veneer durability warranty', 'Free routine checkups']
  }
];

const FlipCard: React.FC<{ item: typeof pillars[0], idx: number }> = ({ item, idx }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const IconComp = item.icon;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div
      variants={staggerItemUp}
      className="relative w-full h-full outline-none"
      style={{ perspective: '1500px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isFlipped}
      aria-label={`Learn more about ${item.title}`}
    >
      <motion.div
        {...cardHoverPremium}
        className="w-full h-full relative rounded-3xl"
        animate={{ rotateY: isFlipped ? (prefersReducedMotion ? 0 : 180) : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT SIDE (Current Design) */}
        <div 
          className="relative w-full h-full bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4 group"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="space-y-3">
            <motion.div 
              whileHover={{ scale: 1.15, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#0B4F6C] text-[#0B4F6C] group-hover:text-white flex items-center justify-center border border-cyan-200 transition-colors shadow-2xs"
            >
              <IconComp className="w-6 h-6" />
            </motion.div>

            <h3 className="text-lg font-extrabold text-slate-900 font-heading group-hover:text-[#0B4F6C] transition-colors">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-200/60 flex items-center text-[11px] font-bold text-[#0B4F6C]">
            <span>Verified Standard #{idx + 1}</span>
          </div>
        </div>

        {/* BACK SIDE (New Detailed Info) */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#0B4F6C] text-white p-6 rounded-3xl border border-[#083A50] shadow-xl flex flex-col justify-center space-y-4 overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)' 
          }}
        >
          <div className="space-y-3">
            <h3 className="text-lg font-extrabold font-heading text-cyan-50">
              Why it matters
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed font-medium">
              {item.backDescription}
            </p>
            <ul className="space-y-2 mt-2 pt-2 border-t border-cyan-800">
              {item.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start text-xs font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 mr-2 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Excellence & Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Why Patients Choose DENTAL STUDIO
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We combine high-tech digital precision with empathetic patient care to deliver comfortable, long-lasting dental outcomes.
          </p>
        </motion.div>

        {/* 8 Pillar Cards Grid */}
        <motion.div 
          variants={staggerContainer(0.14, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((item, idx) => (
            <FlipCard key={idx} item={item} idx={idx} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

