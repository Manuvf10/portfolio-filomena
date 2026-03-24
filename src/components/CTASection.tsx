import Link from 'next/link';

export function CTASection({ title, body, href, label }: { title: string; body: string; href: string; label: string }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-shell">
        <div className="relative overflow-hidden border border-zinc-800 bg-ink p-8 text-stone md:p-12">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-olive/30 blur-2xl" aria-hidden />
          <h2 className="editorial-title max-w-4xl text-4xl md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-sm text-stone/85 md:text-base">{body}</p>
          <Link href={href} className="mt-8 inline-flex rounded-full border border-stone px-6 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-stone hover:text-ink">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
