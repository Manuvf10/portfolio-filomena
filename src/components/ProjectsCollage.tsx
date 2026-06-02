import Image from 'next/image';
import { projects } from '@/content/projects';

export function ProjectsCollage() {
  const visibleProjects = projects.filter((project) => project.visible !== false);

  return (
    <div className="grid grid-cols-3 md:grid-cols-6">
      {visibleProjects.map((project) => {
        const textTone = project.textColor === 'black' ? 'text-black' : 'text-white';
        const overlayClass =
          project.textColor === 'black'
            ? 'bg-transparent'
            : 'bg-gradient-to-t from-black/35 via-black/10 to-transparent';

        const cardContent = (
          <>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover"
                priority={project.id <= 12}
              />
              <div className={`absolute inset-0 ${overlayClass}`} />
              <div className="absolute inset-x-0 bottom-0 p-2 md:p-2.5">
                <h3 className={`font-sans text-[10px] leading-tight md:text-[11px] ${textTone}`}>{project.title}</h3>
              </div>
            </div>
          </>
        );

        if (project.href) {
          return (
            <a key={project.id} href={project.href} target="_blank" rel="noopener noreferrer" className="block">
              {cardContent}
            </a>
          );
        }

        return (
          <article key={project.id}>
            {cardContent}
          </article>
        );
      })}
    </div>
  );
}
