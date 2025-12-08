export interface Product {
  id: string;
  title: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  material: string;
  weight: string;
  price: string;
  stock: boolean;
  size: string;
  color: string;
  stone_type: string;
  is_featured: boolean;
  tags: string[];
  engraving: boolean;
}

// Interface usada para o componente ProductCard
export interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  brand: string;
  price: string;
  description: string;
  tags: string[];
  engraving: boolean;
  badges?: string[];
}
