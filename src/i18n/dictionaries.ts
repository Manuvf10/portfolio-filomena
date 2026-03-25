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
    editorialKicker: string;
    editorialTitle: string;
    editorialBody: string;
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
      heroTitle: 'Dirección de arte, contenido y diseño para marcas con ambición estética.',
      heroSubtitle: 'Un estudio creativo 360 para moda, lifestyle y negocios que buscan presencia premium y resultados medibles.',
      introTitle: 'Una práctica creativa con criterio',
      introBody: 'Creamos sistemas visuales sólidos, piezas con sensibilidad estética y experiencias digitales que conectan con clientes exigentes.',
      servicesTitle: 'Servicios clave',
      servicesIntro: 'Servicios modulares con una misma exigencia: coherencia visual, solvencia técnica y foco comercial.',
      projectsTitle: 'Trabajos recientes',
      projectsIntro: 'Una selección curada donde cada proyecto combina narrativa, dirección visual y ejecución.',
      ctaTitle: '¿Buscas una propuesta creativa con dirección?',
      ctaBody: 'Comparte objetivos, alcance y timing. Recibirás una propuesta clara, realista y alineada a tu marca.'
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
      intro: 'Servicios conectados entre sí para construir marcas con lenguaje visual propio y ejecución consistente.',
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
      intro: 'Selección editorial de trabajos en branding, contenido, web y dirección creativa. Formatos mixtos, ritmo visual y contexto breve por proyecto.',
      editorialKicker: 'Portfolio Filomena',
      editorialTitle: 'Proyectos con mirada editorial, estrategia y precisión visual.',
      editorialBody: 'Cada pieza combina dirección de arte, narrativa y ejecución para marcas de moda, lifestyle y negocios con criterio.',
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
      intro: 'Nuestro Club conecta marcas, creativos y colaboradores en un entorno curado y profesional.',
      body: 'Impulsamos encuentros selectivos, colaboraciones y recursos prácticos para acelerar proyectos con criterio visual y ambición comercial.',
      bullets: ['Sesiones privadas de revisión de marca.', 'Networking curado entre perfiles creativos.', 'Recursos descargables para equipos en crecimiento.']
    },
    contact: {
      intro: 'Describe tu proyecto, objetivos y servicios de interés. Te enviaremos una respuesta estratégica en menos de 48 horas laborables.',
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
      heroTitle: 'Art direction, content and design for brands with visual ambition.',
      heroSubtitle: 'A 360 creative studio for fashion, lifestyle and independent businesses seeking premium positioning and measurable outcomes.',
      introTitle: 'Creative practice with intent',
      introBody: 'We craft robust visual systems, refined assets and digital experiences that connect with discerning audiences.',
      servicesTitle: 'Core services',
      servicesIntro: 'Modular services with one standard: visual coherence, technical precision and commercial focus.',
      projectsTitle: 'Selected work',
      projectsIntro: 'A curated edit where each project balances narrative, visual direction and execution.',
      ctaTitle: 'Need a creative proposal with direction?',
      ctaBody: 'Share your goals, scope and timing. You will receive a clear proposal tailored to your brand.'
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
      intro: 'Connected services designed to build brands with a distinctive visual language and reliable execution.',
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
      intro: 'Editorially curated projects across branding, content, web and creative direction. Mixed formats, visual rhythm and concise context.',
      editorialKicker: 'Filomena Portfolio',
      editorialTitle: 'Projects shaped through editorial sensibility, strategy and visual precision.',
      editorialBody: 'Each piece combines art direction, narrative and execution for fashion, lifestyle and visually driven businesses.',
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
      intro: 'Our Club connects brands, creatives and collaborators in a curated and professional setting.',
      body: 'We host selective gatherings, collaborations and practical resources to move projects forward with visual clarity and strategic intent.',
      bullets: ['Private brand review sessions.', 'Curated networking between creative profiles.', 'Downloadable resources for growing teams.']
    },
    contact: {
      intro: 'Share your project scope, priorities and service needs. We respond with a strategic next step within 48 business hours.',
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
