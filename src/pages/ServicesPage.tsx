import React from 'react';
import { ArrowRight, Check, Sparkles, Phone, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PageView } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageView) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="services-page-container" className="space-y-20 sm:space-y-28 pb-16 pt-6">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
            Prestations & Savoir-faire
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141517] leading-tight font-normal">
            L’encadrement sur mesure pour révéler vos pièces les plus chères.
          </h1>
          <p className="text-base sm:text-lg text-[#555961] font-light leading-relaxed">
            Nous concevons des encadrements entièrement personnalisés, pensés selon les caractéristiques physiques de vos œuvres et l’atmosphère de votre intérieur à Bordeaux.
          </p>
        </div>
      </section>

      {/* 2. Detailed 4 Services Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {SITE_CONFIG.services.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={`service-detail-${service.id}`}
              className="bg-[#FAF8F5] border border-[#E2DAD0] rounded-xs p-6 sm:p-10 lg:p-12 scroll-mt-28"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Visual */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative p-3 bg-white border border-[#DDD5C9] shadow-md rounded-xs">
                    <div className="aspect-4/3 overflow-hidden bg-[#EDE7DE] rounded-xs">
                      <img
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 text-[11px] text-[#78736B] tracking-wider uppercase text-center font-medium">
                      Atelier Cadres & Créations · {service.title}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase">
                      {service.subtitle}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#141517]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#52565D] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#EAE4DC]">
                    <p className="text-xs font-semibold tracking-wider text-[#1E2022] uppercase">
                      Les points d’attention à l’atelier :
                    </p>
                    <ul className="space-y-2">
                      {service.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#464A52]">
                          <Check className="w-4 h-4 text-[#846853] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      id={`btn-enquire-${service.id}`}
                      onClick={() => handleNav('contact')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E2022] hover:bg-[#32353A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
                    >
                      <span>Consulter pour {service.title.toLowerCase()}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. The 5 Framing Process Stages */}
      <section className="bg-[#F3EFE9] py-16 sm:py-24 border-y border-[#E0D8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
              La Démarche d’Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141517]">
              Les 5 étapes de votre encadrement personnalisé
            </h2>
            <p className="text-sm text-[#5D626A]">
              Une méthode guidée par l’écoute et la justesse pour donner vie à votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SITE_CONFIG.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#FAF8F5] p-6 border border-[#DDD5C9] rounded-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="font-serif text-3xl text-[#846853] block">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg text-[#1E2022] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5D626A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#EAE4DC] text-[11px] text-[#7A7F87] leading-relaxed">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Practical Advice for visiting the workshop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#DDD5C9] p-8 sm:p-12 rounded-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#846853] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Conseil pour votre visite</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2022]">
                Comment préparer la présentation de votre pièce ?
              </h3>
              <p className="text-sm text-[#575B63] leading-relaxed">
                Pour une étude optimale, apportez si possible l’œuvre directement à l’atelier au <strong>31 Rue des Arts à Bordeaux</strong>. Protégez-la à plat ou entre deux cartons légers pour le transport. Si vous avez des photos de la pièce ou du mur de destination, n’hésitez pas à les avoir sous la main.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1E2022] hover:bg-[#32353A] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8B48D]" />
                <span>Nous appeler : {SITE_CONFIG.phone}</span>
              </a>
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9C2B7] text-[#1E2022] hover:bg-[#EDE7DE] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
              >
                <span>Envoyer un message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
