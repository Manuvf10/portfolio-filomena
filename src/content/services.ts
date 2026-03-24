export type Service = {
  id: string;
  icon: string;
  emphasis: 'xl' | 'md';
};

export const services: Service[] = [
  { id: 'branding', icon: '◼', emphasis: 'xl' },
  { id: 'creative-direction', icon: '◆', emphasis: 'md' },
  { id: 'photo-retouching', icon: '◌', emphasis: 'md' },
  { id: 'content-creation', icon: '◐', emphasis: 'xl' },
  { id: 'video-editing', icon: '▣', emphasis: 'md' },
  { id: 'graphic-design', icon: '✶', emphasis: 'md' },
  { id: 'web-design', icon: '⬒', emphasis: 'xl' },
  { id: 'social-media-design', icon: '◈', emphasis: 'md' }
];
