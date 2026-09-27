import React, { useState } from 'react';
import { Play, Video, MapPin, Clock } from 'lucide-react';
import { videosData } from '../../data/videosData';
import { VideoItem } from '../../types';

interface FieldVideosProps {
  onPlayVideo: (videoUrl: string, title: string, description?: string) => void;
}

export const FieldVideos: React.FC<FieldVideosProps> = ({ onPlayVideo }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Field Works', 'Equipment', '3D Scanning', 'Site Visits'];

  const filteredVideos =
    selectedFilter === 'All'
      ? videosData
      : videosData.filter((v) => v.category === selectedFilter);

  return (
    <section id="videos" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-2">
              <Video className="w-3.5 h-3.5 text-sky-600" />
              <span>Authentic Ground Realities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Field Survey Videos
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Watch real footage of Geologist C.D. Rao conducting surveys, operating 3D scanners, and successful borewell water strikes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid - Full Uncropped Dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onPlayVideo(video.videoUrl, video.title, video.description)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg flex flex-col cursor-pointer group"
            >
              {/* Video Player Frame - Preserving natural full height and width without cropping */}
              <div className="relative w-full h-56 bg-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-100">
                <video
                  src={video.videoUrl}
                  preload="metadata"
                  muted
                  playsInline
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-950/35 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-sky-600 group-hover:bg-sky-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {video.duration && (
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 text-white text-[10px] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-400" />
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-sky-600 font-semibold mb-1">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span>{video.location}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
                  <span>Watch Video</span>
                  <Play className="w-3.5 h-3.5 fill-sky-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
