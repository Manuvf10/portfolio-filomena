import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ServiceList } from '@/components/ServiceList';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { createMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);
  return createMetadata(dict.metadata.services.title, dict.metadata.services.description, `/${locale}/services`);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageIntro title={dict.nav.services} description={dict.services.intro} />
      <section className="section-space">
        <div className="container-shell">
          <ServiceList content={dict.services.list} />
        </div>
      </section>
    </>
  );
}
