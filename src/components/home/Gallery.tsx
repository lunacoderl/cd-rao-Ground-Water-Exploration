import React, { useState } from 'react';
import { ZoomIn, Play } from 'lucide-react';
import { galleryData } from '../../data/galleryData';
import { GalleryItem } from '../../types';

interface GalleryProps {
  onOpenLightbox: (imageUrl: string, title?: string, description?: string) => void;
  onPlayVideo: (videoUrl: string, title: string, description?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox, onPlayVideo }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'field-works' | 'survey-equipment' | '3d-scanning' | 'site-visits' | 'reports'>('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'field-works', label: 'Field Works' },
    { id: 'survey-equipment', label: 'Survey Equipment' },
    { id: '3d-scanning', label: '3D Scanning' },
    { id: 'site-visits', label: 'Site Visits' },
    { id: 'reports', label: 'Reports' },
  ];

  const filteredItems =
    activeTab === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Visual Field Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Gallery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Field work, equipment and survey images.
            </p>
          </div>

          {/* Filter Tabs matching mockup */}
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Uncropped Full Heights & Widths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => {
            const isVideo = Boolean(item.videoUrl);
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isVideo && item.videoUrl) {
                    onPlayVideo(item.videoUrl, item.title, item.description);
                  } else if (item.imageUrl) {
                    onOpenLightbox(item.imageUrl, item.title, item.description);
                  }
                }}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer group flex flex-col"
              >
                {/* Media Container - UNRECROPPED natural view */}
                <div className="relative w-full h-52 bg-slate-50 flex items-center justify-center p-2 overflow-hidden border-b border-slate-100">
                  {isVideo ? (
                    <video
                      src={item.videoUrl}
                      preload="metadata"
                      muted
                      playsInline
                      className="max-h-full max-w-full w-auto h-auto object-contain"
                    />
                  ) : (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-md">
                      {isVideo ? (
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      ) : (
                        <ZoomIn className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-sky-700 border border-slate-200 shadow-xs">
                    {item.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Caption */}
                <div className="p-3 bg-white flex-1 flex flex-col justify-center">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
