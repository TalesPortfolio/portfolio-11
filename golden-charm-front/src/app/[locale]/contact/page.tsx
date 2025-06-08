'use client';

import {useTranslations} from 'next-intl';

 
function Contact() {
  const t = useTranslations('Contact');
  return (
    <div>
      <h1>{t('title')}</h1>

    </div>
  );
}

Contact.displayName = 'Contact';

export default Contact;