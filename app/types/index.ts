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

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}
export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}
