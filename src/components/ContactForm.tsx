import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { PieceType, ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    pieceType: 'Tableau',
    dimensions: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pieceTypes: PieceType[] = [
    'Tableau',
    'Photographie',
    "Œuvre d'art",
    'Pièce décorative',
    'Autre projet',
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Veuillez renseigner votre nom et prénom.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Veuillez renseigner votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Veuillez saisir une adresse email valide.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Veuillez renseigner votre numéro de téléphone.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Veuillez saisir un numéro de téléphone valide.';
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Merci de décrire votre projet en quelques mots (au moins 10 caractères).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Client-side structured simulation with realistic state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      pieceType: 'Tableau',
      dimensions: '',
      description: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div
        id="contact-form-success"
        className="p-8 sm:p-10 bg-[#FAF8F5] border border-[#E3DDD4] rounded-sm text-center space-y-5 animate-in fade-in"
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-[#EAE2D7] flex items-center justify-center text-[#7F634E]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-[#1E2022]">
            Votre projet a bien été préparé
          </h3>
          <p className="text-sm text-[#5C6067] max-w-md mx-auto leading-relaxed">
            Merci <strong>{formData.fullName}</strong>. Votre demande concernant votre pièce ({formData.pieceType}) est prête pour examen.
          </p>
        </div>

        <div className="p-4 bg-[#F2EDE5] border border-[#DDD6CB] rounded-sm text-sm text-[#3E4044] space-y-2 max-w-md mx-auto text-left">
          <p className="font-medium text-[#1E2022] flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#846853]" />
            Pour un conseil direct à l’atelier :
          </p>
          <p className="text-xs text-[#5C6067] leading-relaxed">
            Vous pouvez également joindre l’atelier directement par téléphone au{' '}
            <a href={SITE_CONFIG.phoneTel} className="font-semibold text-[#1E2022] underline underline-offset-2">
              {SITE_CONFIG.phone}
            </a>{' '}
            ou apporter votre pièce au <strong>{SITE_CONFIG.address.street}</strong> à Bordeaux.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#1E2022] border border-[#C9C2B7] rounded-sm hover:bg-[#F2ECE3] transition-colors"
        >
          Préparer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      id="framing-enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#E4DED5] rounded-sm shadow-xs space-y-6"
    >
      <div className="border-b border-[#ECE7DF] pb-4">
        <h3 className="font-serif text-xl sm:text-2xl text-[#1E2022]">
          Formulaire de projet d’encadrement
        </h3>
        <p className="text-xs sm:text-sm text-[#6C7077] mt-1">
          Renseignez les éléments de votre pièce pour échanger avec l’atelier.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="form-fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#474B52]">
            Nom & Prénom <span className="text-[#A45D43]">*</span>
          </label>
          <input
            id="form-fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Ex : Claire Delaunay"
            className={`w-full px-3.5 py-2.5 bg-white border text-sm rounded-xs text-[#1E2022] focus:outline-hidden focus:ring-1 focus:ring-[#846853] ${
              errors.fullName ? 'border-[#C94A4A]' : 'border-[#D9D3C9]'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-[#C94A4A] flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Piece Type */}
        <div className="space-y-1.5">
          <label htmlFor="form-pieceType" className="block text-xs font-semibold uppercase tracking-wider text-[#474B52]">
            Type de pièce <span className="text-[#A45D43]">*</span>
          </label>
          <select
            id="form-pieceType"
            value={formData.pieceType}
            onChange={(e) => setFormData({ ...formData, pieceType: e.target.value as PieceType })}
            className="w-full px-3.5 py-2.5 bg-white border border-[#D9D3C9] text-sm rounded-xs text-[#1E2022] focus:outline-hidden focus:ring-1 focus:ring-[#846853]"
          >
            {pieceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="form-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#474B52]">
            Téléphone <span className="text-[#A45D43]">*</span>
          </label>
          <input
            id="form-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Ex : 06 12 34 56 78"
            className={`w-full px-3.5 py-2.5 bg-white border text-sm rounded-xs text-[#1E2022] focus:outline-hidden focus:ring-1 focus:ring-[#846853] ${
              errors.phone ? 'border-[#C94A4A]' : 'border-[#D9D3C9]'
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-[#C94A4A] flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-[#474B52]">
            Adresse email <span className="text-[#A45D43]">*</span>
          </label>
          <input
            id="form-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="votre.email@domaine.fr"
            className={`w-full px-3.5 py-2.5 bg-white border text-sm rounded-xs text-[#1E2022] focus:outline-hidden focus:ring-1 focus:ring-[#846853] ${
              errors.email ? 'border-[#C94A4A]' : 'border-[#D9D3C9]'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-[#C94A4A] flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Dimensions (Optional) */}
      <div className="space-y-1.5">
        <label htmlFor="form-dimensions" className="block text-xs font-semibold uppercase tracking-wider text-[#474B52]">
          Dimensions approximatives (optionnel)
        </label>
        <input
          id="form-dimensions"
          type="text"
          value={formData.dimensions}
          onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
          placeholder="Ex : 40 x 60 cm, toile tendue 8F, etc."
          className="w-full px-3.5 py-2.5 bg-white border border-[#D9D3C9] text-sm rounded-xs text-[#1E2022] focus:outline-hidden focus:ring-1 focus:ring-[#846853]"
        />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="form-description" className="block text-xs font-semibold uppercase tracking-wider text-[#474B52]">
            Description de votre projet <span className="text-[#A45D43]">*</span>
          </label>
          <span className="text-[11px] text-[#8C9199]">
            {formData.description.length} caractères
          </span>
        </div>
        <textarea
          id="form-description"
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Décrivez votre œuvre (support, style, pièce de destination, souhaits particuliers d'encadrement)..."
          className={`w-full px-3.5 py-2.5 bg-white border text-sm rounded-xs text-[#1E2022] focus:outline-hidden focus:ring-1 focus:ring-[#846853] ${
            errors.description ? 'border-[#C94A4A]' : 'border-[#D9D3C9]'
          }`}
        />
        {errors.description && (
          <p className="text-xs text-[#C94A4A] flex items-center gap-1 mt-1">
            <AlertCircle className="w-3 h-3" /> {errors.description}
          </p>
        )}
      </div>

      {/* Submit button */}
      <div className="pt-2">
        <button
          id="submit-enquiry-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-[#1E2022] hover:bg-[#2E3136] text-[#FAF8F5] text-sm font-medium rounded-xs transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Transmission en cours...</span>
          ) : (
            <>
              <span>Transmettre votre projet</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
