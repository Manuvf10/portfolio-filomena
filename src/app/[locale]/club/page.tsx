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
        <div className="container-shell grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <p className="max-w-2xl text-zinc-700">{dict.club.body}</p>
          <ul className="space-y-3 border border-zinc-200 bg-white p-6 text-sm text-zinc-700">
            {dict.club.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
