import type { Metadata } from 'next';
import { HomeMedia } from '@/components/HomeMedia';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { createMetadata } from '@/lib/metadata';

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
    <section className="section-space">
      <div className="container-shell space-y-10 md:space-y-14">
        <HomeMedia
          primaryAlt={dict.home.mediaAlt}
          secondaryAlt={dict.home.mediaAlt}
          mobileVideoLabel="Vídeo principal de la home"
        />

        <p className="max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
          {dict.home.description}
        </p>

        <p className="editorial-title max-w-4xl text-5xl md:text-7xl">
          {dict.home.naming}
        </p>
      </div>
    </section>
  );
}