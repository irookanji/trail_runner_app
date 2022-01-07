import React from "react";

import {
  FourthSection,
  HeaderMUI,
  LastSection,
  SecondSection,
  ThirdSection,
} from "../containers";
import { Favorites, Stories } from "../components";
import { slidesCollections } from "../components/atoms/Carousel/CollectionsData";
import { slidesNewArrival } from "../components/atoms/Carousel/NewArrivalsData";
import CustomCarousel from "../components/atoms/Carousel/CustomCarousel";

const Home = () => {
  return (
    <>
      <HeaderMUI />
      <Favorites />
      {/* <Link to="/men">Link to Men</Link> */}

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
      <Stories />
      <LastSection />
    </>
  );
};

export default Home;
