import { projects } from '@/content/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid({
  content,
  categories
}: {
  content: Record<string, { title: string; description: string; categoryLabel: string }>;
  categories: Record<string, string>;
}) {
  return (
    <div className="columns-1 gap-5 space-y-5 md:columns-2 xl:columns-3">
      {projects.map((project) => (
        <div key={project.id} className="break-inside-avoid">
          <ProjectCard
            project={project}
            copy={content[project.id]}
            categoryText={categories[project.category] ?? project.category}
          />
        </div>
      ))}
    </div>
  );
}
