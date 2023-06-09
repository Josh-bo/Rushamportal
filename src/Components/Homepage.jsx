import React from 'react';
import Cards2 from './Cards2';
import Firstcard from './Firstcard';
import Footers from './Footers';
import HeroSection from './HeroSection';
import TopNav from './TopNav';
import ReturnToTop from './ReturnToTop';

const Homepage = () => {
  return (
    <>
        <TopNav/>
        <HeroSection/>
        <Firstcard/>
        <Cards2/>
        <Footers/> 
        <ReturnToTop/>
    </>
  );
}

export default Homepage;
