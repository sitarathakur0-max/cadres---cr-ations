import heroStudioImg from './assets/images/hero_framing_studio_1789824654996.jpg';
import craftHandsImg from './assets/images/framing_craft_hands_1789824672167.jpg';
import paintingFrameImg from './assets/images/painting_frame_gallery_1789824690860.jpg';
import { ServiceCategory, FramingProcessStep, GalleryItem, FAQItem } from './types';

export const SITE_CONFIG = {
  // Strict business facts provided
  name: 'Cadres & Créations',
  category: 'Encadrement sur mesure',
  address: {
    street: '31 Rue des Arts',
    postalCode: '33000',
    city: 'Bordeaux',
    country: 'France',
    full: '31 Rue des Arts, 33000 Bordeaux, France',
    district: 'Centre historique de Bordeaux',
  },
  phone: '+33 5 56 28 47 31',
  phoneTel: 'tel:+33556284731',
  googleRating: {
    score: '4,8',
    scoreNumber: 4.8,
    reviewsCount: 16,
    label: '4,8/5 sur Google · 16 avis',
  },
  about: 'Atelier local d’encadrement sur mesure à Bordeaux dédié à la mise en valeur soignée de tableaux, photographies, œuvres d’art et pièces décoratives.',

  // Hero content
  hero: {
    badge: 'Atelier d’encadrement à Bordeaux',
    headline: 'Encadrez vos œuvres avec justesse et sensibilité.',
    subhead: 'Encadrement sur mesure pour tableaux, photographies, œuvres d’art et pièces décoratives. Un regard d’artisan et une écoute attentive au 31 Rue des Arts à Bordeaux.',
    ctaPrimary: 'Parler de votre projet',
    ctaSecondary: 'Découvrir nos prestations',
    image: heroStudioImg,
    imageAlt: 'Atelier d’encadrement Cadres et Créations à Bordeaux avec moulures, cadres et outils d’artisanat',
  },

  images: {
    hero: heroStudioImg,
    craftHands: craftHandsImg,
    paintingFrame: paintingFrameImg,
  },

  // 4 Core Framing Services (strictly derived from user prompt)
  services: [
    {
      id: 'tableaux',
      title: 'Tableaux',
      subtitle: 'Toiles, huiles, acryliques et panneaux',
      shortDesc: 'Encadrement sur mesure pensé pour révéler la matière picturale, la profondeur des couleurs et la structure de vos toiles.',
      fullDesc: 'Chaque tableau possède une présence et des contraintes physiques propres. Nous étudions l’équilibre entre l’œuvre et son environnement pour vous proposer un profil d’encadrement adapté, respectant la tension de la toile et sublimant sa composition.',
      keyPoints: [
        'Étude personnalisée de l’épaisseur et de la tension de la toile',
        'Choix harmonieux des profils pour valoriser l’œuvre sans la saturer',
        'Finitions soignées adaptées aux peintures classiques comme contemporaines',
      ],
      imageSrc: paintingFrameImg,
      imageAlt: 'Tableau de peinture présenté dans un cadre d’art sur mesure à l’atelier de Bordeaux',
    },
    {
      id: 'photographies',
      title: 'Photographies',
      subtitle: 'Tirages d’art, argentiques et contemporains',
      shortDesc: 'Encadrement professionnel valorisant la lumière, le contraste et la finesse de vos tirages photographiques.',
      fullDesc: 'La photographie exige une neutralité visuelle et une rigueur géométrique absolue. Nous vous conseillons sur la mise en page, l’ouverture des marges et l’équilibre des bordures pour magnifier le regard du photographe.',
      keyPoints: [
        'Mise en valeur par passe-partout aux proportions équilibrées',
        'Harmonie des nuances de baguettes avec le noir et blanc ou la couleur',
        'Soin minutieux apporté à la planéité et au montage du tirage',
      ],
      imageSrc: heroStudioImg,
      imageAlt: 'Présentation d’une photographie avec passe-partout et cadre soigné',
    },
    {
      id: 'oeuvres-art',
      title: 'Œuvres d’art',
      subtitle: 'Dessins, aquarelles, gravures et estampes',
      shortDesc: 'Présentation sur mesure attentive à la délicatesse des supports papier, des marges et de la lumière.',
      fullDesc: 'Les œuvres graphiques sur papier demandent une écoute particulière. Nous concevons un encadrement qui respecte les textures délicates, les gaufrages et les subtilités du trait, tout en créant une belle respiration visuelle.',
      keyPoints: [
        'Respect visuel des bords frangés, marges d’artistes et papiers de création',
        'Création d’un espace de respiration autour du dessin ou de la gravure',
        'Conseil esthétique personnalisé pour chaque technique graphique',
      ],
      imageSrc: craftHandsImg,
      imageAlt: 'Travail minutieux d’encadrement sur mesure pour une œuvre graphique sur papier',
    },
    {
      id: 'pieces-decoratives',
      title: 'Pièces décoratives',
      subtitle: 'Objets en volume, textiles et créations singulières',
      shortDesc: 'Solutions d’encadrement sur mesure adaptées aux pièces tridimensionnelles, souvenirs et créations originales.',
      fullDesc: 'Parce qu’une pièce décorative ou un objet précieux ne s’encadre pas comme une feuille plane, nous concevons des cadres adaptés aux épaisseurs et reliefs singuliers. Votre pièce trouve ainsi un écrin sur mesure qui la protège et l’élève.',
      keyPoints: [
        'Conception de cadres profonds et boîtes de présentation',
        'Maintien discret et respectueux des volumes et textiles',
        'Mise en scène harmonieuse pour intégration élégante dans votre intérieur',
      ],
      imageSrc: paintingFrameImg,
      imageAlt: 'Mise en valeur d’une pièce décorative en volume dans un cadre sur mesure',
    },
  ] as ServiceCategory[],

  // 5 Process Steps (strictly general conceptual framing flow)
  processSteps: [
    {
      step: '01',
      title: 'Présentation de votre œuvre',
      description: 'Vous apportez votre tableau, photographie, dessin ou objet à l’atelier au 31 Rue des Arts à Bordeaux.',
      detail: 'Une prise de contact préalable permet d’échanger sur vos souhaits et de préparer votre venue dans les meilleures conditions.',
    },
    {
      step: '02',
      title: 'Échange sur la mise en scène',
      description: 'Nous discutons de l’ambiance de votre pièce, du style souhaité et de la façon dont l’œuvre prendra place dans votre espace.',
      detail: 'Chaque regard compte : nous prenons le temps d’apprécier les couleurs, les matières et l’émotion que vous souhaitez transmettre.',
    },
    {
      step: '03',
      title: 'Choix de la direction d’encadrement',
      description: 'Ensemble, nous testons différentes baguettes, proportions de marges ou profondeurs pour trouver l’accord parfait.',
      detail: 'La justesse visuelle naît de la comparaison directe entre l’œuvre et les différents profils d’encadrement.',
    },
    {
      step: '04',
      title: 'Préparation du cadre sur mesure',
      description: 'L’encadrement est réalisé avec précision à l’atelier selon les dimensions et les finitions définies.',
      detail: 'Assemblage des angles, ajustement des profils et montage soigné de l’ensemble pour un résultat durable.',
    },
    {
      step: '05',
      title: 'Présentation finale et remise',
      description: 'Votre œuvre encadrée vous est présentée à l’atelier, prête à être installée chez vous.',
      detail: 'Nous vérifions ensemble le rendu final et vous conseillons sur la pose et l’emplacement de votre pièce.',
    },
  ] as FramingProcessStep[],

  // Gallery Inspirations (strictly labelled as inspiration / representative categories, no fake clients/names)
  galleryItems: [
    {
      id: 'gal-1',
      title: 'Peinture sur toile & caisse sobre',
      category: 'tableaux',
      categoryLabel: 'Tableaux',
      frameDescription: 'Mise en valeur par un profil contemporain laissant respirer la texture de la toile.',
      imageSrc: paintingFrameImg,
      imageAlt: 'Tableau contemporain avec encadrement adapté à la peinture',
      tag: 'Peinture & Toile',
    },
    {
      id: 'gal-2',
      title: 'Précision de l’assemblage d’angle',
      category: 'artisanat',
      categoryLabel: 'Savoir-faire',
      frameDescription: 'Ajustement précis des onglets pour un angle net et une structure pérenne.',
      imageSrc: craftHandsImg,
      imageAlt: 'Mains d’artisan assemblant minutieusement un angle de cadre en bois',
      tag: 'Artisanat d’Atelier',
    },
    {
      id: 'gal-3',
      title: 'L’Atelier & sélection des profils',
      category: 'artisanat',
      categoryLabel: 'L’Atelier',
      frameDescription: 'Un espace dédié à la recherche des justes harmonies pour chaque support.',
      imageSrc: heroStudioImg,
      imageAlt: 'Vue de l’atelier d’encadrement Cadres et Créations à Bordeaux',
      tag: 'Atelier de Bordeaux',
    },
    {
      id: 'gal-4',
      title: 'Photographie d’art & passe-partout',
      category: 'photographies',
      categoryLabel: 'Photographies',
      frameDescription: 'Équilibre des marges pour canaliser le regard vers l’intensité de l’image.',
      imageSrc: heroStudioImg,
      imageAlt: 'Exemple d’encadrement photographique avec marges équilibrées',
      tag: 'Tirage Photographique',
    },
    {
      id: 'gal-5',
      title: 'Œuvre graphique & composition délicate',
      category: 'oeuvres-art',
      categoryLabel: 'Œuvres d’art',
      frameDescription: 'Cadre épuré mettant à l’honneur le grain du papier et le trait délicat.',
      imageSrc: paintingFrameImg,
      imageAlt: 'Exemple de cadre mettant en valeur une œuvre d’art sur papier',
      tag: 'Dessin & Gravure',
    },
    {
      id: 'gal-6',
      title: 'Objet & encadrement en profondeur',
      category: 'pieces-decoratives',
      categoryLabel: 'Pièces décoratives',
      frameDescription: 'Mise en volume préservant le relief et le caractère unique de la pièce.',
      imageSrc: craftHandsImg,
      imageAlt: 'Encadrement adapté à une pièce décorative en relief',
      tag: 'Volume & Décoration',
    },
  ] as GalleryItem[],

  // Frequently Asked Questions
  faqs: [
    {
      id: 'faq-1',
      question: 'Quels types d’œuvres ou d’objets pouvez-vous encadrer ?',
      answer: 'Cadres & Créations encadre les tableaux (toiles tendues, peintures sur bois ou carton), les tirages photographiques, les œuvres d’art graphiques (dessins, gravures, aquarelles, estampes) ainsi que des pièces décoratives singulières et objets en volume.',
    },
    {
      id: 'faq-2',
      question: 'Comment se déroule un projet d’encadrement sur mesure ?',
      answer: 'Le processus commence idéalement par une visite à l’atelier avec votre œuvre. Nous examinons la pièce ensemble, échangeons sur vos envies et essayons différents profils et montages pour déterminer la solution la plus harmonieuse.',
    },
    {
      id: 'faq-3',
      question: 'Faut-il apporter l’œuvre directement à l’atelier ?',
      answer: 'Oui, la présence de l’œuvre permet d’apprécier les teintes réelles, le grain et les reliefs. Vous pouvez nous contacter préalablement au +33 5 56 28 47 31 pour convenir du meilleur moment pour apporter votre pièce au 31 Rue des Arts.',
    },
    {
      id: 'faq-4',
      question: 'Peut-on encadrer des pièces aux dimensions atypiques ?',
      answer: 'Absolument. En tant qu’atelier d’encadrement sur mesure, chaque cadre est façonné aux dimensions exactes de votre pièce, qu’il s’agisse d’un petit format intime ou d’une grande composition.',
    },
    {
      id: 'faq-5',
      question: 'Comment obtenir un conseil ou une estimation pour mon projet ?',
      answer: 'Vous pouvez nous joindre par téléphone au +33 5 56 28 47 31 ou remplir le formulaire de contact sur ce site en précisant la nature de votre pièce. Nous serons ravis de vous renseigner et de vous guider.',
    },
  ] as FAQItem[],
};
