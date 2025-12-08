// app/[locale]/product/page.tsx
"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import AppNavbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { Container, Title, Grid, CategoryCard, SectionCards } from "./styled";

const categories = [
  { key: "bracelets", img: "/images/bracelet/bracelet.jpg" },
  { key: "cords", img: "/images/cord/cords.png" },
  { key: "earrings", img: "/images/earrings/earrings.webp" },
  { key: "pendants", img: "/images/pendant/pendants.png" },
  { key: "rings", img: "/images/rings/rings.png" },
  { key: "reparation", img: "/images/partsRepair/reparation.avif" },
  { key: "JewelryEngraving", img: "/images/JewelryEngraving/JewelryEngraving.webp" },
];

function ProductCategoriesPage() {
  const t = useTranslations("ProductCategoriesPage");
  const locale = useLocale();

  return (
    <>
      <AppNavbar />
      <Container>
        <SectionCards>
          <Title>{t("pageTitle")}</Title>
          <Grid>
            {categories.map((cat) => (
              <CategoryCard
                key={cat.key}
                href={`/${locale}/product/${cat.key}`}
              >
                <Image
                  src={cat.img}
                  alt={t(cat.key)}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "200px" }}
                />
                <h2>{t(cat.key)}</h2>
              </CategoryCard>
            ))}
          </Grid>
        </SectionCards>
      </Container>
      <Footer />
    </>
  );
}

ProductCategoriesPage.displayName = 'ProductCategoriesPage';

export default ProductCategoriesPage;