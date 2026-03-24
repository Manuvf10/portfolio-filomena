import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ProjectsGrid } from '@/components/ProjectsGrid';
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
      <PageIntro title={dict.nav.projects} description={dict.projects.intro} />
      <section className="pb-2 pt-6 md:pb-4 md:pt-8">
        <div className="px-[6px]">
          <ProjectsGrid content={dict.projects.list} categories={dict.projects.categories} />
        </div>
      </section>
    </>
  );
}
