'use client';

import {useTranslations} from 'next-intl';

 
export default function Cart() {
  const t = useTranslations('Cart');
  return (
    <div>
      <h1>{t('title')}</h1>

    </div>
  );
}