// components/ProductsIcon.tsx
"use client";

import React from "react";
import { Section, H2 ,Img, DivIcon, Subtitle } from "../styles/ProdutosIconStyled";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";


const ProductsIcon = () => {
  const t = useTranslations("ProductsIcon");
  const locale = useLocale();

  return (
    <>
      <H2>{t("shopBy")}</H2>
      <Section>
        <Link href={`/${locale}/product/bracelets`}>
          <DivIcon>
            <Img src="/images/bracelet/bracelet.png" alt="bracelet" />
            <Subtitle>{t("bracelet")}</Subtitle>
          </DivIcon>
        </Link>

        <Link href={`/${locale}/product/cords`}>
          <DivIcon>
            <Img src="/images/cord.png" alt="cord" />
            <Subtitle>{t("cord")}</Subtitle>
          </DivIcon>
        </Link>

        <Link href={`/${locale}/product/earrings`}>
          <DivIcon >
            <Img src="/images/earrings.png" alt="earrings" />
            <Subtitle>{t("earrings")}</Subtitle>
          </DivIcon>
        </Link>
        <Link href={`/${locale}/product/rings`}>
          <DivIcon >
            <Img src="/images/womens-ring.png" alt="rings" />
            <Subtitle>{t("rings")}</Subtitle>
          </DivIcon>
        </Link>
        <Link href={`/${locale}/product/pendants`}>
          <DivIcon >
            <Img src="/images/pendant.png" alt="pendant" />
            <Subtitle>{t("pendant")}</Subtitle>
          </DivIcon>
        </Link>
      </Section>
    </>
  );
};

ProductsIcon.displayName = "ProductsIcon" ;

export default ProductsIcon;
