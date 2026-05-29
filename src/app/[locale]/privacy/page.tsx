import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Política de Privacidad / Privacy Policy' };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const es = locale === 'es';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-sm text-charcoal">
      <h1 className="text-3xl font-heading text-green-dark mb-8">
        {es ? 'Política de Privacidad' : 'Privacy Policy'}
      </h1>

      {es ? (
        <>
          <p>En Ayenantú, Quellón, Chiloé, respetamos tu privacidad. Esta política explica cómo tratamos tu información personal.</p>
          <h2>Datos que recopilamos</h2>
          <p>Cuando nos contactas a través del formulario de contacto, recopilamos tu nombre, correo electrónico y mensaje. Cuando realizas una compra, el pago es procesado directamente por MercadoPago — no almacenamos datos de tarjetas ni información bancaria.</p>
          <h2>Uso de la información</h2>
          <p>Usamos tu información únicamente para responder tus consultas y gestionar tus pedidos. No vendemos ni compartimos tu información con terceros, salvo con MercadoPago para el procesamiento de pagos.</p>
          <h2>Contacto</h2>
          <p>Si tienes preguntas sobre esta política, escríbenos a ayenantu@gmail.com.</p>
        </>
      ) : (
        <>
          <p>At Ayenantú, Quellón, Chiloé, we respect your privacy. This policy explains how we handle your personal information.</p>
          <h2>Data we collect</h2>
          <p>When you contact us via the contact form, we collect your name, email address and message. When you make a purchase, payment is processed directly by MercadoPago — we do not store card details or banking information.</p>
          <h2>Use of information</h2>
          <p>We use your information solely to respond to enquiries and manage your orders. We do not sell or share your information with third parties, except with MercadoPago for payment processing.</p>
          <h2>Contact</h2>
          <p>If you have questions about this policy, write to us at ayenantu@gmail.com.</p>
        </>
      )}
    </div>
  );
}
