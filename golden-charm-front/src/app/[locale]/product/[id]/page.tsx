"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import AppNavbar from "../../../../../components/Navbar";
import Footer from "../../../../../components/Footer";
import { useCart } from "@/context/CartContext";
import { useTranslations, useLocale } from "next-intl";
import {
  SectionMain,
  PageWrapper,
  ProductWrapper,
  Gallery,
  MainImageWrapper,
  Details,
  Title,
  Price,
  InfoList,
  InfoItem,
  Options,
  SizeGrid,
  SizeButton,
  AddToCartButton,
  BackButton,
} from "./styled";
import { useEffect, useState } from "react";
import type { Product as ProductType } from "../../../../../types/product";

function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations("ProductDetailPage");
  const { addToCart } = useCart();

  const id = typeof params?.id === "string" ? params.id : "";

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    async function loadProduct() {
      const categories = ["bracelets", "cords", "earrings", "pendants", "rings"];

      for (const category of categories) {
        try {
          const data = await import(`../../../../data/${category}/products.${locale}.ts`);
          const found = data.products.find((p: ProductType) => p.id === id);
          if (found) {
            setProduct(found);
            return;
          }
        } catch (err) {
          console.error(`Erro ao carregar produtos da categoria "${category}":`, err);
        }
      }

      setProduct(null); // produto não encontrado
    }

    loadProduct();
  }, [locale, id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  if (!product) {
    return (
      <>
        <AppNavbar />
        <main style={{ padding: "6rem 2rem" }}>
          <h1>{t("notFound")}</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <SectionMain>
      <PageWrapper>
        <AppNavbar />
        <ProductWrapper>
          <Gallery>
            <MainImageWrapper>
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </MainImageWrapper>
          </Gallery>

          <Details>
            <Title>{product.name}</Title>
            <Price>{product.price}</Price>

            <InfoList>
              <InfoItem>
                <strong>{t("category")}:</strong> {product.category}
              </InfoItem>
              <InfoItem>
                <strong>{t("material")}:</strong> {product.material}
              </InfoItem>
              <InfoItem>
                <strong>{t("color")}:</strong> {product.color}
              </InfoItem>
              {product.weight && (
                <InfoItem>
                  <strong>{t("weight")}:</strong> {product.weight}
                </InfoItem>
              )}
              <InfoItem>
                <strong>{t("size")}:</strong> {product.size}
              </InfoItem>
              {product.stone_type && (
                <InfoItem>
                  <strong>{t("stoneType")}:</strong> {product.stone_type}
                </InfoItem>
              )}
            </InfoList>

            <Options>
              <label>{t("size")}</label>
              <SizeGrid>
                {[4.5, 5, 5.5, 6, 6.5, 7, 7.5].map((size) => (
                  <SizeButton key={size}>{size}</SizeButton>
                ))}
              </SizeGrid>
            </Options>

            <AddToCartButton onClick={handleAddToCart}>
              {t("addToCart")}
            </AddToCartButton>

            <BackButton
              onClick={() => {
                if (typeof window !== "undefined" && window.history.length > 1) {
                  router.back();
                } else {
                  router.push(`/${locale}`);
                }
              }}
            >
              {t("back")}
            </BackButton>
          </Details>
        </ProductWrapper>
      </PageWrapper>
      <Footer />
    </SectionMain>
  );
}

ProductDetailPage.displayName = 'ProductDetailPage';

export default ProductDetailPage;