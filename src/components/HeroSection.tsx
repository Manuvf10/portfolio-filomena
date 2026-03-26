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
    <section className="border-b border-zinc-200 py-20 md:py-28">
      <div className="container-shell space-y-8">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">{kicker}</p>
        <h1 className="editorial-title max-w-5xl text-5xl leading-[0.94] md:text-8xl">{title}</h1>
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <p className="max-w-xl text-base text-zinc-600">{subtitle}</p>
          <div className="flex gap-3">
            <Link href={quoteHref} className="border border-ink px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-stone">
              {quoteLabel}
            </Link>
            <Link href={workHref} className="text-xs uppercase tracking-[0.2em] text-zinc-600 underline-offset-4 hover:underline">
              {workLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
