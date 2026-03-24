import { SectionHeading } from './SectionHeading';

export function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <section className="border-b border-zinc-200/80 py-16 md:py-20">
      <div className="container-shell">
        <SectionHeading eyebrow="Filomena Studio" title={title} description={description} />
      </div>
    </section>
  );
}
