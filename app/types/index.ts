export interface ProductCardI {
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
}

export interface ProductActionsProps {
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  productId: number;
  productName: string;
  productPrice: number;
}
