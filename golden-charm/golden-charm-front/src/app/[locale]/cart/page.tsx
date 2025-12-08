'use client';

import {useTranslations} from 'next-intl';

 
function Cart() {
  const t = useTranslations('Cart');
  return (
    <div>
      <h1>{t('title')}</h1>

    </div>
  );
}

Cart.displayName = "Cart";
export default Cart;