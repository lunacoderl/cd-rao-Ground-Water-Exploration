import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Droplets } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden text-center px-4">
      {/* Background ambient water glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/50 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-xl mx-auto relative z-10 space-y-6">
        
        {/* Subterranean strata graphic with ripple waves */}
        <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-sky-400/40 animate-ping"></div>
          <div className="absolute inset-4 rounded-full border border-sky-500/50 animate-pulse"></div>
          <div className="w-24 h-24 rounded-full bg-white border-2 border-sky-500 flex flex-col items-center justify-center shadow-xl shadow-sky-500/20 z-10">
            <Droplets className="w-8 h-8 text-sky-600 animate-bounce" />
            <span className="text-[10px] font-mono font-bold text-sky-600">404 FT</span>
          </div>
        </div>

        {/* 404 Main Title */}
        <div>
          <span className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-sky-500 to-blue-700 tracking-tighter">
            404
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Oops! This Page Went Underground
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-md mx-auto">
            The geological survey coordinates you are looking for could not be found or have moved deeper into the strata.
          </p>
        </div>

        {/* Dual buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>

          <a
            href="/#services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 hover:border-sky-500 shadow-xs transition-colors"
          >
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Explore Services</span>
          </a>
        </div>

      </div>
    </div>
  );
};
