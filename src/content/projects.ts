export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster: string; alt: string };

export type Project = {
  id: string;
  category: string;
  media: ProjectMedia;
  tone: 'light' | 'dark';
};

export const projects: Project[] = [
  {
    id: 'atelier-norte',
    category: 'branding',
    tone: 'light',
    media: {
      type: 'image',
      src: '/images/projects/project-01.svg',
      alt: 'Colección editorial de moda minimalista sobre mesa de estudio.'
    }
  },
  {
    id: 'lumen-beauty',
    category: 'content',
    tone: 'dark',
    media: {
      type: 'video',
      src: '/videos/project-02.mp4',
      poster: '/images/projects/project-02.svg',
      alt: 'Moodboard animado de campaña de belleza con capas tipográficas.'
    }
  },
  {
    id: 'casa-viva',
    category: 'web',
    tone: 'light',
    media: {
      type: 'image',
      src: '/images/projects/project-03.svg',
      alt: 'Interfaz editorial en pantalla con detalles de layout modular.'
    }
  },
  {
    id: 'origen-studio',
    category: 'direction',
    tone: 'dark',
    media: {
      type: 'image',
      src: '/images/projects/project-04.svg',
      alt: 'Dirección creativa en set con paleta neutra y estilismo premium.'
    }
  },
  {
    id: 'salvia-lab',
    category: 'social',
    tone: 'light',
    media: {
      type: 'image',
      src: '/images/projects/project-05.svg',
      alt: 'Diseño de contenido social con composición limpia y elegante.'
    }
  },
  {
    id: 'noir-tailor',
    category: 'retouching',
    tone: 'dark',
    media: {
      type: 'image',
      src: '/images/projects/project-06.svg',
      alt: 'Antes y después de retoque fotográfico para campaña de moda.'
    }
  }
];
