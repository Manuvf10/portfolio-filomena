import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
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
    <section className="section-space">
      <div className="container-shell space-y-10">
        {/* LAYOUT: Encabezado + lista para poder intercambiar estilo rápidamente. */}
        {/* CONTENIDO: Intro y textos vienen del diccionario. */}
        <SectionHeading eyebrow="Filomena Club" title={dict.nav.services} description={dict.services.intro} />
        <ServiceList content={dict.services.list} />
      </div>
    </section>
  );
}
