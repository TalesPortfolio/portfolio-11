// lib/categories.ts

export interface Category {
    title: string;
    imageSrc: string;
    slug: string;
  }

  
  // Lista estática de categorias
  export const categories: Category[] = [
    {
      title: "RINGS",
      imageSrc: "/images/womens-ring.png",
      slug: "aneis",
    },
    {
      title: "BRACELET",
      imageSrc: "/images/bracelet.png",
      slug: "relogios",
    },
    {
        title: "PENDANT",
        imageSrc: "/images/pendant.png",
        slug: "aneis",
      },
      {
        title: "CORD",
        imageSrc: "/images/cord.png",
        slug: "relogios",
      },
    {
        title: "EARRINGS",
        imageSrc: "/images/earrings.png",
        slug: "aneis",
      },
      {
        title: "MEN RINGS",
        imageSrc: "/images/mens-ring.png",
        slug: "relogios",
      },
  ];
  

  export function getCategories(): Category[] {
    return categories;
  }
  