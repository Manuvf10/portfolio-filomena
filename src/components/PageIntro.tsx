import { SectionHeading } from './SectionHeading';

type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="section-space border-b border-zinc-200/70">
      <div className="container-shell">
        <SectionHeading eyebrow="Filomena" title={title} description={description} />
      </div>
    </section>
  );
}
