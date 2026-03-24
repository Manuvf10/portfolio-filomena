'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="inline-flex items-center gap-2">
      <span className="hidden text-[10px] uppercase tracking-[0.2em] text-zinc-500 lg:block">{label}</span>
      <div className="inline-flex rounded-full border border-zinc-300 bg-white/70 p-1">
        {locales.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => switchLocale(item)}
            className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] transition ${
              locale === item ? 'bg-ink text-stone' : 'text-zinc-600 hover:text-ink'
            }`}
            aria-label={`${label}: ${item}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
