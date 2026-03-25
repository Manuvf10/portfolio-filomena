import Image from 'next/image';
import type { Project } from '@/content/projects';

const formatClasses: Record<Project['format'], string> = {
  editorial: 'md:col-span-8 md:row-span-2',
  wide: 'md:col-span-8',
  tall: 'md:col-span-4 md:row-span-2',
  square: 'md:col-span-4',
  text: 'md:col-span-4'
};

const mediaRatios: Record<Exclude<Project['format'], 'text'>, string> = {
  editorial: 'aspect-[16/10] md:aspect-[16/11]',
  wide: 'aspect-[16/10] md:aspect-[21/10]',
  tall: 'aspect-[4/5] md:aspect-[4/6]',
  square: 'aspect-square'
};

export function ProjectCard({
  project,
  copy,
  categoryText,
  mode = 'collage'
}: {
  project: Project;
  copy: { title: string; description: string; categoryLabel: string };
  categoryText: string;
  mode?: 'collage' | 'compact';
}) {
  const isCompact = mode === 'compact';
  const blockClass = isCompact ? 'md:col-span-6' : formatClasses[project.format];

  return (
    <article className={`group relative overflow-hidden bg-zinc-950 text-stone ${blockClass}`}>
      <div className={`relative overflow-hidden ${isCompact ? 'aspect-[4/5]' : mediaRatios[project.format === 'text' ? 'square' : project.format]}`}>
        {project.media.type === 'image' ? (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <video
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
            poster={project.media.poster}
            aria-label={project.media.alt}
          >
            <source src={project.media.src} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 z-10 space-y-3 p-4 md:p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.22em] text-stone/80 md:text-[11px]">
          <span>{categoryText}</span>
          {project.location ? <span>{project.location}</span> : null}
          {project.year ? <span>{project.year}</span> : null}
        </div>
        <h3 className="font-serif text-2xl leading-tight md:text-3xl">{copy.title}</h3>
        <p className="max-w-xl text-sm text-stone/85">{copy.description}</p>
      </div>
    </article>
  );
}
