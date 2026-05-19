import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ayenantú — Taller de confección a telar chilote',
  description: 'Prendas artesanales de lana virgen tejidas a telar chilote. Tintes naturales, bordado a mano. Quellón, Chiloé, Chile.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
