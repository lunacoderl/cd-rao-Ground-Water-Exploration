import React from 'react';
import { Phone, ArrowRight, MessageSquare, ShieldCheck, Droplets } from 'lucide-react';
import { YouTubeIcon } from '../common/YouTubeIcon';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Geologist conducting ground water exploration with digital scanner"
          className="w-full h-full object-cover object-center sm:object-right"
        />
        {/* Cinematic dark gradients to ensure crisp text contrast without hiding background details */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Eyebrow Badge mentioning Geologist */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/40 backdrop-blur-md shadow-lg shadow-sky-900/30">
            <Droplets className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span className="text-xs font-semibold text-sky-200 tracking-wider uppercase">
              Govt. Recognized Geologist | C.D. Rao, M.Sc
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Scientific{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 text-glow">
              Ground Water Exploration
            </span>{' '}
            by Expert Geologist
          </h1>

          {/* Supporting Text explicitly mentioning Geologist */}
          <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
            Accurate ground water survey, borewell point identification, and 3D subsurface scanning by Govt. of A.P. recognized <strong className="text-white font-bold">Geologist Chigurupati Durga Rao (M.Sc Geology)</strong> across Visakhapatnam.
          </p>

          {/* Credibility mini-pill */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Recognized by Ground Water & Water Audit Dept., Govt. of A.P.</span>
          </div>

          {/* CTA Buttons with YouTube Button */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenEnquiry}
              className="flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-500/30 border border-sky-400/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request a Survey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* YouTube CTA Button */}
            <a
              href="https://www.youtube.com/@BoreMitra/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <YouTubeIcon className="w-4 h-4 fill-white" />
              <span>YouTube @BoreMitra</span>
            </a>

            <a
              href="tel:+919949401970"
              className="flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-slate-700 hover:border-sky-400/60 transition-all backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/919949401970?text=Hello%20Geologist%20C.D.Rao%20Sir,%20I%20want%20to%20inquire%20about%20a%20groundwater%20survey%20for%20my%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 font-medium text-xs sm:text-sm border border-emerald-500/40 transition-colors backdrop-blur-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
