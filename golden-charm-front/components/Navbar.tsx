"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter, usePathname, useParams } from "next/navigation";
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import {
  Title,
  Header,
  LogoImage,
  NavList,
  NavItem,
  SearchContainer,
  SearchInput,
  SearchIconWrapper,
  IconGroup,
  IconLink,
  LanguageSelect,
  Carrosel,
} from "../styles/NavBarStyled";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const localeLabels: Record<string, string> = {
  pt: "🇵🇹",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
};

const AppNavbar: React.FC = () => {
  const t = useTranslations("AppNavbar");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams() as { locale: string };
  const currentLocale = params.locale;

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    import("bootstrap/js/dist/carousel").then(({ default: Carousel }) => {
      const el = document.getElementById("carouselExampleIndicators");
      if (el)
        new Carousel(el, { interval: 2000, ride: "carousel", wrap: true });
    });
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(
      `/${currentLocale}/search?query=${encodeURIComponent(searchTerm)}`
    );
  };

  const changeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(`/${newLocale}${pathname.replace(`/${currentLocale}`, "")}`);
  };

  return (
    <Header>
      <Link href={`/${currentLocale}/`}>
        <Title>
          <LogoImage
            src="/images/logoGC4.png"
            alt="Golden Charm Logo"
            width={100}
            height={50}
          />
        </Title>
      </Link>

      <IconGroup>
        <Carrosel>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <p>{t("paragraph-1")}</p>
              </div>
              <div className="carousel-item">
                <p>{t("paragraph-2")}</p>
              </div>
              <div className="carousel-item">
                <p>{t("paragraph-3")}</p>
              </div>
            </div>
          </div>
        </Carrosel>

        <NavList>
          <NavItem>
            <Link href={`/${currentLocale}/`}>{t("navTitle-1")}</Link>
          </NavItem>
          <NavItem>
            <Link href={`/${currentLocale}/product`}>{t("navTitle-2")}</Link>
          </NavItem>
          <NavItem>
            <Link href={`/${currentLocale}/about`}>{t("navTitle-3")}</Link>
          </NavItem>
        </NavList>

        <SearchContainer onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder={t("inputSearch")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIconWrapper type="submit">
            <FiSearch size={24} />
          </SearchIconWrapper>
        </SearchContainer>

        <IconLink
          href={`/${currentLocale}/favorite`}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title={t("iconFavorite")}
        >
          <FiHeart size={24} />
        </IconLink>

        <IconLink
          href={`/${currentLocale}/login`}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title={t("iconLogin")}
        >
          <FiUser size={24} />
        </IconLink>

        <IconLink
          href={`/${currentLocale}/checkout`}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title={t("iconCart")}
          style={{ position: "relative" }}
        >
          <FiShoppingCart size={24} />
          {totalItems > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "#ffffff",
                color: "black",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {totalItems}
            </span>
          )}
        </IconLink>

        <LanguageSelect value={currentLocale} onChange={changeLocale}>
          {routing.locales.map((loc) => (
            <option key={loc} value={loc}>
              {localeLabels[loc] || loc}
            </option>
          ))}
        </LanguageSelect>
      </IconGroup>
    </Header>
  );
};

export default AppNavbar;
