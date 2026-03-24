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
    <section className="relative overflow-hidden border-b border-zinc-200/80 pt-14 md:pt-20">
      <div className="absolute -left-20 top-20 h-48 w-48 rounded-full bg-olive/10 blur-3xl" aria-hidden />
      <div className="container-shell grid gap-12 pb-14 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-olive">{kicker}</p>
          <h1 className="editorial-title mt-6 max-w-4xl text-5xl leading-[0.92] md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-700">{subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={quoteHref} className="rounded-full bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-stone hover:bg-olive">
              {quoteLabel}
            </Link>
            <Link href={workHref} className="rounded-full border border-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-stone">
              {workLabel}
            </Link>
          </div>
        </div>

        <aside className="grid gap-3 self-stretch border border-zinc-200 bg-white p-5 md:p-7">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Filomena / Studio Notes</p>
          <p className="font-serif text-3xl leading-tight md:text-4xl">Direction-first visual systems.</p>
          <div className="mt-auto grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.14em] text-zinc-600">
            <span className="border border-zinc-200 p-3">Branding</span>
            <span className="border border-zinc-200 p-3">Creative Direction</span>
            <span className="border border-zinc-200 p-3">Content</span>
            <span className="border border-zinc-200 p-3">Web</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
