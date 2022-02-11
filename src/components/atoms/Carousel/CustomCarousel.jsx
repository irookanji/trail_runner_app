import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Description,
  SlideContainer,
  ImageContainer,
  ImageCarousel,
  ArrowButton,
} from './styles';

import arrowToRight from '../../../assets/arrow_right.svg';
import arrowToLeft from '../../../assets/arrow_left.svg';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { v4 as uuidv4 } from 'uuid';

export default function CustomCarousel(props) {
  return (
    <Container>
      <Title>{props.titleText}</Title>
      <Carousel
        plugins={[
          'centered',
          'infinite',
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <ArrowButton>
                  <img src={arrowToLeft} alt="Arrow To Left" name="angle-double-left" />
                </ArrowButton>
              ),
              arrowRight: (
                <ArrowButton>
                  <img src={arrowToRight} alt="Arrow To Right" name="angle-double-right" />
                </ArrowButton>
              ),
              addArrowClickHandler: true,
            },
          },
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              'centered',
              'infinite',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          900: {
            plugins: [
              'centered',
              'infinite',
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <img src={arrowToLeft} alt="Arrow To Left" name="angle-double-left" />
                    </button>
                  ),
                  arrowRight: (
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <img src={arrowToRight} alt="Arrow To Right" name="angle-double-right" />
                    </button>
                  ),
                  addArrowClickHandler: true,
                },
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
      >
        {props.slides.map((slide, index) => (
          <SlideContainer key={uuidv4()}>
            <ImageContainer>
              <ImageCarousel className="collection_img" $cover={slide.image} alt={slide.info} />
            </ImageContainer>

            <SubTitle>{slide.title}</SubTitle>

            <Description>{slide.info}</Description>
          </SlideContainer>
        ))}
      </Carousel>
    </Container>
  );
}
