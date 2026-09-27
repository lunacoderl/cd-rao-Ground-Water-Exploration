import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  description?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container - Full height and width, NO CROPPING */}
      <div className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center justify-center">
        <img
          src={imageUrl}
          alt={title || 'Field image'}
          className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-sky-500/20"
        />

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
