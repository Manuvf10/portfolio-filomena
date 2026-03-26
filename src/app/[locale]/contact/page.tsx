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
      <div className="container-shell grid gap-12 md:grid-cols-12">
        {/* LAYOUT: Columna editorial de contexto. */}
        {/* CONTENIDO: Datos directos de contacto y tiempos de respuesta. */}
        <div className="space-y-6 md:col-span-4">
          <SectionHeading eyebrow="Filomena Club" title={dict.nav.contact} description={dict.contact.intro} />
          <p className="text-sm text-zinc-600">
            {dict.common.contactEmail}: <a className="underline" href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
          </p>
          <p className="text-sm text-zinc-600">{siteSettings.location}</p>
        </div>

        {/* LAYOUT: Formulario limpio pensado para ser restilizado desde diseños externos. */}
        {/* CONTENIDO: Etiquetas y mensajes definidos por idioma. */}
        <div className="md:col-span-8">
          <ContactForm labels={dict.contact.form} />
        </div>
      </div>
    </section>
  );
}
