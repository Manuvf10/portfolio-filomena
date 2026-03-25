import type { Metadata } from 'next';
import { CTASection } from '@/components/CTASection';
import { HeroSection } from '@/components/HeroSection';
import { MarqueeBlock } from '@/components/MarqueeBlock';
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
      <HeroSection
        kicker={dict.home.heroKicker}
        title={dict.home.heroTitle}
        subtitle={dict.home.heroSubtitle}
        quoteHref={localizedPath(locale, '/contact')}
        quoteLabel={dict.common.requestQuote}
        workHref={localizedPath(locale, '/projects')}
        workLabel={dict.common.exploreWork}
      />

      <section className="border-b border-zinc-300 py-10">
        <div className="container-shell">
          <MarqueeBlock />
        </div>
      </section>

      <section className="section-space border-b border-zinc-300">
        <div className="container-shell grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeading eyebrow="Filomena" title={dict.home.introTitle} description={dict.home.introBody} />
          </div>
          <div className="border border-zinc-300 bg-white/70 p-6 md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Creative Studio Notes</p>
            <p className="mt-3 font-serif text-3xl leading-tight">Dirección estética sólida, ejecución precisa y foco comercial.</p>
          </div>
        </div>
      </section>

      <section className="section-space border-b border-zinc-300">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={dict.nav.services} title={dict.home.servicesTitle} description={dict.home.servicesIntro} />
          <ServiceList content={dict.services.list} />
        </div>
      </section>

      <section className="section-space border-b border-zinc-300">
        <div className="container-shell space-y-10">
          <SectionHeading eyebrow={dict.nav.projects} title={dict.home.projectsTitle} description={dict.home.projectsIntro} />
          <ProjectsGrid content={dict.projects.list} categories={dict.projects.categories} mode="compact" />
        </div>
      </section>

      <CTASection title={dict.home.ctaTitle} body={dict.home.ctaBody} href={localizedPath(locale, '/contact')} label={dict.common.requestQuote} />
    </>
  );
}
