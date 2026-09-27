import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 text-slate-900 min-h-screen">
      
      {/* Hero Banner (matching mockup Panel 3) */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-sky-900/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Privacy Policy Hero"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-4">
            <Link to="/" className="hover:text-sky-300">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Last Updated: January 2026 | C.D.Rao Ground Water Exploration Consultancy
          </p>
        </div>
      </section>

      {/* Content Section - Light Themed Card matching mockup Panel 3 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-12 space-y-10 shadow-sm leading-relaxed text-sm sm:text-base text-slate-700">
            
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">1.</span> Information We Collect
              </h2>
              <p>
                When you request a groundwater survey, call us, or submit an enquiry through our website, we may collect personal details including your name, contact phone number, email address, property/site location in Visakhapatnam, and technical specifications regarding your borewell or agricultural requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">2.</span> How We Use Information
              </h2>
              <p>
                The information you provide is used solely to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1.5 text-slate-600">
                <li>Coordinate field site visits and scheduling for groundwater exploration.</li>
                <li>Conduct geological and geophysical resistivity analysis on your property.</li>
                <li>Generate technical borewell point recommendations and survey reports.</li>
                <li>Communicate directly with you regarding appointment confirmations and updates.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">3.</span> Cookies & Analytics
              </h2>
              <p>
                Our website may use standard session cookies and anonymous traffic analysis to understand user engagement, optimize page loading speed, and ensure proper functionality across mobile and desktop devices. No sensitive personal data is stored in cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">4.</span> Third-Party Services
              </h2>
              <p>
                We do not sell, trade, or transfer your contact information to external marketing agencies. Information is only shared with authorized field personnel or drilling contractors specifically requested by you to fulfill your borewell survey requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">5.</span> Data Security
              </h2>
              <p>
                We implement industry-standard administrative and technical safeguards to protect your personal details and geological site information against unauthorized access, loss, or misuse.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">6.</span> Your Rights
              </h2>
              <p>
                You retain the right to inquire about the information we hold about your site enquiry, request corrections to your contact details, or ask us to delete your personal submission from our enquiry records at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-sky-600 font-mono">7.</span> Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how your site data is handled, feel free to reach out to our principal geologist directly:
              </p>
              
              <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
                <p className="font-bold text-slate-900">
                  Chigurupati Durga Rao, M.Sc Geology
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>+91 9949401970 / +91 9492459873</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>durgaraochp04@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>M.V.P. Colony, Sector-9, Gollaveedhi, Visakhapatnam – 530017</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
