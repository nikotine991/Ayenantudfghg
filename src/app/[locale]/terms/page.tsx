import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Términos y Condiciones / Terms & Conditions' };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const es = locale === 'es';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-sm text-charcoal">
      <h1 className="text-3xl font-heading text-green-dark mb-8">
        {es ? 'Términos y Condiciones' : 'Terms & Conditions'}
      </h1>

      {es ? (
        <>
          <p>Al comprar en Ayenantú, aceptas los siguientes términos.</p>
          <h2>Productos artesanales únicos</h2>
          <p>Todas las prendas de Ayenantú son tejidas a mano en telar chilote por María Ruth. Cada pieza es única — pueden existir pequeñas variaciones en color, textura y medidas respecto a las fotografías, ya que son prendas 100% artesanales.</p>
          <h2>Precios y pagos</h2>
          <p>Los precios están expresados en pesos chilenos (CLP) e incluyen IVA. Los pagos se realizan a través de MercadoPago, plataforma de pago segura.</p>
          <h2>Envíos</h2>
          <p>Los envíos se realizan a todo Chile por correos o empresa de transporte. El costo y plazo de envío se coordinan directamente con el comprador tras la compra.</p>
          <h2>Modificaciones</h2>
          <p>Nos reservamos el derecho a modificar estos términos en cualquier momento.</p>
        </>
      ) : (
        <>
          <p>By purchasing from Ayenantú, you agree to the following terms.</p>
          <h2>Unique handcrafted products</h2>
          <p>All Ayenantú garments are hand-woven on a Chilote loom by María Ruth. Each piece is unique — there may be slight variations in colour, texture and measurements compared to photographs, as all items are 100% handmade.</p>
          <h2>Prices and payments</h2>
          <p>Prices are in Chilean pesos (CLP) and include VAT. Payments are processed through MercadoPago, a secure payment platform.</p>
          <h2>Shipping</h2>
          <p>We ship throughout Chile via post or courier. Shipping costs and timelines are arranged directly with the buyer after purchase.</p>
          <h2>Changes</h2>
          <p>We reserve the right to modify these terms at any time.</p>
        </>
      )}
    </div>
  );
}
