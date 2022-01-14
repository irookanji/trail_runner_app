import React from 'react';

import { FourthSection, HeaderMUI, LastSection, ThirdSection } from '../containers';
import { Favorites } from '../components';
import { slidesCollections } from '../components/atoms/Carousel/CarouselData/CollectionsData';
import { slidesNewArrival } from '../components/atoms/Carousel/CarouselData/NewArrivalsData';
import { slidesStories } from '../components/atoms/Carousel/CarouselData/StoriesData';
import CustomCarousel from '../components/atoms/Carousel/CustomCarousel';
import CustomSection from '../components/atoms/CustomSection/CustomSection';
import secondSectionCoverImage from '../assets/SecondCover.jpg';

const Home = () => {
  return (
    <>
      <HeaderMUI />
      <Favorites />

      <CustomSection
        coverImage={secondSectionCoverImage}
        buttonWidth="180px"
        fontSizeTitle="2rem"
        lineHeightTitle="4rem"
        fontSizeSubTitle="1.5rem"
        lineHeightSubTitle="2.5rem"
        titleText="Seasons Change. Your Shoes Don’t Have To."
        subTitleText="Soft and cozy wool shoes to keep you comfortable all year round."
      />

      <CustomCarousel slides={slidesCollections} titleText="Shop The Collections" />
      <ThirdSection />
      <CustomCarousel slides={slidesNewArrival} titleText="New Arrivals" />
      <FourthSection />
      <CustomCarousel slides={slidesStories} titleText="Stories" />
      <LastSection />
    </>
  );
};

export default Home;
