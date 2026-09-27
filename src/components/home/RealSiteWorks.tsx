import React from 'react';
import { MapPin, ArrowRight, Eye, Video } from 'lucide-react';
import { siteWorksData } from '../../data/siteWorksData';
import { SiteWorkItem } from '../../types';

interface RealSiteWorksProps {
  onSelectProject: (project: SiteWorkItem) => void;
  onViewAllGallery: () => void;
}

export const RealSiteWorks: React.FC<RealSiteWorksProps> = ({
  onSelectProject,
  onViewAllGallery,
}) => {
  return (
    <section id="site-works" className="py-20 bg-slate-100/70 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Documented Field Evidence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Real Site Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Some of our recent ground water exploration and borewell point identification projects.
            </p>
          </div>

          <button
            onClick={onViewAllGallery}
            className="self-start md:self-auto px-6 py-2.5 rounded-xl bg-[#0b1a30] hover:bg-sky-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteWorksData.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg flex flex-col cursor-pointer group"
            >
              {/* Media Frame - UNRECROPPED full view */}
              <div className="relative w-full h-52 bg-slate-50 flex items-center justify-center p-2 overflow-hidden border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />

                {project.videoUrl && (
                  <span className="absolute top-3 left-3 p-1.5 rounded-md bg-white/90 text-sky-700 border border-sky-200 text-[10px] font-bold flex items-center gap-1 shadow-sm backdrop-blur-sm">
                    <Video className="w-3 h-3 text-sky-600" />
                    <span>Video Available</span>
                  </span>
                )}

                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Work</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Pill Button matching mockup */}
                <div className="pt-2">
                  <span className="inline-block w-full text-center py-2 px-3 rounded-full text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-xs transition-colors">
                    {project.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
