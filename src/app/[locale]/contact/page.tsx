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
  return createMetadata(dict.metadata.contact.title, dict.metadata.contact.description, `/${locale}/contact`);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="section-space">
      <div className="container-shell grid gap-[2px] bg-zinc-300 md:grid-cols-12">
        <div className="bg-ink p-8 text-stone md:col-span-5 md:p-10">
          <SectionHeading eyebrow="Filomena" title={dict.nav.contact} description={dict.contact.intro} inverted />
          <div className="space-y-4 border-t border-stone/20 pt-6 text-sm text-stone/80">
            <p>
              {dict.common.contactEmail}: <a className="underline" href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
            </p>
            <p>{siteSettings.location}</p>
            <p>Respuesta en 48 horas laborables.</p>
          </div>
        </div>
        <div className="bg-stone p-5 md:col-span-7 md:p-10">
          <ContactForm labels={dict.contact.form} />
        </div>
      </div>
    </section>
  );
}
