import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { createMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);
  return createMetadata(dict.metadata.club.title, dict.metadata.club.description, `/${locale}/club`);
}

export default async function ClubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageIntro title={dict.nav.club} description={dict.club.intro} />
      <section className="section-space">
        <div className="container-shell">
          <p className="max-w-3xl text-base leading-relaxed text-zinc-700">{dict.club.lead}</p>
          <div className="mt-10 grid gap-[6px] md:grid-cols-3">
            {dict.club.blocks.map((block) => (
              <article key={block.title} className="border border-zinc-200 bg-white p-6">
                <h3 className="font-serif text-3xl leading-none">{block.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700">{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
