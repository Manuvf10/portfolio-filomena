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
        mobileVideoLabel={dict.home.mobileVideoLabel}
      />

      <div className="container-shell pt-12 md:pt-14">
        <p className="max-w-[620px] text-[15px] leading-[1.35] text-black md:text-[16px]">
          {dict.home.description}
        </p>
      </div>

      <div className="container-shell pb-16 pt-24 md:pb-24 md:pt-32">
        <h1 className="font-sans text-[48px] font-normal leading-none text-black md:text-[68px]">
          Filomena Club Creativo©
        </h1>
      </div>
    </section>
  );
}
