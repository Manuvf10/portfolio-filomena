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
};

export function Header({ locale, nav }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-stone/95">
      <div className="container-shell grid h-20 grid-cols-[1fr_auto] items-center md:grid-cols-3">
        <Link href={localizedPath(locale)} className="font-serif text-2xl tracking-tight">
          Filomena Club Creativo
        </Link>

        <div className="hidden justify-center md:flex">
          <nav className="flex items-center gap-8" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <Link key={item} href={localizedPath(locale, `/${item}`)} className="text-sm text-zinc-700 hover:text-ink">
                {nav[item]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden justify-end md:flex">
          <LanguageSwitcher locale={locale} className="text-xs uppercase tracking-[0.24em]" />
        </div>

        <button
          className="justify-self-end text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      <div id="mobile-nav" className={`${open ? 'block' : 'hidden'} border-t border-zinc-200 bg-stone md:hidden`}>
        <nav className="container-shell flex min-h-[58vh] flex-col justify-between py-8" aria-label="Mobile navigation">
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item}
                href={localizedPath(locale, `/${item}`)}
                className="block py-1 text-2xl font-medium"
                onClick={() => setOpen(false)}
              >
                {nav[item]}
              </Link>
            ))}
          </div>
          <LanguageSwitcher locale={locale} className="pt-10 text-xs uppercase tracking-[0.24em]" />
        </nav>
      </div>
    </header>
  );
}
