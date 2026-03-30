'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
};

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const pathForLocale = (nextLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    return segments.join('/') || `/${nextLocale}`;
  };

  return (
    <div className={className} aria-label="Language selector">
      {locales.map((item, index) => (
        <span key={item}>
          <Link href={pathForLocale(item)} className={item === locale ? 'text-ink' : 'text-zinc-500'}>
            {item.toUpperCase()}
          </Link>
          {index < locales.length - 1 ? <span className="mx-2 text-zinc-400">|</span> : null}
        </span>
      ))}
    </div>
  );
}
