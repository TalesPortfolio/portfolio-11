// This layout is charged each time the user exchange language.
// It carries the correct translation messages based on the URL (eg /pt, /en, /fr)

import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import Providers from "./Providers";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // ←capturing the language of the dynamic route
}) {
  const { locale } = await params; // ← taking the language

  // Checks if the language is supported
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  //Imports the specific language translation file
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        {/* Here we apply nextintlclientprovider with the correct language and messages */}
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
