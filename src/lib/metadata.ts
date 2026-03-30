import type { Metadata } from 'next';
import { siteSettings } from '@/content/settings';

export function createMetadata(title: string, description: string, path: string): Metadata {
  const url = `https://filomena.club${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: siteSettings.legalName
    },
    alternates: {
      canonical: url
    }
  };
}
