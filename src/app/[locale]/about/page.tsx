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
        <div className="container-shell grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-zinc-700">
            <p>{dict.about.bodyA}</p>
            <p>{dict.about.bodyB}</p>
          </div>
          <div className="space-y-4">
            {dict.about.values.map((value) => (
              <article key={value.title} className="border border-zinc-200 bg-white p-5">
                <h3 className="font-serif text-2xl">{value.title}</h3>
                <p className="mt-2 text-sm text-zinc-700">{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
