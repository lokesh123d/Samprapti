import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Facilities from '../components/Facilities';
import Activities from '../components/Activities';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <>
            <Hero />
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="facilities"><Facilities /></div>
            <div id="gallery"><Activities /></div>
            <Reviews />
        </>
    );
};

export default Home;
