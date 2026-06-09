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
    <section className="bg-white pt-12 md:pt-16">
      <div className="w-full">
        <div className="flex justify-end px-6 pb-16 md:px-10 md:pb-24">
          <h1 className="font-sans text-[34px] font-normal leading-none text-ink md:text-[48px]">{dict.nav.projects}</h1>
        </div>
        <ProjectsCollage />
      </div>
    </section>
  );
}
