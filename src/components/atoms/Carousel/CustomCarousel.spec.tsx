import React from 'react';
import renderer from 'react-test-renderer';
import CustomCarousel from './CustomCarousel';
import { slidesCollections } from './CarouselData/CollectionsData';

test('Carousel rendered as expected', () => {
  const tree = renderer.create(<CustomCarousel slides={slidesCollections} titleText="Shop The Collections" />).toJSON();
  expect(tree).toMatchSnapshot();
});
