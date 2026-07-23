import React from 'react';
import { Cpu, HeartHandshake, UserCheck, Stethoscope, ShieldCheck, DollarSign, Heart, Shield, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Advanced Technology',
      description: '3D CBCT digital scanners, iTero® intraoral cameras, and laser dentistry for pinpoint accuracy.'
    },
    {
      icon: HeartHandshake,
      title: 'Pain Free Dentistry',
      description: 'Computer-assisted needleless anesthesia and gentle micro-invasive dental techniques.'
    },
    {
      icon: UserCheck,
      title: 'Experienced Dentist',
      description: 'Over 16+ years of specialized clinical excellence led by AACD Fellow Dr. Sheekha Shah.'
    },
    {
      icon: Stethoscope,
      title: 'Modern Equipment',
      description: 'Ergonomic treatment chairs, ultra-quiet handpieces, and ceiling TV entertainment screens.'
    },
    {
      icon: ShieldCheck,
      title: 'Sterilization Standards',
      description: 'Hospital-grade 7-step autoclave sterilization conforming strictly to ISO 9001:2015 safety.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Treatment',
      description: 'Transparent fixed pricing with 0% interest monthly financing and flexible EMI options.'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored aesthetic and restorative treatment plans designed around your individual goals.'
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Backed by our clinic warranty on crowns, porcelain veneers, and Swiss dental implants.'
    }
  ];

  return (
    <section className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
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
        </div>

        {/* 8 Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white p-6 rounded-3xl border border-slate-200 hover:border-cyan-300 shadow-2xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#0B4F6C] text-[#0B4F6C] group-hover:text-white flex items-center justify-center border border-cyan-200 transition-colors shadow-2xs">
                    <IconComp className="w-6 h-6" />
                  </div>

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
            );
          })}
        </div>

      </div>
    </section>
  );
};
