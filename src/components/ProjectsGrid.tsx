import { projects } from '@/content/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid({ content, categories }: { content: Record<string, { title: string; description: string }>; categories: Record<string, string> }) {
  return (
    <div className="grid grid-cols-1 gap-[6px] md:auto-rows-[280px] md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} copy={content[project.id]} categoryText={categories[project.category] ?? project.category} />
      ))}
    </div>
  );
}
