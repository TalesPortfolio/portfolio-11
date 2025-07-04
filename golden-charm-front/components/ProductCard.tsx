"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  Card,
  TagsContainer,
  Tag,
  Info,
  Price,
  Title,
  Subtext,
  Badge,
  Favorite,
  AddToCartButton,
} from "../styles/ProductCard";

import { ProductCardProps } from "../types/product";
import { useCart } from "@/context/CartContext";

function ProductCard({
  id,
  image,
  title,
  brand,
  price,
  description,
  tags = [],
  engraving = false,
  badges = [],
}: ProductCardProps) {
  const { addToCart } = useCart();
  const t = useTranslations("ProductCard");

  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "pt";

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      image,
      quantity: 1,
    });
  };

  return (
    <Card>
      <div style={{ position: "relative" }}>
        <Image
          src={image ?? "/images/placeholder.jpg"}
          alt={title}
          width={400}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
        <Favorite>♡</Favorite>
      </div>

      <TagsContainer>
        {tags.map((tag: string, idx: number) => {
          const tagUpper = tag.toUpperCase();

          if (tagUpper === "MORE DETAILS") {
            return (
              <Link
                key={idx}
                href={`/${locale}/product/${id}`}
                style={{ textDecoration: "none" }}
              >
                <Tag variant="details">{t("moreDetails")}</Tag>
              </Link>
            );
          }

          if (tagUpper === "READY TO SHIP!") {
            return (
              <Tag key={idx} variant="ready">
                {t("readyToShip")}
              </Tag>
            );
          }

          return <Tag key={idx}>{tagUpper}</Tag>;
        })}
      </TagsContainer>

      <Info>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Subtext>{brand}</Subtext>
        <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>{description}</p>

        {engraving && <Badge>{t("freeEngraving")}</Badge>}

        {badges.length > 0 && (
          <TagsContainer>
            {badges.map((badge: string, idx: number) => (
              <Tag key={idx}>{badge.toUpperCase()}</Tag>
            ))}
          </TagsContainer>
        )}

        <AddToCartButton onClick={handleAddToCart}>
          {t("addToCart")}
        </AddToCartButton>
      </Info>
    </Card>
  );
}

ProductCard.displayName = "ProductCard";

export default ProductCard;
