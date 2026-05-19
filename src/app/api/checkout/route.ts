import { NextRequest, NextResponse } from 'next/server';
import { createPreference, CartItem } from '@/lib/mercadopago';

export async function POST(req: NextRequest) {
  try {
    const { items, locale } = (await req.json()) as { items: CartItem[]; locale: string };

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const preference = await createPreference(items, locale);

    return NextResponse.json({
      id: preference.id,
      init_point: preference.init_point,
      sandbox_init_point: preference.sandbox_init_point
    });
  } catch (err) {
    console.error('Checkout error:', err);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
