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
    <footer className="mt-20 border-t border-zinc-200 bg-ink text-stone">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-4xl leading-none">Filomena</p>
          <p className="mt-4 max-w-sm text-sm text-stone/80">{copy.tagline}</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone/70">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navigationItems.map((item) => (
              <li key={item}>
                <Link href={localizedPath(locale, item === 'home' ? '' : `/${item}`)} className="text-stone/90 hover:text-white">
                  {nav[item]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone/70">Contacto</p>
          <a href={`mailto:${siteSettings.email}`} className="mt-4 block text-sm text-stone/90 hover:text-white">
            {siteSettings.email}
          </a>
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-stone/70">{copy.social}</p>
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
      <div className="border-t border-white/20 py-4 text-center text-xs text-stone/70">
        © {new Date().getFullYear()} {siteSettings.legalName}. {copy.rights}
      </div>
    </footer>
  );
}
