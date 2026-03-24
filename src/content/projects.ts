export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster: string; alt: string };

export type Project = {
  id: string;
  category: string;
  media: ProjectMedia;
  size: 'tall' | 'wide' | 'square';
};

export const projects: Project[] = [
  {
    id: 'atelier-norte',
    category: 'branding',
    size: 'tall',
    media: {
      type: 'image',
      src: '/images/projects/project-01.svg',
      alt: 'Sistema de marca sobre mesa editorial con pruebas tipográficas.'
    }
  },
  {
    id: 'lumen-beauty',
    category: 'content',
    size: 'wide',
    media: {
      type: 'video',
      src: '/videos/project-02.mp4',
      poster: '/images/projects/project-02.svg',
      alt: 'Clip de campaña beauty con capas tipográficas en movimiento.'
    }
  },
  {
    id: 'casa-viva',
    category: 'web',
    size: 'square',
    media: {
      type: 'image',
      src: '/images/projects/project-03.svg',
      alt: 'Diseño web de estética editorial en composición modular.'
    }
  },
  {
    id: 'origen-studio',
    category: 'direction',
    size: 'tall',
    media: {
      type: 'image',
      src: '/images/projects/project-04.svg',
      alt: 'Dirección creativa de campaña con estilismo tonal.'
    }
  },
  {
    id: 'salvia-lab',
    category: 'social',
    size: 'square',
    media: {
      type: 'image',
      src: '/images/projects/project-05.svg',
      alt: 'Sistema visual para contenido social mensual.'
    }
  },
  {
    id: 'noir-tailor',
    category: 'retouching',
    size: 'wide',
    media: {
      type: 'image',
      src: '/images/projects/project-06.svg',
      alt: 'Retoque para lookbook de moda y assets de e-commerce.'
    }
  }
];
