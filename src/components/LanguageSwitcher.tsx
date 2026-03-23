'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (nextLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/') || `/${nextLocale}`);
  };

  return (
    <label className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-700">
      <span>{label}</span>
      <select
        className="border border-zinc-300 bg-transparent px-2 py-1 text-xs uppercase"
        value={locale}
        onChange={(event) => onChange(event.target.value)}
        aria-label={label}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
