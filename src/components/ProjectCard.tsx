import Image from 'next/image';
import type { Project } from '@/content/projects';

export function ProjectCard({
  project,
  copy,
  categoryText
}: {
  project: Project;
  copy: { title: string; description: string; categoryLabel: string };
  categoryText: string;
}) {
  return (
    <article className="group overflow-hidden border border-zinc-200 bg-white">
      <div className="relative aspect-[4/5] overflow-hidden">
        {project.media.type === 'image' ? (
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
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
      <div className="space-y-3 p-5">
        <span className="inline-flex bg-mist px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-700">{categoryText}</span>
        <h3 className="font-serif text-2xl">{copy.title}</h3>
        <p className="text-sm text-zinc-700">{copy.description}</p>
      </div>
    </article>
  );
}
