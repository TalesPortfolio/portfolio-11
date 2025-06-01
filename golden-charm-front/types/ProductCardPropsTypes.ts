//components/ProductCard.tsx
export type ProductCardProps = {
  id: string;
  title: string;
  brand: string;
  price: string;
  image: string;
  tags?: string[];
  badges?: string[];
  engraving?: boolean;
};
