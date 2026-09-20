import React from 'react';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PageView } from '../types';
import { TrustBadge } from './TrustBadge';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-site-footer" className="bg-[#18191B] text-[#ECE7DF] border-t border-[#292B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2C2E32]">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-2xl tracking-tight text-[#FAF8F5] block">
                {SITE_CONFIG.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B5ABA1] block mt-1">
                Atelier d’encadrement sur mesure
              </span>
            </div>
            <p className="text-sm text-[#B8B4AE] leading-relaxed max-w-sm">
              {SITE_CONFIG.about}
            </p>
            <div className="pt-2">
              <TrustBadge dark />
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-[#A89F93] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleNav('home')}
                  className="text-[#D3CFC9] hover:text-[#FAF8F5] transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => handleNav('about')}
                  className="text-[#D3CFC9] hover:text-[#FAF8F5] transition-colors"
                >
                  L’Atelier
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => handleNav('services')}
                  className="text-[#D3CFC9] hover:text-[#FAF8F5] transition-colors"
                >
                  Prestations
                </button>
              </li>
              <li>
                <button
                  id="footer-link-gallery"
                  onClick={() => handleNav('gallery')}
                  className="text-[#D3CFC9] hover:text-[#FAF8F5] transition-colors"
                >
                  Galerie & Inspirations
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  onClick={() => handleNav('faq')}
                  className="text-[#D3CFC9] hover:text-[#FAF8F5] transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleNav('contact')}
                  className="text-[#D3CFC9] hover:text-[#FAF8F5] transition-colors"
                >
                  Contact & Accès
                </button>
              </li>
            </ul>
          </div>

          {/* Framing Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-[#A89F93] uppercase">
              Encadrement
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.services.map((svc) => (
                <li key={svc.id}>
                  <button
                    id={`footer-svc-${svc.id}`}
                    onClick={() => handleNav('services')}
                    className="text-[#D3CFC9] hover:text-[#FAF8F5] transition-colors text-left flex items-center justify-between group w-full"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#7F7B74] group-hover:text-[#ECE7DF] transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Workshop Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-[#A89F93] uppercase">
              Atelier de Bordeaux
            </h4>
            <div className="space-y-3 text-sm text-[#C9C4BD]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8B48D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FAF8F5]">{SITE_CONFIG.address.street}</p>
                  <p>{SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#D8B48D] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={SITE_CONFIG.phoneTel}
                  className="font-medium text-[#FAF8F5] hover:text-[#D8B48D] transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-contact-cta"
                onClick={() => handleNav('contact')}
                className="inline-flex items-center justify-center w-full py-2 px-3 text-xs uppercase tracking-wider font-semibold border border-[#3E4247] rounded-sm text-[#FAF8F5] hover:bg-[#25282B] transition-colors"
              >
                Échanger sur votre pièce
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A857D]">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Tous droits réservés. Atelier d’encadrement à Bordeaux.
          </p>
          <p className="text-center sm:text-right">
            Artisanat d’art · Tableaux · Photographies · Œuvres d’art · Pièces décoratives
          </p>
        </div>
      </div>
    </footer>
  );
};
