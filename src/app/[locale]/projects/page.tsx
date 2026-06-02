import type { Metadata } from 'next';
import { ProjectsCollage } from '@/components/ProjectsCollage';
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
      <div className="container-shell space-y-6 md:space-y-8">
        <div className="flex justify-end">
          <h1 className="font-sans text-4xl font-medium leading-none text-ink md:text-6xl">{dict.nav.projects}</h1>
        </div>
        <ProjectsCollage />
      </div>
    </section>
  );
}
