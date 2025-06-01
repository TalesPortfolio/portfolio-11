"use client";
// src/[locale]/product/bracelets/page.tsx

import Footer from "../../../../../components/Footer";
import AppNavbar from "../../../../../components/Navbar";
import ProductCard from "../../../../../components/ProductCard";
import { SectionProduct, Product, BannerImage, PageTitle } from "./styled";
import { products } from "@/data/bracelets/products";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Bracelets() {
  const t = useTranslations("BraceletsPage");

  return (
    <>
      <AppNavbar />
      <SectionProduct>
        <BannerImage>
          <Image
            src="/images/banner/banner1.png"
            alt={t("bannerAlt")} // ← Translating the image alt
            width={1200}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </BannerImage>

        <PageTitle>{t("pageTitle")}</PageTitle> {/* ← Title Translated */}

        <Product>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Product>
      </SectionProduct>
      <Footer />
    </>
  );
}
