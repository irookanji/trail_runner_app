import React from "react";

import {
  FourthSection,
  HeaderMUI,
  LastSection,
  SecondSection,
  ThirdSection,
} from "../containers";
import { Favorites } from "../components";
import { slidesCollections } from "../components/atoms/Carousel/CollectionsData";
import { slidesNewArrival } from "../components/atoms/Carousel/NewArrivalsData";
import { slidesStories } from "../components/atoms/Carousel/StoriesData";
import CustomCarousel from "../components/atoms/Carousel/CustomCarousel";

const Home = () => {
  return (
    <>
      <HeaderMUI />
      <Favorites />
      <SecondSection />
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
