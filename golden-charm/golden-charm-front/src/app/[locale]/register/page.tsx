// src/app/[locale]/auth/register/page.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "../../../../types/formTypes";
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
import { useAppDispatch, useAppSelector } from "@/store";
import { sendToApi, upDateRedux } from "@/store/slice/formSlice";

export default function RegisterPage() {
  const locale = useLocale();
  const t = useTranslations("RegisterPage");

  const { register, handleSubmit } = useForm<IForm>();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.form);

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      //console.log("Form data:", data);
      dispatch(upDateRedux(data));
      dispatch(sendToApi(data));
    } catch (error) {
            console.error("Error during registration:", error)
        }

  };

  {/*
    CRIAR O COMPONETE DE LOADIN COM A LUPA GIRANDO
    */}
  if (loading) return (
    <div>
      <p style={{ textAlign: 'center', color: '#d4af37', fontSize: '1.2rem', textShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}>
        Enregistrement des données...
      </p>
    </div>
  )

  return (
    <PageWrapper>
      <AppNavbar />
      <Content>
        <RegisterCard>
          <Title>{t("title")}</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("name", { required: true })}
              placeholder={t("fullName")}
            />
            <Input
              {...register("email", { required: true })}
              placeholder={t("email")}
            />
            <Input
              {...register("password", { required: true })}
              placeholder={t("password")}
            />
            <Input
              {...register("confirm_Password", { required: true })}
              placeholder={t("confirmPassword")}
            />
            <Input


              {...register("tel", { required: true })}
              placeholder={t("phone")}
            />
            <Input

              {...register("country", { required: true })}
              placeholder={t("country")}
            />
            <Input

              {...register("city", { required: true })}
              placeholder={t("city")}
            />
            <Input

              {...register("address", { required: true })}
              placeholder={t("address")}
            />
            <Input

              {...register("number", { required: true })}
              placeholder={t("houseNumber")}
            />

            <select {...register("gender")}>
              <option value="">{t("gender")}</option>
              <option value="FEMALE">{t("female")}</option>
              <option value="MALE">{t("male")}</option>
              <option value="OTHER">{t("other")}</option>
            </select>
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
