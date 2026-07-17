


import productsData from '@/data/products.json';

import MyContainer from '@/components/global/shared/MyContainer';
import ProductCard from '@/components/ProductCard';


export default function ProductsPage() {

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

       

        
    

        
        {productsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-brand-primary/10">
            <span className="text-5xl block mb-4">🔍</span>
            <h3 className="text-xl font-bold text-brand-dark mb-1">No Products Found</h3>
           
          </div>
        )}
      </MyContainer>
    </div>
  );
}