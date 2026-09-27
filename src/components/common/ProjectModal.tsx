import React from 'react';
import { X, MapPin, Calendar, Droplets, ArrowDown, Play, Phone } from 'lucide-react';
import { SiteWorkItem } from '../../types';

interface ProjectModalProps {
  project: SiteWorkItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPlayVideo?: (videoUrl: string, title: string) => void;
  onOpenEnquiry?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onPlayVideo,
  onOpenEnquiry,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-3xl w-full bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 shadow-md border border-slate-200 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame - Uncropped Natural Dimensions */}
        <div className="relative w-full bg-slate-900 flex items-center justify-center p-3 sm:p-5 min-h-[260px] max-h-[440px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[400px] w-auto max-w-full object-contain rounded-xl shadow-lg"
          />

          {project.videoUrl && onPlayVideo && (
            <button
              onClick={() => onPlayVideo(project.videoUrl!, `${project.title} - ${project.location}`)}
              className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Field Video</span>
            </button>
          )}
        </div>

        {/* Modal Content - Light Themed */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
                {project.serviceType}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">{project.title}</h3>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 mt-1">
                <span className="flex items-center gap-1 text-sky-600 font-semibold">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </span>
              </div>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Geological Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 block">Points Identified</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                {project.pointsIdentified}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 block">Estimated Depth</span>
              <span className="text-sm font-bold text-emerald-700 mt-0.5 block flex items-center gap-1">
                <ArrowDown className="w-4 h-4 text-emerald-600" />
                {project.estimatedDepth}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 block">Discharge / Yield</span>
              <span className="text-sm font-bold text-sky-600 mt-0.5 block flex items-center gap-1">
                <Droplets className="w-4 h-4" />
                {project.waterYield}
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href="tel:+919949401970"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0b1a30] hover:bg-sky-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Geologist: 9949401970</span>
              </a>

              {onOpenEnquiry && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiry();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  Book Survey for Similar Site
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
