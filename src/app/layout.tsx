import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', display: 'swap', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://filomena.studio'),
  title: 'Filomena',
  description: 'Estudio creativo editorial especializado en branding, contenido y dirección visual.',
  openGraph: {
    title: 'Filomena Creative Studio',
    description: 'Branding, dirección creativa, diseño y contenido para marcas con visión.',
    type: 'website'
  },
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>{children}</body>
    </html>
  );
}
