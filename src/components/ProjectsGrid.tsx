import { projects } from '@/content/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6">
      {projects.filter((project) => project.visible !== false).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
