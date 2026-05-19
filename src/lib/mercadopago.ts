import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN ?? 'TEST-placeholder'
});

export interface CartItem {
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
}

export async function createPreference(items: CartItem[], locale: string) {
  const preference = new Preference(client);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

  const response = await preference.create({
    body: {
      items: items.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        unit_price: item.unit_price,
        currency_id: 'CLP'
      })),
      back_urls: {
        success: `${baseUrl}/${locale}/checkout/success`,
        failure: `${baseUrl}/${locale}/checkout`,
        pending: `${baseUrl}/${locale}/checkout`
      },
      auto_return: 'approved'
    }
  });

  return response;
}
