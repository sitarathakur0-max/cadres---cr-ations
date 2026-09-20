import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Compass } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { ContactForm } from '../components/ContactForm';
import { BordeauxMap } from '../components/BordeauxMap';
import { TrustBadge } from '../components/TrustBadge';

export const ContactPage: React.FC = () => {
  return (
    <div id="contact-page-container" className="space-y-16 sm:space-y-24 pb-16 pt-6">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#846853] uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact & Visite de l’Atelier</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141517] leading-tight font-normal">
            Parlons de votre projet d’encadrement à Bordeaux.
          </h1>

          <p className="text-base sm:text-lg text-[#555961] font-light leading-relaxed">
            Pour un conseil personnalisé, une étude sur mesure ou pour apporter votre œuvre, vous pouvez nous joindre par téléphone ou nous faire part de votre demande via le formulaire.
          </p>

          <div className="pt-1">
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 2. Contact Grid: Left Form / Right Coordinates & Direct Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Coordinates & Direct Advice Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Atelier Identity Card */}
            <div className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#DDD6CC] rounded-xs space-y-6 shadow-2xs">
              <div className="border-b border-[#E8E2D8] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#846853] font-semibold block">
                  Coordonnées officielles
                </span>
                <h2 className="font-serif text-2xl text-[#1E2022] mt-1">
                  {SITE_CONFIG.name}
                </h2>
                <p className="text-xs text-[#6B7078] mt-0.5">
                  {SITE_CONFIG.category}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-sm text-[#3E4147]">
                <div className="w-8 h-8 rounded-full bg-[#EDE6DC] flex items-center justify-center text-[#846853] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#636871]">
                    Adresse de l’atelier
                  </p>
                  <p className="font-medium text-[#1E2022] mt-0.5">
                    {SITE_CONFIG.address.street}
                  </p>
                  <p className="text-[#595E67]">
                    {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 text-sm text-[#3E4147]">
                <div className="w-8 h-8 rounded-full bg-[#EDE6DC] flex items-center justify-center text-[#846853] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#636871]">
                    Téléphone direct
                  </p>
                  <a
                    id="contact-page-phone-link"
                    href={SITE_CONFIG.phoneTel}
                    className="font-serif text-xl text-[#1E2022] hover:text-[#846853] transition-colors block mt-0.5 font-medium"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-xs text-[#70757E] mt-0.5">
                    Appel direct pour tout renseignement ou prise de contact.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Advice Note */}
            <div className="p-6 bg-[#F3EFE9] border border-[#DDD5C9] rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#846853] uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Venir avec votre œuvre</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4F535B] leading-relaxed">
                Le choix d’un encadrement prend tout son sens lorsque l’œuvre est posée devant vous à côté des différents profils d’encadrement. N’hésitez pas à apporter votre pièce à l’atelier pour un échange sur mesure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Authentic Interactive Map of Bordeaux */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-widest text-[#846853] uppercase block">
            Localisation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#141517]">
            Plan d’accès à l’atelier au 31 Rue des Arts à Bordeaux
          </h2>
        </div>

        <BordeauxMap />
      </section>
    </div>
  );
};
