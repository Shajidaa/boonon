"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from './shared/logo';
import MyContainer from './shared/MyContainer';
import { useCart } from '@/hook/useCart';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {cartCount}=useCart()

  // const cartCount =count  as number
console.log(cartCount);

  return (
    <nav className="bg-brand-primary text-brand-bg sticky top-0 z-50 shadow-md">
      <MyContainer>
        <div className="flex items-center justify-between h-16">
          
       
        <Logo/>

          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link href="/" className="hover:text-brand-secondary transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-brand-secondary transition-colors">
              Products
            </Link>
            
         
            <Link href="/cart" className="relative p-2 hover:text-brand-secondary transition-colors">
              <FiShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-secondary text-brand-dark text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center md:hidden space-x-4">
         
            <Link href="/cart" className="relative p-2 hover:text-brand-secondary transition-colors">
              <FiShoppingCart className="text-lg" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-secondary text-brand-dark text-[9px] font-bold rounded-full h-4.5 w-4.5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

           
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-brand-secondary hover:bg-brand-dark/20 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </MyContainer>

     {/* mobile */}
      {isOpen && (
        <div className="md:hidden bg-brand-primary border-t border-brand-bg/10">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-dark/20 hover:text-brand-secondary transition-all"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-dark/20 hover:text-brand-secondary transition-all"
            >
              Products
            </Link>
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold bg-brand-secondary text-brand-dark hover:opacity-90 transition-all font-semibold"
            >
              View Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}