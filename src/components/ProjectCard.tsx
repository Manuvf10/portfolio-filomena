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
    <article className={`group relative overflow-hidden bg-zinc-100 ${blockClass}`}>
      <div className={`relative overflow-hidden ${isCompact ? 'aspect-[4/5]' : mediaRatios[project.format === 'text' ? 'square' : project.format]}`}>
        {project.media.type === 'image' ? (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={project.media.poster} aria-label={project.media.alt}>
            <source src={project.media.src} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
        <div className="inline-block bg-white/90 px-3 py-2 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{categoryText}</p>
          <h3 className="mt-1 font-serif text-2xl leading-tight text-ink">{copy.title}</h3>
        </div>
      </div>
    </article>
  );
}
