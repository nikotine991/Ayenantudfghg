import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Política de Devoluciones / Return Policy' };
}

export default async function ReturnsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const es = locale === 'es';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-sm text-charcoal">
      <h1 className="text-3xl font-heading text-green-dark mb-8">
        {es ? 'Política de Devoluciones' : 'Return Policy'}
      </h1>

      {es ? (
        <>
          <p>De acuerdo con la Ley del Consumidor N° 19.496 de Chile, tienes derecho a retracto.</p>
          <h2>Plazo de devolución</h2>
          <p>Tienes <strong>10 días hábiles</strong> desde la recepción del producto para solicitar una devolución.</p>
          <h2>Condiciones</h2>
          <ul>
            <li>La prenda debe estar sin usar, limpia y en su estado original.</li>
            <li>Debes contactarnos antes de enviar el producto a ayenantu@gmail.com.</li>
            <li>El costo del envío de devolución es de cargo del comprador.</li>
          </ul>
          <h2>Reembolso</h2>
          <p>Una vez recibida y revisada la prenda, procesamos el reembolso por el mismo medio de pago en un plazo de 7 días hábiles.</p>
          <h2>Contacto</h2>
          <p>Para iniciar una devolución: ayenantu@gmail.com o al teléfono +56 9 99000630.</p>
        </>
      ) : (
        <>
          <p>In accordance with Chilean Consumer Law N° 19.496, you have the right to withdraw from a purchase.</p>
          <h2>Return period</h2>
          <p>You have <strong>10 business days</strong> from receiving the product to request a return.</p>
          <h2>Conditions</h2>
          <ul>
            <li>The garment must be unworn, clean and in its original condition.</li>
            <li>Please contact us before sending the product back to ayenantu@gmail.com.</li>
            <li>Return shipping costs are the buyer's responsibility.</li>
          </ul>
          <h2>Refund</h2>
          <p>Once we receive and inspect the garment, we process the refund via the original payment method within 7 business days.</p>
          <h2>Contact</h2>
          <p>To start a return: ayenantu@gmail.com or call +56 9 99000630.</p>
        </>
      )}
    </div>
  );
}
