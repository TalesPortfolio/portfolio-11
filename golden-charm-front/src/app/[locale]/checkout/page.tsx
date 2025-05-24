'use client';

import {useTranslations} from 'next-intl';

 
export default function Checkout() {
  const t = useTranslations('Checkout');
  return (
    <div>
      <h1>{t('title')}</h1>

    </div>
  );
}