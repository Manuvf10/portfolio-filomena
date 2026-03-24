import type { Service } from '@/content/services';

export function ServiceCard({
  service,
  copy,
  index
}: {
  service: Service;
  copy: { title: string; short: string; description: string; deliverables: string[] };
  index: number;
}) {
  return (
    <article className={`group grid gap-6 border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft md:p-8 ${service.emphasis === 'xl' ? 'md:grid-cols-[1fr_1.1fr]' : 'md:grid-cols-[0.9fr_1.1fr]'}`}>
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{String(index + 1).padStart(2, '0')}</p>
        <p className="mt-3 text-lg text-olive">{service.icon}</p>
        <h3 className="mt-3 font-serif text-3xl leading-tight">{copy.title}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">{copy.short}</p>
      </div>

      <div>
        <p className="text-sm leading-relaxed text-zinc-700">{copy.description}</p>
        <ul className="mt-5 grid gap-2 text-xs uppercase tracking-[0.12em] text-zinc-600 sm:grid-cols-2">
          {copy.deliverables.map((item) => (
            <li key={item} className="border border-zinc-200 bg-stone px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
