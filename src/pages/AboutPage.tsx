import React from 'react';
import { ArrowRight, CheckCircle, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PageView } from '../types';
import { TrustBadge } from '../components/TrustBadge';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="about-page-container" className="space-y-20 sm:space-y-28 pb-16 pt-6">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase">
              L’Atelier à Bordeaux
            </span>
            <span className="text-[#C5BDB2]">/</span>
            <TrustBadge />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141517] leading-tight font-normal">
            Un atelier dédié à la mise en valeur juste et sur mesure de vos œuvres.
          </h1>

          <p className="text-base sm:text-lg text-[#555961] font-light leading-relaxed">
            Implanté au 31 Rue des Arts à Bordeaux, <strong>Cadres & Créations</strong> est un atelier local d’encadrement sur mesure conçu comme un lieu de dialogue, de précision et de respect du geste artisanal.
          </p>
        </div>
      </section>

      {/* 2. Visual Story & Workshop Atmosphere */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
                Notre Philosophie
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1E2022]">
                L’encadrement comme prolongement naturel de la création
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#52565D] leading-relaxed">
              Qu’il s’agisse d’une huile sur toile, d’un tirage photographique, d’un dessin d’artiste ou d’un objet décoratif singulier, chaque pièce possède sa propre respiration. Notre rôle est de trouver le point d’équilibre où le cadre soutient l’œuvre sans jamais chercher à s’y substituer.
            </p>

            <p className="text-sm sm:text-base text-[#52565D] leading-relaxed">
              Nous privilégions une écoute sincère et une démarche de proximité : à l’atelier, nous posons l’œuvre à plat, testons les tonalités et les matières sous la lumière pour concevoir ensemble la mise en scène la plus harmonieuse.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#846853] shrink-0 mt-0.5" />
                <p className="text-sm text-[#383A3E]">
                  <strong>Un travail sur mesure absolu :</strong> aucune dimension préétablie, chaque montage est calculé pour la pièce exacte.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#846853] shrink-0 mt-0.5" />
                <p className="text-sm text-[#383A3E]">
                  <strong>Une sensibilité esthétique :</strong> harmonisation des nuances, des marges et des finitions avec l’environnement de votre intérieur.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#846853] shrink-0 mt-0.5" />
                <p className="text-sm text-[#383A3E]">
                  <strong>Une présence bordelaise :</strong> un atelier indépendant ancré dans le paysage artistique local.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-3.5 bg-white border border-[#DDD5C9] shadow-md rounded-xs">
              <div className="aspect-4/3 overflow-hidden bg-[#ECE6DE]">
                <img
                  src={SITE_CONFIG.images.craftHands}
                  alt="Artisan d’encadrement au travail à l’atelier de Bordeaux"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-xs text-[#7B756D] italic text-center font-serif">
                Précision de l’assemblage et soin des finitions à l’atelier
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Disciplines of the Studio */}
      <section className="bg-[#F5F0E8] py-16 sm:py-20 border-y border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
              Domaines d’intervention
            </span>
            <h2 className="font-serif text-3xl text-[#141517]">
              Quatre approches adaptées à vos pièces
            </h2>
            <p className="text-sm text-[#5C6169]">
              Cadres & Créations accompagne les particuliers, collectionneurs et créateurs dans la concrétisation de leurs envies d’encadrement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF8F5] p-8 border border-[#DFD7CD] rounded-xs space-y-3">
              <h3 className="font-serif text-2xl text-[#1E2022]">Tableaux & Toiles</h3>
              <p className="text-sm text-[#555961] leading-relaxed">
                Mise en tension, respect de la matière picturale et adaptation des feuillures pour les toiles anciennes ou contemporaines.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 border border-[#DFD7CD] rounded-xs space-y-3">
              <h3 className="font-serif text-2xl text-[#1E2022]">Photographies d’art</h3>
              <p className="text-sm text-[#555961] leading-relaxed">
                Étude géométrique des ouvertures de fenêtres et des marges pour sublimer les contrastes, la lumière et la composition photographique.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 border border-[#DFD7CD] rounded-xs space-y-3">
              <h3 className="font-serif text-2xl text-[#1E2022]">Œuvres graphiques</h3>
              <p className="text-sm text-[#555961] leading-relaxed">
                Prise en charge attentive des dessins, gravures, aquarelles et estampes afin de préserver la beauté subtile des papiers d’art.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 border border-[#DFD7CD] rounded-xs space-y-3">
              <h3 className="font-serif text-2xl text-[#1E2022]">Pièces décoratives en volume</h3>
              <p className="text-sm text-[#555961] leading-relaxed">
                Conception de cadres avec profondeur et boîtes adaptées aux objets singuliers, broderies, reliefs ou souvenirs précieux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Presence & Invitation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#DDD5C9] p-8 sm:p-12 rounded-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
              Rencontrer l’atelier
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2022]">
              Vous avez un projet en tête ou une pièce à encadrer ?
            </h3>
            <p className="text-sm text-[#595E67] leading-relaxed">
              Venez nous rendre visite au <strong>31 Rue des Arts, 33000 Bordeaux</strong> ou contactez-nous par téléphone pour échanger sur vos souhaits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              id="about-call-btn"
              href={SITE_CONFIG.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1E2022] hover:bg-[#313439] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8B48D]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <button
              id="about-contact-btn"
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9C2B7] text-[#1E2022] hover:bg-[#EDE7DE] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
            >
              <span>Page Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
