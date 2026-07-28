import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  Play,
  CheckCircle2,
  ThumbsUp,
  Search,
  Clock,
  X
} from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { PageBanner } from '../components/ui/PageBanner';
import { generateDentalMacroImage } from '../utils/dentalImages';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = () => {
  // State for Video Modal
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
    patientName: string;
    location: string;
    treatment: string;
    quote: string;
    duration: string;
    thumbnail: string;
  } | null>(null);

  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({
    'rev-1': 38,
    'rev-2': 29,
    'rev-3': 42,
    'rev-4': 19,
    'rev-5': 31,
    'rev-6': 25,
  });
  const [votedReviews, setVotedReviews] = useState<Record<string, boolean>>({});

  const handleVote = (id: string) => {
    if (!votedReviews[id]) {
      setHelpfulVotes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setVotedReviews(prev => ({ ...prev, [id]: true }));
    }
  };

  // Mock Data for Written Reviews
  const writtenReviewsData = [
    {
      id: 'rev-1',
      author: 'Dr. Sarah Jenkins',
      location: 'London, UK',
      treatment: 'Full Smile Makeover (8 Veneers)',
      category: 'veneers',
      rating: 5,
      date: 'July 2026',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      comment: 'As a surgeon myself, I am extremely particular about healthcare standards. Dr. Sheekha Shah and her team surpassed every international benchmark. The 3D Digital Smile Design matched my facial aesthetics perfectly. My veneers look radiant yet completely natural!',
      verified: true,
      googleImported: true
    },
    {
      id: 'rev-2',
      author: 'Rajesh V. Sharma',
      location: 'Mumbai, India',
      treatment: '3D CBCT Guided Implant',
      category: 'implants',
      rating: 5,
      date: 'June 2026',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      comment: 'I was deathly afraid of dental implants due to a bad past experience elsewhere. Dr. Shah used computerized painless anesthesia and 3D guided flapless surgery. I felt zero pain during or after the procedure. Highly recommended for nervous patients!',
      verified: true,
      googleImported: true
    },
    {
      id: 'rev-3',
      author: 'Emily Watson',
      location: 'Sydney, Australia',
      treatment: 'Invisalign® SmartTrack®',
      category: 'ortho',
      rating: 5,
      date: 'June 2026',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
      comment: 'Traveled from Sydney for my dental vacation. Dr. Shah provided virtual monitoring while I was back in Australia. In 7 months, my severe lower crowding was completely resolved. The clinic feels like a 5-star hotel sanctuary!',
      verified: true,
      googleImported: false
    },
    {
      id: 'rev-4',
      author: 'Marcus Al-Maktoum',
      location: 'Dubai, UAE',
      treatment: 'Laser Teeth Whitening',
      category: 'whitening',
      rating: 5,
      date: 'May 2026',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      comment: 'Got my teeth lightened by 8 shades in a single 60-minute session before my wedding. Zero sensitivity afterwards thanks to their bio-remineralizing enamel gel treatment. Outstanding concierge hospitality!',
      verified: true,
      googleImported: true
    },
    {
      id: 'rev-5',
      author: 'Priya N. Desai',
      location: 'Ahmedabad, India',
      treatment: 'Microscopic Root Canal Therapy',
      category: 'rootcanal',
      rating: 5,
      date: 'May 2026',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      comment: 'I came in with severe excruciating toothache. Dr. Shah performed a single-visit root canal under a dental operating microscope with laser sterilization. The pain vanished immediately. Eternally grateful!',
      verified: true,
      googleImported: false
    },
    {
      id: 'rev-6',
      author: 'David L. Miller',
      location: 'Toronto, Canada',
      treatment: 'Full Mouth Zirconia Reconstruction',
      category: 'implants',
      rating: 4,
      date: 'April 2026',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      comment: 'Reconstructed my entire upper and lower worn bite. The precision of the monolithic zirconia bridges is unbelievable. Minor delay on 2nd visit lab delivery, but Dr. Shah personally ensured flawless fit and shade.',
      verified: true,
      googleImported: true
    }
  ];


  return (
    <PageWrapper className="min-h-screen bg-slate-50">
      <PageBanner
        badge="TESTIMONIALS"
        title="Testimonials"
        subtitle="Read real reviews and smile transformation stories from patients who experienced our gentle, technology-driven care."
        breadcrumb="Testimonials"
      />
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">

        {/* SECTION 1: VIDEO TESTIMONIALS */}
        <section id="sec-videostories" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800">
              Video Patient Testimonials
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Watch real patients share their journey, treatment experience, and before-and-after smile results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'vid-1',
                title: 'Full Smile Makeover with 10 Swiss E-Max Veneers',
                patientName: 'Sophia Ramirez',
                location: 'London, UK',
                treatment: 'Cosmetic Veneers',
                duration: '2:15',
                quote: 'I avoided smiling in photos for 10 years until Dr. Sheekha Shah gave me a radiant natural smile!',
                thumbnail: generateDentalMacroImage({ type: 'makeover', state: 'after' })
              },
              {
                id: 'vid-2',
                title: 'Flapless Guided Implant & Zirconia Crown',
                patientName: 'David K. Sharma',
                location: 'Mumbai, India',
                treatment: 'Guided Dental Implant',
                duration: '1:45',
                quote: 'Zero swelling and zero pain during the entire implant procedure. Unbelievable tech!',
                thumbnail: generateDentalMacroImage({ type: 'implant', state: 'after' })
              },
              {
                id: 'vid-3',
                title: '7-Month Invisalign® Arch Alignment Journey',
                patientName: 'Amanda T.',
                location: 'Dubai, UAE',
                treatment: 'Clear Aligners',
                duration: '2:05',
                quote: 'Clear aligners fitted seamlessly into my busy schedule. Broadened my smile line beautifully!',
                thumbnail: generateDentalMacroImage({ type: 'ortho', state: 'after' })
              },
              {
                id: 'vid-4',
                title: '28-Unit Full Mouth Zirconia Rehabilitation',
                patientName: 'Robert S. Miller',
                location: 'New York, USA',
                treatment: 'Full Mouth Reconstruction',
                duration: '3:10',
                quote: 'Restored my chewing function and lost vertical height. World-class international patient care!',
                thumbnail: generateDentalMacroImage({ type: 'fullmouth', state: 'after' })
              }
            ].map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div className="relative h-48 bg-slate-900 overflow-hidden cursor-pointer" onClick={() => setActiveVideo(video)}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#0B4F6C] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-[#0B4F6C] ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute bottom-3 right-3 bg-slate-900/85 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-xs flex items-center gap-1">
                    <Clock className="w-3 h-3 text-teal-400" />
                    {video.duration}
                  </span>

                  <span className="absolute top-3 left-3 bg-[#0B4F6C] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                    {video.treatment}
                  </span>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-800 line-clamp-2 font-heading">{video.title}</h3>
                    <p className="text-xs text-slate-600 italic line-clamp-2">"{video.quote}"</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-800 block">{video.patientName}</span>
                      <span className="text-[11px] text-slate-500">{video.location}</span>
                    </div>
                    <button
                      onClick={() => setActiveVideo(video)}
                      className="text-[#0B4F6C] font-bold hover:underline flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      <span>Watch</span>
                      <Play className="w-3 h-3 fill-current" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Player Modal */}
          <AnimatePresence>
            {activeVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setActiveVideo(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-0"
                >
                  <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4 text-teal-400 fill-teal-400" />
                      <span className="text-xs font-bold text-white">{activeVideo.title}</span>
                    </div>
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Simulated Video Player Container */}
                  <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
                    <img
                      src={activeVideo.thumbnail}
                      alt="Thumbnail"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="relative z-10 space-y-3 max-w-lg">
                      <div className="w-16 h-16 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                        <Play className="w-7 h-7 fill-slate-950 ml-1" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-heading">{activeVideo.patientName} ({activeVideo.location})</h3>
                      <p className="text-xs text-teal-200 italic leading-relaxed">"{activeVideo.quote}"</p>
                      <div className="inline-flex items-center gap-2 bg-white/10 text-xs px-3 py-1 rounded-full backdrop-blur-md">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                        Verified Patient Interview Video
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 flex items-center justify-between text-xs text-slate-600">
                    <div>
                      <span className="font-bold text-slate-800">Treatment:</span> {activeVideo.treatment}
                    </div>
                    <a
                      href="https://wa.me/919924083567?text=Hello%20Dr.%20Sheekha%20Shah%20Dental%20Studio%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AThis%20is%20a%20demo%20website%20for%20your%20clinic.%20Kindly%20let%20me%20know%20the%20available%20appointment%20slots.%0A%0AThank%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      Book Consultation
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* SECTION 2: PATIENT REVIEWS */}
        <section id="sec-written" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800">
              Patient Reviews
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explore genuine patient stories and clinical feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenReviewsData.map((review) => (
              <motion.div
                key={review.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between relative group"
              >
                <Quote className="w-8 h-8 text-cyan-100 absolute top-6 right-6 pointer-events-none group-hover:text-cyan-200 transition-colors" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified Patient
                      </span>
                    )}
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-slate-200"
                      />
                      <div>
                        <h3 className="text-xs font-bold text-slate-800">{review.author}</h3>
                        <span className="text-[10px] text-slate-500 block">{review.location} • {review.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="font-bold text-[#0B4F6C] bg-cyan-50 px-2.5 py-1 rounded-md">
                      {review.treatment}
                    </span>

                    <button
                      onClick={() => handleVote(review.id)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors font-semibold cursor-pointer ${votedReviews[review.id]
                          ? 'bg-emerald-100 text-emerald-700 font-bold'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{helpfulVotes[review.id] || 0}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  );
};
