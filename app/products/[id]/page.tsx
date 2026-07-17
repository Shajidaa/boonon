"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { FiChevronLeft } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';


import productsData from '@/data/products.json'; 

import MyContainer from '@/components/global/shared/MyContainer';
import ProductActions from '@/components/ProductActions';
import { ProductCardI } from '@/app/types';



export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();


  const productId = params?.id;
  const product = (productsData as ProductCardI[]).find((p) => p.id === Number(productId));


  if (!product) {
    return (
      <div className="bg-brand-bg min-h-screen py-20 text-center">
        <MyContainer>
          <span className="text-6xl block mb-4">🛸</span>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Product Not Found</h2>
          <button 
            onClick={() => router.push('/products')}
            className="px-6 py-2.5 bg-brand-primary text-brand-secondary font-semibold rounded-xl transition-all"
          >
            Back to Shop
          </button>
        </MyContainer>
      </div>
    );
  }

  return (
    <div className="bg-brand-bg min-h-screen py-8 md:py-16">
      <MyContainer>
      
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-brand-dark/70 hover:text-brand-primary font-semibold mb-8 transition-colors"
        >
          <FiChevronLeft className="text-lg" /> Back
        </button>

        {/* product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-brand-primary/5">
          
          {/* left section */}
          <div className="relative aspect-4/5 bg-brand-bg/50 rounded-2xl overflow-hidden w-full max-w-lg mx-auto lg:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-xs flex items-center justify-center">
                <span className="bg-red-600 text-white text-sm font-extrabold uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* right section */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary bg-brand-primary px-3 py-1 rounded-md">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark mt-3">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 bg-brand-bg px-3 py-1.5 rounded-lg border border-brand-primary/5">
                <FaStar className="text-yellow-500 text-sm" />
                <span className="text-sm font-bold text-brand-dark">{product.rating.toFixed(1)}</span>
              </div>
              <span className={`text-sm font-bold ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                {product.inStock ? '● In Stock' : '● Out of Stock'}
              </span>
            </div>

        
            <p className="text-3xl font-black text-brand-primary">
              ৳{product.price.toLocaleString()}
            </p>

       
            <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            <hr className="border-brand-primary/10" />

            <ProductActions 
              sizes={product.sizes || []}
              colors={product.colors || []}
              inStock={product.inStock}
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
            />

          </div>
        </div>
      </MyContainer>
    </div>
  );
}