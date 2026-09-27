import React from 'react';
import { Droplets, MapPin, Globe, Scan, TestTube, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    { icon: Droplets, title: 'Ground Water Survey', desc: 'Aquifer Location' },
    { icon: MapPin, title: 'Borewell Point Identification', desc: 'Pinpoint Drilling' },
    { icon: Globe, title: 'Geophysical Survey', desc: 'Resistivity Sounding' },
    { icon: Scan, title: '3D Earth Scanning', desc: 'Subsurface Imaging' },
    { icon: TestTube, title: 'Yield Testing', desc: 'Flow Rate Measurement' },
    { icon: Sparkles, title: 'Water Quality Assessment', desc: 'Potability & Minerals' },
  ];

  return (
    <section className="bg-slate-950 border-y border-sky-900/30 py-6 relative z-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-sky-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-full border border-sky-400/30 bg-sky-950/60 flex items-center justify-center text-sky-400 mb-2.5 group-hover:scale-110 group-hover:border-sky-300 group-hover:text-white transition-all shadow-md shadow-sky-950">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <span className="text-[10px] text-slate-400 mt-1">
                  {item.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
