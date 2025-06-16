// src/app/[locale]/auth/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";                  // ← importe Link
import AppNavbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { Button, Card, ErrorMsg, FooterText, Input, Main, Title, Wrapper } from "./styled";
// import { login } from "../../api/auth/login/route";



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await login(email, password);
      router.push(`/${locale}`);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(t("invalidCredentials"));
    }
  };

  return (
    <Wrapper>
      <AppNavbar />
      <Main>
        <Card>
          <form onSubmit={handleSubmit}>
            <Title>{t("title")}</Title>
            <Input
              type="email"
              placeholder={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">{t("login")}</Button>
            {error && <ErrorMsg>{error}</ErrorMsg>}
          </form>

          <FooterText>
            {t("noAccount")}{" "}
            <Link href={`/${locale}/register`}>
              {t("registerLink")}
            </Link>
          </FooterText>
        </Card>
      </Main>
      <Footer />
    </Wrapper>
  );
}
