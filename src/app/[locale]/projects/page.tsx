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
    <>
      <section className="border-b border-zinc-300 bg-ink py-16 text-stone md:py-24">
        <div className="container-shell grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeading eyebrow="Filomena Portfolio" title={dict.nav.projects} description={dict.projects.intro} inverted />
          </div>
          <div className="space-y-2 border-t border-stone/20 pt-5 text-xs uppercase tracking-[0.2em] text-stone/80 md:col-span-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <p>Branding</p>
            <p>Creative Direction</p>
            <p>Content & Motion</p>
            <p>Web & Social Design</p>
          </div>
        </div>
      </section>

      <section className="pb-2 pt-2">
        <ProjectsGrid content={dict.projects.list} categories={dict.projects.categories} mode="collage" />
      </section>
    </>
  );
}
