import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider context pipeline.");
  }
  return context;
}
