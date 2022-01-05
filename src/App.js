import React from "react";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
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
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
