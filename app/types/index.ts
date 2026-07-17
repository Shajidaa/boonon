export interface ProductCardI {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    rating: number;
    colors: string[];
    sizes: string[];
    inStock: boolean;
    description: string;
  };
}
