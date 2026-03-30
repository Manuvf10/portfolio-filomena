import { redirect } from 'next/navigation';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { localizedPath } from '@/lib/routes';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;

  redirect(localizedPath(locale, '/club'));
}
