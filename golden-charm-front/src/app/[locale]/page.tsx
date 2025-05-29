"use client";

import Carousel from "../../../components/Carousel";
import AppNavbar from "../../../components/Navbar";
import TestimonialSlider from "../../../components/TestimonialSlider";
import QuoteSection from "../../../components/QuoteSection";
import ProductsIcon from "../../../components/ProdutosIcon";

import {
  Section,
  Banner,
  BannerText,
  BannerSection,
  Img,
} from "../../../styles/homePageStyled";

import { useTranslations } from "next-intl";
import Footer from "../../../components/Footer";
import CollectionShowcase from "../../../components/CollectionShowcase";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <AppNavbar />
      <Section>
        <Banner>
          <BannerText>
            <div>
              <h1>{t("brand")}</h1>
              <h2>{t("slogan")}</h2>
              <p>{t("description")}</p>
              <button>{t("shopNow")}</button>
            </div>
          </BannerText>
          <BannerSection>
            <Img src="./images/bannerJoias.png" alt="Joias" />
          </BannerSection>
        </Banner>
        <ProductsIcon />
      </Section>
      <Section>
        <QuoteSection />
        <Carousel />
      </Section>
      <Section>
        <CollectionShowcase />
        <TestimonialSlider />
         <Footer />
      </Section>

     
    </>
  );
}
