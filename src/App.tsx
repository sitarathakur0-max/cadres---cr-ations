import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PageView } from './types';
import { SITE_CONFIG } from './siteConfig';
import { Phone } from 'lucide-react';

const HASH_TO_PAGE: Record<string, PageView> = {
  '': 'home',
  '#accueil': 'home',
  '#atelier': 'about',
  '#prestations': 'services',
  '#galerie': 'gallery',
  '#faq': 'faq',
  '#contact': 'contact',
};

const PAGE_TO_HASH: Record<PageView, string> = {
  home: '#accueil',
  about: '#atelier',
  services: '#prestations',
  gallery: '#galerie',
  faq: '#faq',
  contact: '#contact',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Sync with initial URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (HASH_TO_PAGE[hash]) {
        setCurrentPage(HASH_TO_PAGE[hash]);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.location.hash = PAGE_TO_HASH[page];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E2022] font-sans selection:bg-[#2C2D30] selection:text-[#FAF8F5]">
      {/* Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 pt-20 sm:pt-24">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'faq' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Floating Call Action on Mobile */}
      <aside aria-label="Action rapide" className="sm:hidden fixed bottom-4 right-4 z-40">
        <a
          id="mobile-floating-phone-btn"
          href={SITE_CONFIG.phoneTel}
          className="flex items-center gap-2 px-4 py-3 bg-[#1E2022] text-[#FAF8F5] rounded-full shadow-lg border border-[#3C4047] text-xs font-semibold uppercase tracking-wider hover:bg-[#2F3238] transition-transform active:scale-95"
          aria-label={`Appeler l’atelier : ${SITE_CONFIG.phone}`}
        >
          <Phone className="w-4 h-4 text-[#D8B48D]" />
          <span>Appeler l’atelier</span>
        </a>
      </aside>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

