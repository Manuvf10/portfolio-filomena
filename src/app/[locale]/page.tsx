import Image from 'next/image';
import type { Metadata } from 'next';
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
      <div className="container-shell space-y-12 md:space-y-16">
        {/* LAYOUT PRINCIPAL DESKTOP: composición editorial de dos imágenes estáticas como en PDF. */}
        <div className="hidden gap-6 md:grid md:grid-cols-12">
          <div className="md:col-span-7">
            <Image
              src="/images/placeholders/hero-editorial.svg"
              alt={dict.home.mediaAltPrimary}
              width={1200}
              height={1400}
              className="h-[72vh] min-h-[560px] w-full object-cover"
              priority
            />
          </div>
          <div className="md:col-span-5">
            <Image
              src="/images/projects/project-04.svg"
              alt={dict.home.mediaAltSecondary}
              width={900}
              height={1200}
              className="h-[72vh] min-h-[560px] w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* MEDIA MOBILE: vídeo real de cliente en ruta estable para HOME mobile. */}
        <div className="md:hidden">
          <video className="h-auto w-full" autoPlay muted loop playsInline preload="metadata" poster="/images/projects/project-02.svg">
            <source src="/videos/home-mobile.mp4" type="video/mp4" />
          </video>
        </div>

        {/* TEXTO EDITABLE: copy principal gestionado desde diccionario ES/EN. */}
        <p className="max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">{dict.home.description}</p>

        <p className="editorial-title max-w-5xl text-6xl md:text-8xl">{dict.home.naming}</p>
      </div>
    </section>
  );
}
