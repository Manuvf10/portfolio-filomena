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
    <section className="bg-white">
      <HomeMedia
        primaryAlt={dict.home.mediaAlt}
        secondaryAlt={dict.home.mediaAlt}
        mobileVideoLabel="Vídeo principal de la home"
      />

      <div className="px-6 pt-10 md:px-10 md:pt-12">
        <p className="max-w-[520px] text-[13px] leading-[1.25] text-zinc-700">{dict.home.description}</p>
      </div>

      <div className="px-6 pb-8 pt-20 md:px-10 md:pb-8 md:pt-28">
        <h1 className="text-[42px] leading-none text-ink md:text-[56px]">{dict.home.naming}©</h1>
      </div>
    </section>
  );
}
