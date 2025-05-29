"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionMain, Section, Form, Label, Input, Textarea, Button } from "./styled";
import AppNavbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export default function WhistleblowerChannel() {
  const [anonymous, setAnonymous] = useState(false);
  const t = useTranslations("Whistleblower");

  return (
    <SectionMain>
      <AppNavbar />
      <Section>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>

        <Form>
          {!anonymous && (
            <>
              <Label htmlFor="name">{t("name")}</Label>
              <Input type="text" id="name" name="name" />
              <Label htmlFor="email">{t("email")}</Label>
              <Input type="email" id="email" name="email" />
            </>
          )}

          <Label htmlFor="category">{t("category")}</Label>
          <Input
            type="text"
            id="category"
            name="category"
            placeholder={t("categoryPlaceholder")}
          />

          <Label htmlFor="description">{t("reportDescription")}</Label>
          <Textarea
            id="description"
            name="description"
            rows={6}
            placeholder={t("reportPlaceholder")}
          />

          <Label>
            <input
              type="checkbox"
              onChange={() => setAnonymous(!anonymous)}
            />{" "}
            {t("anonymous")}
          </Label>

          <Button type="submit">{t("submit")}</Button>
        </Form>
      </Section>
      <Footer />
    </SectionMain>
  );
}
