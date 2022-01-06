import React from "react";

import {
  FourthSection,
  HeaderMUI,
  LastSection,
  SecondSection,
  ThirdSection,
} from "../containers";
import { Favorites, NewArrivals, Stories } from "../components";
import { slides } from "../components/atoms/Carousel/CollectionsData";
import CustomCarousel from "../components/atoms/Carousel/CustomCarousel";

const Home = () => {
  return (
    <>
      <HeaderMUI />
      <Favorites />
      {/* <Link to="/men">Link to Men</Link> */}

      <SecondSection />
      <CustomCarousel
        slides={slides}
        titleText="Shop The Collections"
      ></CustomCarousel>
      <ThirdSection />
      <NewArrivals />
      <FourthSection />
      <Stories />
      <LastSection />
    </>
  );
};

export default Home;
