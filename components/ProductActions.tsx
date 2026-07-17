"use client";


import { ProductActionsProps } from '@/app/types';
import { useCart } from '@/hook/useCart';


import { useState } from 'react';
import { FiShoppingBag, FiCheck } from 'react-icons/fi';



export default function ProductActions({
  sizes = [],
  colors = [],
  inStock,
productId 
, productName,
 productPrice,

}: ProductActionsProps) {
 const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(colors?.[0] || '');
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
 addToCart({
           productId: String(productId),
      name: productName,
      price: productPrice,
     
      size: selectedSize || 'N/A',
      color: selectedColor || 'N/A',
    });

 
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
    
      {sizes && sizes.length > 0 && sizes[0] !== 'Free Size' && sizes[0] !== 'One Size' && (
        <div className="space-y-3">
          <span className="text-sm font-bold text-brand-dark">Select Size:</span>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm border transition-all ${
                  selectedSize === size
                    ? 'border-brand-primary bg-brand-primary text-brand-secondary shadow-xs'
                    : 'border-brand-primary/10 bg-brand-bg/20 text-brand-dark/80 hover:bg-brand-primary/5'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {colors && colors.length > 0 && colors[0] !== 'One Size' && (
        <div className="space-y-3">
          <span className="text-sm font-bold text-brand-dark">Select Color:</span>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-1.5 rounded-lg font-semibold text-xs sm:text-sm border transition-all ${
                  selectedColor === color
                    ? 'border-brand-primary bg-brand-primary text-brand-secondary'
                    : 'border-brand-primary/10 bg-brand-bg/20 text-brand-dark/80 hover:bg-brand-primary/5'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}


      <div className="pt-4">
        {inStock ? (
          <button
            onClick={handleAddToCart}
            className={`w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold shadow-lg transition-all duration-300 transform active:scale-95 ${
              isAdded
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-brand-primary text-brand-secondary hover:bg-brand-primary/95 hover:-translate-y-0.5'
            }`}
          >
            {isAdded ? (
              <>
                <FiCheck className="text-xl" /> Added to Cart!
              </>
            ) : (
              <>
                <FiShoppingBag className="text-xl" /> Add to Bag
              </>
            )}
          </button>
        ) : (
          <button
            disabled
            className="w-full sm:w-auto min-w-[200px] py-3.5 px-8 rounded-xl bg-brand-dark/10 text-brand-dark/40 font-bold text-base cursor-not-allowed"
          >
            Currently Unavailable
          </button>
        )}
      </div>
    </div>
  );
}