import React from 'react';
import { PhoneCall, MapPin, Scan, BarChart3, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Contact Us',
      desc: 'Share your requirements and location details.',
      icon: PhoneCall,
    },
    {
      num: '02',
      title: 'Site Visit',
      desc: 'Our team visits the location for initial inspection.',
      icon: MapPin,
    },
    {
      num: '03',
      title: 'Ground Survey',
      desc: 'Using advanced 3D scanning & resistivity equipment.',
      icon: Scan,
    },
    {
      num: '04',
      title: 'Data Analysis',
      desc: 'Scientific interpretation of subsurface rock curves.',
      icon: BarChart3,
    },
    {
      num: '05',
      title: 'Bore Point Suggestion',
      desc: 'Final recommendations with depth & casing report.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Systematic Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            How Our Survey Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A simple and scientific process for accurate results.
          </p>
        </div>

        {/* 5 Steps connected line */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-sky-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Circular step badge */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-sky-500/40 group-hover:border-sky-500 flex flex-col items-center justify-center shadow-md transition-all group-hover:scale-105">
                      <span className="text-xs font-mono font-bold text-sky-600">
                        {step.num}
                      </span>
                      <Icon className="w-5 h-5 text-slate-800 mt-0.5 group-hover:text-sky-600 transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 max-w-[200px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
