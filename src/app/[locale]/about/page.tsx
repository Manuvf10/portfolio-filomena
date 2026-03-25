import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
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
      <section className="section-space border-b border-zinc-300">
        <div className="container-shell grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <SectionHeading eyebrow="Studio Profile" title={dict.nav.about} description={dict.about.intro} />
            <div className="grid gap-4 text-zinc-700 md:grid-cols-2">
              <p>{dict.about.bodyA}</p>
              <p>{dict.about.bodyB}</p>
            </div>
          </div>
          <p className="border-l border-zinc-300 pl-6 text-sm text-zinc-600 md:col-span-4">Filomena opera como estudio colaborativo: un núcleo creativo y una red de especialistas según el alcance de cada proyecto.</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-[2px] bg-zinc-300 md:grid-cols-3">
          {dict.about.values.map((value) => (
            <article key={value.title} className="bg-white p-6">
              <h3 className="font-serif text-3xl">{value.title}</h3>
              <p className="mt-3 text-sm text-zinc-700">{value.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
