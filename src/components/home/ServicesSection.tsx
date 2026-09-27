import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Calendar, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

interface ServicesSectionProps {
  onOpenEnquiry?: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Technical Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Our Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Professional ground water exploration and geological survey services across Visakhapatnam.
            </p>
          </div>

          <a
            href="#contact"
            className="self-start md:self-auto px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-600/25 transition-all flex items-center gap-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 8 Services Grid (4x2 on desktop) matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg flex flex-col group"
            >
              {/* Thumbnail Container - Uncropped presentation with clickable link */}
              <Link
                to={`/services/${srv.slug}`}
                className="relative w-full h-44 bg-slate-50 flex items-center justify-center p-2 overflow-hidden border-b border-slate-100 block cursor-pointer"
              >
                <img
                  src={srv.overview.visualImage}
                  alt={srv.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/95 text-sky-600 border border-slate-200 shadow-xs">
                  <Droplets className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-sky-700 border border-slate-200 shadow-xs">
                  {srv.badge}
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <Link to={`/services/${srv.slug}`} className="block group-hover:text-sky-600 transition-colors">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {srv.title}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>

                {/* Dual Action Buttons: Highlighted Learn More + Book This Service */}
                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-auto">
                  {/* Highlighted Learn More Button (Primary Accent) */}
                  <Link
                    to={`/services/${srv.slug}`}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-sky-500/25 border border-sky-400/40 flex items-center justify-center gap-1.5 transition-all transform hover:-translate-y-0.5 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  {/* Book This Service Button */}
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry?.(srv.title)}
                    className="w-full py-2 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 hover:text-sky-800 border border-sky-200 hover:border-sky-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>Book This Service</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
