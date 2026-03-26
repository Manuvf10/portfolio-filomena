import Link from 'next/link';
import { navigationItems } from '@/content/navigation';
import { siteSettings } from '@/content/settings';
import type { Locale } from '@/i18n/config';
import { localizedPath } from '@/lib/routes';

export function Footer({
  locale,
  nav,
  copy
}: {
  locale: Locale;
  nav: Record<(typeof navigationItems)[number], string>;
  copy: { tagline: string; rights: string; social: string };
}) {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Filomena Club</p>
          <p className="mt-3 max-w-xs text-sm text-zinc-700">{copy.tagline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Navegación</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navigationItems.map((item) => (
              <li key={item}>
                <Link href={localizedPath(locale, item === 'home' ? '' : `/${item}`)}>{nav[item]}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href={`mailto:${siteSettings.email}`} className="block text-sm">
            {siteSettings.email}
          </a>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-500">{copy.social}</p>
          <div className="mt-3 flex gap-4 text-sm">
            <a href={siteSettings.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteSettings.behance} target="_blank" rel="noreferrer">
              Behance
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} {siteSettings.legalName}. {copy.rights}
      </div>
    </footer>
  );
}
