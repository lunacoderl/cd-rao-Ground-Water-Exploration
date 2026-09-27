import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-500">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-24 h-24 rounded-full border-2 border-sky-500/20 animate-ping absolute"></div>
        <div className="w-20 h-20 rounded-full border-2 border-sky-400/40 animate-pulse absolute"></div>
        <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-900 border border-sky-400 p-1 relative z-10 shadow-xl shadow-sky-500/30">
          <img
            src="/logo.png"
            alt="C.D. Rao Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
        C.D. RAO
      </h1>
      <p className="text-xs text-sky-400 font-medium tracking-widest uppercase mt-1">
        Ground Water Exploration Consultancy
      </p>

      {/* Ripple bar */}
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-6">
        <div className="w-full h-full bg-gradient-to-r from-sky-500 to-blue-600 animate-pulse"></div>
      </div>
    </div>
  );
};
