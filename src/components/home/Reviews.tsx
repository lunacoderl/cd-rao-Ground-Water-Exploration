import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { reviewsData } from '../../data/reviewsData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Ratings & Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Client Reviews
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Feedback from our valued clients.
          </p>
        </div>

        {/* 4 Cards Grid matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {rev.name}
                  </h4>
                  {rev.date && <span className="text-xs text-slate-400 block">{rev.date}</span>}
                </div>

                {rev.verified && (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
