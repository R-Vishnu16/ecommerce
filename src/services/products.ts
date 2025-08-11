import productsData from '../data/products.json';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  images: string[];
}

export const getProducts = (): Product[] => {
  return productsData.products;
};

export const getProductById = (id: number): Product | undefined => {
  return productsData.products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return productsData.products.filter(product => product.category === category);
};