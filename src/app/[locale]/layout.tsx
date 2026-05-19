import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { CartProvider } from '@/components/CartProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
