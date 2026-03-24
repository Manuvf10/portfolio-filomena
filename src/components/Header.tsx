'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigationItems } from '@/content/navigation';
import type { Locale } from '@/i18n/config';
import { localizedPath } from '@/lib/routes';
import { LanguageSwitcher } from './LanguageSwitcher';

type HeaderProps = {
  locale: Locale;
  nav: Record<(typeof navigationItems)[number], string>;
  languageLabel: string;
  quoteLabel: string;
};

export function Header({ locale, nav, languageLabel, quoteLabel }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-300/60 bg-stone/85 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href={localizedPath(locale)} className="font-serif text-[1.9rem] leading-none tracking-tight">
          Filomena
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link key={item} href={localizedPath(locale, item === 'home' ? '' : `/${item}`)} className="text-xs uppercase tracking-[0.17em] text-zinc-700 hover:text-ink">
              {nav[item]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher locale={locale} label={languageLabel} />
          <Link href={localizedPath(locale, '/contact')} className="rounded-full border border-ink px-4 py-2 text-[11px] uppercase tracking-[0.18em] hover:bg-ink hover:text-stone">
            {quoteLabel}
          </Link>
        </div>

        <button className="md:hidden text-xs uppercase tracking-[0.2em]" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav">
          Menú
        </button>
      </div>

      <div id="mobile-nav" className={`${open ? 'block' : 'hidden'} border-t border-zinc-200 bg-stone md:hidden`}>
        <div className="container-shell space-y-4 py-5">
          <nav className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <Link
                key={item}
                href={localizedPath(locale, item === 'home' ? '' : `/${item}`)}
                className="text-sm"
                onClick={() => setOpen(false)}
              >
                {nav[item]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-2 border-t border-zinc-200 pt-4">
            <LanguageSwitcher locale={locale} label={languageLabel} />
            <Link href={localizedPath(locale, '/contact')} className="rounded-full bg-ink px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-stone">
              {quoteLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
