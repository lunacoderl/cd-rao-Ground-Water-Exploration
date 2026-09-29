import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Layers, Droplets } from 'lucide-react';
import { YouTubeIcon } from '../common/YouTubeIcon';
import { InstagramIcon } from '../common/InstagramIcon';

interface TechnologySectionProps {
  onOpenEnquiry: () => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenEnquiry }) => {
  const strataLayers = [
    { name: 'Surface Soil', depth: '0 – 15 ft', color: 'from-amber-700 to-amber-800', desc: 'Topsoil, sand & loam layer' },
    { name: 'Weathered Layer', depth: '15 – 65 ft', color: 'from-amber-900 to-stone-800', desc: 'Decomposed rock & gravel' },
    { name: 'Fractured Rock', depth: '65 – 180 ft', color: 'from-slate-800 to-stone-900', desc: 'Jointed granite & secondary fractures' },
    { name: 'Water Bearing Layer (Aquifer)', depth: '180 – 380 ft', color: 'from-sky-700 via-cyan-600 to-blue-800', active: true, desc: 'High saturation confined water aquifer' },
    { name: 'Hard Bedrock', depth: '380+ ft', color: 'from-slate-900 to-black', desc: 'Impermeable crystalline basement rock' },
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-b border-sky-900/30">
      {/* Background geological contour glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 3D Strata Cutaway Diagram (6.5 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-sky-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-sky-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    Geological Strata Profile
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 font-semibold">
                  3D Subsurface Scan
                </span>
              </div>

              {/* Strata Stack Visual */}
              <div className="space-y-3">
                {strataLayers.map((layer, index) => (
                  <div
                    key={index}
                    className={`relative rounded-xl p-4 border transition-all ${
                      layer.active
                        ? 'bg-gradient-to-r from-sky-950 via-sky-900/90 to-blue-950 border-sky-400 shadow-lg shadow-sky-500/20'
                        : 'bg-slate-900/70 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${layer.color} shadow-sm`}></div>
                        <div>
                          <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            {layer.name}
                            {layer.active && (
                              <span className="px-2 py-0.5 rounded-md bg-cyan-400 text-slate-950 text-[10px] font-extrabold uppercase animate-pulse">
                                Target Zone
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-slate-300 mt-0.5">{layer.desc}</p>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <span className={`text-xs font-mono font-bold ${layer.active ? 'text-cyan-300' : 'text-slate-400'}`}>
                          {layer.depth}
                        </span>
                      </div>
                    </div>

                    {layer.active && (
                      <div className="mt-3 pt-3 border-t border-sky-500/30 flex items-center justify-between text-xs text-sky-200">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Droplets className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                          Continuous Fresh Water Inflow Detected
                        </span>
                        <span className="font-bold text-cyan-300 font-mono">
                          95% Saturation
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Real Equipment Image Callout at bottom */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <img
                  src="/images/equipment-kit.jpg"
                  alt="Exploration Kit"
                  className="w-16 h-16 object-contain rounded-lg bg-black/40 p-1 flex-shrink-0"
                />
                <div>
                  <h5 className="text-xs font-bold text-white">Multi-Frequency 3D Resonance Scanner</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Analyzes electromagnetic frequency variations in real-time to identify fractures accurately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Explanation & Checklist (5.5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Advanced Geophysical Innovation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                3D Earth Scanning Technology
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                Advanced geophysical technology to understand underground water layers with high accuracy.
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              By projecting high-frequency electromagnetic pulses and measuring subsurface resistivity responses, our modern 3D scanning equipment produces accurate layer-by-layer subterranean models. We identify water-saturated fractured granite zones before you ever hire a drilling rig.
            </p>

            {/* Checklist matching mockup */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-white">3D Sub-surface Imaging</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-white">Accurate Layer Identification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-white">Better Borewell Success Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-white">Ideal for All Types of Land</span>
              </div>
            </div>

            {/* CTA Button Row with YouTube */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/services/3d-earth-scanning"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 transition-all"
              >
                <span>Explore Technology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://www.youtube.com/@BoreMitra/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all cursor-pointer"
              >
                <YouTubeIcon className="w-4 h-4 fill-white" />
                <span>YouTube Demos</span>
              </a>

              <a
                href="https://www.instagram.com/c.d.raogeologist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-pink-600/30 transition-all cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4 fill-white" />
                <span>Instagram @c.d.raogeologist</span>
              </a>
              
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 font-semibold text-sm border border-sky-500/30 transition-colors cursor-pointer"
              >
                Book 3D Scan
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
