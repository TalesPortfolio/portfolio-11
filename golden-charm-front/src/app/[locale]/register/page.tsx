// src/app/[locale]/auth/register/page.tsx
"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import AppNavbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import {
  Button,
  Content,
  Form,
  FullWidth,
  Input,
  PageWrapper,
  RegisterCard,
  Select,
  Title,
} from "./styled";

export default function RegisterPage() {
  const locale = useLocale();
  const t = useTranslations("RegisterPage");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    address: "",
    number: "",
    phone: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert(t("passwordMismatch"));
      return;
    }

    // aqui envie para o backend...
    console.log("Form Data:", formData, " locale:", locale);
  };

  return (
    <PageWrapper>
      <AppNavbar />
      <Content>
        <RegisterCard>
          <Title>{t("title")}</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder={t("fullName")}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              placeholder={t("email")}
              type="email"
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              placeholder={t("password")}
              type="password"
              onChange={handleChange}
              required
            />
            <Input
              name="confirmPassword"
              placeholder={t("confirmPassword")}
              type="password"
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              placeholder={t("phone")}
              onChange={handleChange}
            />
            <Input
              name="country"
              placeholder={t("country")}
              onChange={handleChange}
            />
            <Input
              name="city"
              placeholder={t("city")}
              onChange={handleChange}
            />
            <Input
              name="address"
              placeholder={t("address")}
              onChange={handleChange}
            />
            <Input
              name="number"
              placeholder={t("houseNumber")}
              onChange={handleChange}
            />
            <Select name="gender" onChange={handleChange} required>
              <option value="">{t("gender")}</option>
              <option value="female">{t("female")}</option>
              <option value="male">{t("male")}</option>
              <option value="other">{t("other")}</option>
            </Select>
            <FullWidth>
              <Button type="submit">{t("title")}</Button>
            </FullWidth>
          </Form>
        </RegisterCard>
      </Content>
      <Footer />
    </PageWrapper>
  );
}
