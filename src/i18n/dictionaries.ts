import type { Locale } from './config';

type ServiceCopy = { title: string; description: string };
type ProjectCopy = { title: string; description: string; categoryLabel: string };

type Dictionary = {
  languageLabel: string;
  common: {
    requestQuote: string;
    exploreWork: string;
    contactEmail: string;
    readMore: string;
  };
  metadata: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    services: { title: string; description: string };
    projects: { title: string; description: string };
    club: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: Record<'home' | 'about' | 'services' | 'projects' | 'club' | 'contact', string>;
  home: {
    heroKicker: string;
    heroTitle: string;
    heroSubtitle: string;
    introTitle: string;
    introBody: string;
    servicesTitle: string;
    servicesIntro: string;
    projectsTitle: string;
    projectsIntro: string;
    ctaTitle: string;
    ctaBody: string;
  };
  about: {
    intro: string;
    bodyA: string;
    bodyB: string;
    values: { title: string; copy: string }[];
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
  club: {
    intro: string;
    body: string;
    bullets: string[];
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
      requestQuote: 'Solicitar presupuesto',
      exploreWork: 'Ver trabajos',
      contactEmail: 'Escríbenos',
      readMore: 'Descubrir más'
    },
    metadata: {
      home: { title: 'Filomena — Estudio creativo editorial', description: 'Branding, dirección creativa, retoque y contenido para marcas con visión contemporánea.' },
      about: { title: 'Sobre Filomena', description: 'Conoce el enfoque editorial y estratégico de Filomena.' },
      services: { title: 'Servicios creativos', description: 'Servicios de branding, contenido, diseño y dirección creativa para marcas exigentes.' },
      projects: { title: 'Trabajos', description: 'Selección visual de proyectos de branding, contenido y diseño realizados por Filomena.' },
      club: { title: 'Nuestro Club', description: 'Comunidad creativa de Filomena para colaboración, networking e inspiración.' },
      contact: { title: 'Contacto', description: 'Solicita presupuesto y empecemos a construir la próxima narrativa visual de tu marca.' }
    },
    nav: { home: 'Inicio', about: 'Sobre Filomena', services: 'Servicios', projects: 'Trabajos', club: 'Nuestro Club', contact: 'Contacto' },
    home: {
      heroKicker: 'Estudio creativo · branding · contenido',
      heroTitle: 'Diseñamos identidades visuales que elevan marcas con intención.',
      heroSubtitle: 'Filomena combina mirada editorial, estrategia y ejecución para construir marcas memorables en moda, lifestyle y negocios emergentes.',
      introTitle: 'Creatividad con dirección',
      introBody: 'Creamos sistemas visuales sólidos, piezas con sensibilidad estética y experiencias digitales que conectan con clientes exigentes.',
      servicesTitle: 'Servicios clave',
      servicesIntro: 'Procesos flexibles para equipos que buscan un partner creativo de confianza.',
      projectsTitle: 'Trabajos recientes',
      projectsIntro: 'Una selección de proyectos con foco en narrativa, detalle y consistencia visual.',
      ctaTitle: '¿Tienes un proyecto en marcha?',
      ctaBody: 'Cuéntanos contexto, objetivos y tiempos. Prepararemos una propuesta a medida.'
    },
    about: {
      intro: 'Filomena es un estudio creativo especializado en imagen de marca, dirección visual y contenido para entornos digitales.',
      bodyA: 'Trabajamos con equipos de moda, belleza, retail y servicios que valoran el diseño como herramienta estratégica de crecimiento.',
      bodyB: 'Nuestro enfoque es colaborativo y preciso: escuchamos, ordenamos y transformamos ideas en sistemas visuales claros y diferenciadores.',
      values: [
        { title: 'Rigor estético', copy: 'Cada pieza cuida composición, ritmo y tipografía para mantener coherencia de marca.' },
        { title: 'Visión estratégica', copy: 'Diseño orientado a negocio, posicionamiento y percepción premium.' },
        { title: 'Colaboración real', copy: 'Procesos transparentes con diálogo continuo y entregables accionables.' }
      ]
    },
    services: {
      intro: 'Servicios modulares para construir, lanzar o escalar una marca con una dirección visual sólida.',
      list: {
        'photo-retouching': { title: 'Retoque fotográfico', description: 'Ajustes profesionales de piel, color y luz para campañas, e-commerce y editoriales.' },
        'content-creation': { title: 'Creación de contenido', description: 'Conceptualización y producción de piezas visuales para web, redes y campañas.' },
        'video-editing': { title: 'Edición de vídeo', description: 'Montaje dinámico y elegante para reels, campañas y contenido de marca.' },
        'creative-direction': { title: 'Dirección creativa', description: 'Definición del lenguaje visual y supervisión estética de proyectos y shootings.' },
        'graphic-design': { title: 'Diseño gráfico', description: 'Diseño editorial y piezas gráficas con carácter, orden y consistencia.' },
        'web-design': { title: 'Diseño web', description: 'Interfaces limpias y contemporáneas orientadas a conversión y experiencia.' },
        'social-media-design': { title: 'Diseño de redes sociales', description: 'Sistemas de contenido adaptables para mantener identidad y ritmo en social.' },
        branding: { title: 'Branding', description: 'Estrategia, identidad visual y narrativa de marca para posicionar con claridad.' }
      }
    },
    projects: {
      intro: 'Una cuadrícula viva pensada para crecer: añade proyectos fácilmente y mantén un portfolio siempre actualizado.',
      categories: {
        branding: 'Branding',
        content: 'Contenido',
        web: 'Web',
        direction: 'Dirección creativa',
        social: 'Social media',
        retouching: 'Retoque'
      },
      list: {
        'atelier-norte': { title: 'Atelier Norte', description: 'Sistema de marca y dirección de arte para firma de moda emergente.', categoryLabel: 'Branding' },
        'lumen-beauty': { title: 'Lumen Beauty', description: 'Piezas animadas y contenido corto para lanzamiento digital.', categoryLabel: 'Contenido' },
        'casa-viva': { title: 'Casa Viva', description: 'Rediseño web con navegación editorial y foco en catálogo.', categoryLabel: 'Web' },
        'origen-studio': { title: 'Origen Studio', description: 'Dirección de campaña con narrativa minimalista y tonal.', categoryLabel: 'Dirección creativa' },
        'salvia-lab': { title: 'Salvia Lab', description: 'Plantillas sociales y guidelines para comunicación mensual.', categoryLabel: 'Social media' },
        'noir-tailor': { title: 'Noir Tailor', description: 'Retoque premium para lookbook y assets de e-commerce.', categoryLabel: 'Retoque' }
      }
    },
    club: {
      intro: 'Nuestro Club nace como un espacio de conexión entre marcas, creativos y colaboradores del estudio.',
      body: 'Estamos diseñando un formato de encuentros, recursos y conversaciones para impulsar proyectos con sensibilidad visual y enfoque estratégico.',
      bullets: ['Sesiones privadas de revisión de marca.', 'Networking curado entre perfiles creativos.', 'Recursos descargables para equipos en crecimiento.']
    },
    contact: {
      intro: 'Cuéntanos qué estás construyendo y qué necesitas resolver. Te responderemos en un máximo de 48 horas laborables.',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa / marca',
        service: 'Servicio de interés',
        message: 'Mensaje',
        submit: 'Enviar solicitud',
        success: 'Gracias. Hemos recibido tu mensaje y te responderemos pronto.',
        error: 'No se pudo enviar el formulario. Inténtalo de nuevo en unos minutos.',
        loading: 'Enviando…'
      }
    },
    footer: {
      tagline: 'Estudio creativo para marcas que quieren destacar con elegancia y dirección.',
      rights: 'Todos los derechos reservados.',
      social: 'Redes'
    }
  },
  en: {
    languageLabel: 'Language',
    common: {
      requestQuote: 'Request a quote',
      exploreWork: 'View projects',
      contactEmail: 'Email us',
      readMore: 'Read more'
    },
    metadata: {
      home: { title: 'Filomena — Editorial creative studio', description: 'Branding, creative direction, retouching and content for contemporary brands.' },
      about: { title: 'About Filomena', description: 'Get to know Filomena’s editorial and strategic approach.' },
      services: { title: 'Creative services', description: 'Branding, content, design and creative direction services for ambitious brands.' },
      projects: { title: 'Projects', description: 'A visual selection of branding, content and design projects by Filomena.' },
      club: { title: 'Our Club', description: 'Filomena’s creative community for collaboration, networking and inspiration.' },
      contact: { title: 'Contact', description: 'Request a quote and let’s shape your next visual narrative.' }
    },
    nav: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', club: 'Our Club', contact: 'Contact' },
    home: {
      heroKicker: 'Creative studio · branding · content',
      heroTitle: 'We design visual identities that elevate brands with intention.',
      heroSubtitle: 'Filomena merges editorial sensibility, strategy and execution to build memorable brands in fashion, lifestyle and small businesses.',
      introTitle: 'Creativity with direction',
      introBody: 'We craft robust visual systems, refined assets and digital experiences that connect with discerning audiences.',
      servicesTitle: 'Core services',
      servicesIntro: 'Flexible processes for teams looking for a trusted creative partner.',
      projectsTitle: 'Selected work',
      projectsIntro: 'A curated collection focused on narrative, detail and visual consistency.',
      ctaTitle: 'Working on something new?',
      ctaBody: 'Share your context, goals and timing. We’ll prepare a tailored proposal.'
    },
    about: {
      intro: 'Filomena is a creative studio focused on brand image, visual direction and content for digital-first environments.',
      bodyA: 'We partner with fashion, beauty, retail and service brands that treat design as a strategic growth lever.',
      bodyB: 'Our process is collaborative and precise: we listen, structure and transform ideas into clear and distinctive visual systems.',
      values: [
        { title: 'Aesthetic rigor', copy: 'Each piece balances composition, rhythm and typography to protect brand coherence.' },
        { title: 'Strategic vision', copy: 'Design decisions aligned with positioning, business goals and premium perception.' },
        { title: 'True collaboration', copy: 'Transparent workflows with ongoing dialogue and actionable deliverables.' }
      ]
    },
    services: {
      intro: 'Modular services to build, launch or scale a brand with a clear visual direction.',
      list: {
        'photo-retouching': { title: 'Photo retouching', description: 'Professional skin, color and light adjustments for campaigns, e-commerce and editorials.' },
        'content-creation': { title: 'Content creation', description: 'Concept, production and adaptation of visual assets for web, social and campaigns.' },
        'video-editing': { title: 'Video editing', description: 'Elegant and dynamic edits for reels, campaigns and brand storytelling.' },
        'creative-direction': { title: 'Creative direction', description: 'Visual language definition and art supervision for projects and shoots.' },
        'graphic-design': { title: 'Graphic design', description: 'Editorial and brand graphics with personality, structure and consistency.' },
        'web-design': { title: 'Web design', description: 'Contemporary interfaces focused on conversion and user experience.' },
        'social-media-design': { title: 'Social media design', description: 'Adaptable content systems to maintain identity and rhythm across social channels.' },
        branding: { title: 'Branding', description: 'Strategy, visual identity and messaging to position your brand with clarity.' }
      }
    },
    projects: {
      intro: 'A living grid designed to scale: add new projects quickly and keep your portfolio fresh.',
      categories: {
        branding: 'Branding',
        content: 'Content',
        web: 'Web',
        direction: 'Creative direction',
        social: 'Social media',
        retouching: 'Retouching'
      },
      list: {
        'atelier-norte': { title: 'Atelier Norte', description: 'Brand system and art direction for an emerging fashion label.', categoryLabel: 'Branding' },
        'lumen-beauty': { title: 'Lumen Beauty', description: 'Animated visual assets and short-form launch content.', categoryLabel: 'Content' },
        'casa-viva': { title: 'Casa Viva', description: 'Editorial web redesign with catalogue-first navigation.', categoryLabel: 'Web' },
        'origen-studio': { title: 'Origen Studio', description: 'Campaign direction with tonal, minimalist storytelling.', categoryLabel: 'Creative direction' },
        'salvia-lab': { title: 'Salvia Lab', description: 'Monthly social templates and practical communication guidelines.', categoryLabel: 'Social media' },
        'noir-tailor': { title: 'Noir Tailor', description: 'Premium retouching for lookbook and e-commerce assets.', categoryLabel: 'Retouching' }
      }
    },
    club: {
      intro: 'Our Club is envisioned as a connection space for brands, creatives and studio collaborators.',
      body: 'We are shaping a format of gatherings, resources and conversations to drive projects with visual sensitivity and strategic intent.',
      bullets: ['Private brand review sessions.', 'Curated networking between creative profiles.', 'Downloadable resources for growing teams.']
    },
    contact: {
      intro: 'Tell us what you are building and what needs to be solved. We respond within 48 business hours.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company / brand',
        service: 'Service of interest',
        message: 'Message',
        submit: 'Send request',
        success: 'Thank you. Your message has been received and we will reply soon.',
        error: 'The form could not be sent. Please try again in a few minutes.',
        loading: 'Sending…'
      }
    },
    footer: {
      tagline: 'Creative studio for brands seeking elegant, intentional differentiation.',
      rights: 'All rights reserved.',
      social: 'Social'
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
