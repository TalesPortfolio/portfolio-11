// This layout is charged each time the user exchange language.
// It carries the correct translation messages based on the URL (eg /pt, /en, /fr)
// app/[locale]/layout.tsx
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import Providers from "./Providers";
import { routing } from "@/i18n/routing";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <Providers locale={locale}>
      {children}
    </Providers>
  );
}
