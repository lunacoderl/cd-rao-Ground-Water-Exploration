import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, Droplets, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-sky-900/30 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient water glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-sky-500/10 to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Credibility */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-900 border border-sky-400/40 p-0.5 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="C.D. Rao Ground Water Exploration Consultancy"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">C.D. RAO</h3>
                <p className="text-xs text-sky-400 font-medium tracking-wide uppercase">
                  Ground Water Exploration Consultancy
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Scientific ground water exploration and borewell point identification expert in Visakhapatnam. Recognized by Ground Water & Water Audit Department, Govt. of A.P.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-sky-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Chigurupati Durga Rao, M.Sc Geology</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-sky-400 transition-colors">About the Geologist</a>
              </li>
              <li>
                <a href="/#site-works" className="hover:text-sky-400 transition-colors">Real Site Works</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-sky-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="/#technology" className="hover:text-sky-400 transition-colors">3D Earth Scanning</a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-sky-400 transition-colors">Field Gallery</a>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-sky-400 transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-sky-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-sky-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesData.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-sky-500 text-xs">›</span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services/drilling-techniques-guidance"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-sky-500 text-xs">›</span>
                  <span>Drilling Techniques Guidance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  M.V.P. Colony, Sector-9, Gollaveedhi, Visakhapatnam – 530017, Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919949401970" className="hover:text-sky-400 font-semibold text-white">
                    +91 9949401970
                  </a>
                  <a href="tel:+919492459873" className="hover:text-sky-400 text-slate-300 text-xs">
                    +91 9492459873
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a
                  href="mailto:durgaraochp04@gmail.com"
                  className="hover:text-sky-400 text-slate-300 break-all"
                >
                  durgaraochp04@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">5:00 AM – 11:30 PM (All 7 Days)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} C.D.Rao Ground Water Exploration Consultancy. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/terms-and-conditions" className="hover:text-sky-400 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
