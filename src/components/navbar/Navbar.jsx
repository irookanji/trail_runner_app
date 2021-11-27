import React from 'react';
// import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'
import About from '../../assets/About.svg'
import My_Account from '../../assets/My_Account.svg'
import Basket from '../../assets/Basket.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__products-links">
                <p><a href="#men">MEN</a></p>
                <p><a href="#women">WOMEN</a></p>
                <p><a href="#new-arrivals">NEW ARRIVALS</a></p>
            </div>
            <div className="navbar__links-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar__stores">
                <p><a href="#sustainability">Sustainability</a></p>
                <p><a href="#stores">Stores</a></p>
            </div>
            <div className="navbar__icons">
                <img src={My_Account} alt="account" />
                <img src={About} alt="about" />
                <img src={Basket} alt="basket" />
            </div>
        </div>
    )
}

export default Navbar
