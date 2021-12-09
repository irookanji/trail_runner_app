import React from "react";

import {
  Footer,
  FourthSection,
  HeaderMUI,
  LastSection,
  SecondSection,
  ThirdSection,
} from "./containers";
import { NavbarMUI, Collections, Favorites, NewArrivals, Stories } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavbarMUI />
      <HeaderMUI />
      <Favorites />

      <SecondSection />
      <Collections />
      <ThirdSection />
      <NewArrivals />
      <FourthSection />
      <Stories />
      <LastSection />
      <Footer />
    </div>
  );
};

export default App;
