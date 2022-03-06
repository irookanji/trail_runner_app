import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  Container,
  Title,
  SubTitle,
  Description,
  SlideContainer,
  ImageContainer,
  ImageCarousel,
  ArrowButton,
  CommonContainer,
  ArrowContainer,
} from './styles';
import arrowToRight from '../../../assets/arrow_right.svg';
import arrowToLeft from '../../../assets/arrow_left.svg';
import { v4 as uuidv4 } from 'uuid';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CustomCarouselNew(props) {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
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
      <Title>{props.titleText}</Title>

      <CommonContainer>
        <ArrowContainer>
          <ArrowButton onClick={sliderRef?.slickPrev}>
            <img src={arrowToLeft} alt="Arrow To Left" name="angle-double-left" />
          </ArrowButton>
          <ArrowButton onClick={sliderRef?.slickNext}>
            <img src={arrowToRight} alt="Arrow To Left" name="angle-double-left" />
          </ArrowButton>
        </ArrowContainer>

        <Slider ref={setSliderRef} {...sliderSettings}>
          {props.slides.map((slide, index) => (
            <SlideContainer key={uuidv4()}>
              <ImageContainer>
                <ImageCarousel className="collection_img" $cover={slide.image} alt={slide.info} />
              </ImageContainer>

              <SubTitle>{slide.title}</SubTitle>

              <Description>{slide.info}</Description>
            </SlideContainer>
          ))}
        </Slider>
      </CommonContainer>
    </Container>
  );
}
