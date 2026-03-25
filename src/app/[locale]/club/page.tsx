import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
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
    <section className="section-space">
      <div className="container-shell grid gap-[2px] bg-zinc-300 md:grid-cols-12">
        <div className="bg-stone p-7 md:col-span-7 md:p-10">
          <SectionHeading eyebrow="Community" title={dict.nav.club} description={dict.club.intro} />
          <p className="max-w-2xl text-zinc-700">{dict.club.body}</p>
        </div>
        <ul className="space-y-3 bg-ink p-7 text-sm text-stone/90 md:col-span-5 md:p-10">
          {dict.club.bullets.map((bullet) => (
            <li key={bullet} className="border-b border-stone/15 pb-3">{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
