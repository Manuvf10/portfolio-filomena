import { projects } from '@/content/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid({
  content,
  categories,
  mode = 'collage'
}: {
  content: Record<string, { title: string; description: string; categoryLabel: string }>;
  categories: Record<string, string>;
  mode?: 'collage' | 'compact';
}) {
  const list = mode === 'compact' ? projects.slice(0, 4) : projects;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      {list.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          copy={content[project.id]}
          categoryText={categories[project.category] ?? project.category}
          mode={mode === 'compact' ? 'compact' : 'collage'}
        />
      ))}
    </div>
  );
}
