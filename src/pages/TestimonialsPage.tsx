import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Quote, Calendar } from 'lucide-react';
import { REVIEWS } from '../data/homeData';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
          <Link to="/" className="hover:text-[#0F6CBD]">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">Patient Testimonials</span>
        </nav>

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#2E4F4F] via-[#243F3F] to-[#1D3232] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Patient Experiences
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Patient Reviews & Stories
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Read authentic feedback and reviews from patients who experienced gentle, painless care at Dr. Sheekha Shah DENTAL STUDIO.
            </p>
          </div>
        </div>

        {/* Overall Rating Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="text-5xl font-extrabold text-[#0F6CBD] font-heading">4.9</div>
            <div>
              <div className="flex items-center text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-1 font-semibold">Based on 500+ Google Verified Patient Reviews</p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-[#0F6CBD] hover:bg-[#0B5598] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4 text-cyan-300" />
            <span>Book Your Appointment</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between space-y-4 relative">
              <Quote className="w-8 h-8 text-blue-100 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                <img src={review.avatarUrl} alt={review.author} className="w-10 h-10 rounded-full object-cover border-2 border-slate-200" />
                <div>
                  <h3 className="text-sm font-bold text-slate-800">{review.author}</h3>
                  <span className="text-[11px] text-[#0F6CBD] font-semibold">{review.treatment} • {review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="bg-gradient-to-br from-[#0F6CBD] to-[#0B5598] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">Experience Award-Winning Dental Care</h3>
            <p className="text-blue-100 text-sm">Join thousands of happy, smiling patients at Dr. Sheekha Shah DENTAL STUDIO.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-white text-[#0F6CBD] hover:bg-blue-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
};
