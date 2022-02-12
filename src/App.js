import React, { useEffect } from 'react';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Footer from './containers/footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavbarMUI } from './components';
import './App.css';

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <NavbarMUI />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productNumber" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
