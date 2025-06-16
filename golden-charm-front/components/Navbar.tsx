"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useThemeContext, ThemeName } from "@/context/ThemeContext";
import { useTranslations } from "next-intl";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Title,
  Header,
  LogoText,
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

const localeLabels: Record<string, string> = {
  pt: "🇵🇹",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
};

const AppNavbar: React.FC = () => {
  const t = useTranslations("AppNavbar");
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { theme, setTheme } = useThemeContext();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams() as { locale: string };
  const currentLocale = params.locale;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    import("bootstrap/js/dist/carousel").then(({ default: Carousel }) => {
      const el = document.getElementById("carouselExampleIndicators");
      if (el)
        new Carousel(el, { interval: 3000, ride: "carousel", wrap: true });
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
          <LogoText>Golden Charm</LogoText>
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

        <IconLink href={`/${currentLocale}/favorite`} title={t("iconFavorite")}>
          <FiHeart size={24} />
        </IconLink>
        <IconLink href={`/${currentLocale}/login`} title={t("iconLogin")}>
          <FiUser size={24} />
        </IconLink>
        <IconLink
          href={`/${currentLocale}/checkout`}
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
                backgroundColor: "#fff",
                color: "#000",
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

        {/* Seletor de tema sem usar `any` */}
        <select
          value={theme}
          onChange={(e) =>
            setTheme(e.target.value as ThemeName)
          }
          style={{
            marginLeft: "10px",
            padding: "4px 8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          <option value="pink">🌸 Pink</option>
          <option value="blue">💙 Blue</option>
          <option value="gold">✨ Gold</option>
          <option value="green">🍃 Green</option>
        </select>
      </IconGroup>
    </Header>
  );
};

AppNavbar.displayName = "AppNavBar";
export default AppNavbar;
