import React from 'react';
import { Hero } from '../components/Home/Hero';
import { WarrantyHighlight } from '../components/Home/WarrantyHighlight';
import { TrustAchievementBar } from '../components/Home/TrustAchievementBar';
import { FeaturedTreatments } from '../components/Home/FeaturedTreatments';
import { WhyChooseUs } from '../components/Home/WhyChooseUs';
import { MeetTheDentistPreview } from '../components/Home/MeetTheDentistPreview';
import { SmileGalleryPreview } from '../components/Home/SmileGalleryPreview';
import { TechnologyAndComfort } from '../components/Home/TechnologyAndComfort';
import { TestimonialsSection } from '../components/Home/TestimonialsSection';
import { FAQSection } from '../components/Home/FAQSection';
import { WelcomePopup } from '../components/Home/WelcomePopup';

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenBookingWithService: (serviceId: string) => void;
  onOpenClinicTour: () => void;
  onSelectTreatment: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenBookingWithService,
  onOpenClinicTour,
  onSelectTreatment,
}) => {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. HERO BANNER */}
      <Hero 
        onOpenBooking={onOpenBooking} 
        onOpenBookingWithService={onOpenBookingWithService}
        onSelectTreatment={onSelectTreatment}
      />

      {/* 2. MEET THE DENTIST PREVIEW */}
      <MeetTheDentistPreview 
        onOpenBooking={onOpenBooking} 
        onOpenClinicTour={onOpenClinicTour} 
      />

      {/* 3. LIFETIME DENTAL WARRANTY HIGHLIGHT */}
      <WarrantyHighlight 
        onOpenBooking={onOpenBooking} 
      />

      {/* 4. TRUST & ACHIEVEMENT BAR */}
      <TrustAchievementBar />

      {/* 5. FEATURED TREATMENT CATEGORIES */}
      <FeaturedTreatments 
        onOpenBookingWithService={onOpenBookingWithService} 
      />

      {/* 6. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 8. SMILE GALLERY PREVIEW */}
      <SmileGalleryPreview 
        onOpenBooking={onOpenBooking} 
      />

      {/* 9. TECHNOLOGY & COMFORT */}
      <TechnologyAndComfort />

      {/* 11. TESTIMONIALS PREVIEW */}
      <TestimonialsSection />

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection 
        onOpenBooking={onOpenBooking} 
      />

      {/* 14. WELCOME POPUP */}
      <WelcomePopup />
    </main>
  );
};
