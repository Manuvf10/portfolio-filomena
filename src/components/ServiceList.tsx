import { services } from '@/content/services';
import { ServiceCard } from './ServiceCard';

export function ServiceList({ content }: { content: Record<string, { title: string; short: string; description: string; deliverables: string[] }> }) {
  return (
    <div className="space-y-5 md:space-y-6">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} copy={content[service.id]} index={index} />
      ))}
    </div>
  );
}
