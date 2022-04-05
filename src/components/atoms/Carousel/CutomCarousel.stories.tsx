/* eslint-disable import/no-unresolved */
// import { Story } from '@storybook/react';
import React from 'react';
import CustomCarousel from './CustomCarousel';
import { slidesCollections } from './CarouselData/CollectionsData.jsx';

export default {
  component: CustomCarousel,
  title: 'Atoms/CustomCarousel',
  argTypes: { clickHandler: { action: 'clicked' } },
};

export function Template() {
  return <CustomCarousel slides={slidesCollections} titleText="Shop The Collections" />;
}
