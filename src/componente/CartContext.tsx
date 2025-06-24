// src/context/CartContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type CartContextType = {
  cartItems: number;
  addToCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => setCartItems(prev => prev + 1);

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
