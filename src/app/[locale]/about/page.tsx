import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { createMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);
  return createMetadata(dict.metadata.about.title, dict.metadata.about.description, `/${locale}/about`);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageIntro title={dict.nav.about} description={dict.about.intro} />
      <section className="section-space">
        <div className="container-shell grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <p className="max-w-xl text-base leading-relaxed text-zinc-700">{dict.about.lead}</p>
          <div className="grid gap-[6px] sm:grid-cols-2 lg:grid-cols-3">
            {dict.about.principles.map((item) => (
              <article key={item.title} className="border border-zinc-200 bg-white p-5">
                <h3 className="font-serif text-3xl leading-none">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
