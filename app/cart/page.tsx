
"use client";

import { useCart } from "@/hook/useCart";


export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        Your cart feels light! Add some items to keep it happy.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-brand-dark">Your Shopping Bag</h1>
      <div className="divide-y border rounded-xl overflow-hidden bg-white">
        {cart.map((item ) => (
          <div key={item.id} className="flex justify-between items-center p-4">
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {item.size} | Color: {item.color}
              </p>
              <span className="font-semibold text-sm">${item.price} Each</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-3 font-semibold">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right pt-4 border-t">
        <h2 className="text-xl font-bold">Total Amount: ${cartTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
}
