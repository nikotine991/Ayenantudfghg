import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ayenantu.cl'),
  title: {
    default: 'Ayenantú — Taller de confección a telar chilote',
    template: '%s | Ayenantú'
  },
  description: 'Prendas artesanales de lana virgen tejidas a telar chilote. Tintes naturales, bordado a mano. Desde Quellón, Chiloé, Chile.',
  keywords: ['lana virgen', 'telar chilote', 'artesanía Chiloé', 'ponchos lana', 'abrigos lana', 'ropa artesanal Chile', 'Quellón', 'Chiloé'],
  openGraph: {
    type: 'website',
    siteName: 'Ayenantú',
    title: 'Ayenantú — Taller de confección a telar chilote',
    description: 'Prendas artesanales de lana virgen tejidas a telar chilote. Tintes naturales, bordado a mano. Quellón, Chiloé.',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Ayenantú — Tejidos artesanales de Chiloé' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayenantú — Taller de confección a telar chilote',
    description: 'Prendas artesanales de lana virgen. Tintes naturales, bordado a mano. Quellón, Chiloé.',
    images: ['/images/hero.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
