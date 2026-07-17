
"use client";

import { CartContextType, CartItem } from "@/app/types";
import  { createContext, useState, useEffect, ReactNode } from "react";


 export  const   CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  
  const [cart, setCart] = useState<CartItem[]>([]);


  useEffect(() => {
    const savedCart = localStorage.getItem("my_shopping_cart");
    if (savedCart) {
      try {
        const result=JSON.parse(savedCart)
        setCart(result);
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  
  useEffect(() => {
   
    if (typeof window !== "undefined") {
      localStorage.setItem("my_shopping_cart", JSON.stringify(cart));
    }
  }, [cart]);


  const addToCart = (newItem: Omit<CartItem, "id" | "quantity">) => {
    setCart((prevCart) => {
      const uniqueId = `${newItem.productId}-${newItem.size}-${newItem.color}`;
      const existingItemIndex = prevCart.findIndex((item) => item.id === uniqueId);

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }

      return [...prevCart, { ...newItem, id: uniqueId, quantity: 1 }];
    });
  };


  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  
  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  // Compute total 
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


