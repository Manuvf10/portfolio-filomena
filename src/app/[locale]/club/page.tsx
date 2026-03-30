import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import { siteSettings } from '@/content/settings';
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
      <div className="container-shell space-y-14 md:space-y-16">
        {/* LAYOUT: Club Filomena integra bloque institucional + bloque de contacto para futuras iteraciones de diseño. */}
        <SectionHeading eyebrow="Filomena Club Creativo" title={dict.nav.club} description={dict.club.intro} />
        <p className="max-w-3xl text-zinc-700">{dict.club.body}</p>

        <div className="grid gap-10 border-t border-zinc-200 pt-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-7">
            <h2 className="font-serif text-4xl">{dict.club.aboutTitle}</h2>
            <p className="text-zinc-700">{dict.club.aboutBodyA}</p>
            <p className="text-zinc-700">{dict.club.aboutBodyB}</p>
          </div>
          <ul className="space-y-4 md:col-span-5">
            {dict.club.bullets.map((bullet) => (
              <li key={bullet} className="border-b border-zinc-200 pb-3 text-sm text-zinc-700">
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-10 border-t border-zinc-200 pt-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-4">
            <h2 className="font-serif text-3xl">{dict.club.contactTitle}</h2>
            <p className="text-sm text-zinc-600">{dict.contact.intro}</p>
            <p className="text-sm text-zinc-600">
              {dict.common.contactEmail}:{' '}
              <a className="underline" href={`mailto:${siteSettings.email}`}>
                {siteSettings.email}
              </a>
            </p>
            <p className="text-sm text-zinc-600">{siteSettings.location}</p>
          </div>
          <div className="md:col-span-8">
            <ContactForm labels={dict.contact.form} />
          </div>
        </div>
      </div>
    </section>
  );
}
