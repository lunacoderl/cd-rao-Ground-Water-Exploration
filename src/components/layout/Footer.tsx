import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { YouTubeIcon } from '../common/YouTubeIcon';
import { InstagramIcon } from '../common/InstagramIcon';

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
          
          {/* Col 1: Brand & Geologist Credibility */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-900 border border-sky-400/40 p-0.5 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Geologist C.D. Rao Ground Water Exploration Consultancy"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                  <span>C.D. RAO</span>
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-950 border border-sky-400/30 px-2 py-0.5 rounded-full">
                    Geologist
                  </span>
                </h3>
                <p className="text-xs text-sky-400 font-medium tracking-wide uppercase">
                  Ground Water Exploration Consultancy
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Scientific ground water exploration and borewell point identification consultancy in Visakhapatnam by recognized geologist <strong className="text-slate-200">Chigurupati Durga Rao (M.Sc Geology)</strong>.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Recognized by Ground Water &amp; Water Audit Dept., Govt. of A.P.</span>
            </div>

            {/* Official Social Channels */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-semibold text-slate-400 block">
                Watch My Services &amp; Field Works:
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.youtube.com/@BoreMitra/shorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-xs shadow-md shadow-red-600/25 transition-all transform hover:-translate-y-0.5"
                >
                  <YouTubeIcon className="w-4 h-4 fill-white" />
                  <span>YouTube Channel @BoreMitra</span>
                </a>
                <a
                  href="https://www.instagram.com/c.d.raogeologist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-bold text-xs shadow-md shadow-pink-600/25 transition-all transform hover:-translate-y-0.5"
                >
                  <InstagramIcon className="w-4 h-4 fill-white" />
                  <span>Instagram @c.d.raogeologist</span>
                </a>
              </div>
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
              <li>
                <a
                  href="https://www.youtube.com/@BoreMitra/shorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors flex items-center gap-1.5 pt-1"
                >
                  <YouTubeIcon className="w-3.5 h-3.5 fill-red-400" />
                  <span>Watch on YouTube (@BoreMitra)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/c.d.raogeologist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors flex items-center gap-1.5 pt-0.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 fill-pink-400" />
                  <span>Instagram (@c.d.raogeologist)</span>
                </a>
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
              {servicesData.slice(0, 8).map((srv) => (
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
            </ul>
          </div>

          {/* Col 4: Contact & Geologist Details */}
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
          <p>© {currentYear} C.D.Rao Ground Water Exploration Consultancy | Geologist Chigurupati Durga Rao, M.Sc Geology. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/terms-and-conditions" className="hover:text-sky-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.youtube.com/@BoreMitra/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
            >
              <YouTubeIcon className="w-3.5 h-3.5 fill-red-400" />
              <span>@BoreMitra</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.instagram.com/c.d.raogeologist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-semibold"
            >
              <InstagramIcon className="w-3.5 h-3.5 fill-pink-400" />
              <span>@c.d.raogeologist</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400 hover:text-white transition-colors cursor-pointer"
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
