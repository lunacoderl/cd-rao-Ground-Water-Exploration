import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  description?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white transition-colors"
        aria-label="Close Video"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Video Container - Full height and width, NO CROPPING */}
      <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center bg-black rounded-xl overflow-hidden border border-sky-500/30 shadow-2xl">
          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
          />
        </div>

        {(title || description) && (
          <div className="mt-4 text-center max-w-2xl px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
            {title && <h4 className="text-white font-semibold text-base sm:text-lg">{title}</h4>}
            {description && <p className="text-slate-300 text-xs sm:text-sm mt-1">{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
