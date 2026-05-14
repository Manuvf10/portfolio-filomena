import { projects } from '@/content/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-3 gap-1 md:grid-cols-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
