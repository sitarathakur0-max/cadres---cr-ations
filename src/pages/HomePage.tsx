import React, { useState } from 'react';
import { ArrowRight, Phone, MapPin, Check, Frame, Sparkles, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PageView, GalleryItem } from '../types';
import { TrustBadge } from '../components/TrustBadge';
import { LightboxModal } from '../components/LightboxModal';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page-container" className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#EFE9DF] text-[#4A4742] border border-[#DDD6CC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#846853]" />
                    {SITE_CONFIG.hero.badge}
                  </span>
                  <TrustBadge />
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] leading-[1.15] text-[#141517] tracking-tight font-normal">
                  {SITE_CONFIG.hero.headline}
                </h1>

                <p className="text-base sm:text-lg text-[#52565D] leading-relaxed max-w-2xl font-light">
                  {SITE_CONFIG.hero.subhead}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                <button
                  id="hero-primary-cta"
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1E2022] hover:bg-[#2F3236] text-[#FAF8F5] text-sm font-medium rounded-xs transition-all shadow-sm hover:shadow-md"
                >
                  <span>{SITE_CONFIG.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => handleNav('services')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-transparent hover:bg-[#EFE9DF] text-[#1E2022] border border-[#D9D1C5] text-sm font-medium rounded-xs transition-colors"
                >
                  <span>{SITE_CONFIG.hero.ctaSecondary}</span>
                </button>
              </div>

              {/* Quick Trust / Contact Highlights */}
              <div className="pt-4 border-t border-[#EAE4DC] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#63676E]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#846853]" />
                  <span>31 Rue des Arts, 33000 Bordeaux</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#846853]" />
                  <a href={SITE_CONFIG.phoneTel} className="font-medium text-[#1E2022] hover:underline">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Museum-style Frame Border */}
                <div className="relative p-3.5 sm:p-4 bg-white border border-[#DDD5C9] shadow-lg rounded-xs">
                  <div className="overflow-hidden aspect-4/3 relative bg-[#ECE6DE]">
                    <img
                      src={SITE_CONFIG.hero.image}
                      alt={SITE_CONFIG.hero.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Frame Detail Label */}
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#7A746C] tracking-wider uppercase font-medium">
                    <span>Atelier Cadres & Créations</span>
                    <span>Bordeaux · 33000</span>
                  </div>
                </div>

                {/* Floating Craftsmanship Badge */}
                <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#FAF8F5] p-4 border border-[#DDD5C9] shadow-md rounded-xs max-w-[220px]">
                  <p className="text-xs font-serif italic text-[#1E2022]">
                    « Donner à chaque pièce son juste écrin. »
                  </p>
                  <p className="text-[10px] text-[#787E87] mt-1 uppercase tracking-wider font-sans font-semibold">
                    Sur mesure & précision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STUDIO INTRODUCTION */}
      <section id="studio-intro-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3EEE7] border border-[#E2DAD0] rounded-xs p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
                L’Atelier au cœur de Bordeaux
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#141517] leading-snug">
                Un espace dédié au respect et à la mise en scène de vos pièces.
              </h2>
              <p className="text-sm sm:text-base text-[#52565D] leading-relaxed">
                Situé au 31 Rue des Arts, <strong>Cadres & Créations</strong> est un atelier local spécialisé dans l’encadrement sur mesure. Nous apportons un regard attentif et des solutions de cadrage adaptées à vos tableaux, photographies, œuvres graphiques et pièces décoratives.
              </p>
              <div className="pt-2">
                <button
                  id="intro-read-more-btn"
                  onClick={() => handleNav('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E2022] hover:text-[#846853] transition-colors"
                >
                  <span>Découvrir l’esprit de l’atelier</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-[#FAF8F5] p-6 border border-[#E0D8CE] rounded-xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EDE6DC] flex items-center justify-center text-[#846853]">
                  <Frame className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#1E2022]">Écoute & conseil</h3>
                <p className="text-xs sm:text-sm text-[#61656D] leading-relaxed">
                  Chaque projet est unique. Nous prenons le temps d’examiner votre œuvre avec vous pour définir la composition la plus adaptée.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E0D8CE] rounded-xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EDE6DC] flex items-center justify-center text-[#846853]">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#1E2022]">Précision du geste</h3>
                <p className="text-xs sm:text-sm text-[#61656D] leading-relaxed">
                  Coupes d’angles nettes, montages soignés et ajustements au millimètre pour assurer une tenue parfaite dans le temps.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E0D8CE] rounded-xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EDE6DC] flex items-center justify-center text-[#846853]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#1E2022]">Mise en valeur sobre</h3>
                <p className="text-xs sm:text-sm text-[#61656D] leading-relaxed">
                  L’encadrement ne s’impose jamais : il sert l’œuvre, canalise le regard et valorise ses nuances naturelles.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E0D8CE] rounded-xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EDE6DC] flex items-center justify-center text-[#846853]">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#1E2022]">Présence locale</h3>
                <p className="text-xs sm:text-sm text-[#61656D] leading-relaxed">
                  Un atelier de proximité à Bordeaux où vous pouvez venir échanger de vive voix et voir les profils en situation réelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES PREVIEW */}
      <section id="services-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
            Prestations d’encadrement
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141517]">
            À chaque support, sa solution d’encadrement sur mesure.
          </h2>
          <p className="text-sm text-[#60656E]">
            Nous réalisons des encadrements personnalisés pour quatre grandes familles de pièces artistiques et sentimentales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-[#FAF8F5] border border-[#E2DAD0] rounded-xs p-6 flex flex-col justify-between space-y-6 hover:border-[#846853]/60 transition-all group"
            >
              <div className="space-y-4">
                <div className="aspect-4/3 overflow-hidden bg-[#ECE6DE] rounded-xs border border-[#EAE3D9]">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-medium tracking-wider uppercase text-[#846853]">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1E2022]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-[#595E67] leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE4DC]">
                <button
                  id={`btn-explore-${service.id}`}
                  onClick={() => handleNav('services')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E2022] group-hover:text-[#846853] transition-colors"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FRAMING CRAFTSMANSHIP & PROCESS */}
      <section id="process-preview-section" className="bg-[#F6F2EB] py-16 sm:py-24 border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
                Savoir-faire & Démarche
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141517]">
                Le cheminement d’un encadrement sur mesure
              </h2>
              <p className="text-sm text-[#5D626A] leading-relaxed">
                De la découverte de votre pièce à sa remise finale, découvrez les étapes qui rythment notre travail à l’atelier de Bordeaux.
              </p>
            </div>
            <button
              id="view-full-process-btn"
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-[#CFC7BC] hover:bg-[#EDE7DE] text-[#1E2022] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <span>Voir le détail des prestations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SITE_CONFIG.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#FAF8F5] p-6 border border-[#DFD8CE] rounded-xs space-y-3 relative"
              >
                <span className="font-serif text-3xl text-[#B3A99D] block">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg text-[#1E2022] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5D626A] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VISUAL GALLERY & INSPIRATIONS PREVIEW */}
      <section id="gallery-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
              Inspirations & Possibilités
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141517]">
              L’harmonie entre l’œuvre et son cadre
            </h2>
            <p className="text-xs sm:text-sm text-[#6C717A]">
              Sélection d’exemples illustrant différentes directions d’encadrement et de finitions.
            </p>
          </div>
          <button
            id="view-all-gallery-btn"
            onClick={() => handleNav('gallery')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E2022] hover:text-[#846853] transition-colors"
          >
            <span>Explorer toutes les inspirations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONFIG.galleryItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryItem(item)}
              className="bg-[#FAF8F5] border border-[#E2DAD0] rounded-xs p-4 space-y-3 cursor-pointer group hover:border-[#846853] transition-all shadow-2xs hover:shadow-sm"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSelectedGalleryItem(item);
              }}
              aria-label={`Agrandir : ${item.title}`}
            >
              <div className="aspect-4/3 overflow-hidden bg-[#EDE6DE] border border-[#E0D8CE] relative">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                  Cliquer pour agrandir
                </div>
              </div>
              <div className="space-y-1 pt-1">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#846853]">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg text-[#1E2022] group-hover:text-[#846853] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#63676E] line-clamp-2">
                  {item.frameDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRUST & VERIFIED REVIEWS SECTION (Strict facts: 4.8/5 and 16 reviews) */}
      <section id="trust-section" className="bg-[#1D1E21] text-[#FAF8F5] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-widest text-[#C4823F] uppercase block">
                Témoignage de confiance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                La satisfaction des amateurs d’art et des passionnés de Bordeaux.
              </h2>
              <p className="text-sm text-[#B3B7BD] leading-relaxed">
                Notre engagement repose sur une relation de confiance, un accompagnement sur mesure et le respect scrupuleux des œuvres confiées.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#26282D] border border-[#3A3D44] p-8 sm:p-10 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#C4823F]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="font-serif text-4xl text-white">
                    {SITE_CONFIG.googleRating.score} <span className="text-xl text-[#9EA3AB]">/ 5</span>
                  </div>
                  <p className="text-xs text-[#9EA3AB] uppercase tracking-wider font-medium">
                    Note globale certifiée sur Google
                  </p>
                </div>

                <div className="sm:border-l sm:border-[#3A3D44] sm:pl-8 space-y-2">
                  <div className="text-3xl font-serif text-[#FAF8F5]">
                    {SITE_CONFIG.googleRating.reviewsCount} avis
                  </div>
                  <p className="text-xs text-[#9EA3AB] leading-relaxed max-w-xs">
                    Clients ayant partagé leur expérience d’encadrement à l’atelier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOCATION & WORKSHOP PREVIEW */}
      <section id="location-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#DDD6CC] p-8 sm:p-12 rounded-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
                Venir à l’atelier
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#141517]">
                31 Rue des Arts, 33000 Bordeaux
              </h2>
              <p className="text-sm text-[#5C6067] leading-relaxed max-w-xl">
                L’atelier vous accueille pour étudier votre projet avec l’œuvre sous les yeux. Vous pouvez nous joindre en amont pour toute question ou conseil sur la préparation de votre pièce.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  id="home-phone-btn"
                  href={SITE_CONFIG.phoneTel}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E2022] hover:bg-[#32353A] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8B48D]" />
                  <span>Appeler : {SITE_CONFIG.phone}</span>
                </a>
                <button
                  id="home-contact-btn"
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C9C2B7] text-[#1E2022] hover:bg-[#EDE7DE] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
                >
                  <span>Formulaire & Plan d’accès</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-[#F3EEE7] border border-[#E0D8CE] rounded-xs space-y-3">
              <h3 className="font-serif text-lg text-[#1E2022]">Conseil d’accès</h3>
              <p className="text-xs text-[#63676E] leading-relaxed">
                Situé dans une rue dédiée aux métiers d’art au centre de Bordeaux, l’atelier est facilement joignable à pied et en transports en commun.
              </p>
              <p className="text-xs font-medium text-[#846853] pt-1">
                Cadres & Créations · Encadrement d’art à Bordeaux
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onConsult={handleNav}
      />
    </div>
  );
};
