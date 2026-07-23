import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Sparkles, Calendar, HelpCircle } from 'lucide-react';
import { FAQS } from '../../data/homeData';

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-white border border-cyan-200 rounded-full px-4 py-1.5 text-xs font-extrabold text-[#0B4F6C] uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about dental insurance, appointment scheduling, zero-pain techniques, and treatment costs.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-4 mb-10">
          
          {/* Instant Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. insurance, financing, pain, duration)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="faq-search-input"
              className="w-full bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-medium rounded-2xl pl-12 pr-4 py-3.5 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Cost & Insurance', 'Invisalign', 'Implants', 'Emergency', 'General'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                id={`faq-category-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#0B4F6C] text-white shadow-2xs' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    id={`faq-toggle-${faq.id}`}
                    className="w-full p-5 text-left flex items-center justify-between font-extrabold text-sm sm:text-base text-slate-900 hover:text-[#0B4F6C] transition-colors"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0B4F6C] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white p-8 rounded-2xl text-center text-slate-500 border border-slate-200">
              No questions found matching "{searchQuery}". Call us directly for immediate assistance!
            </div>
          )}
        </div>

        {/* Book Appointment CTA after FAQs */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-cyan-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-left space-y-1">
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg font-heading">
              Have More Questions or Ready to Schedule?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Our patient care team is available to assist with custom treatment inquiries and instant booking.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            id="faq-book-appointment-cta"
            className="w-full sm:w-auto bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md flex items-center justify-center space-x-2 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4 text-cyan-300" />
            <span>Book Appointment</span>
          </button>
        </div>

      </div>
    </section>
  );
};
