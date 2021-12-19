import React from "react";
import { Link } from "react-router-dom";

import {
  FourthSection,
  HeaderMUI,
  LastSection,
  SecondSection,
  ThirdSection,
} from "../containers";
import { Collections, Favorites, NewArrivals, Stories } from "../components";


const Home = () => {
  return (
    <>
      <HeaderMUI />
      <Favorites />
      {/* <Link to="/men">Link to Men</Link> */}

      <SecondSection />
      <Collections />
      <ThirdSection />
      <NewArrivals />
      <FourthSection />
      <Stories />
      <LastSection />
    </>
  );
};

export default Home;
