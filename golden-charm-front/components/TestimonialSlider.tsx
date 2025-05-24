"use client";

import Slider from "react-slick";
import {
  Wrapper,
  TopText,
  Stars,
  RatingText,
  Headline,
  SlideWrapper,
  TextContent,
  Title,
  Description,
  Author,
  Image,
} from "../styles/TestimonialSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";

export default function TestimonialSlider() {
  const t = useTranslations("TestimonialSlider");

  const testimonials = [
    {
      title: t("testimonial1.title"),
      description: t("testimonial1.description"),
      author: t("testimonial1.author"),
      product: t("testimonial1.product"),
      image: "/images/lanaAnel2.png",
    },
    {
      title: t("testimonial2.title"),
      description: t("testimonial2.description"),
      author: t("testimonial2.author"),
      product: t("testimonial2.product"),
      image: "/images/womens-ring.png",
    },
    {
      title: t("testimonial3.title"),
      description: t("testimonial3.description"),
      author: t("testimonial3.author"),
      product: t("testimonial3.product"),
      image: "/images/Testeminial_cord.png",
    },
    {
      title: t("testimonial4.title"),
      description: t("testimonial4.description"),
      author: t("testimonial4.author"),
      product: t("testimonial4.product"),
      image: "/images/Testeminial_pendant.png",
    },
    {
      title: t("testimonial5.title"),
      description: t("testimonial5.description"),
      author: t("testimonial5.author"),
      product: t("testimonial5.product"),
      image: "/images/Testeminial_alliance.png",
    },
    {
      title: t("testimonial6.title"),
      description: t("testimonial6.description"),
      author: t("testimonial6.author"),
      product: t("testimonial6.product"),
      image: "/images/Testeminial_earrings.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <TopText>
        <Stars>★★★★★</Stars>
        <RatingText>{t("ratingText")}</RatingText>
        <Headline>{t("headline")}</Headline>
      </TopText>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <SlideWrapper>
              <TextContent>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Author>
                  {item.author} {t("about")} <a href="#">{item.product}</a>
                </Author>
              </TextContent>
              <Image src={item.image} alt={item.product} />
            </SlideWrapper>
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
}
