import { NextRequest, NextResponse } from 'next/server';
import { createPreference } from '@/lib/mercadopago';

const VALID_LOCALES = ['es', 'en'];

export async function POST(req: NextRequest) {
  // CSRF protection — reject requests from foreign origins
  const origin = req.headers.get('origin');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (baseUrl && origin) {
    try {
      const allowedOrigin = new URL(baseUrl).origin;
      if (origin !== allowedOrigin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || !('items' in body) || !('locale' in body)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { items, locale } = body as { items: unknown; locale: unknown };

  // Validate locale
  if (typeof locale !== 'string' || !VALID_LOCALES.includes(locale)) {
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 });
  }

  // Validate items array
  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
  }

  for (const item of items) {
    if (!item || typeof item !== 'object') {
      return NextResponse.json({ error: 'Invalid item format' }, { status: 400 });
    }
    const { id, title, quantity } = item as Record<string, unknown>;
    if (typeof id !== 'string' || !id.trim()) {
      return NextResponse.json({ error: 'Invalid item id' }, { status: 400 });
    }
    if (typeof title !== 'string' || !title.trim()) {
      return NextResponse.json({ error: 'Invalid item title' }, { status: 400 });
    }
    if (
      typeof quantity !== 'number' ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 99
    ) {
      return NextResponse.json({ error: 'Invalid item quantity' }, { status: 400 });
    }
  }

  try {
    const preference = await createPreference(
      (items as Array<{ id: string; title: string; quantity: number }>).map(i => ({
        id: i.id,
        title: i.title,
        quantity: i.quantity
      })),
      locale
    );

    return NextResponse.json({
      id: preference.id,
      init_point: preference.init_point,
      sandbox_init_point: preference.sandbox_init_point
    });
  } catch (err) {
    if (err instanceof Error && err.message.startsWith('Unknown product:')) {
      return NextResponse.json({ error: 'Product not found' }, { status: 422 });
    }
    console.error('Checkout error:', err);
    return NextResponse.json({ error: 'Payment service unavailable' }, { status: 502 });
  }
}
