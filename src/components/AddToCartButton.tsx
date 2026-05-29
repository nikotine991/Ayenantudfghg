'use client';

import { useCart } from './CartProvider';

interface Props {
  id: string;
  slug: string;
  name: string;
  price_clp: number;
  image: string;
  label: string;
  soldOutLabel: string;
  inStock: boolean;
}

export default function AddToCartButton({ id, slug, name, price_clp, image, label, soldOutLabel, inStock }: Props) {
  const { addItem } = useCart();

  if (!inStock) {
    return (
      <button
        disabled
        className="w-full bg-charcoal/30 text-cream/60 py-4 text-sm font-medium tracking-widest uppercase cursor-not-allowed"
      >
        {soldOutLabel}
      </button>
    );
  }

  return (
    <button
      onClick={() => addItem({ id, slug, name, price_clp, image })}
      className="bg-green-dark text-cream py-4 text-sm font-medium tracking-widest uppercase hover:bg-green-olive transition-colors mb-6 w-full"
    >
      {label}
    </button>
  );
}
