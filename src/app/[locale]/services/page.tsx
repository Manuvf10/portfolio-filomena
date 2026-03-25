import type { Metadata } from 'next';
import { ServiceList } from '@/components/ServiceList';
import { SectionHeading } from '@/components/SectionHeading';
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
      <section className="section-space border-b border-zinc-300">
        <div className="container-shell grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeading eyebrow="Filomena Studio" title={dict.nav.services} description={dict.services.intro} />
          </div>
          <div className="border border-zinc-300 bg-white p-6 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Cómo trabajamos</p>
            <p className="mt-3 text-sm text-zinc-700">Diagnóstico visual, propuesta estratégica y ejecución de piezas con estándares editoriales.</p>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <ServiceList content={dict.services.list} />
        </div>
      </section>
    </>
  );
}
