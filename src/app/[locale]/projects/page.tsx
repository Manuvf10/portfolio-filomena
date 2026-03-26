import type { Metadata } from 'next';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { SectionHeading } from '@/components/SectionHeading';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { createMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);
  return createMetadata(dict.metadata.projects.title, dict.metadata.projects.description, `/${locale}/projects`);
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="section-space">
      <div className="container-shell space-y-10">
        {/* LAYOUT: Intro + collage para mantener protagonismo visual de imágenes. */}
        {/* CONTENIDO: Data y textos desacoplados en content + diccionario. */}
        <SectionHeading eyebrow="Filomena Club" title={dict.nav.projects} description={dict.projects.intro} />
        <ProjectsGrid content={dict.projects.list} categories={dict.projects.categories} mode="collage" />
      </div>
    </section>
  );
}
