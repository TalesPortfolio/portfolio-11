"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import AppNavbar from "../../../../../components/Navbar";
import Footer from "../../../../../components/Footer";
import { products } from "@/data/bracelets/products";
import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";
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

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { addToCart } = useCart();
  const t = useTranslations("ProductDetailPage");

const handleAddToCart = () => {
  addToCart({
    id: product!.id,
    title: product!.name,
    price: product!.price,
    image: product!.image,
    quantity: 1,
  });
};


  const id = typeof params?.id === "string" ? params.id : "";
  const product = products.find((p) => p.id === id);

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

            <BackButton onClick={() => router.back()}>{t("back")}</BackButton>
          </Details>
        </ProductWrapper>
      </PageWrapper>{" "}
      <Footer />
    </SectionMain>
  );
}
