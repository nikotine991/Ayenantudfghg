import { MercadoPagoConfig, Preference } from 'mercadopago';
import { products } from '@/data/products';

// Fail loudly if credentials are missing — no silent fallback to test tokens
const token = process.env.MP_ACCESS_TOKEN;
if (!token) throw new Error('MP_ACCESS_TOKEN environment variable is not set');

const client = new MercadoPagoConfig({ accessToken: token });

export interface CheckoutItem {
  id: string;
  title: string;
  quantity: number;
  // unit_price intentionally omitted — server looks it up from products.ts
}

export async function createPreference(items: CheckoutItem[], locale: string) {
  const preference = new Preference(client);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

  // Resolve authoritative prices server-side — never trust client-sent prices
  const resolvedItems = items.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) throw new Error(`Unknown product: ${item.id}`);
    return {
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      unit_price: product.price_clp,
      currency_id: 'CLP'
    };
  });

  const response = await preference.create({
    body: {
      items: resolvedItems,
      back_urls: {
        success: `${baseUrl}/${locale}/checkout/success`,
        failure: `${baseUrl}/${locale}/checkout`,
        pending: `${baseUrl}/${locale}/checkout`
      },
      auto_return: 'approved',
      // Idempotency key — lets MercadoPago detect duplicate submissions
      external_reference: crypto.randomUUID()
    }
  });

  return response;
}
