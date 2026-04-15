import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://filomena.club'),
  title: 'Filomena Club Creativo',
  description: 'Agencia creativa especializada en soluciones 360° en diseño y creación de contenido.',
  openGraph: {
    title: 'Filomena Club Creativo',
    description: 'Creative agency specialized in 360° design and content creation solutions.',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}