import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight, Droplets } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Site Works', href: isHome ? '#site-works' : '/#site-works' },
    { name: 'Services', href: isHome ? '#services' : '/#services' },
    { name: 'Gallery', href: isHome ? '#gallery' : '/#gallery' },
    { name: 'Reviews', href: isHome ? '#reviews' : '/#reviews' },
    { name: 'FAQ', href: isHome ? '#faq' : '/#faq' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden bg-white border-2 border-sky-500 p-0.5 flex-shrink-0 shadow-md">
              <img
                src="/logo.png"
                alt="C.D. Rao Ground Water Exploration Consultancy"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                C.D. RAO
                <span className="inline-block w-2 h-2 rounded-full bg-sky-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs text-sky-600 font-bold tracking-wide uppercase">
                Ground Water Exploration Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Call Pill Button (from Mockup) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919949401970"
              className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-md shadow-sky-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>9949401970</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+919949401970"
              className="p-2 rounded-full bg-sky-600 text-white"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="tel:+919949401970"
              className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white font-bold py-2.5 rounded-xl shadow-md shadow-sky-600/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 9949401970</span>
            </a>
            <a
              href="https://wa.me/919949401970?text=Hello%20C.D.Rao%20Sir,%20I%20need%20a%20groundwater%20survey%20for%20my%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 rounded-xl shadow-md shadow-emerald-600/20"
            >
              <Droplets className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
