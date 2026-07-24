import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollProgress } from './components/ui/ScrollProgress';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentCategoryPage } from './pages/TreatmentCategoryPage';
import { TreatmentSubcategoryPage } from './pages/TreatmentSubcategoryPage';
import { SmileGalleryPage } from './pages/SmileGalleryPage';
import { PatientInfoPage } from './pages/PatientInfoPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';

import { AppointmentModal } from './components/Home/AppointmentModal';
import { ClinicTourModal } from './components/Home/ClinicTourModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('invisalign');
  const [isClinicTourModalOpen, setIsClinicTourModalOpen] = useState<boolean>(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingModalOpen(true);
  };

  const handleOpenClinicTour = () => {
    setIsClinicTourModalOpen(true);
  };

  const handleSelectTreatment = (id: string) => {
    handleOpenBookingWithService(id);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B] font-sans antialiased selection:bg-[#0B4F6C] selection:text-white relative">
        
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Sticky Header Navigation */}
        <Header onOpenBooking={handleOpenBooking} />

        {/* Main Content View Container */}
        <div className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onOpenBookingWithService={handleOpenBookingWithService}
                  onOpenClinicTour={handleOpenClinicTour}
                  onSelectTreatment={handleSelectTreatment}
                />
              } 
            />

            <Route 
              path="/about" 
              element={
                <AboutPage
                  onOpenBooking={handleOpenBooking}
                  onOpenClinicTour={handleOpenClinicTour}
                />
              } 
            />

            <Route 
              path="/treatments" 
              element={<TreatmentsPage onOpenBooking={handleOpenBooking} />} 
            />

            <Route 
              path="/treatments/:categorySlug" 
              element={<TreatmentCategoryPage onOpenBooking={handleOpenBooking} />} 
            />

            <Route 
              path="/treatments/:categorySlug/:subcategorySlug" 
              element={<TreatmentSubcategoryPage onOpenBooking={handleOpenBooking} />} 
            />

            <Route 
              path="/smile-gallery" 
              element={<SmileGalleryPage onOpenBooking={handleOpenBooking} />} 
            />

            <Route 
              path="/patient-info" 
              element={
                <PatientInfoPage
                  onOpenBooking={handleOpenBooking}
                  onOpenClinicTour={handleOpenClinicTour}
                />
              } 
            />

            <Route 
              path="/testimonials" 
              element={<TestimonialsPage onOpenBooking={handleOpenBooking} />} 
            />

            <Route 
              path="/contact" 
              element={<ContactPage onOpenBooking={handleOpenBooking} />} 
            />

            <Route 
              path="/general-enquiry" 
              element={<Navigate to="/contact" replace />} 
            />

            <Route 
              path="/book-appointment" 
              element={<BookAppointmentPage />} 
            />

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Sticky Call & WhatsApp Floating Action Buttons */}
        <FloatingActions />

        {/* Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Booking Modal */}
        <AppointmentModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          preselectedServiceId={selectedServiceId}
        />

        {/* Clinic Virtual Tour Modal */}
        <ClinicTourModal
          isOpen={isClinicTourModalOpen}
          onClose={() => setIsClinicTourModalOpen(false)}
          onOpenBooking={handleOpenBooking}
        />

      </div>
    </BrowserRouter>
  );
}

