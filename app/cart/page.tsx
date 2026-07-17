"use client";

import MyContainer from "@/components/global/shared/MyContainer";
import { useCart } from "@/hook/useCart";
import Link from "next/link";

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <MyContainer>
        <div className="py-20 text-center">
          <h2 className="text-4xl font-light mb-4">Your bag is empty.</h2>
          <Link href="/" className="text-blue-600 hover:underline">Continue shopping</Link>
        </div>
      </MyContainer>
    );
  }

  return (
    <MyContainer>
      <header className="mb-12 mt-12">
        <h1 className="text-4xl font-extrabold tracking-tight">Shopping Bag</h1>
      </header>
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Items */}
        <div className="flex-1">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-6 py-8 border-b border-gray-100 last:border-0">
              <div className="w-24 h-24 bg-gray-100 rounded-md" />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-400 text-sm">Size: {item.size} • Color: {item.color}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-xs text-gray-400 hover:text-black underline underline-offset-4"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="w-8 h-8 rounded-full border hover:bg-black hover:text-white transition-colors">-</button>
                  <span className="w-4 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full border hover:bg-black hover:text-white transition-colors">+</button>
                </div>
                <span className="w-20 text-right font-medium">${item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="lg:w-80">
          <div className="sticky top-8">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-4 border-t">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full py-4 bg-black text-white rounded-none hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm">
              Checkout
            </button>
          </div>
        </aside>
      </div>
    </MyContainer>
  );
}