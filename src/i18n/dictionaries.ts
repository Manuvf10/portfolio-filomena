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
  nav: Record<'services' | 'projects' | 'club', string>;
  home: {
    description: string;
    naming: string;
    mediaAlt: string;
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
    contactTitle: string;
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
      home: {
        title: 'Filomena Club Creativo — Home',
        description: 'Agencia creativa especializada en soluciones 360° en diseño y creación de contenido.'
      },
      services: { title: 'Qué hacemos — Filomena Club Creativo', description: 'Servicios creativos conectados para marcas y proyectos.' },
      projects: { title: 'Proyectos — Filomena Club Creativo', description: 'Selección de proyectos con foco visual editorial.' },
      club: { title: 'Club Filomena — Filomena Club Creativo', description: 'Introducción, enfoque del club y contacto en una misma página.' },
      contact: { title: 'Contacto — Filomena Club Creativo', description: 'Filomena Club Creativo.' }
    },
    nav: { services: 'Qué hacemos', projects: 'Proyectos', club: 'Club Filomena' },
    home: {
      description:
        'Agencia creativa especializada en ofrecer soluciones 360° en diseño y creación de contenido. Acompañamos a marcas y proyectos en todo el proceso, desde la conceptualización hasta la ejecución, combinando estrategia, creatividad y técnica para construir identidades sólidas y experiencias visuales que conectan.',
      naming: 'Filomena Club Creativo',
      mediaAlt: 'Composición visual principal de Filomena Club Creativo.',
      servicesTitle: 'Qué hacemos',
      projectsTitle: 'Proyectos'
    },
    club: {
      intro: 'Club Filomena reúne la parte institucional y de contacto en un solo espacio.',
      body: 'Trabajamos junto a marcas y proyectos desde la conceptualización hasta la ejecución, combinando estrategia, creatividad y técnica.',
      aboutTitle: 'Quiénes somos',
      aboutBodyA: 'Somos una agencia creativa con enfoque editorial y ejecución integral.',
      aboutBodyB: 'Nuestro club prioriza procesos claros, criterio visual y relaciones de trabajo cercanas.',
      bullets: ['Estrategia y dirección creativa.', 'Diseño y contenido en formato 360°.', 'Acompañamiento continuo del proyecto.'],
      contactTitle: 'Contacto'
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
        'origen-studio': { title: 'Origen', description: 'Campaña de narrativa minimal.', categoryLabel: 'Dirección creativa' },
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
      tagline: 'Filomena Club Creativo — agencia creativa 360°.',
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
      home: {
        title: 'Filomena Club Creativo — Home',
        description: 'Creative agency specialized in 360° design and content creation solutions.'
      },
      services: { title: 'What we do — Filomena Club Creativo', description: 'Connected creative services for brands and projects.' },
      projects: { title: 'Projects — Filomena Club Creativo', description: 'A curated visual selection with editorial sensibility.' },
      club: { title: 'Club Filomena — Filomena Club Creativo', description: 'Introduction, club approach, and contact in one page.' },
      contact: { title: 'Contact — Filomena Club Creativo', description: 'Filomena Club Creativo.' }
    },
    nav: { services: 'What we do', projects: 'Projects', club: 'Club Filomena' },
    home: {
      description:
        'Creative agency specialized in offering 360° solutions in design and content creation. We support brands and projects through the entire process, from concept to execution, combining strategy, creativity, and technique to build strong identities and visual experiences that connect.',
      naming: 'Filomena Club Creativo',
      mediaAlt: 'Main visual composition by Filomena Club Creativo.',
      servicesTitle: 'What we do',
      projectsTitle: 'Projects'
    },
    club: {
      intro: 'Club Filomena brings institutional content and contact into one clear page.',
      body: 'We partner with brands and projects from concept to execution, combining strategy, creativity, and technical craft.',
      aboutTitle: 'Who we are',
      aboutBodyA: 'We are a creative agency with editorial sensibility and end-to-end execution.',
      aboutBodyB: 'Our club values clear processes, visual criteria, and close collaboration.',
      bullets: ['Strategy and creative direction.', '360° design and content.', 'Continuous project support.'],
      contactTitle: 'Contact'
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
        'origen-studio': { title: 'Origen', description: 'Minimal narrative campaign.', categoryLabel: 'Creative direction' },
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
      tagline: 'Filomena Club Creativo — 360° creative agency.',
      rights: 'All rights reserved.',
      social: 'Social'
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
