import React from "react";

import {
  Footer,
  FourthPage,
  HeaderMUI,
  LastPage,
  SecondPage,
  ThirdPage,
} from "./containers";
import { Collections, Favorites, NewArrivals, Stories } from "./components";
import NavbarMUI from "./components/navbar/NavbarMUI";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavbarMUI />
      <HeaderMUI />
      <Favorites />

      <SecondPage />
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
