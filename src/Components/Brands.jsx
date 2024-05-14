import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoOne from "../assets/brands/01.svg";
import logoTwo from "../assets/brands/02.svg";
import logoThree from "../assets/brands/03.svg";
import logoFour from "../assets/brands/04.svg";
import logoFive from "../assets/brands/05.svg";

const Brands = () => {
  const settings = {
    dots: false,            // Disable dots
    infinite: true,         // Enable infinite looping
    speed: 1000,             // Transition speed in milliseconds
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 5000,    // Autoplay interval in milliseconds
    slidesToShow: 3,        // Number of slides to show at once
    slidesToScroll: 1,      // Number of slides to scroll on each transition
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
    autoplaySpeed: 3000,    // Autoplay interval in milliseconds
    autoplay: true,         // Enable autoplay


          dots: false  // Ensure dots are disabled on all breakpoints
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false  // Ensure dots are disabled on all breakpoints
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false  // Ensure dots are disabled on all breakpoints
        }
      }
    ]
  };
  

  return (
    <div className='mt-[80px] xl:mt-[150px] relative z-20 '>
        <div className="container mx-auto">
          <div className="brands ">
            <Slider {...settings} className=' '>
              <img src={logoOne} alt="Brand One Logo"   className='w-[200px] h-[70px]'/>
              <img src={logoTwo} alt="Brand Two Logo"  className='w-[200px] h-[70px]'/>
              <img src={logoThree} alt="Brand Three Logo" className='w-[200px] h-[70px]' />
              <img src={logoFour} alt="Brand Four Logo"  className='w-[200px] h-[70px]'/>
              <img src={logoFive} alt="Brand Five Logo" className='w-[200px] h-[70px]' />
            </Slider>
          </div>
        </div>
    </div>
  );
}

export default Brands;
