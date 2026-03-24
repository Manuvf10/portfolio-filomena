import type { Locale } from './config';

type ServiceCopy = {
  title: string;
  short: string;
  description: string;
  deliverables: string[];
};

type ProjectCopy = { title: string; description: string };

type Dictionary = {
  languageLabel: string;
  nav: Record<'home' | 'about' | 'services' | 'projects' | 'club' | 'contact', string>;
  common: {
    requestQuote: string;
    viewProjects: string;
    discoverServices: string;
    contactEmail: string;
  };
  metadata: Record<'home' | 'about' | 'services' | 'projects' | 'club' | 'contact', { title: string; description: string }>;
  home: {
    kicker: string;
    title: string;
    subtitle: string;
    introTitle: string;
    introBody: string;
    manifestoTitle: string;
    manifestoBody: string;
    servicesTitle: string;
    servicesBody: string;
    projectsTitle: string;
    projectsBody: string;
    methodTitle: string;
    method: { label: string; text: string }[];
    ctaTitle: string;
    ctaBody: string;
  };
  about: {
    intro: string;
    lead: string;
    principles: { title: string; text: string }[];
  };
  services: {
    intro: string;
    closingTitle: string;
    closingBody: string;
    list: Record<string, ServiceCopy>;
  };
  projects: {
    intro: string;
    categories: Record<string, string>;
    list: Record<string, ProjectCopy>;
  };
  club: {
    intro: string;
    lead: string;
    blocks: { title: string; text: string }[];
  };
  contact: {
    intro: string;
    lead: string;
    form: {
      name: string;
      email: string;
      company: string;
      service: string;
      message: string;
      submit: string;
      loading: string;
      success: string;
      error: string;
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
    nav: {
      home: 'Inicio',
      about: 'Sobre Filomena',
      services: 'Servicios',
      projects: 'Trabajos',
      club: 'Nuestro Club',
      contact: 'Contacto'
    },
    common: {
      requestQuote: 'Solicitar presupuesto',
      viewProjects: 'Ver trabajos',
      discoverServices: 'Explorar servicios',
      contactEmail: 'Email directo'
    },
    metadata: {
      home: { title: 'Filomena — Creative Studio 360', description: 'Estudio creativo editorial para marcas de moda, lifestyle y negocios emergentes.' },
      about: { title: 'Sobre Filomena', description: 'Enfoque estratégico y visual para construir marcas con criterio editorial.' },
      services: { title: 'Servicios — Filomena', description: 'Branding, dirección creativa, diseño, retoque y contenido para marcas exigentes.' },
      projects: { title: 'Trabajos — Filomena', description: 'Portfolio visual de proyectos de branding, contenido y dirección creativa.' },
      club: { title: 'Nuestro Club — Filomena', description: 'Red de colaboración entre marcas, creadores y especialistas visuales.' },
      contact: { title: 'Contacto — Filomena', description: 'Solicita presupuesto para branding, contenido, web o dirección creativa.' }
    },
    home: {
      kicker: 'ESTUDIO CREATIVO 360 · MODA · LIFESTYLE',
      title: 'Diseño, dirección y contenido para marcas que quieren ocupar una posición clara.',
      subtitle: 'Filomena combina criterio editorial y ejecución transversal para construir sistemas visuales con impacto comercial.',
      introTitle: 'Un estudio boutique con alcance integral',
      introBody: 'Acompañamos a marcas desde la definición estratégica hasta la producción final: identidad, contenido, retoque, diseño y presencia digital.',
      manifestoTitle: 'No diseñamos piezas sueltas. Diseñamos percepción.',
      manifestoBody: 'Cada decisión visual responde a posicionamiento, ritmo de marca y objetivos reales de negocio.',
      servicesTitle: 'Servicios con lógica de estudio, no de proveedor aislado',
      servicesBody: 'Equipos internos y marcas emergentes nos contratan para resolver dirección, sistema y ejecución con una sola mirada.',
      projectsTitle: 'Trabajo reciente',
      projectsBody: 'Portfolio en formato collage para leer cada proyecto desde su lenguaje visual.',
      methodTitle: 'Cómo trabajamos',
      method: [
        { label: '01 — Diagnóstico', text: 'Aterrizamos contexto, público y oportunidad de marca.' },
        { label: '02 — Dirección', text: 'Definimos narrativa visual, tono y sistema estético.' },
        { label: '03 — Producción', text: 'Ejecutamos assets y plataformas con consistencia.' },
        { label: '04 — Escalado', text: 'Dejamos estructura para que el equipo pueda crecer.' }
      ],
      ctaTitle: 'Si necesitas elevar la percepción de tu marca, empecemos por una conversación clara.',
      ctaBody: 'Comparte objetivos, plazos y alcance. Te proponemos una ruta de trabajo con fases y entregables concretos.'
    },
    about: {
      intro: 'Filomena es un estudio creativo que integra dirección, diseño y producción visual para marcas con ambición de posicionamiento.',
      lead: 'Trabajamos con una metodología colaborativa y sobria: menos ruido, más criterio. Nuestro foco es construir sistemas visuales coherentes y sostenibles en el tiempo.',
      principles: [
        { title: 'Mirada editorial', text: 'Tipografía, composición y ritmo visual tratados como activos de marca.' },
        { title: 'Enfoque 360', text: 'Una sola dirección para branding, contenido, digital y piezas comerciales.' },
        { title: 'Ejecución precisa', text: 'Procesos claros, entregables concretos y alto estándar técnico.' }
      ]
    },
    services: {
      intro: 'Servicios diseñados para resolver posicionamiento, producción y consistencia visual en un mismo marco de trabajo.',
      closingTitle: '¿Proyecto nuevo o reestructuración de marca?',
      closingBody: 'Podemos intervenir por fases o asumir un acompañamiento integral.',
      list: {
        branding: {
          title: 'Branding',
          short: 'Identidad y posicionamiento visual',
          description: 'Construimos identidades con criterio editorial: narrativa, sistema tipográfico, paleta y reglas de aplicación.',
          deliverables: ['Estrategia de identidad', 'Sistema visual', 'Guía de marca']
        },
        'creative-direction': {
          title: 'Dirección creativa',
          short: 'Marco estético y supervisión',
          description: 'Definimos el lenguaje visual de campañas, shootings y lanzamientos para mantener una lectura de marca sólida.',
          deliverables: ['Concepto creativo', 'Moodboards y dirección de arte', 'Supervisión de ejecución']
        },
        'photo-retouching': {
          title: 'Retoque fotográfico',
          short: 'Acabado premium para imagen',
          description: 'Retoque avanzado para moda, beauty y e-commerce con control preciso de color, textura y luz.',
          deliverables: ['Retoque editorial', 'Retoque e-commerce', 'Color workflow']
        },
        'content-creation': {
          title: 'Creación de contenido',
          short: 'Producción para canales digitales',
          description: 'Diseñamos y producimos contenido alineado con objetivos de campaña, calendario y estilo de marca.',
          deliverables: ['Concepto de contenido', 'Producción visual', 'Adaptaciones por formato']
        },
        'video-editing': {
          title: 'Edición de vídeo',
          short: 'Piezas dinámicas y elegantes',
          description: 'Edición orientada a narrativa de marca para reels, lanzamientos y cápsulas de campaña.',
          deliverables: ['Edición short-form', 'Motion básico', 'Versionado por canal']
        },
        'graphic-design': {
          title: 'Diseño gráfico',
          short: 'Sistemas y piezas clave',
          description: 'Desarrollo de piezas editoriales, presentación comercial y soportes gráficos con continuidad visual.',
          deliverables: ['Piezas editoriales', 'Material comercial', 'Dirección tipográfica']
        },
        'web-design': {
          title: 'Diseño web',
          short: 'Experiencias digitales con carácter',
          description: 'Diseño de webs de marca y portfolio con jerarquía clara, foco en conversión y sensibilidad editorial.',
          deliverables: ['Arquitectura de contenido', 'UI visual', 'Sistema responsive']
        },
        'social-media-design': {
          title: 'Diseño de redes sociales',
          short: 'Consistencia en social media',
          description: 'Creamos frameworks visuales para que la marca sostenga presencia digital sin perder identidad.',
          deliverables: ['Plantillas modulares', 'Dirección de feed', 'Biblioteca visual']
        }
      }
    },
    projects: {
      intro: 'Una selección de proyectos en formato collage: visual, directo y preparado para crecer con nuevos casos.',
      categories: {
        branding: 'Branding',
        content: 'Contenido',
        web: 'Web',
        direction: 'Dirección creativa',
        social: 'Social media',
        retouching: 'Retoque'
      },
      list: {
        'atelier-norte': { title: 'Atelier Norte', description: 'Identidad y dirección de arte para firma de moda emergente.' },
        'lumen-beauty': { title: 'Lumen Beauty', description: 'Contenido de lanzamiento con formato short-form y motion ligero.' },
        'casa-viva': { title: 'Casa Viva', description: 'Rediseño web editorial con foco en producto y conversión.' },
        'origen-studio': { title: 'Origen Studio', description: 'Campaña visual con narrativa tonal y estilismo minimalista.' },
        'salvia-lab': { title: 'Salvia Lab', description: 'Sistema social mensual para marca lifestyle en crecimiento.' },
        'noir-tailor': { title: 'Noir Tailor', description: 'Retoque premium para lookbook y catálogo comercial.' }
      }
    },
    club: {
      intro: 'Nuestro Club conecta marcas, creativos y especialistas que comparten una visión visual rigurosa.',
      lead: 'No es un canal social más: es un marco de colaboración para activar proyectos, compartir criterio y crear oportunidades reales.',
      blocks: [
        { title: 'Círculo de colaboraciones', text: 'Red curada de fotógrafos, estilistas, realizadores y diseñadores.' },
        { title: 'Sesiones de revisión', text: 'Encuentros periódicos para auditar marcas y detectar mejoras accionables.' },
        { title: 'Convocatorias', text: 'Proyectos colaborativos entre marcas emergentes y talento creativo.' }
      ]
    },
    contact: {
      intro: 'Solicita presupuesto para branding, dirección creativa, contenido o diseño digital.',
      lead: 'Cuéntanos en qué punto está tu marca y qué objetivo necesitas resolver. Respondemos en 48h laborables con una propuesta inicial.',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa / marca',
        service: 'Servicio de interés',
        message: 'Mensaje',
        submit: 'Enviar solicitud',
        loading: 'Enviando…',
        success: 'Mensaje enviado. Te responderemos con una propuesta inicial.',
        error: 'No se pudo enviar. Intenta de nuevo en unos minutos.'
      }
    },
    footer: {
      tagline: 'Filomena — estudio creativo editorial para marcas de moda, lifestyle y proyectos emergentes.',
      rights: 'Todos los derechos reservados.',
      social: 'Redes'
    }
  },
  en: {
    languageLabel: 'Language',
    nav: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', club: 'Our Club', contact: 'Contact' },
    common: {
      requestQuote: 'Request quote',
      viewProjects: 'View projects',
      discoverServices: 'Explore services',
      contactEmail: 'Direct email'
    },
    metadata: {
      home: { title: 'Filomena — 360 Creative Studio', description: 'Editorial creative studio for fashion, lifestyle and emerging brands.' },
      about: { title: 'About Filomena', description: 'Strategic and visual approach to build distinctive brands.' },
      services: { title: 'Services — Filomena', description: 'Branding, creative direction, design, retouching and content production.' },
      projects: { title: 'Projects — Filomena', description: 'Visual portfolio of branding, content and creative direction work.' },
      club: { title: 'Our Club — Filomena', description: 'Collaborative network for brands, creators and visual specialists.' },
      contact: { title: 'Contact — Filomena', description: 'Request a quote for branding, content, web design or creative direction.' }
    },
    home: {
      kicker: '360 CREATIVE STUDIO · FASHION · LIFESTYLE',
      title: 'Design, direction and content for brands that need a sharp position.',
      subtitle: 'Filomena combines editorial judgement and cross-disciplinary execution to build visual systems with commercial impact.',
      introTitle: 'A boutique studio with full-range capabilities',
      introBody: 'We support brands from strategic definition to final production: identity, content, retouching, design and digital presence.',
      manifestoTitle: 'We do not design isolated pieces. We design perception.',
      manifestoBody: 'Every visual decision is tied to positioning, brand rhythm and business goals.',
      servicesTitle: 'Studio-led services, not isolated production',
      servicesBody: 'Internal teams and emerging brands partner with us to align direction, systems and execution.',
      projectsTitle: 'Recent work',
      projectsBody: 'A collage-based portfolio that highlights each project through its visual language.',
      methodTitle: 'How we work',
      method: [
        { label: '01 — Discovery', text: 'We map context, audience and brand opportunity.' },
        { label: '02 — Direction', text: 'We define visual narrative, tone and aesthetic system.' },
        { label: '03 — Production', text: 'We deliver assets and platforms with consistency.' },
        { label: '04 — Scaling', text: 'We leave structure in place so teams can grow.' }
      ],
      ctaTitle: 'If you need to elevate brand perception, let’s start with a focused conversation.',
      ctaBody: 'Share goals, timing and scope. We will propose a route with clear phases and deliverables.'
    },
    about: {
      intro: 'Filomena is a creative studio integrating direction, design and visual production for brands with clear positioning ambitions.',
      lead: 'Our collaboration model is precise and sober: less noise, more criteria. We build visual systems that remain coherent over time.',
      principles: [
        { title: 'Editorial eye', text: 'Typography, composition and rhythm treated as strategic brand assets.' },
        { title: '360 approach', text: 'Single direction across branding, content, digital and commercial assets.' },
        { title: 'Precise execution', text: 'Clear process, concrete deliverables and high technical standards.' }
      ]
    },
    services: {
      intro: 'Services designed to solve positioning, production and consistency within one unified framework.',
      closingTitle: 'Launching something new or restructuring your brand?',
      closingBody: 'We can work in phases or as an ongoing creative partner.',
      list: {
        branding: {
          title: 'Branding',
          short: 'Visual identity and positioning',
          description: 'We craft editorial-minded identities: narrative, typography, color system and usage principles.',
          deliverables: ['Identity strategy', 'Visual system', 'Brand guidelines']
        },
        'creative-direction': {
          title: 'Creative direction',
          short: 'Aesthetic framework and supervision',
          description: 'We define campaign and shoot language to keep a strong and consistent brand reading.',
          deliverables: ['Creative concept', 'Art direction boards', 'Execution supervision']
        },
        'photo-retouching': {
          title: 'Photo retouching',
          short: 'Premium finishing',
          description: 'Advanced retouching for fashion, beauty and e-commerce with precise color and texture control.',
          deliverables: ['Editorial retouching', 'E-commerce retouching', 'Color workflow']
        },
        'content-creation': {
          title: 'Content creation',
          short: 'Production for digital channels',
          description: 'We produce visual content aligned with campaign goals, calendar and brand tone.',
          deliverables: ['Content concept', 'Visual production', 'Format adaptations']
        },
        'video-editing': {
          title: 'Video editing',
          short: 'Refined dynamic pieces',
          description: 'Brand-oriented editing for reels, launches and short campaign narratives.',
          deliverables: ['Short-form editing', 'Light motion', 'Channel-specific versions']
        },
        'graphic-design': {
          title: 'Graphic design',
          short: 'Core brand assets',
          description: 'Editorial and commercial pieces developed with continuity and typographic intent.',
          deliverables: ['Editorial assets', 'Commercial collateral', 'Typographic direction']
        },
        'web-design': {
          title: 'Web design',
          short: 'Digital experiences with character',
          description: 'Brand and portfolio websites with clear hierarchy, conversion focus and editorial sensibility.',
          deliverables: ['Content architecture', 'Visual UI', 'Responsive system']
        },
        'social-media-design': {
          title: 'Social media design',
          short: 'Consistency across social',
          description: 'Visual frameworks that keep digital presence coherent without losing identity.',
          deliverables: ['Modular templates', 'Feed direction', 'Visual asset library']
        }
      }
    },
    projects: {
      intro: 'A curated collage selection: visual-first, direct and ready to grow with new cases.',
      categories: { branding: 'Branding', content: 'Content', web: 'Web', direction: 'Creative direction', social: 'Social media', retouching: 'Retouching' },
      list: {
        'atelier-norte': { title: 'Atelier Norte', description: 'Identity and art direction for an emerging fashion label.' },
        'lumen-beauty': { title: 'Lumen Beauty', description: 'Launch content built for short-form and light motion.' },
        'casa-viva': { title: 'Casa Viva', description: 'Editorial web redesign focused on product and conversion.' },
        'origen-studio': { title: 'Origen Studio', description: 'Tonal campaign direction with minimalist styling.' },
        'salvia-lab': { title: 'Salvia Lab', description: 'Monthly social system for a growing lifestyle brand.' },
        'noir-tailor': { title: 'Noir Tailor', description: 'Premium retouching for lookbook and product catalogue.' }
      }
    },
    club: {
      intro: 'Our Club connects brands, creators and specialists sharing a rigorous visual standard.',
      lead: 'Not another social channel: a collaboration framework to activate projects, exchange criteria and unlock opportunities.',
      blocks: [
        { title: 'Collaboration circle', text: 'Curated network of photographers, stylists, filmmakers and designers.' },
        { title: 'Review sessions', text: 'Periodic audits to identify practical brand improvements.' },
        { title: 'Open calls', text: 'Collaborative projects between emerging brands and creative talent.' }
      ]
    },
    contact: {
      intro: 'Request a quote for branding, creative direction, content or digital design.',
      lead: 'Tell us where your brand is today and what needs to be solved. We reply within 48 business hours with a first proposal.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company / brand',
        service: 'Service of interest',
        message: 'Message',
        submit: 'Send request',
        loading: 'Sending…',
        success: 'Message sent. We will reply with an initial proposal.',
        error: 'Could not send your message. Please try again in a few minutes.'
      }
    },
    footer: {
      tagline: 'Filomena — editorial creative studio for fashion, lifestyle and emerging brands.',
      rights: 'All rights reserved.',
      social: 'Social'
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
