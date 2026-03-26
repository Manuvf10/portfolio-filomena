import type { Locale } from './config';

type ServiceCopy = { title: string; description: string };
type ProjectCopy = { title: string; description: string; categoryLabel: string };

type Dictionary = {
  languageLabel: string;
  common: {
    requestQuote: string;
    exploreWork: string;
    contactEmail: string;
  };
  metadata: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    projects: { title: string; description: string };
    club: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: Record<'home' | 'services' | 'projects' | 'club' | 'contact', string>;
  home: {
    heroKicker: string;
    heroTitle: string;
    heroSubtitle: string;
    servicesTitle: string;
    projectsTitle: string;
  };
  club: {
    intro: string;
    body: string;
    aboutTitle: string;
    aboutBodyA: string;
    aboutBodyB: string;
    bullets: string[];
  };
  services: {
    intro: string;
    list: Record<string, ServiceCopy>;
  };
  projects: {
    intro: string;
    categories: Record<string, string>;
    list: Record<string, ProjectCopy>;
  };
  contact: {
    intro: string;
    form: {
      name: string;
      email: string;
      company: string;
      service: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      loading: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
    social: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    languageLabel: 'Idioma',
    common: {
      requestQuote: 'Hablemos',
      exploreWork: 'Ver trabajos',
      contactEmail: 'Escríbenos'
    },
    metadata: {
      home: { title: 'Filomena Club — Dirección creativa editorial', description: 'Dirección creativa, branding y contenido visual para marcas con criterio.' },
      services: { title: 'Servicios — Filomena Club', description: 'Servicios creativos claros, modulares y orientados a resultado.' },
      projects: { title: 'Trabajos — Filomena Club', description: 'Selección de proyectos con foco visual editorial.' },
      club: { title: 'Nuestro Club — Filomena Club', description: 'Quiénes somos y cómo colaboramos desde Filomena Club.' },
      contact: { title: 'Contacto — Filomena Club', description: 'Cuéntanos tu proyecto y te respondemos con una propuesta clara.' }
    },
    nav: { home: 'Inicio', services: 'Servicios', projects: 'Trabajos', club: 'Nuestro Club', contact: 'Contacto' },
    home: {
      heroKicker: 'Filomena Club',
      heroTitle: 'Dirección visual para marcas con ambición estética.',
      heroSubtitle: 'Un estudio creativo editorial. Menos ruido, más criterio.',
      servicesTitle: 'Servicios',
      projectsTitle: 'Trabajos seleccionados'
    },
    club: {
      intro: 'Filomena Club es un estudio creativo colaborativo.',
      body: 'Diseñamos identidades, contenido y sistemas visuales con precisión editorial.',
      aboutTitle: 'Sobre Filomena Club',
      aboutBodyA: 'Trabajamos con marcas de moda, belleza y lifestyle que necesitan claridad visual y consistencia.',
      aboutBodyB: 'Nuestro proceso une estrategia, dirección de arte y ejecución para construir una presencia sólida.',
      bullets: ['Dirección creativa cercana.', 'Procesos claros y ágiles.', 'Estética premium con foco comercial.']
    },
    services: {
      intro: 'Servicios conectados para construir una marca coherente.',
      list: {
        'photo-retouching': { title: 'Retoque', description: 'Piel, color y luz para campañas y e-commerce.' },
        'content-creation': { title: 'Contenido', description: 'Concepto y producción de piezas para digital.' },
        'video-editing': { title: 'Vídeo', description: 'Edición breve y elegante para marca.' },
        'creative-direction': { title: 'Dirección creativa', description: 'Criterio visual y supervisión estética.' },
        'graphic-design': { title: 'Diseño gráfico', description: 'Piezas editoriales y de comunicación.' },
        'web-design': { title: 'Diseño web', description: 'Interfaces limpias y funcionales.' },
        'social-media-design': { title: 'Social media', description: 'Sistema visual adaptable para redes.' },
        branding: { title: 'Branding', description: 'Estrategia e identidad visual con carácter.' }
      }
    },
    projects: {
      intro: 'Una galería curada de branding, contenido y diseño.',
      categories: {
        branding: 'Branding',
        content: 'Contenido',
        web: 'Web',
        direction: 'Dirección creativa',
        social: 'Social media',
        retouching: 'Retoque'
      },
      list: {
        'atelier-norte': { title: 'Atelier Norte', description: 'Sistema visual para firma emergente.', categoryLabel: 'Branding' },
        'lumen-beauty': { title: 'Lumen Beauty', description: 'Contenido de lanzamiento digital.', categoryLabel: 'Contenido' },
        'casa-viva': { title: 'Casa Viva', description: 'Rediseño web de enfoque editorial.', categoryLabel: 'Web' },
        'origen-studio': { title: 'Origen Studio', description: 'Campaña de narrativa minimal.', categoryLabel: 'Dirección creativa' },
        'salvia-lab': { title: 'Salvia Lab', description: 'Sistema visual para redes.', categoryLabel: 'Social media' },
        'noir-tailor': { title: 'Noir Tailor', description: 'Retoque premium para lookbook.', categoryLabel: 'Retoque' }
      }
    },
    contact: {
      intro: 'Comparte alcance, tiempos y objetivos. Respuesta en 48 horas laborables.',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Marca',
        service: 'Servicio',
        message: 'Proyecto',
        submit: 'Enviar',
        success: 'Gracias. Te responderemos pronto.',
        error: 'No se pudo enviar. Inténtalo de nuevo.',
        loading: 'Enviando…'
      }
    },
    footer: {
      tagline: 'Filomena Club — dirección creativa editorial.',
      rights: 'Todos los derechos reservados.',
      social: 'Redes'
    }
  },
  en: {
    languageLabel: 'Language',
    common: {
      requestQuote: 'Let’s talk',
      exploreWork: 'View work',
      contactEmail: 'Email us'
    },
    metadata: {
      home: { title: 'Filomena Club — Editorial creative direction', description: 'Creative direction, branding and visual content for brands with intent.' },
      services: { title: 'Services — Filomena Club', description: 'Clear and modular creative services focused on results.' },
      projects: { title: 'Projects — Filomena Club', description: 'A curated visual selection with editorial sensibility.' },
      club: { title: 'Our Club — Filomena Club', description: 'Who we are and how we collaborate at Filomena Club.' },
      contact: { title: 'Contact — Filomena Club', description: 'Share your brief and we will reply with a clear next step.' }
    },
    nav: { home: 'Home', services: 'Services', projects: 'Projects', club: 'Our Club', contact: 'Contact' },
    home: {
      heroKicker: 'Filomena Club',
      heroTitle: 'Visual direction for brands with aesthetic ambition.',
      heroSubtitle: 'An editorial creative studio. Less noise, more intention.',
      servicesTitle: 'Services',
      projectsTitle: 'Selected work'
    },
    club: {
      intro: 'Filomena Club is a collaborative creative studio.',
      body: 'We shape identities, content and visual systems with editorial precision.',
      aboutTitle: 'About Filomena Club',
      aboutBodyA: 'We partner with fashion, beauty and lifestyle brands seeking visual clarity and consistency.',
      aboutBodyB: 'Our process combines strategy, art direction and execution to build a strong presence.',
      bullets: ['Close creative direction.', 'Clear and agile workflows.', 'Premium aesthetics with commercial focus.']
    },
    services: {
      intro: 'Connected services to build a coherent brand system.',
      list: {
        'photo-retouching': { title: 'Retouching', description: 'Skin, color and light for campaigns and e-commerce.' },
        'content-creation': { title: 'Content', description: 'Concept and production for digital assets.' },
        'video-editing': { title: 'Video', description: 'Short-form edits with elegant rhythm.' },
        'creative-direction': { title: 'Creative direction', description: 'Visual criteria and art supervision.' },
        'graphic-design': { title: 'Graphic design', description: 'Editorial and communication pieces.' },
        'web-design': { title: 'Web design', description: 'Clean interfaces with strong structure.' },
        'social-media-design': { title: 'Social media', description: 'Adaptable visual systems for channels.' },
        branding: { title: 'Branding', description: 'Strategy and visual identity with character.' }
      }
    },
    projects: {
      intro: 'A curated gallery across branding, content and design.',
      categories: {
        branding: 'Branding',
        content: 'Content',
        web: 'Web',
        direction: 'Creative direction',
        social: 'Social media',
        retouching: 'Retouching'
      },
      list: {
        'atelier-norte': { title: 'Atelier Norte', description: 'Visual system for an emerging label.', categoryLabel: 'Branding' },
        'lumen-beauty': { title: 'Lumen Beauty', description: 'Digital launch content.', categoryLabel: 'Content' },
        'casa-viva': { title: 'Casa Viva', description: 'Editorial-led web redesign.', categoryLabel: 'Web' },
        'origen-studio': { title: 'Origen Studio', description: 'Minimal narrative campaign.', categoryLabel: 'Creative direction' },
        'salvia-lab': { title: 'Salvia Lab', description: 'Social visual system.', categoryLabel: 'Social media' },
        'noir-tailor': { title: 'Noir Tailor', description: 'Premium lookbook retouching.', categoryLabel: 'Retouching' }
      }
    },
    contact: {
      intro: 'Share scope, timeline and goals. We reply within 48 business hours.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Brand',
        service: 'Service',
        message: 'Project',
        submit: 'Send',
        success: 'Thanks. We will reply soon.',
        error: 'Could not send the form. Please try again.',
        loading: 'Sending…'
      }
    },
    footer: {
      tagline: 'Filomena Club — editorial creative direction.',
      rights: 'All rights reserved.',
      social: 'Social'
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
