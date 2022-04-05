/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Title,
  SubTitle,
  Description,
  SlideContainer,
  ImageContainer,
  ImageCarousel,
  CommonContainer,
  InfoCardContainer,
  ArrowBtn,
} from './styles';
import arrowToRight from '../../../assets/arrow_right.svg';
import arrowToLeft from '../../../assets/arrow_left.svg';
import 'slick-carousel/slick/slick.css';

type SlidesProps = {
  image: string;
  title: string;
  info: string;
}

type Props = {
  titleText: string,
  slides: Array<SlidesProps>,
};

export default function CustomCarousel({ titleText, slides }: Props) {
  const sliderSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: (
      <ArrowBtn left={0}>
        <img src={arrowToLeft} alt="Arrow To Left" />
      </ArrowBtn>
    ),
    nextArrow: (
      <ArrowBtn right="100px">
        <img src={arrowToRight} alt="Arrow To Right" />
      </ArrowBtn>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>{titleText}</Title>
      <CommonContainer>
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <SlideContainer key={uuidv4()}>
              <ImageContainer>
                <ImageCarousel className="collection_img" $cover={slide.image} alt={slide.info} />
              </ImageContainer>
              <InfoCardContainer>
                <SubTitle>{slide.title}</SubTitle>
                <Description>{slide.info}</Description>
              </InfoCardContainer>
            </SlideContainer>
          ))}
        </Slider>
      </CommonContainer>
    </Container>
  );
}
