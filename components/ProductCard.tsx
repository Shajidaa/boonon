"use client";

import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { ProductCardI } from '@/app/types';




export default function ProductCard({ product }: ProductCardI) {
  const { id, name, category, price, image, rating, inStock } = product;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-brand-primary/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      
 
      <div className="relative aspect-4/5 bg-brand-bg/50 overflow-hidden w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        
     
        <span className="absolute top-3 left-3 bg-brand-primary/90 backdrop-blur-xs text-brand-secondary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
          {category}
        </span>

    
        {!inStock && (
          <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-xs flex items-center justify-center">
            <span className="bg-red-600 text-white text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>


      <div className="p-5 flex flex-col grow">
        
     
        <div className="flex items-center gap-1 mb-2">
          <FaStar className="text-yellow-500 text-sm" />
          <span className="text-xs font-bold text-brand-dark/70">{rating.toFixed(1)}</span>
        </div>


        <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-1 mb-1">
          {name}
        </h3>


        <p className="text-lg font-black text-brand-primary mb-4">
          ৳{price.toLocaleString()}
        </p>

 
        <div className="mt-auto">
          {inStock ? (
            <Link
              href={`/products/${id}`}
              className="block w-full text-center py-2.5 rounded-xl border border-brand-primary text-brand-primary font-semibold text-sm bg-transparent hover:bg-brand-primary hover:text-brand-secondary transition-all duration-300"
            >
              View Details
            </Link>
          ) : (
            <button
              disabled
              className="w-full text-center py-2.5 rounded-xl bg-brand-dark/10 text-brand-dark/40 font-semibold text-sm cursor-not-allowed"
            >
              Unavailable
            </button>
          )}
        </div>

      </div>
    </div>
  );
}