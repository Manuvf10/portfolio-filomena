import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { PageIntro } from '@/components/PageIntro';
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
    <>
      <PageIntro title={dict.nav.contact} description={dict.contact.intro} />
      <section className="section-space">
        <div className="container-shell grid gap-10 md:grid-cols-2">
          <ContactForm labels={dict.contact.form} />
          <aside className="space-y-5 text-sm text-zinc-700">
            <p>
              {dict.common.contactEmail}: <a className="underline" href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
            </p>
            <p>{siteSettings.location}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
