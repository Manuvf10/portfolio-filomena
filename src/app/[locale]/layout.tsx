import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { defaultLocale, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: incomingLocale } = await params;
  const locale: Locale = isLocale(incomingLocale) ? incomingLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} nav={dict.nav} languageLabel={dict.languageLabel} quoteLabel={dict.common.requestQuote} />
      <main>{children}</main>
      <Footer locale={locale} nav={dict.nav} copy={dict.footer} />
    </>
  );
}
