import React from "react";

import {
  FourthSection,
  HeaderMUI,
  LastSection,

  ThirdSection,
} from "../containers";
import { Favorites } from "../components";
import { slidesCollections } from "../components/atoms/Carousel/CollectionsData";
import { slidesNewArrival } from "../components/atoms/Carousel/NewArrivalsData";
import { slidesStories } from "../components/atoms/Carousel/StoriesData";
import CustomCarousel from "../components/atoms/Carousel/CustomCarousel";
import CustomSection from "../components/atoms/CustomSection/CustomSection";
import secondSectionCoverImage from "../assets/SecondCover.jpg";

const Home = () => {
  return (
    <>
      <HeaderMUI />
      <Favorites />

      <CustomSection coverImage={secondSectionCoverImage} titleText="Seasons Change. Your Shoes Don’t Have To." subTitleText="Soft and cozy wool shoes to keep you comfortable all year round."></CustomSection>

      <CustomCarousel
        slides={slidesCollections}
        titleText="Shop The Collections"
      ></CustomCarousel>
      <ThirdSection />
      <CustomCarousel
        slides={slidesNewArrival}
        titleText="New Arrivals"
      ></CustomCarousel>
      <FourthSection />
      <CustomCarousel
        slides={slidesStories}
        titleText="Stories"
      ></CustomCarousel>
      <LastSection />
    </>
  );
};

export default Home;
