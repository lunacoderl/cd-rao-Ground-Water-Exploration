import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Trusted by landowners, farmers and builders across Visakhapatnam.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between relative group shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-sky-100 absolute top-5 right-5" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.clientName}</h4>
                    <span className="text-xs text-sky-600 font-medium block">{item.location}</span>
                  </div>
                </div>

                {item.savedExpense && (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {item.savedExpense}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white border border-slate-300 hover:border-sky-500 text-slate-600 hover:text-sky-600 shadow-xs transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {testimonialsData.slice(0, 3).map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? 'w-6 bg-sky-600' : 'w-2 bg-slate-300'
                }`}
              ></span>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white border border-slate-300 hover:border-sky-500 text-slate-600 hover:text-sky-600 shadow-xs transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
