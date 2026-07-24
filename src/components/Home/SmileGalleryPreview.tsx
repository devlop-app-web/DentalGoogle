import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, ArrowRight, CheckCircle2, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { TRANSFORMATION_CASES } from '../../data/homeData';
import { CLINIC_INFO } from '../../data/homeData';
import { fadeInUp, staggerContainer, staggerCard, VIEWPORT_CONFIG } from '../../lib/motion';
const clinicImg = '/assets/Image/Clinic.jpeg';
const clinic2Img = '/assets/Image/Clinic 2.jpeg';
const entryImg = '/assets/Image/Entry.jpeg';
const waitingImg = '/assets/Image/Waiting.jpeg';
const waiting2Img = '/assets/Image/Waiting 2.jpeg';

interface SmileGalleryPreviewProps {
  onOpenBooking: () => void;
  onNavigateToGallery?: () => void;
}

export const SmileGalleryPreview: React.FC<SmileGalleryPreviewProps> = ({ onOpenBooking, onNavigateToGallery }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'before-after' | 'clinic' | 'makeover'>('all');
  const [activeLightBox, setActiveLightBox] = useState<any | null>(null);

  const galleryItems = [
    {
      id: '1',
      category: 'clinic',
      title: 'Modern Ergonomic Dental Suite',
      description: 'Sterile treatment operatory equipped with 3D digital scanners',
      image: clinicImg,
      tag: 'Clinic Environment'
    },
    {
      id: '2',
      category: 'clinic',
      title: 'Executive Patient Lounge',
      description: 'Serene waiting lounge designed for complete patient relaxation',
      image: waitingImg,
      tag: 'Clinic Lounge'
    },
    {
      id: '3',
      category: 'before-after',
      title: 'Full Porcelain Veneers Smile Makeover',
      description: '8 Upper Porcelain Veneers correcting alignment and color',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      tag: 'Before & After'
    },
    {
      id: '4',
      category: 'clinic',
      title: 'Secondary Treatment Operatory',
      description: 'HEPA 14 air scrubber purified treatment room',
      image: clinic2Img,
      tag: 'Clinic Environment'
    },
    {
      id: '5',
      category: 'makeover',
      title: 'Invisalign® Clear Aligner Result',
      description: '10-month invisible teeth straightening without metal braces',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      tag: 'Smile Makeover'
    },
    {
      id: '6',
      category: 'clinic',
      title: 'Main Clinic Entrance & Reception',
      description: 'Welcoming entrance and reception counter',
      image: entryImg,
      tag: 'Clinic Reception'
    },
    {
      id: '7',
      category: 'before-after',
      title: 'Single-Visit Laser Whitening & Bonding',
      description: '8 shade brightness boost achieved in 45 minutes',
      image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&w=800&q=80',
      tag: 'Before & After'
    },
    {
      id: '8',
      category: 'clinic',
      title: 'Luxury Waiting Suite',
      description: 'Private refreshments and peaceful ambiance',
      image: waiting2Img,
      tag: 'Clinic Suite'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Visual Evidence of Quality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Smile Transformation & Clinic Gallery
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore our real clinical facility, serene patient lounges, and actual smile transformations crafted by Dr. Sheekha Shah.
          </p>

          {/* Gallery Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'before-after', label: 'Before & After' },
              { id: 'clinic', label: 'Clinic Facility' },
              { id: 'makeover', label: 'Smile Makeovers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === tab.id
                  ? 'bg-[#0B4F6C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry-Style Responsive Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerCard}
              onClick={() => setActiveLightBox(item)}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[#0B4F6C] font-extrabold text-xs px-3.5 py-2 rounded-xl shadow flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>Enlarge Photo</span>
                  </span>
                </div>

                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                  {item.tag}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-extrabold text-slate-900 font-heading group-hover:text-[#0B4F6C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Callout & View Full Gallery Button */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              if (onNavigateToGallery) {
                onNavigateToGallery();
              } else {
                onOpenBooking();
              }
            }}
            id="smile-gallery-view-all-btn"
            className="bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-md flex items-center justify-center space-x-2"
          >
            <ImageIcon className="w-4 h-4 text-cyan-300" />
            <span>View Complete Smile Gallery</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightBox && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveLightBox(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="space-y-4 text-left">
              <span className="bg-cyan-50 text-[#0B4F6C] font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-md">
                {activeLightBox.tag}
              </span>

              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                {activeLightBox.title}
              </h3>

              <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 max-h-[420px]">
                <img src={activeLightBox.image} alt={activeLightBox.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                {activeLightBox.description}
              </p>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    setActiveLightBox(null);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#0B4F6C] hover:bg-[#083A50] text-white font-bold py-3.5 rounded-xl shadow text-xs sm:text-sm flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Book Transformation Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
