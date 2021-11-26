import React from 'react'

import { Footer, FourthPage, Header, LastPage, SecondPage, ThirdPage } from './containers';
import { Collections, Favorites, Navbar, NewArrivals, Stories } from './components';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="first_part">
                <Navbar />
                <Header />
                <Favorites />
            </div>
            <div>
                <SecondPage />
                <Collections />
                <ThirdPage />
                <NewArrivals />
                <FourthPage />
                <Stories />
                <LastPage />
                <Footer />
            </div>
        </div>
    )
}

export default App
