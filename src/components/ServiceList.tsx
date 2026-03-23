import { services } from '@/content/services';
import { ServiceCard } from './ServiceCard';

export function ServiceList({ content }: { content: Record<string, { title: string; description: string }> }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          icon={service.icon}
          title={content[service.id]?.title ?? service.id}
          description={content[service.id]?.description ?? ''}
        />
      ))}
    </div>
  );
}
