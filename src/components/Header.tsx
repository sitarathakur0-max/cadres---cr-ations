import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PageView } from '../types';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: "L'Atelier" },
    { id: 'services', label: 'Prestations' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE4DC] shadow-xs py-3'
          : 'bg-[#FAF8F5] border-b border-[#EAE4DC]/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Wordmark Branding */}
          <button
            id="brand-wordmark-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-hidden focus:ring-2 focus:ring-[#846853] rounded-xs"
            aria-label="Cadres & Créations - Retour à l'accueil"
          >
            <span className="block font-serif text-xl sm:text-2xl lg:text-[26px] tracking-tight text-[#141517] leading-none group-hover:text-[#846853] transition-colors">
              Cadres & Créations
            </span>
            <span className="block text-[11px] tracking-widest uppercase text-[#736B63] mt-1 font-medium">
              Atelier d’encadrement · Bordeaux
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#141517] bg-[#EFE9DF]'
                      : 'text-[#4A4D52] hover:text-[#141517] hover:bg-[#F3EFEA]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Header Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Phone link */}
            <a
              id="header-phone-cta"
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs lg:text-sm font-medium text-[#2E3033] hover:text-[#846853] transition-colors"
              title={`Appeler le ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#846853]" />
              <span className="tracking-tight">{SITE_CONFIG.phone}</span>
            </a>

            {/* Primary CTA */}
            <button
              id="header-project-cta"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1E2022] hover:bg-[#2F3236] text-[#FAF8F5] text-xs lg:text-sm font-medium rounded-sm transition-all shadow-xs hover:shadow-sm"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              id="mobile-header-call-btn"
              href={SITE_CONFIG.phoneTel}
              className="p-2 text-[#1E2022] border border-[#E2DDD5] rounded-md hover:bg-[#F3EFEA]"
              aria-label="Appeler l'atelier"
            >
              <Phone className="w-4 h-4 text-[#846853]" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#1E2022] hover:bg-[#F3EFEA] focus:outline-hidden focus:ring-2 focus:ring-[#846853]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#FAF8F5] border-b border-[#E5DFD7] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EDE6DC] text-[#141517] font-semibold'
                      : 'text-[#4A4D52] hover:bg-[#F3EFEA] hover:text-[#141517]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#846853]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E8E2D9] space-y-2.5">
            <a
              id="mobile-drawer-phone"
              href={SITE_CONFIG.phoneTel}
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 border border-[#DCD5CB] rounded-sm text-sm font-medium text-[#1E2022] hover:bg-[#F3EFEA]"
            >
              <Phone className="w-4 h-4 text-[#846853]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <button
              id="mobile-drawer-cta"
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#1E2022] text-[#FAF8F5] rounded-sm text-sm font-medium hover:bg-[#2F3236]"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
