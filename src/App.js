import React from "react";

import {
  Footer,
  FourthPage,
  HeaderMUI,
  LastPage,
  SecondSection,
  ThirdPage,
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
      <ThirdPage />
      <NewArrivals />
      <FourthPage />
      <Stories />
      <LastPage />
      <Footer />
    </div>
  );
};

export default App;
