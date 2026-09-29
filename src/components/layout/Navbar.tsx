import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { YouTubeIcon } from '../common/YouTubeIcon';
import { InstagramIcon } from '../common/InstagramIcon';

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
          
          {/* Logo & Brand Name mentioning Geologist */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden bg-white border-2 border-sky-500 p-0.5 flex-shrink-0 shadow-md">
              <img
                src="/logo.png"
                alt="Geologist C.D. Rao Ground Water Exploration Consultancy"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                C.D. RAO
                <span className="text-[11px] sm:text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full ml-1">
                  Geologist
                </span>
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

          {/* Social Channels (YouTube & Instagram) in place of get call */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5">
            <a
              href="https://www.youtube.com/@BoreMitra/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-xs px-3 sm:px-3.5 py-2 rounded-full shadow-md shadow-red-500/20 transition-all transform hover:-translate-y-0.5 group"
              aria-label="Watch YouTube Channel @BoreMitra"
            >
              <YouTubeIcon className="w-3.5 h-3.5 fill-white" />
              <span>YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/c.d.raogeologist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-bold text-xs px-3 sm:px-3.5 py-2 rounded-full shadow-md shadow-pink-500/20 transition-all transform hover:-translate-y-0.5 group"
              aria-label="Follow on Instagram @c.d.raogeologist"
            >
              <InstagramIcon className="w-3.5 h-3.5 fill-white" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Mobile Header Socials & Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            <a
              href="https://www.youtube.com/@BoreMitra/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-[#ff0000] text-white shadow-xs"
              aria-label="YouTube Channel @BoreMitra"
            >
              <YouTubeIcon className="w-4 h-4 fill-white" />
            </a>
            <a
              href="https://www.instagram.com/c.d.raogeologist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-xs"
              aria-label="Instagram @c.d.raogeologist"
            >
              <InstagramIcon className="w-4 h-4 fill-white" />
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
              href="https://www.youtube.com/@BoreMitra/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-sm shadow-md shadow-red-500/25"
            >
              <YouTubeIcon className="w-4 h-4 fill-white" />
              <span>Watch on YouTube @BoreMitra</span>
            </a>
            <a
              href="https://www.instagram.com/c.d.raogeologist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-pink-500/25"
            >
              <InstagramIcon className="w-4 h-4 fill-white" />
              <span>Follow on Instagram @c.d.raogeologist</span>
            </a>
            <a
              href="tel:+919949401970"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call Geologist: 9949401970</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
