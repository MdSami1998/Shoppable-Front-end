import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import Products from './Products/Products';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Reviews from './Reviews/Reviews';
import TeamMembers from './TeamMembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <BusinessSummery></BusinessSummery>
            <Products></Products>
            <Reviews></Reviews>
            <TeamMembers></TeamMembers>
        </div>
    );
};

export default Home;