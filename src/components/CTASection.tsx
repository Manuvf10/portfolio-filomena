import Link from 'next/link';

export function CTASection({ title, body, href, label }: { title: string; body: string; href: string; label: string }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="border border-ink bg-ink p-10 text-stone">
          <h2 className="editorial-title text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-stone/90">{body}</p>
          <Link href={href} className="mt-8 inline-flex border border-stone px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-stone hover:text-ink">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
