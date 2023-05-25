import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import Products from './Products/Products';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Reviews from './Reviews/Reviews';
import Subscribe from './Reviews/Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <BusinessSummery></BusinessSummery>
            <Products></Products>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;