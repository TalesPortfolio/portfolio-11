// components/ProductsIcon.tsx
"use client";

import React from "react";
import {
  Section,
  SectionInfo,
  ContainerInfo,
  NewsletterWrapper,
  Copyrigth
} from "../styles/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";
/////////////////////////////////////////
/// Adicionar os links no paragrafos  ///
/////////////////////////////////////////

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      <Section>
      
        <SectionInfo>
          <ContainerInfo>
            <h2>{t("companyTitle")}</h2>
            <Link href="/about"><p>{t("aboutUs")}</p></Link>
            <Link href="/complaints"><p>{t("whistleblower")}</p></Link>
          </ContainerInfo>
          <ContainerInfo>
            <h2>{t("supportTitle")}</h2>
            <p>{t("trackOrder")}</p>
            <p>{t("supportCenter")}</p>
            <p>{t("supportHours")}</p>
          </ContainerInfo>
          <ContainerInfo>
            <h2>{t("infoTitle")}</h2>
            <p>{t("warranty")}</p>
            <p>{t("exchangePolicy")}</p>
            <p>{t("repairPolicy")}</p>
          </ContainerInfo>
          <ContainerInfo>
            <h2>{t("newsletterTitle")}</h2>
            <p>{t("newsletterSubtitle")}</p>
            <NewsletterWrapper>
              <span>
                <input type="email" placeholder="E-MAIL" />
                <input type="button" value={t("subscribe")} />
              </span>
              <p>
                {t("privacyNoticeStart")} <a href="#">{t("privacyPolicy")}</a>,{" "}
                {t("privacyNoticeEnd")}
              </p>
            </NewsletterWrapper>
          </ContainerInfo>
        </SectionInfo>
        <Copyrigth>
          <h2>{t("Nameshop")}</h2>
          <p>{t("copyrigth")}</p>
          <p>{t("cnpj")}</p>
        </Copyrigth>
      </Section>
    </>
  );
};

Footer.displayName = "Footer";
export default Footer;
