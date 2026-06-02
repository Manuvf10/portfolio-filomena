import Image from 'next/image';
import type { ProjectItem } from '@/content/projects';

export function ProjectCard({ project }: { project: ProjectItem }) {
  const textTone = project.textColor === 'black' ? 'text-black' : 'text-white';

  return (
    <article className="relative aspect-square overflow-hidden">
      <Image src={project.image} alt={project.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-2">
        <h3 className={`font-sans text-[10px] ${textTone}`}>{project.title}</h3>
      </div>
    </article>
  );
}
