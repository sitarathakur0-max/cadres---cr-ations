import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';

export const BordeauxMap: React.FC = () => {
  // OpenStreetMap embed coordinates for 31 Rue des Arts, 33000 Bordeaux
  // Bounding box around Bordeaux center (Rue des Arts is between Gambetta and Grand Théâtre / Mériadeck area)
  const mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=-0.5880%2C44.8320%2C-0.5700%2C44.8430&amp;layer=mapnik&amp;marker=44.8375%2C-0.5790";

  return (
    <div id="bordeaux-location-wrapper" className="space-y-4">
      {/* Map Container */}
      <div className="relative w-full h-[360px] sm:h-[420px] rounded-xs overflow-hidden border border-[#DDD6CC] bg-[#ECE6DD] shadow-xs">
        <iframe
          id="openstreetmap-bordeaux-frame"
          title={`Plan de localisation Cadres & Créations, ${SITE_CONFIG.address.full}`}
          src={mapSrc}
          className="w-full h-full border-0 filter grayscale-[25%] contrast-[105%]"
          loading="lazy"
        />

        {/* Floating Atelier Pin Badge */}
        <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#FAF8F5]/95 backdrop-blur-md p-3.5 border border-[#D9D1C5] rounded-xs shadow-md">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-[#846853] shrink-0 mt-0.5" />
            <div>
              <p className="font-serif font-medium text-[#1E2022] text-sm">
                Cadres & Créations
              </p>
              <p className="text-xs text-[#52565D] mt-0.5">
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
              </p>
              <p className="text-[11px] text-[#846853] font-medium mt-1">
                Atelier d’encadrement au cœur de Bordeaux
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Access information */}
      <div className="p-4 bg-[#FAF8F5] border border-[#E3DDD3] rounded-xs text-xs sm:text-sm text-[#4A4D53] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-[#846853] shrink-0" />
          <span>
            <strong>Accès atelier :</strong> Situé au 31 Rue des Arts, accessible facilement depuis le centre de Bordeaux.
          </span>
        </div>
        <a
          id="open-external-maps-btn"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.address.full)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#1E2022] hover:text-[#846853] underline underline-offset-4 whitespace-nowrap"
        >
          Ouvrir dans Google Maps →
        </a>
      </div>
    </div>
  );
};
