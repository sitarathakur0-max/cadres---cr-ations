import React, { useEffect } from 'react';
import { X, Frame, ArrowRight } from 'lucide-react';
import { GalleryItem, PageView } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onConsult: (page: PageView) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onConsult,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="gallery-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141517]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        id="gallery-lightbox-content"
        className="relative max-w-4xl w-full bg-[#FAF8F5] border border-[#DDD6CC] rounded-xs shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-lightbox-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1E2022]/80 hover:bg-[#1E2022] text-white transition-colors"
          aria-label="Fermer la vue agrandie"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Visual Presentation */}
          <div className="md:col-span-7 bg-[#EDE7DF] flex items-center justify-center p-6 sm:p-8">
            <div className="relative p-3 bg-white shadow-xl border border-[#D9D1C5]">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                referrerPolicy="no-referrer"
                className="max-h-[55vh] w-auto object-contain mx-auto"
              />
              <div className="mt-2 text-center text-[11px] text-[#78736B] italic font-serif">
                Inspiration d’encadrement · {item.categoryLabel}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ECE5DB] text-[#4A4742] text-xs font-medium">
                <Frame className="w-3.5 h-3.5 text-[#846853]" />
                <span>{item.categoryLabel}</span>
              </div>

              <h3 id="lightbox-title" className="font-serif text-2xl text-[#1E2022] leading-snug">
                {item.title}
              </h3>

              <div className="space-y-2 text-sm text-[#4E5158] leading-relaxed">
                <p>{item.frameDescription}</p>
                <p className="text-xs text-[#7A7F87] pt-2 border-t border-[#EAE4DB]">
                  Chaque création à l’atelier fait l’objet d’un calibrage sur mesure : choix des profils, équilibre des marges et finitions adaptées à votre œuvre.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE4DB] space-y-3">
              <button
                id="lightbox-consult-cta"
                onClick={() => {
                  onClose();
                  onConsult('contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#1E2022] hover:bg-[#32353A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>Échanger sur un projet similaire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-center text-[11px] text-[#868A91]">
                Conseil et étude de cadrage à l’atelier de Bordeaux
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
