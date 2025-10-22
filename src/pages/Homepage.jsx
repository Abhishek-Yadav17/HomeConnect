import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Listings from '../components/Listings';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Faq from '../components/Faq';
import Samples from '../components/Samples';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Listings />
      <Blog />
      <Samples />
      <Faq />
      <Footer />
    </>
  );
};

export default Homepage;
