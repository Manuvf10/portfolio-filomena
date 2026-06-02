import Image from 'next/image';
import type { Metadata } from 'next';
import { ClubSignupForm } from '@/components/ClubSignupForm';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { createMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);
  return createMetadata(dict.metadata.club.title, dict.metadata.club.description, `/${locale}/club`);
}

export default async function ClubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;

  const isSpanish = locale === 'es';
  const paragraphs = isSpanish
    ? [
        'Somos gente que hace cosas.',
        'Club es nuestro punto de encuentro: un espacio donde creativos de distintas disciplinas se juntan para crear, colaborar y darle forma a ideas que merecen la pena.',
        'Nos movemos por intuición, criterio y ganas.',
        'Nos gusta trabajar con personas que tienen algo que decir y saben cómo hacerlo.',
        'Cada proyecto es una oportunidad para conectar perfiles distintos y construir algo sólido.',
        'Si esto te suena, estás dentro.',
        'Únete al Club rellenando el formulario y cuéntanos quién eres.',
        'Contamos contigo para los próximos proyectos que vayan surgiendo.'
      ]
    : [
        'We are people who make things.',
        'Club is our meeting point: a space where creatives from different disciplines come together to grow, collaborate and shape ideas worth building.',
        'We move with intuition, criteria and appetite. We like working with people who have something to say and know how to say it.',
        'Every project is an opportunity to connect different profiles and build something solid.',
        'If this sounds like you, you are in.',
        'Join the Club by filling in the form and tell us who you are. We will contact you for upcoming projects as they arise.'
      ];

  const formLabels = isSpanish
    ? {
        name: 'Nombre',
        email: 'E-mail',
        dedication: '¿A qué te dedicas?',
        portfolio: 'Portfolio / trabajo',
        about: 'Cuéntanos sobre ti',
        submit: 'Únete al club',
        loading: 'Enviando',
        success: 'Gracias. Te responderemos pronto.',
        error: 'No se pudo enviar. Inténtalo de nuevo.'
      }
    : {
        name: 'Name',
        email: 'E-mail',
        dedication: 'What do you do?',
        portfolio: 'Portfolio / work',
        about: 'Tell us about you',
        submit: 'Join the club',
        loading: 'Sending',
        success: 'Thanks. We will reply soon.',
        error: 'Could not send the form. Please try again.'
      };

  return (
    <section className="bg-white">
      <div className="container-shell">
        <div className="grid md:min-h-[560px] md:grid-cols-2">
          <div className="-mx-6 md:mx-0">
            <Image
              src="/images/club/hero.jpg"
              alt={isSpanish ? 'Imagen del Club Filomena' : 'Club Filomena image'}
              width={1200}
              height={1500}
              className="h-[360px] w-full object-cover object-top md:h-full"
              priority
            />
          </div>

          <div className="flex flex-col justify-end pb-10 pt-10 md:pb-16 md:pl-16 md:pt-24">
            <h1 className="mb-12 text-right font-sans text-[34px] font-normal leading-none md:mb-16 md:text-[42px]">
              {isSpanish ? 'El Club' : 'The Club'}
            </h1>

            <div className="max-w-[560px] space-y-4 text-[13px] leading-[1.22] text-black md:text-[14px]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <ClubSignupForm labels={formLabels} />

        <div className="pb-8 pt-24 md:pb-10 md:pt-32">
          <p className="font-sans text-[42px] font-normal leading-none text-black md:text-[56px]">Filomena Club Creativo©</p>
        </div>
      </div>
    </section>
  );
}
