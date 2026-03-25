import { Fragment } from 'react';
import { projects } from '@/content/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid({
  content,
  categories,
  mode = 'collage',
  editorial
}: {
  content: Record<string, { title: string; description: string; categoryLabel: string }>;
  categories: Record<string, string>;
  mode?: 'collage' | 'compact';
  editorial?: {
    kicker: string;
    title: string;
    body: string;
  };
}) {
  const list = mode === 'compact' ? projects.slice(0, 4) : projects;

  return (
    <div className="grid grid-cols-1 gap-[2px] bg-zinc-900 md:grid-cols-12">
      {list.map((project, index) => (
        <Fragment key={project.id}>
          {mode === 'collage' && index === 2 && editorial ? (
            <article className="flex min-h-[220px] flex-col justify-between bg-stone p-6 text-ink md:col-span-4 md:row-span-2 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-olive">{editorial.kicker}</p>
              <p className="font-serif text-3xl leading-[1.02] md:text-4xl">{editorial.title}</p>
              <p className="max-w-xs text-sm text-zinc-700">{editorial.body}</p>
            </article>
          ) : null}
          <ProjectCard
            project={project}
            copy={content[project.id]}
            categoryText={categories[project.category] ?? project.category}
            mode={mode === 'compact' ? 'compact' : 'collage'}
          />
        </Fragment>
      ))}
    </div>
  );
}
