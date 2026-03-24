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

  const serviceOptions = Object.values(dict.services.list).map((service) => service.title);

  return (
    <>
      <PageIntro title={dict.nav.contact} description={dict.contact.intro} />
      <section className="section-space">
        <div className="container-shell grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
          <aside className="space-y-6 md:sticky md:top-28 md:self-start">
            <p className="font-serif text-4xl leading-tight">{dict.contact.lead}</p>
            <div className="space-y-2 border border-zinc-200 bg-white p-5 text-sm text-zinc-700">
              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{dict.common.contactEmail}</p>
              <a href={`mailto:${siteSettings.email}`} className="underline">
                {siteSettings.email}
              </a>
              <p>{siteSettings.location}</p>
            </div>
          </aside>

          <ContactForm labels={dict.contact.form} serviceOptions={serviceOptions} />
        </div>
      </section>
    </>
  );
}
