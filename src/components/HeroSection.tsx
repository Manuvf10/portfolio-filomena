import Link from 'next/link';

type HeroSectionProps = {
  kicker: string;
  title: string;
  subtitle: string;
  quoteHref: string;
  quoteLabel: string;
  workHref: string;
  workLabel: string;
};

export function HeroSection({ kicker, title, subtitle, quoteHref, quoteLabel, workHref, workLabel }: HeroSectionProps) {
  return (
    <section className="section-space border-b border-zinc-200/70">
      <div className="container-shell">
        <p className="text-xs uppercase tracking-[0.2em] text-olive">{kicker}</p>
        <h1 className="editorial-title mt-4 max-w-4xl text-5xl md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base text-zinc-700 md:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={quoteHref} className="bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-stone hover:bg-olive">
            {quoteLabel}
          </Link>
          <Link href={workHref} className="border border-ink px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-stone">
            {workLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
