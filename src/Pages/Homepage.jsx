import React from 'react';
import Cards2 from '../Components/Cards2';
import Firstcard from '../Components/Firstcard';
import Footers from '../Components/Footers';
import HeroSection from '../Components/HeroSection';
import TopNav from '../Components/TopNav';
import ReturnToTop from '../Components/ReturnToTop';

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
