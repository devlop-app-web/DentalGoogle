import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { REVIEWS } from '../../data/homeData';
import { buttonHover, cardHoverPremium, VIEWPORT_CONFIG } from '../../lib/motion';

export const TestimonialsSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const review = REVIEWS[activeReviewIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white border border-cyan-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Verified Patient Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Patient Stories & Google Reviews
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Read authentic experiences from patients who achieved healthy, confident smiles with Dr. Sheekha Shah.
          </p>
        </motion.div>

        {/* Featured Testimonial Card Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          {...cardHoverPremium}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative transition-shadow"
        >
          
          <Quote className="absolute top-6 right-8 w-16 h-16 text-cyan-100 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10"
            >
              
              {/* Patient Avatar */}
              <div className="relative shrink-0">
                <img
                  src={review.avatarUrl}
                  alt={review.author}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#0B4F6C] shadow-md"
                />
                {review.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full shadow" title="Verified Patient">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Testimonial Quote & Info */}
              <div className="space-y-3 text-center sm:text-left flex-1">
                
                {/* Star Rating & Google Review Badge */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-[#0B4F6C] bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                    Google Verified Review ({review.date})
                  </span>
                </div>

                {/* Treatment Type Badge */}
                <div className="inline-block bg-slate-100 text-slate-800 font-extrabold text-xs px-3 py-1 rounded-lg border border-slate-200">
                  Treatment: <span className="text-[#0B4F6C]">{review.treatment}</span>
                </div>

                {/* Comment text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium italic">
                  "{review.comment}"
                </p>

                {/* Author */}
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 font-heading">{review.author}</h3>
                  <p className="text-xs text-slate-500">Verified Patient • DENTAL STUDIO</p>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex space-x-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIndex(idx)}
                  id={`review-dot-${idx}`}
                  className={`h-3 rounded-full transition-all cursor-pointer ${
                    activeReviewIndex === idx ? 'bg-[#0B4F6C] w-8' : 'bg-slate-300 w-3'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevReview}
                id="review-prev-btn"
                className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors shadow-2xs cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextReview}
                id="review-next-btn"
                className="p-2.5 rounded-xl bg-[#0B4F6C] text-white hover:bg-[#083A50] transition-colors shadow-2xs cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

        </motion.div>

        {/* View All Reviews Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <motion.a
            {...buttonHover}
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white hover:bg-slate-100 text-[#0B4F6C] border border-cyan-200 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>View All 850+ Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#00B4D8]" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

