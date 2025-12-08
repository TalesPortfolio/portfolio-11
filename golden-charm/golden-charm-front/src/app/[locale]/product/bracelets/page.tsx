"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";

import Footer from "../../../../../components/Footer";
import AppNavbar from "../../../../../components/Navbar";
import ProductCard from "../../../../../components/ProductCard";
import { SectionProduct, Product, BannerImage, PageTitle } from "./styled";
import type { Product as ProductType } from "../../../../../types/product";
import { BackButton } from "../[id]/styled";
import { useRouter } from "next/navigation";

function Bracelets() {
  const locale = useLocale();
  const t = useTranslations("BraceletsPage");
  const router = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await import(
          `../../../../data/bracelets/products.${locale}.ts`
        );
        setProducts(data.products as ProductType[]);
        setError(false);
      } catch (err) {
        console.error("Error loading products:", err);
        setProducts([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [locale]);

  return (
    <>
      <AppNavbar />
      <SectionProduct>
        <BannerImage>
          <Image
            src="/images/banner/banner1.png"
            alt={t("bannerAlt")}
            width={1200}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </BannerImage>

        <PageTitle>{t("pageTitle")}</PageTitle>

        {loading ? (
          <p style={{ textAlign: "center" }}>
            {t("loading")}
          </p>
        ) : error ? (
          <p style={{ textAlign: "center", color: "red" }}>
            {t("errorLoading")}
          </p>
        ) : (
          <Product>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Product>
        )}
        <BackButton onClick={() => router.push(`/${locale}`)}>
          ← {t("back")}
        </BackButton>
      </SectionProduct>
      <Footer />
    </>
  );
}

Bracelets.displayName = 'Bracelets';

export default Bracelets;