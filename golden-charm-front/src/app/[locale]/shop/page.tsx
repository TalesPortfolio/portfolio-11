import { useTranslations } from "next-intl";

export default function Shop() {
  const t = useTranslations("Shop");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
