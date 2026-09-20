import React, { useState } from 'react';
import { Sparkles, Maximize2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PageView, GalleryItem } from '../types';
import { LightboxModal } from '../components/LightboxModal';

interface GalleryPageProps {
  onNavigate: (page: PageView) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes les inspirations' },
    { id: 'tableaux', label: 'Tableaux' },
    { id: 'photographies', label: 'Photographies' },
    { id: 'oeuvres-art', label: 'Œuvres d’art' },
    { id: 'pieces-decoratives', label: 'Pièces décoratives' },
    { id: 'artisanat', label: 'L’Atelier & Savoir-faire' },
  ];

  const filteredItems = activeCategory === 'all'
    ? SITE_CONFIG.galleryItems
    : SITE_CONFIG.galleryItems.filter(item => item.category === activeCategory);

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="gallery-page-container" className="space-y-16 sm:space-y-24 pb-16 pt-6">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#846853] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inspirations & Finitions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141517] leading-tight font-normal">
            Explorer les registres et possibilités d’encadrement.
          </h1>

          <p className="text-base sm:text-lg text-[#555961] font-light leading-relaxed">
            Découvrez une sélection visuelle illustrant les types de montages, jeux de marges et profils d’encadrement que nous concevons à l’atelier de Bordeaux.
          </p>

          <div className="p-3 bg-[#F2EDE5] border border-[#DDD6CB] rounded-xs text-xs text-[#61656E]">
            <strong>Note d’inspiration :</strong> Ces visuels représentent des possibilités techniques et stylistiques d’encadrement à titre d’exemples de présentation. Chaque œuvre confiée fait l’objet d’une étude spécifique et sur mesure à l’atelier.
          </div>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xs text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#1E2022] text-[#FAF8F5]'
                    : 'bg-[#FAF8F5] text-[#4A4E55] border border-[#DDD6CC] hover:bg-[#F2ECE3]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveItem(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setActiveItem(item);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Agrandir : ${item.title}`}
              className="bg-[#FAF8F5] border border-[#E0D8CE] rounded-xs p-4 sm:p-5 space-y-4 cursor-pointer group hover:border-[#846853] transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Museum-framed image thumbnail */}
                <div className="aspect-4/3 overflow-hidden bg-[#ECE6DE] border border-[#D9D1C5] relative rounded-xs">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-medium">
                    <Maximize2 className="w-4 h-4" />
                    <span>Agrandir l’inspiration</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold uppercase tracking-wider text-[#846853]">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[#848992] text-[10px] uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#1E2022] group-hover:text-[#846853] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5C616A] leading-relaxed">
                    {item.frameDescription}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EAE4DC] flex items-center justify-between text-xs text-[#7F848D]">
                <span className="text-[11px] italic font-serif">Étude sur mesure à l’atelier</span>
                <span className="font-semibold text-[#1E2022] group-hover:text-[#846853] transition-colors">
                  Détails →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Consultation CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18191B] text-[#FAF8F5] p-8 sm:p-12 rounded-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
              Vous souhaitez une mise en scène sur mesure pour votre œuvre ?
            </h3>
            <p className="text-xs sm:text-sm text-[#A8ACB3] leading-relaxed">
              Venez comparer les profilés, les ouvertures et les harmonies directement à l’atelier de Bordeaux.
            </p>
          </div>

          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF8F5] text-[#1E2022] hover:bg-[#EBE5DC] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shrink-0"
          >
            <span>Parler de votre projet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onConsult={handleNav}
      />
    </div>
  );
};
