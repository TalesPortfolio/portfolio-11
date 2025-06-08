'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  CarouselWrapper,
  Card,
  Img,
  PrevArrow,
  NextArrow,
  H2,
} from '../styles/CarouselStyled';

// Lista de slides
const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'];

// Define o componente
function Carousel() {
  const t = useTranslations('Carousel');

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <CarouselWrapper>
      <H2>{t('carouselTitle')}</H2>
      <Slider {...settings}>
        {slides.map(key => (
          <Card key={key}>
            <Img src={`/images/${key}.png`} alt={t(`slides.${key}.title`)} />
            <h3>{t(`slides.${key}.title`)}</h3>
            <p>{t(`slides.${key}.price`)}</p>
          </Card>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}

// Adiciona o displayName para aparecer no DevTools
Carousel.displayName = 'Carousel';

export default Carousel;
