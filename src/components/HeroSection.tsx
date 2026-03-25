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
    <section className="border-b border-zinc-300 bg-stone py-14 md:py-20">
      <div className="container-shell grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.24em] text-olive">{kicker}</p>
          <h1 className="editorial-title mt-5 max-w-5xl text-[2.9rem] leading-[0.92] md:text-8xl">{title}</h1>
        </div>

        <aside className="space-y-6 border-t border-zinc-300 pt-6 md:col-span-4 md:border-l md:border-t-0 md:pl-7 md:pt-0">
          <p className="text-base text-zinc-700">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={quoteHref} className="bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-stone hover:bg-olive">
              {quoteLabel}
            </Link>
            <Link href={workHref} className="border border-ink px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-stone">
              {workLabel}
            </Link>
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Fashion · Lifestyle · Creative Business</p>
        </aside>
      </div>
    </section>
  );
}
