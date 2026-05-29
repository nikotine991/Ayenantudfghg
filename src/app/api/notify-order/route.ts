import { NextRequest, NextResponse } from 'next/server';

interface OrderItem {
  id: string;
  name: string;
  price_clp: number;
  quantity: number;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || !('items' in body)) {
    return NextResponse.json({ error: 'Missing items' }, { status: 400 });
  }

  const { items } = body as { items: unknown };

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: 'Empty order' }, { status: 400 });
  }

  const orderItems = items as OrderItem[];
  const total = orderItems.reduce((sum, i) => sum + i.price_clp * i.quantity, 0);
  const itemLines = orderItems
    .map(i => `<li>${i.name} × ${i.quantity} — $${i.price_clp.toLocaleString('es-CL')} CLP</li>`)
    .join('');

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('[notify-order] RESEND_API_KEY not set — logging order instead');
    console.log(`Order total: $${total.toLocaleString('es-CL')} CLP`, orderItems);
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Ayenantú Tienda <noreply@ayenantu.cl>',
      to: 'ayenantu@gmail.com',
      subject: `Nueva venta — $${total.toLocaleString('es-CL')} CLP`,
      html: `
        <h2>Nueva venta en Ayenantú</h2>
        <ul>${itemLines}</ul>
        <p><strong>Total: $${total.toLocaleString('es-CL')} CLP</strong></p>
        <p><em>El pago fue procesado por MercadoPago.</em></p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[notify-order] Email send error:', err);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 502 });
  }
}
