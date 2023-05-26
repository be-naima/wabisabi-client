import React from 'react';
import Banner from '../Home/Banner'
import LatestRecipies from './LatestRecipies';
import Chefs from './Chefs';
import Review from './Review';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <LatestRecipies></LatestRecipies>
            <Review></Review>
        </div>
    );
};

export default Home;