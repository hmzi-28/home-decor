import React, { useState, useEffect } from 'react';
import About from '../Components/About';
import Grids from '../Components/Grids';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Testimonial from '../Components/Testimonial';
import Work from '../Components/Work';
import Brands from '../Components/Brands';
import Stats from '../Components/Stats';
import Navbar from '../Components/Navbar';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Rights from '../Components/Rights';

const Pages = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;

    const handleImageLoad = () => {
      imagesLoaded += 1;
      if (imagesLoaded === images.length) {
        setLoading(false);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, []);

  if (loading) {
    return <div className="spinner">loading...</div>;
  }

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      {/* <Navbar  */}
      <Header />
      <Hero />
      <Grids />
      <About />
      <Testimonial />
      <Work />
      <Brands />
      <Stats />
      <Contact />
      <Footer />
      <Rights />
    </div>
  );
};

export default Pages;
