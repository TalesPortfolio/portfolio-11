'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { QuoteContainer, QuoteText, QuoteAuthor } from '../styles/homePageStyled';
import { useTranslations } from 'next-intl';

function QuoteSection() {
  const t = useTranslations('QuoteSection');
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (inView) setShowAnimation(true);
  }, [inView]);

  return (
    <QuoteContainer ref={ref}>
      <QuoteText
        $animate={showAnimation}
        dangerouslySetInnerHTML={{ __html: t.raw('text') }}
      />
      <QuoteAuthor $animate={showAnimation}>
        {t('author')}
      </QuoteAuthor>
    </QuoteContainer>
  );
}

QuoteSection.displayName = "QuoteSection";

export default QuoteSection;
