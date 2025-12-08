// src/app/[locale]/complaints/page.tsx
"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  SectionMain,
  Section,
  Title,
  Description,
  Form,
  FieldGroup,
  Label,
  Input,
  Textarea,
  CheckboxWrapper,
  Button,
} from "./styled";
import AppNavbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function WhistleblowerChannel() {
  const [anonymous, setAnonymous] = useState(false);
  const t = useTranslations("Whistleblower");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ...envia o formulário
  };

  return (
    <SectionMain>
      <AppNavbar />
      <Section>
        <Title>{t("title")}</Title>
        <Description>{t("description")}</Description>

        <Form onSubmit={handleSubmit}>
          {!anonymous && (
            <>
              <FieldGroup>
                <Label htmlFor="name">{t("name")}</Label>
                <Input id="name" name="name" type="text" />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="email">{t("email")}</Label>
                <Input id="email" name="email" type="email" />
              </FieldGroup>
            </>
          )}

          <FieldGroup>
            <Label htmlFor="category">{t("category")}</Label>
            <Input id="category" name="category" type="text" placeholder={t("categoryPlaceholder")} />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="description">{t("reportDescription")}</Label>
            <Textarea id="description" name="description" rows={5} placeholder={t("reportPlaceholder")} />
          </FieldGroup>

          <CheckboxWrapper>
            <input
              id="anonymous"
              type="checkbox"
              checked={anonymous}
              onChange={() => setAnonymous((prev) => !prev)}
            />
            <label htmlFor="anonymous">{t("anonymous")}</label>
          </CheckboxWrapper>

          <Button type="submit">{t("submit")}</Button>
        </Form>
      </Section>
      <Footer />
    </SectionMain>
  );
}
