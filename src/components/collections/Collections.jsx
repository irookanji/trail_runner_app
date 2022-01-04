import React from "react";
import "./collections.css";

import { slides } from "./CollectionsData";
import CustomCarousel from "../atoms/Carousel/CustomCarousel";

const Collections = () => {
  return (
    <CustomCarousel
      slides={slides}
      titleText="Shop The Collections"
    ></CustomCarousel>
  );
};

export default Collections;
