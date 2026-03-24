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
        kicker={dict.home.kicker}
        title={dict.home.title}
        subtitle={dict.home.subtitle}
        quoteHref={localizedPath(locale, '/contact')}
        quoteLabel={dict.common.requestQuote}
        workHref={localizedPath(locale, '/projects')}
        workLabel={dict.common.viewProjects}
      />

      <section className="section-space border-b border-zinc-200/80">
        <div className="container-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <SectionHeading title={dict.home.introTitle} description={dict.home.introBody} />
          <aside className="border border-zinc-200 bg-white p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Manifesto</p>
            <p className="mt-4 font-serif text-3xl leading-tight">{dict.home.manifestoTitle}</p>
            <p className="mt-4 text-sm text-zinc-700">{dict.home.manifestoBody}</p>
          </aside>
        </div>
      </section>

      <MarqueeBlock />

      <section className="section-space border-b border-zinc-200/80">
        <div className="container-shell">
          <SectionHeading eyebrow="Services" title={dict.home.servicesTitle} description={dict.home.servicesBody} />
          <ServiceList content={dict.services.list} />
        </div>
      </section>

      <section className="section-space border-b border-zinc-200/80">
        <div className="container-shell">
          <SectionHeading eyebrow="Selected work" title={dict.home.projectsTitle} description={dict.home.projectsBody} />
        </div>
        <div className="mt-6 px-[6px]">
          <ProjectsGrid content={dict.projects.list} categories={dict.projects.categories} />
        </div>
      </section>

      <section className="section-space border-b border-zinc-200/80">
        <div className="container-shell">
          <SectionHeading eyebrow="Method" title={dict.home.methodTitle} />
          <div className="grid gap-[6px] md:grid-cols-2 lg:grid-cols-4">
            {dict.home.method.map((step) => (
              <article key={step.label} className="border border-zinc-200 bg-white p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{step.label}</p>
                <p className="mt-3 text-sm text-zinc-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={dict.home.ctaTitle} body={dict.home.ctaBody} href={localizedPath(locale, '/contact')} label={dict.common.requestQuote} />
    </>
  );
}
