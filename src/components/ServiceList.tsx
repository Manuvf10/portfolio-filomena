import { services } from '@/content/services';
import { ServiceCard } from './ServiceCard';

export function ServiceList({ content }: { content: Record<string, { title: string; description: string }> }) {
  return (
    <div className="grid gap-[2px] bg-zinc-300 md:grid-cols-2">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          index={index}
          icon={service.icon}
          title={content[service.id]?.title ?? service.id}
          description={content[service.id]?.description ?? ''}
        />
      ))}
    </div>
  );
}
