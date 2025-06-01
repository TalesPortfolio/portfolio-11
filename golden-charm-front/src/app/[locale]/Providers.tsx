// src/app/[locale]/Providers.tsx
'use client';

//////////////////////////
// Used for translation //
//////////////////////////

import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { GlobalStyles } from '../../../styles/globalStyled';

interface ProvidersProps {
  locale: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Record<string, any>;
  children: React.ReactNode;
}

export default function Providers({ locale, messages, children }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Paris">
      <GlobalStyles />
      {children}
    </NextIntlClientProvider>
  );
}
