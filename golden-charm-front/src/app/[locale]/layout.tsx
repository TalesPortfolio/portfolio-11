// src/app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import Providers from './Providers';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;    // ← aqui
}) {
  const { locale } = await params;         // ← e aqui
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
