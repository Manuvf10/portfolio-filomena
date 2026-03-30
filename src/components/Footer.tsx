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
      <div className="container-shell grid gap-8 py-10 text-sm md:grid-cols-[2fr_1fr_1fr] md:py-12">
        <div>
          <p className="font-serif text-2xl">Filomena Club Creativo</p>
          <p className="mt-2 max-w-sm text-zinc-600">{copy.tagline}</p>
        </div>
        <div className="space-y-1 text-zinc-700">
          {navigationItems.map((item) => (
            <Link key={item} href={localizedPath(locale, `/${item}`)} className="block w-fit hover:text-ink">
              {nav[item]}
            </Link>
          ))}
        </div>
        <div className="space-y-1 text-zinc-700">
          <a href={`mailto:${siteSettings.email}`} className="block w-fit hover:text-ink">
            {siteSettings.email}
          </a>
          <a href={siteSettings.instagram} target="_blank" rel="noreferrer" className="block w-fit hover:text-ink">
            Instagram
          </a>
          <a href={siteSettings.behance} target="_blank" rel="noreferrer" className="block w-fit hover:text-ink">
            Behance
          </a>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-3 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteSettings.legalName}. {copy.rights}
      </div>
    </footer>
  );
}
