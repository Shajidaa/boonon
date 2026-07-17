


import Link from 'next/link';
import MyContainer from '../global/shared/MyContainer';

export default function HeroSection() {
  return (
    <section className="relative bg-brand-bg py-16 md:py-24 lg:py-32 overflow-hidden">
  
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 rounded-l-full -z-10 hidden lg:block" />

      <MyContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 1. Left Content  */}
          <div className="space-y-6 text-center lg:text-left">
            
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight">
              Weave Your Own <br />
              <span className="text-brand-primary">Timeless Elegance</span>
            </h1>
            
            <p className="text-base sm:text-lg text-brand-dark/70 max-w-lg mx-auto lg:mx-0">
              A seamless fusion of heritage and modern design. Explore our premium cotton Panjabis, exquisite hand-woven silk sarees, and contemporary urban wear crafted just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-brand-secondary bg-brand-primary hover:bg-brand-primary/95 shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Explore Collection
              </Link>
              <Link 
                href="/products?category=Panjabi" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-primary text-brand-primary text-base font-medium rounded-md bg-transparent hover:bg-brand-primary/5 transition-all"
              >
                View Punjabi
              </Link>
            </div>
          </div>

          {/* 2. Right Image Section */}
          <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full">
            <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              
              <img 
                src="https://img.magnific.com/premium-photo/woman-home-decision-clothes-wardrobe-thinking-outfit-ideas-with-trendy-style-apartment-girl-fashion-choice-with-apparel-fabric-start-morning-by-closet-rack-house_590464-469047.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="BOONON Premium Fashion Collection" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay and Badge */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-primary/40 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-brand-bg/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-xs text-brand-dark/60 uppercase font-bold tracking-wider">Flat Discount</p>
                <p className="text-lg font-bold text-brand-primary">Upto 20% OFF</p>
              </div>
            </div>
          </div>

        </div>
      </MyContainer>
    </section>
  );
}