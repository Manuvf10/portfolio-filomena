import type { Locale } from '@/i18n/config';

export function localizedPath(locale: Locale, slug = ''): string {
  return `/${locale}${slug}`;
}
