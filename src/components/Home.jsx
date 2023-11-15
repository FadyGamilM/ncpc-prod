import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Vegetables from './Vegetables';
import Sectors from './Sectors';
import Footer from './Footer';
const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Vegetables />
            <Sectors />
            <Footer />
        </div>
    )
}

export default Home