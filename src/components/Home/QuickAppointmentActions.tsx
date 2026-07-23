import React from 'react';
import { Calendar, Phone, MessageCircle, AlertTriangle, Video, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../../data/homeData';

interface QuickAppointmentActionsProps {
  onOpenBooking: () => void;
}

export const QuickAppointmentActions: React.FC<QuickAppointmentActionsProps> = ({ onOpenBooking }) => {
  const whatsappNumber = CLINIC_INFO.whatsapp || '919825000000';
  const phoneFormatted = CLINIC_INFO.phone.replace(/[^0-9+]/g, '');

  const actionCards = [
    {
      id: 'book',
      title: 'Book Appointment',
      subtitle: 'Instant online slot confirmation',
      icon: Calendar,
      badge: '60 Seconds',
      bgColor: 'bg-blue-50 border-blue-200 text-[#0B4F6C]',
      iconColor: 'bg-[#0B4F6C] text-white',
      buttonText: 'Reserve Slot',
      onClick: onOpenBooking
    },
    {
      id: 'call',
      title: 'Call Clinic',
      subtitle: 'Speak directly with our receptionist',
      icon: Phone,
      badge: 'Instant Dial',
      bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      iconColor: 'bg-[#10B981] text-white',
      buttonText: 'Call Now',
      href: `tel:${phoneFormatted}`
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Chat',
      subtitle: 'Quick answers & appointment booking',
      icon: MessageCircle,
      badge: '24/7 Response',
      bgColor: 'bg-green-50 border-green-200 text-green-900',
      iconColor: 'bg-[#25D366] text-white',
      buttonText: 'Chat Now',
      href: `https://wa.me/${whatsappNumber}`
    },
    {
      id: 'emergency',
      title: 'Emergency Care',
      subtitle: 'Same-day priority pain relief',
      icon: AlertTriangle,
      badge: 'Priority Slot',
      bgColor: 'bg-amber-50 border-amber-200 text-amber-900',
      iconColor: 'bg-amber-500 text-white',
      buttonText: 'Get Relief',
      onClick: onOpenBooking
    },
    {
      id: 'virtual',
      title: 'Virtual Consultation',
      subtitle: 'Online photo & video smile review',
      icon: Video,
      badge: 'From Home',
      bgColor: 'bg-cyan-50 border-cyan-200 text-cyan-900',
      iconColor: 'bg-[#00B4D8] text-white',
      buttonText: 'Start Online',
      onClick: onOpenBooking
    }
  ];

  return (
    <section className="py-14 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 bg-white border border-cyan-200 px-3.5 py-1 rounded-full text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Fast-Track Patient Access</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Quick Appointment & Contact Options
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Choose your preferred method to connect with Dr. Sheekha Shah DENTAL STUDIO
          </p>
        </div>

        {/* 5 Card Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {actionCards.map((card) => {
            const IconComponent = card.icon;
            
            const cardContent = (
              <div className={`p-5 rounded-2xl border ${card.bgColor} shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group h-full relative overflow-hidden cursor-pointer`}>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${card.iconColor} flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 border border-current/20">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold font-heading text-slate-900 group-hover:text-[#0B4F6C] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-extrabold">
                  <span>{card.buttonText}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            );

            if (card.href) {
              return (
                <a 
                  key={card.id} 
                  href={card.href} 
                  target={card.href.startsWith('http') ? '_blank' : undefined} 
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block h-full"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <button 
                key={card.id} 
                onClick={card.onClick} 
                className="text-left w-full h-full block"
              >
                {cardContent}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
