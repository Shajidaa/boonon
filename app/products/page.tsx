"use client";

import React, { useState, useMemo } from 'react';
import productsData from '@/data/products.json';

import ProductCard from '@/components/ProductCard'; 
import { FiSearch, FiSliders } from 'react-icons/fi';
import MyContainer from '@/components/global/shared/MyContainer';
import { ProductCardI } from '../types';




export default function ProductsPage(){
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('default');


  const categories = useMemo(() => {
    const list = productsData.map((p) => p.category);
    return ['All', ...Array.from(new Set(list))];
  }, []);


  const filteredProducts = useMemo(() => {
    let result = productsData as ProductCardI[];


    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }


    if (searchTerm.trim() !== '') {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }


    if (sortBy === 'price-low-high') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="bg-brand-bg min-h-screen py-10">
      <MyContainer>
     
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-2">
            Our Collection
          </h1>
          <p className="text-brand-dark/60 max-w-md mx-auto">
            Discover a perfect blend of tradition and modernity curated specifically for your lifestyle.
          </p>
        </div>

     
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5 mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
          
       
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/40 text-lg" />
            <input
              type="text"
              placeholder="Search items, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-brand-primary/10 focus:border-brand-primary focus:outline-none bg-brand-bg/30 text-brand-dark transition-all placeholder:text-brand-dark/40"
            />
          </div>

       
          <div className="flex items-center gap-2">
            <FiSliders className="text-brand-primary text-lg hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-brand-primary/10 focus:border-brand-primary focus:outline-none bg-brand-bg/30 text-brand-dark font-medium transition-all"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

    
        <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-primary text-brand-secondary shadow-md'
                  : 'bg-white text-brand-dark/70 hover:bg-brand-primary/5 border border-brand-primary/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>


        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-brand-primary/10">
            <span className="text-5xl block mb-4">🔍</span>
            <h3 className="text-xl font-bold text-brand-dark mb-1">No Products Found</h3>
            <p className="text-brand-dark/50">
              Try adjusting your filters or search keywords to find what you are looking for.
            </p>
          </div>
        )}
      </MyContainer>
    </div>
  );
}