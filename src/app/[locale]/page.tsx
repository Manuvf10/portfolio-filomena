import type { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceList } from '@/components/ServiceList';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { createMetadata } from '@/lib/metadata';
import { localizedPath } from '@/lib/routes';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);
  return createMetadata(dict.metadata.home.title, dict.metadata.home.description, `/${locale}`);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* LAYOUT: Hero principal fácil de reemplazar por propuesta externa. */}
      {/* CONTENIDO: Copys cortos definidos en diccionario. */}
      <HeroSection
        kicker={dict.home.heroKicker}
        title={dict.home.heroTitle}
        subtitle={dict.home.heroSubtitle}
        quoteHref={localizedPath(locale, '/contact')}
        quoteLabel={dict.common.requestQuote}
        workHref={localizedPath(locale, '/projects')}
        workLabel={dict.common.exploreWork}
      />

      {/* LAYOUT: Bloque de servicios minimal con estructura modular. */}
      {/* CONTENIDO: Listado traducible desde i18n/dictionaries.ts. */}
      <section className="section-space border-b border-zinc-200">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={dict.nav.services} title={dict.home.servicesTitle} description={dict.services.intro} />
          <ServiceList content={dict.services.list} />
        </div>
      </section>

      {/* LAYOUT: Galería visual con collage limpio y sin overlays pesados. */}
      {/* CONTENIDO: Títulos y categorías cargados por diccionario. */}
      <section className="section-space">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={dict.nav.projects} title={dict.home.projectsTitle} description={dict.projects.intro} />
          <ProjectsGrid content={dict.projects.list} categories={dict.projects.categories} mode="compact" />
        </div>
      </section>
    </>
  );
}
