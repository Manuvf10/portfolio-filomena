import Image from 'next/image';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);

  const services = [
    {
      key: 'photo-retouching',
      customTitle: locale === 'es' ? 'Retoque fotográfico' : 'Photo retouching'
    },
    {
      key: 'content-creation',
      customTitle: locale === 'es' ? 'Contenido y vídeo' : 'Content & video'
    },
    {
      key: 'web-design',
      customTitle: locale === 'es' ? 'Diseño web' : 'Web design'
    },
    {
      key: 'social-media-design',
      customTitle: locale === 'es' ? 'Redes sociales' : 'Social media'
    },
    {
      key: 'branding',
      customTitle: 'Branding'
    },
    {
      key: 'creative-direction',
      customTitle: locale === 'es' ? 'Dirección creativa' : 'Creative direction'
    },
    {
      key: 'graphic-design',
      customTitle: locale === 'es' ? 'A medida' : 'Tailored solutions'
    }
  ];

  return (
    <section className="bg-stone pt-10 pb-8 md:pt-12 md:pb-10">
      <div className="mx-auto w-full max-w-[1600px] px-8 md:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="space-y-12 md:space-y-16">
            <div className="w-[260px] md:w-[320px] lg:w-[360px]">
            <Image
              src="/images/services/que-hacemos.jpg"
              alt={locale === 'es' ? 'Imagen de Qué hacemos' : 'What we do image'}
              width={760}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

            <div className="max-w-[560px]">
              <h1 className="text-[4.2rem] leading-[0.94] tracking-[-0.03em] md:text-[4.35rem]">
                {locale === 'es' ? 'Qué hacemos como agencia creativa' : 'What we do as a creative agency'}
              </h1>
            </div>

            <div className="space-y-6 pt-2">
              <p className="text-center text-[14px] leading-none text-zinc-900">
                {locale === 'es' ? 'Servicios' : 'Services'}
              </p>

              <div className="border-t border-zinc-500">
                {services.map((service) => {
                  const item = dict.services.list[service.key];

                  return (
                    <div
                      key={service.key}
                      className="grid grid-cols-[170px_minmax(0,1fr)] gap-14 border-b border-zinc-500 py-7"
                    >
                      <div className="max-w-[130px] text-[15px] leading-[1.05]">
                        {service.customTitle}
                      </div>

                      <div className="max-w-[760px] text-[15px] leading-[1.35] text-zinc-900">
                        {item?.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}