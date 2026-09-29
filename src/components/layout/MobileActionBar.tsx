import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { YouTubeIcon } from '../common/YouTubeIcon';
import { InstagramIcon } from '../common/InstagramIcon';

interface MobileActionBarProps {
  onOpenEnquiry?: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-sky-500/20 px-1.5 py-2 flex items-center justify-around shadow-2xl">
      <a
        href="tel:+919949401970"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-[10px] gap-0.5 mx-0.5 shadow-md shadow-sky-600/30"
      >
        <Phone className="w-3.5 h-3.5 fill-white" />
        <span>Call</span>
      </a>

      <a
        href="https://wa.me/919949401970?text=Hello%20Geologist%20C.D.Rao%20Sir,%20I%20need%20a%20groundwater%20survey%20for%20my%20site%20in%20Visakhapatnam."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-[10px] gap-0.5 mx-0.5 shadow-md shadow-emerald-600/30"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-white" />
        <span>WhatsApp</span>
      </a>

      <a
        href="https://www.youtube.com/@BoreMitra/shorts"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#ff0000] hover:bg-[#cc0000] text-white font-medium text-[10px] gap-0.5 mx-0.5 shadow-md shadow-red-600/30"
      >
        <YouTubeIcon className="w-3.5 h-3.5 fill-white" />
        <span>YouTube</span>
      </a>

      <a
        href="https://www.instagram.com/c.d.raogeologist?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-medium text-[10px] gap-0.5 mx-0.5 shadow-md shadow-pink-600/30"
      >
        <InstagramIcon className="w-3.5 h-3.5 fill-white" />
        <span>Instagram</span>
      </a>

      <button
        onClick={onOpenEnquiry || (() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        })}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 font-medium text-[10px] gap-0.5 mx-0.5 border border-sky-500/30 cursor-pointer"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Enquire</span>
      </button>
    </div>
  );
};
