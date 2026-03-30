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
      <div className="container-shell space-y-10 md:space-y-14">
        {/* LAYOUT: En desktop se usa imagen estática de referencia para facilitar el reemplazo con diseño final. */}
        <div className="hidden md:block">
          <Image
            src="/images/placeholders/hero-editorial.svg"
            alt={dict.home.mediaAlt}
            width={1600}
            height={980}
            className="h-auto w-full border border-zinc-200"
            priority
          />
        </div>

        {/* LAYOUT: En mobile se usa vídeo tal como pide el diseño (ruta fácil de sustituir). */}
        {/* MEDIA: Reemplazar /videos/home-mobile.mp4 cuando llegue el máster final de cliente. */}
        <div className="md:hidden">
          <video
            className="h-auto w-full border border-zinc-200"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/placeholders/hero-editorial.svg"
          >
            <source src="/videos/home-mobile.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CONTENIDO EDITABLE: Texto principal i18n desde diccionario ES/EN. */}
        <p className="max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">{dict.home.description}</p>

        <p className="editorial-title max-w-4xl text-5xl md:text-7xl">{dict.home.naming}</p>
      </div>
    </section>
  );
}
