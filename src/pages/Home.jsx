import React from 'react';
import { HeaderMUI, LastSection } from '../containers';
import Favorites from '../components/molecules/favorites/Favorites';
import { slidesCollections } from '../components/atoms/Carousel/CarouselData/CollectionsData';
import { slidesNewArrival } from '../components/atoms/Carousel/CarouselData/NewArrivalsData';
import { slidesStories } from '../components/atoms/Carousel/CarouselData/StoriesData';
import CustomCarousel from '../components/atoms/Carousel/CustomCarousel';
import CustomSection from '../components/molecules/CustomSection/CustomSection';
import secondSectionCoverImage from '../assets/SecondCover.jpg';
import fourthSectionCoverImage from '../assets/FourthCover.jpg';

const Home = () => {
  return (
    <>
      <HeaderMUI />
      <Favorites />

      <CustomSection
        coverImage={secondSectionCoverImage}
        renderSecondButton={true}
        $fontSizeTitle="2rem"
        $lineHeightTitle="4rem"
        $fontSizeSubTitle="1.5rem"
        $lineHeightSubTitle="2.5rem"
        buttonText="Shop Men"
        titleText="Seasons Change. Your Shoes Don’t Have To."
        subTitleText="Soft and cozy wool shoes to keep you comfortable all year round."
      />

      <CustomCarousel slides={slidesCollections} titleText="Shop The Collections" />

      <CustomSection
        renderSecondButton={false}
        $xsCustomWidth="210px"
        $buttonWidth="384px"
        $fontSizeTitle="2rem"
        $fontWeightSubTitle="normal"
        $lineHeightTitle="4rem"
        $fontSizeSubTitle="1.5rem"
        $lineHeightSubTitle="2.5rem"
        buttonText="See How"
        buttonLink="/see-how"
        titleText="Made From Nature, For Nature"
        subTitleText="We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they're our
        best chance for a sustainable future."
      />
      <CustomCarousel slides={slidesNewArrival} titleText="New Arrivals" />

      <CustomSection
        coverImage={fourthSectionCoverImage}
        renderSecondButton={false}
        $xsCustomWidth="210px"
        $buttonWidth="384px"
        $fontSizeTitle="2rem"
        $fontWeightSubTitle="normal"
        $lineHeightTitle="4rem"
        $fontSizeSubTitle="1.5rem"
        $lineHeightSubTitle="2.5rem"
        buttonText="OUR SUSTAINABLE PRACTICES"
        buttonLink="/sustainable-practices"
        titleText="Reversing Climate Change Through Better Business"
        subTitleText="Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further.
        Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025."
      />
      <CustomCarousel slides={slidesStories} titleText="Stories" />
      <LastSection />
    </>
  );
};

export default Home;
