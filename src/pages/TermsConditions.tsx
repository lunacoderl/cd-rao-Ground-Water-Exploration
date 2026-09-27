import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const TermsConditions: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 text-slate-900 min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-sky-900/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Terms and Conditions Hero"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-4">
            <Link to="/" className="hover:text-sky-300">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">Terms & Conditions</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Professional Survey Guidelines | C.D.Rao Ground Water Exploration Consultancy
          </p>
        </div>
      </section>

      {/* Content Section - Light Themed Card */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-12 space-y-8 shadow-sm leading-relaxed text-sm sm:text-base text-slate-700">
            
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">1.</span> Scope of Geological Consultancy
              </h2>
              <p>
                C.D.Rao Ground Water Exploration Consultancy provides scientific groundwater surveys, borewell point identification, 3D earth scanning, and geophysical resistivity testing. Our recommendations are derived using professional scientific standards and field instrumentation under the direction of qualified geologist Chigurupati Durga Rao (M.Sc Geology).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">2.</span> Nature of Subsurface Predictions
              </h2>
              <p>
                Groundwater exploration relies on indirect measurements of the earth's electrical resistivity and electromagnetic properties. While our scientific methods provide an exceptionally high success rate compared to unscientific divining, natural subsurface formations can have localized structural anomalies. Our survey represents a probabilistic geological assessment and should be utilized as professional guidance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">3.</span> Site Access & Safety
              </h2>
              <p>
                The client is responsible for ensuring clear, safe physical access to the survey property, identifying legal boundary lines, and warning survey personnel of any buried live high-voltage cables, gas lines, or hazardous terrain.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">4.</span> Drilling Contractor Responsibility
              </h2>
              <p>
                C.D.Rao Ground Water Exploration Consultancy is an independent geological consulting entity and does not operate drill rigs or manufacture casing pipes. The mechanical execution of drilling, vertical alignment, and pipe installation remains the responsibility of your appointed drilling contractor.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">5.</span> Jurisdiction
              </h2>
              <p>
                Any legal inquiries or disputes arising out of survey agreements are subject to the exclusive jurisdiction of the competent courts in Visakhapatnam, Andhra Pradesh, India.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
