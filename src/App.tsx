import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import NavbarMUI from './templates/navbar/NavbarMUI';
import Footer from './templates/footer/Footer';
import './App.css';
import { saveProducts } from './redux/productsReducer';
import { getProducts } from './requests';
import Admin from './pages/admin/Admin';
import AddProduct from './pages/admin/AddProduct';
import ListProducts from './pages/admin/ListProducts';
import EditProduct from './pages/admin/EditProduct';
import Profile from './pages/user/Profile';

function App() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const getAllProducts = async () => {
    const response = await getProducts();
    dispatch(saveProducts(response));
  };

  const { pathname } = useLocation();
  useEffect(() => {
    getAllProducts();
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
        <Route path="/admin" element={<Admin />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:productId" element={<EditProduct />} />
        <Route path="/list-products" element={<ListProducts />} />
        <Route path="/product/:productNumber" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!(location === '/list-products' || location === '/admin' || location === '/add-product') && <Footer /> }
    </div>
  );
}

export default App;
