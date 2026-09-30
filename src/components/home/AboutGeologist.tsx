import React from 'react';
import { Target, Cpu, BarChart2, CheckCircle2, Droplets, Radio, MapPin, ThumbsUp, ArrowRight } from 'lucide-react';

interface AboutGeologistProps {
  onOpenEnquiry: () => void;
}

export const AboutGeologist: React.FC<AboutGeologistProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Portrait & Badge (5 cols) - Uncropped full height & width */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 shadow-lg group">
              <div className="w-full flex items-center justify-center bg-slate-100 rounded-xl overflow-hidden min-h-[380px] sm:min-h-[460px]">
                <img
                  src="/images/cd-rao-field.jpg"
                  alt="Geologist C.D. Rao in field with groundwater survey equipment"
                  className="w-auto h-auto max-h-[460px] max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Pill badge overlay matching mockup */}
              <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg text-center">
                <span className="text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-1.5">
                  <Droplets className="w-4 h-4 fill-white" />19years of experience<br></br>
                  Trusted Ground Water Expert in Visakhapatnam
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Features (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                About the Geologist
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                About <span className="text-sky-600">C.D. Rao</span>
              </h2>
              <p className="text-base font-bold text-sky-600 mt-0.5">
                Geologist — Chigurupati Durga Rao, M.Sc Geology
              </p>
              <div className="inline-block mt-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                Recognized by Ground Water & Water Audit Dept., Govt. of A.P.
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              C.D. Rao is an experienced geologist specialist in ground water exploration, borewell point identification, and geophysical surveys. Using scientific methods and modern equipment, he helps landowners, farmers, builders, and developers locate sustainable water sources for agricultural, residential, and commercial needs.
            </p>

            {/* 4 Approach Badges with Check/Target icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Scientific Approach</h4>
                  <p className="text-xs text-slate-500">Evidence-based geology, no superstition</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Modern Survey Technology</h4>
                  <p className="text-xs text-slate-500">3D scanners & digital resistivity units</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Field-based Analysis</h4>
                  <p className="text-xs text-slate-500">Real-time subsurface anomaly mapping</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Accurate Point Identification</h4>
                  <p className="text-xs text-slate-500">Depth & casing recommendations</p>
                </div>
              </div>
            </div>

            {/* 4 Circular Mini-Features matching mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-sky-300 transition-colors">
                <Droplets className="w-6 h-6 text-sky-600 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-slate-800 block">Reliable Surveys</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-sky-300 transition-colors">
                <Radio className="w-6 h-6 text-sky-600 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-slate-800 block">Modern Technology</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-sky-300 transition-colors">
                <MapPin className="w-6 h-6 text-sky-600 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-slate-800 block">Field Experience</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-sky-300 transition-colors">
                <ThumbsUp className="w-6 h-6 text-sky-600 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-slate-800 block">Client Satisfaction</span>
              </div>
            </div>

            {/* Action CTA matching mockup 'Know More' in dark navy */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0b1a30] hover:bg-sky-600 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
