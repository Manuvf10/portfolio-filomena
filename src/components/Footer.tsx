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
    <footer className="border-t border-zinc-200 bg-stone">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-3 md:py-16">
        <div>
          <p className="font-serif text-2xl">Filomena Club Creativo</p>
          <p className="mt-3 max-w-xs text-sm text-zinc-600">{copy.tagline}</p>
        </div>
        <div className="space-y-2 text-sm text-zinc-700">
          {navigationItems.map((item) => (
            <Link key={item} href={localizedPath(locale, `/${item}`)} className="block w-fit hover:text-ink">
              {nav[item]}
            </Link>
          ))}
        </div>
        <div className="space-y-2 text-sm">
          <a href={`mailto:${siteSettings.email}`} className="block w-fit text-zinc-700 hover:text-ink">
            {siteSettings.email}
          </a>
          <div className="flex gap-4 text-zinc-700">
            <a href={siteSettings.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteSettings.behance} target="_blank" rel="noreferrer">
              Behance
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteSettings.legalName}. {copy.rights}
      </div>
    </footer>
  );
}
