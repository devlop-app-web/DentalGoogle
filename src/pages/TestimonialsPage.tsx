import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Star,
  Quote,
  Calendar,
  Play,
  CheckCircle2,
  Globe,
  ThumbsUp,
  Filter,
  Search,
  MessageSquare,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  X,
  Send,
  User,
  Check,
  ExternalLink,
  ShieldAlert,
  Smile,
  PhoneCall
} from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { fadeInUp, VIEWPORT_CONFIG } from '../lib/motion';
import { generateDentalMacroImage } from '../utils/dentalImages';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  // State for Section 3: Video Modal
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
    patientName: string;
    location: string;
    treatment: string;
    quote: string;
    duration: string;
  } | null>(null);

  // State for Section 4: Written Reviews filter & search
  const [writtenFilter, setWrittenFilter] = useState<'all' | '5star' | '4star'>('all');
  const [searchQuery, setSearchQuery] = useState('');
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

  // State for Section 5: Treatment-based Categories
  const [activeCategoryTab, setActiveCategoryTab] = useState<'veneers' | 'implants' | 'ortho' | 'rootcanal' | 'whitening'>('veneers');

  // State for Section 9: Leave a Review Form
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    fullName: '',
    email: '',
    treatment: 'Porcelain Veneers & Makeovers',
    comment: '',
    wouldRecommend: true,
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.fullName || !reviewForm.comment) return;
    setReviewSubmitted(true);
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

  const filteredWrittenReviews = writtenReviewsData.filter(rev => {
    if (writtenFilter === '5star' && rev.rating !== 5) return false;
    if (writtenFilter === '4star' && rev.rating !== 4) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        rev.author.toLowerCase().includes(q) ||
        rev.treatment.toLowerCase().includes(q) ||
        rev.comment.toLowerCase().includes(q) ||
        rev.location.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <PageWrapper className="min-h-screen bg-slate-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Breadcrumb Navigation & Quick Jump Pills */}
        <div className="space-y-4">
          <nav className="flex items-center text-xs font-semibold text-slate-500 space-x-2">
            <Link to="/" className="hover:text-[#0B4F6C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-bold">Patient Testimonials</span>
          </nav>

          {/* Jump Section Bar */}
          <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none text-xs font-semibold">
            <span className="text-slate-400 uppercase tracking-wider shrink-0 text-[10px] font-bold">Jump to:</span>
            {[
              { id: 'sec-hero', label: '1. Hero' },
              { id: 'sec-rating', label: '2. Ratings' },
              { id: 'sec-videostories', label: '3. Video Stories' },
              { id: 'sec-written', label: '4. Written Reviews' },
              { id: 'sec-categories', label: '5. By Treatment' },
              { id: 'sec-googlereviews', label: '6. Google Reviews' },
              { id: 'sec-featuredstory', label: '7. Featured Story' },
              { id: 'sec-warranty', label: '8. Warranty Reviews' },
              { id: 'sec-leavereview', label: '9. Leave Review' }
            ].map((pill) => (
              <a
                key={pill.id}
                href={`#${pill.id}`}
                className="shrink-0 bg-white hover:bg-[#0B4F6C] hover:text-white text-slate-700 px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs transition-all"
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>


        {/* ==========================================
            SECTION 1: TESTIMONIALS HERO
           ========================================== */}
        <section id="sec-hero" className="scroll-mt-24 space-y-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={VIEWPORT_CONFIG}
            className="bg-gradient-to-r from-[#1A3848] via-[#0B4F6C] to-[#125D7F] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                  Section 1: Verified Patient Feedback
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-cyan-100 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Globe className="w-3.5 h-3.5 text-teal-300" />
                  International Dental Tourism Approved
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
                Patient Reviews & Smile Stories
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-3xl">
                Discover unedited, verified feedback from patients who entrusted their smile transformations to Dr. Sheekha Shah. From local families to international dental travelers across 24+ countries.
              </p>

              {/* Key Trust Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="space-y-1">
                  <span className="text-teal-300 font-extrabold text-2xl block">500+</span>
                  <span className="text-slate-300 font-medium">5-Star Verified Reviews</span>
                </div>
                <div className="space-y-1">
                  <span className="text-teal-300 font-extrabold text-2xl block">99.4%</span>
                  <span className="text-slate-300 font-medium">Patient Satisfaction Score</span>
                </div>
                <div className="space-y-1">
                  <span className="text-teal-300 font-extrabold text-2xl block">15+ Yrs</span>
                  <span className="text-slate-300 font-medium">Clinical Excellence</span>
                </div>
                <div className="space-y-1">
                  <span className="text-teal-300 font-extrabold text-2xl block">24+</span>
                  <span className="text-slate-300 font-medium">Countries Represented</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ==========================================
            SECTION 2: OVERALL PATIENT RATING
           ========================================== */}
        <section id="sec-rating" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 2</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Overall Patient Rating & Trust Index
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Comprehensive ratings aggregated across Google, Practo, WhatClinic, and verified post-care surveys.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Big Rating Summary */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0B4F6C] text-white p-8 rounded-2xl space-y-4 text-center shadow-xl">
              <span className="text-xs font-extrabold text-teal-300 uppercase tracking-wider block">Aggregate Score</span>
              <div className="text-6xl font-black font-heading text-white tracking-tight">4.9</div>

              <div className="flex items-center justify-center text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs text-slate-300 font-medium">
                Based on <strong className="text-white">520+ Google & Verified Patient Reviews</strong>
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-teal-200 font-semibold">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                100% Independently Authenticated
              </div>
            </div>

            {/* Rating Breakdown & Factor Bars */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-base font-bold text-slate-800 font-heading">
                Rating Distribution & Quality Indicators
              </h3>

              {/* Star Rating Distribution Bars */}
              <div className="space-y-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="w-16 shrink-0 flex items-center gap-1 font-bold text-slate-800">
                    5 Stars <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '96%' }} />
                  </div>
                  <span className="w-12 text-right font-extrabold text-slate-800">96%</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-16 shrink-0 flex items-center gap-1 font-bold text-slate-800">
                    4 Stars <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full rounded-full" style={{ width: '4%' }} />
                  </div>
                  <span className="w-12 text-right font-extrabold text-slate-800">4%</span>
                </div>

                <div className="flex items-center gap-3 opacity-40">
                  <span className="w-16 shrink-0 flex items-center gap-1 font-bold text-slate-800">
                    3 Stars <Star className="w-3.5 h-3.5 text-slate-400" />
                  </span>
                  <div className="flex-1 bg-slate-100 h-3 rounded-full" />
                  <span className="w-12 text-right font-extrabold text-slate-800">0%</span>
                </div>
              </div>

              {/* Specific Patient Satisfaction Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-center space-y-1">
                  <span className="text-emerald-600 font-extrabold text-base block">99.8%</span>
                  <span className="text-[11px] text-slate-600 font-medium block">Painless Comfort</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-center space-y-1">
                  <span className="text-emerald-600 font-extrabold text-base block">100%</span>
                  <span className="text-[11px] text-slate-600 font-medium block">Doctor Expertise</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-center space-y-1">
                  <span className="text-emerald-600 font-extrabold text-base block">100%</span>
                  <span className="text-[11px] text-slate-600 font-medium block">Clinic Hygiene</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-center space-y-1">
                  <span className="text-emerald-600 font-extrabold text-base block">99.5%</span>
                  <span className="text-[11px] text-slate-600 font-medium block">Fee Transparency</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ==========================================
            SECTION 3: VIDEO TESTIMONIALS
           ========================================== */}
        <section id="sec-videostories" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 3</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
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
                      className="text-[#0B4F6C] font-bold hover:underline flex items-center gap-1 text-[11px]"
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
                      className="text-slate-400 hover:text-white transition-colors"
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
                    <button
                      onClick={onOpenBooking}
                      className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold px-4 py-2 rounded-xl transition-colors"
                    >
                      Book Consultation
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>


        {/* ==========================================
            SECTION 4: WRITTEN REVIEWS
           ========================================== */}
        <section id="sec-written" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 4</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
                Written Patient Reviews
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Filter and search genuine patient stories and clinical feedback.
              </p>
            </div>

            {/* Filter & Search Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-hidden focus:border-[#0B4F6C] w-36 sm:w-48"
                />
              </div>

              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs font-semibold">
                <button
                  onClick={() => setWrittenFilter('all')}
                  className={`px-3 py-1 rounded-lg transition-colors ${writtenFilter === 'all' ? 'bg-[#0B4F6C] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setWrittenFilter('5star')}
                  className={`px-3 py-1 rounded-lg transition-colors ${writtenFilter === '5star' ? 'bg-[#0B4F6C] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  5 Stars
                </button>
                <button
                  onClick={() => setWrittenFilter('4star')}
                  className={`px-3 py-1 rounded-lg transition-colors ${writtenFilter === '4star' ? 'bg-[#0B4F6C] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  4 Stars
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWrittenReviews.map((review) => (
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
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors font-semibold ${votedReviews[review.id]
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


        {/* ==========================================
            SECTION 5: TREATMENT-BASED REVIEW CATEGORIES
           ========================================== */}
        <section id="sec-categories" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 5</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Reviews by Treatment Category
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explore patient satisfaction metrics and feedback broken down by specific specialty procedures.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
            {/* Category Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100">
              {[
                { id: 'veneers', label: 'Veneers & Makeovers', count: '180+ Reviews', rating: '4.98 ★' },
                { id: 'implants', label: 'Dental Implants', count: '140+ Reviews', rating: '4.96 ★' },
                { id: 'ortho', label: 'Invisalign / Aligners', count: '110+ Reviews', rating: '4.95 ★' },
                { id: 'rootcanal', label: 'Root Canals & Care', count: '95+ Reviews', rating: '4.97 ★' },
                { id: 'whitening', label: 'Laser Whitening', count: '160+ Reviews', rating: '4.99 ★' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategoryTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 ${activeCategoryTab === tab.id
                      ? 'bg-[#0B4F6C] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeCategoryTab === tab.id ? 'bg-white/20 text-teal-200' : 'bg-slate-200 text-slate-700'
                    }`}>
                    {tab.rating}
                  </span>
                </button>
              ))}
            </div>

            {/* Category Dynamic Content Box */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4">
              {activeCategoryTab === 'veneers' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <h3 className="text-base font-bold text-slate-800">Porcelain Veneers & Digital Smile Design</h3>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      99.8% Patient Approval Rate
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Patients consistently praise Dr. Sheekha Shah’s meticulous Digital Smile Design protocol, natural tooth-translucency matching, and ultra-thin 0.3mm Swiss ceramic handcrafting.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="italic">"The 3D preview allowed me to see my exact final smile before touching a single tooth. Simply brilliant artistry!"</p>
                      <span className="font-bold text-slate-900 block mt-2">— Elena M., Zurich</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="italic">"No bulky or artificial chiclet look. Everyone thinks I was born with these perfect white teeth!"</p>
                      <span className="font-bold text-slate-900 block mt-2">— Priya S., Mumbai</span>
                    </div>
                  </div>
                </div>
              )}

              {activeCategoryTab === 'implants' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <h3 className="text-base font-bold text-slate-800">Guided Dental Implants & Full Mouth Restorations</h3>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      99.6% Osseointegration Success
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Patients highlight zero post-surgical swelling, 3D CBCT guided surgical precision, and immediate fixed provisional teeth in a single day.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="italic">"I can chew apples and steaks again with zero discomfort. Feels 100% like my original natural teeth."</p>
                      <span className="font-bold text-slate-900 block mt-2">— Robert S., New York</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="italic">"Flapless surgery meant no stitches and zero bleeding. Back at work the next morning!"</p>
                      <span className="font-bold text-slate-900 block mt-2">— David K., Mumbai</span>
                    </div>
                  </div>
                </div>
              )}

              {activeCategoryTab === 'ortho' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <h3 className="text-base font-bold text-slate-800">Invisalign® SmartTrack® Clear Aligners</h3>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      100% Comfortable & Invisible
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Patients love the iTero® 3D impressionless digital scan and remote progress tracking that fits seamlessly into busy international travel schedules.
                  </p>
                </div>
              )}

              {activeCategoryTab === 'rootcanal' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <h3 className="text-base font-bold text-slate-800">Microscopic Single-Visit Root Canals</h3>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      100% Painless Guarantee
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Patients praise computer-assisted anesthesia and German dental operating microscopes that complete complex root canals gently in just one 45-minute visit.
                  </p>
                </div>
              )}

              {activeCategoryTab === 'whitening' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <h3 className="text-base font-bold text-slate-800">Laser Cold-Light Teeth Whitening</h3>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      Avg 8 Shades Lighter
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In-office 60-minute light-activated whitening combined with anti-sensitivity remineralizing gel for instant Hollywood brightness.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 6: GOOGLE REVIEWS SHOWCASE
           ========================================== */}
        <section id="sec-googlereviews" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 6</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Google Reviews & Independent Verification
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Live feedback posted directly on our Google Maps business profile.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                {/* Google G Logo Styled Container */}
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center font-black text-2xl text-slate-900 shadow-md">
                  <span className="bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">G</span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white font-heading">Google Maps Rating</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-amber-400 font-extrabold text-base">4.9 ★★★★★</span>
                    <span className="text-slate-300 text-xs font-medium">(520+ Reviews)</span>
                  </div>
                </div>
              </div>

              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all border border-white/20"
              >
                <span>View Live Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-teal-300" />
              </a>
            </div>

            {/* Google Review Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ananya M. Roy",
                  time: "2 weeks ago",
                  text: "Dr. Sheekha Shah is hands down the best cosmetic dentist in the city. Clean clinic, extremely polite staff, and completely painless procedure. 5/5 stars!",
                  likes: 12
                },
                {
                  name: "Captain Vikram S.",
                  time: "1 month ago",
                  text: "Got full upper veneers done before resuming international flights. Fast turnaround, great hospitality, and flawless smile aesthetics.",
                  likes: 19
                },
                {
                  name: "Siddharth K.",
                  time: "2 months ago",
                  text: "The digital scanning experience was incredible. No gagging on trays! Dr. Shah explained every step with total transparency.",
                  likes: 15
                }
              ].map((gRev, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-teal-300 font-bold uppercase tracking-wider">Verified Google User</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed italic">"{gRev.text}"</p>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="font-bold text-white">{gRev.name}</span>
                    <span className="text-slate-400">{gRev.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 7: FEATURED PATIENT STORY
           ========================================== */}
        <section id="sec-featuredstory" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 7</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Featured Patient Story: Sophia's 14-Day Transformation
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              An in-depth case spotlight from initial dental phobia to red-carpet smile confidence.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Before/After Visual Side */}
            <div className="lg:col-span-5 space-y-3">
              <span className="inline-block bg-[#0B4F6C] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                Clinical Macro Photography
              </span>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44 sm:h-52">
                  <img
                    src={generateDentalMacroImage({ type: 'makeover', state: 'before' })}
                    alt="Before"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-slate-900/85 text-white text-[10px] font-black px-2 py-0.5 rounded">
                    BEFORE
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 h-44 sm:h-52">
                  <img
                    src={generateDentalMacroImage({ type: 'makeover', state: 'after' })}
                    alt="After"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded">
                    AFTER
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 text-center font-medium">
                10 Upper Swiss E-Max Porcelain Veneers + Laser Gum Recontouring
              </p>
            </div>

            {/* Case Details Side */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B4F6C]">
                <Award className="w-4 h-4 text-teal-600" />
                <span>Patient Spotlight: Sophia R., 29 • London, UK</span>
              </div>

              <h3 className="text-xl font-bold font-heading text-slate-800">
                "Dr. Sheekha Shah gave me the confidence to smile without hiding my face."
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Sophia suffered from severe fluorosis staining and chipped front incisors since childhood, causing deep social anxiety. She booked a virtual video consultation from London and traveled to Dr. Sheekha Shah Dental Studio for a 14-day complete smile renewal.
              </p>

              {/* Journey Steps Timeline */}
              <div className="grid grid-cols-3 gap-2 text-[11px] pt-2 border-t border-slate-100">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block">Day 1: 3D DSD Scan</span>
                  <span className="text-slate-500">Intraoral scan & smile mockup</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block">Day 3: Painless Prep</span>
                  <span className="text-slate-500">0.3mm micro-prep & temporaries</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block">Day 10: Final Bond</span>
                  <span className="text-slate-500">Swiss ceramic porcelain placement</span>
                </div>
              </div>

              <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-xs text-slate-700 italic">
                <strong>Doctor Note:</strong> "We utilized Digital Smile Design 3D facial modeling to create an organic, radiant smile arc tailored specifically to her lip dynamics." — Dr. Sheekha Shah
              </div>
            </div>

          </div>
        </section>


        {/* ==========================================
            SECTION 8: WARRANTY EXPERIENCE REVIEWS
           ========================================== */}
        <section id="sec-warranty" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 8</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Warranty & Long-Term Durability Reviews
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Hear from patients 3 to 7 years post-treatment evaluating our 10 to 15-Year Smile Guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                years: "5 Years Post-Treatment",
                author: "Michael B.",
                treatment: "10 E-Max Porcelain Veneers",
                comment: "Five years later, my veneers still look brand new. Zero discoloration, zero chipping. The annual complimentary checkup keeps everything in pristine shape!"
              },
              {
                years: "4 Years Post-Treatment",
                author: "Kavita R. Patel",
                treatment: "Full Upper Implant Bridge",
                comment: "My dental implants feel as solid as day one. The 15-year warranty certificate gave me total peace of mind when making the investment."
              },
              {
                years: "3 Years Post-Treatment",
                author: "James H.",
                treatment: "Invisalign® + Edge Bonding",
                comment: "My teeth haven’t shifted a single millimeter thanks to the Vivera® custom retainers provided by Dr. Shah’s clinic."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {item.years}
                  </span>
                  <h3 className="text-sm font-bold text-slate-800">{item.treatment}</h3>
                  <p className="text-xs text-slate-600 italic leading-relaxed">"{item.comment}"</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="font-bold text-slate-800">— {item.author}</span>
                  <span className="text-teal-600 font-bold">15-Yr Warranty Active</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            SECTION 9: LEAVE A REVIEW FORM
           ========================================== */}
        <section id="sec-leavereview" className="scroll-mt-24 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold text-[#0B4F6C] uppercase tracking-widest">Section 9</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-800 mt-1">
              Leave Your Patient Feedback
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Have you visited Dr. Sheekha Shah DENTAL STUDIO? Share your experience with our dental team.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md max-w-3xl mx-auto">
            {reviewSubmitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-4 py-8"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-800">Thank You for Your Feedback!</h3>
                <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed">
                  Your review has been submitted successfully to our patient relations team and will be published shortly following verification.
                </p>
                <button
                  onClick={() => setReviewSubmitted(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
                >
                  Submit Another Response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-6">

                {/* Star Rating Picker */}
                <div className="space-y-2 text-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Your Overall Rating
                  </label>
                  <div className="flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        className="p-1 hover:scale-125 transition-transform"
                      >
                        <Star
                          className={`w-8 h-8 ${star <= reviewForm.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-300'
                            }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-[#0B4F6C] block">
                    {reviewForm.rating} / 5 Stars Selected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={reviewForm.fullName}
                      onChange={(e) => setReviewForm({ ...reviewForm, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#0B4F6C]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address (Private) *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={reviewForm.email}
                      onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#0B4F6C]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Treatment Received *</label>
                  <select
                    value={reviewForm.treatment}
                    onChange={(e) => setReviewForm({ ...reviewForm, treatment: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#0B4F6C]"
                  >
                    <option value="Porcelain Veneers & Makeovers">Porcelain Veneers & Makeovers</option>
                    <option value="Guided Dental Implants">Guided Dental Implants</option>
                    <option value="Invisalign® Aligners">Invisalign® Aligners</option>
                    <option value="Microscopic Root Canal">Microscopic Root Canal</option>
                    <option value="Laser Whitening & Hygiene">Laser Whitening & Hygiene</option>
                    <option value="General Checkup & Routine Care">General Checkup & Routine Care</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Your Review / Story *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your experience with Dr. Sheekha Shah and the clinic team..."
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#0B4F6C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Patient Review</span>
                </button>
              </form>
            )}
          </div>
        </section>


      </div>
    </PageWrapper>
  );
};
