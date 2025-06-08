// src/app/[locale]/Providers.tsx
'use client';

//////////////////////////
// Used for translation //
//////////////////////////


import React, { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { GlobalStyles } from '../../../styles/globalStyled';

interface ProvidersProps {
  locale: string;
  children: React.ReactNode;
}

export default function Providers({ locale, children }: ProvidersProps) {
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    import(`../../../messages/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch((err) => {
        console.error('Erro ao carregar mensagens:', err);
      });
  }, [locale]);

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Paris">
      <GlobalStyles />
      {children}
    </NextIntlClientProvider>
  );
}
