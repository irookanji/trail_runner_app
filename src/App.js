import React from "react";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import NewArrivals from "./pages/NewArrivals";
import Footer from "./containers/footer/Footer";

import { Routes, Route } from "react-router-dom";
import { NavbarMUI } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavbarMUI />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
