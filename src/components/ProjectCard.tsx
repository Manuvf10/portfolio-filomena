import Image from 'next/image';
import type { Project } from '@/content/projects';

const sizeClass: Record<Project['size'], string> = {
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  square: ''
};

export function ProjectCard({
  project,
  copy,
  categoryText
}: {
  project: Project;
  copy: { title: string; description: string };
  categoryText: string;
}) {
  return (
    <article className={`group relative overflow-hidden bg-zinc-950 text-stone ${sizeClass[project.size]}`}>
      <div className="relative h-[44vh] min-h-[320px] md:h-full md:min-h-[360px]">
        {project.media.type === 'image' ? (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        ) : (
          <video className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100" autoPlay muted loop playsInline poster={project.media.poster}>
            <source src={project.media.src} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
        <span className="inline-flex border border-white/40 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
          {categoryText}
        </span>
        <h3 className="mt-3 font-serif text-3xl leading-none md:text-4xl">{copy.title}</h3>
        <p className="mt-2 max-w-md text-sm text-stone/90">{copy.description}</p>
      </div>
    </article>
  );
}
