'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price_clp: number;
  image: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ayenantu-cart');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('ayenantu-cart', JSON.stringify(items));
  }, [items]);

  function addItem(newItem: Omit<CartItem, 'quantity'>) {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id);
      if (existing) {
        return prev.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  }

  function removeItem(id: string) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((sum, i) => sum + i.price_clp * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
