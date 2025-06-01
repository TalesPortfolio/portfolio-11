"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Container, Card, Image, Title, Description, Button } from "../styles/CollectionShowcase";

export default function CollectionShowcase() {
  const t = useTranslations("Collection");
  const params = useParams() as { locale: string };
   const currentLocale = params.locale;
  return (
    <Container>
      <Card>
        <Image
          src="images/collection1.jpg"
          alt="Golden Charm"
        />
        <Title>{t("item1.title")}</Title>
        <Description>{t("item1.description")}</Description>
        <Button>
          <Link href={`/${currentLocale}/product/bracelets`}>
          {t("learnMore")}
          </Link>
          </Button>
      </Card>

      <Card>
        <Image
          src="images/collection2.avif"
          alt="Golden Charm"
        />
        <Title>{t("item2.title")}</Title>
        <Description>{t("item2.description")}</Description>
        <Button>{t("learnMore")}</Button>
      </Card>

      <Card>
        <Image
          src="images/collection3.avif"
          alt="Golden Charm"
        />
        <Title>{t("item3.title")}</Title>
        <Description>{t("item3.description")}</Description>
        <Button>{t("learnMore")}</Button>
      </Card>
    </Container>
  );
}
