import { Story } from '@storybook/react';
import React from 'react';
import CustomCarousel from './CustomCarousel';
import { slidesCollections } from '../../../components/atoms/Carousel/CarouselData/CollectionsData';

export default {
  component: CustomCarousel,
  title: 'Atoms/CustomCarousel',
  argTypes: { clickHandler: { action: 'clicked' } },
};

export const Template = () => {
  return <CustomCarousel slides={slidesCollections} titleText="Shop The Collections" />;
};
