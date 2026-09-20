export type PageView = 'home' | 'about' | 'services' | 'gallery' | 'faq' | 'contact';

export type PieceType = 'Tableau' | 'Photographie' | "Œuvre d'art" | 'Pièce décorative' | 'Autre projet';

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  keyPoints: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface FramingProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'tableaux' | 'photographies' | 'oeuvres-art' | 'pieces-decoratives' | 'artisanat';
  categoryLabel: string;
  frameDescription: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  pieceType: PieceType;
  dimensions?: string;
  description: string;
}
