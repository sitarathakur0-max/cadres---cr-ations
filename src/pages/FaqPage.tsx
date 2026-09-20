import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PageView } from '../types';

interface FaqPageProps {
  onNavigate: (page: PageView) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="faq-page-container" className="space-y-16 sm:space-y-24 pb-16 pt-6">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#846853] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Foire aux questions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141517] leading-tight font-normal">
            Tout ce qu’il faut savoir pour votre projet d’encadrement.
          </h1>

          <p className="text-base sm:text-lg text-[#555961] font-light leading-relaxed">
            Retrouvez ici les réponses aux questions courantes concernant le déroulement d’un projet, l’accueil de vos pièces et les conseils de visite à l’atelier de Bordeaux.
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#FAF8F5] border border-[#DDD6CC] rounded-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F4EFEA] transition-colors focus:outline-hidden focus:bg-[#F4EFEA]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1E2022] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#EAE3D9] text-[#1E2022] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#52565D] leading-relaxed border-t border-[#EAE4DC] animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Further Questions Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-[#F3EFE9] border border-[#DDD5C9] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl text-[#1E2022]">
              Une question spécifique sur votre œuvre ?
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6169] max-w-md">
              Nous sommes joignables par téléphone pour vous renseigner et vous orienter avant votre passage à l’atelier.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              id="faq-call-btn"
              href={SITE_CONFIG.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1E2022] hover:bg-[#32353A] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8B48D]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <button
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C9C2B7] text-[#1E2022] hover:bg-[#EAE3D9] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors"
            >
              <span>Nous écrire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
