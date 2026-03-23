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
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-stone/90 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href={localizedPath(locale)} className="font-serif text-2xl tracking-tight">
          Filomena
        </Link>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav">
          Menú
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link key={item} href={localizedPath(locale, item === 'home' ? '' : `/${item}`)} className="text-sm text-zinc-700 hover:text-ink">
              {nav[item]}
            </Link>
          ))}
          <Link
            href={localizedPath(locale, '/contact')}
            className="border border-ink px-4 py-2 text-xs uppercase tracking-[0.15em] hover:bg-ink hover:text-stone"
          >
            {quoteLabel}
          </Link>
          <LanguageSwitcher locale={locale} label={languageLabel} />
        </nav>
      </div>

      <div id="mobile-nav" className={`${open ? 'block' : 'hidden'} border-t border-zinc-200 bg-stone md:hidden`}>
        <nav className="container-shell flex flex-col py-4">
          {navigationItems.map((item) => (
            <Link
              key={item}
              href={localizedPath(locale, item === 'home' ? '' : `/${item}`)}
              className="py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {nav[item]}
            </Link>
          ))}
          <div className="pt-3">
            <LanguageSwitcher locale={locale} label={languageLabel} />
          </div>
        </nav>
      </div>
    </header>
  );
}
