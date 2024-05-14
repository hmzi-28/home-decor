import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from '../assets/clientReviews.js'

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='mt-[80px] xl:mt-[150px] relative z-20' id='testimonials'>
            <div className="container mx-auto">
                <div className=" bg-accent-secondary rounded-[20px] px-[15px] w-full">
                    <div className="testimonial lg:h-[400px] h-[385px] mx-auto">
                    <h1 className='pt-[30px] lg:pt-[50px] text-center mb-8 text-primary text-[35px]'>What Client Says</h1>

                        <Slider {...settings} className=' flex gap-5'>
                            
                           {Reviews.map((review,index)=>{
                            return  <div key={index}>
                                
                            <div className='bg-white rounded-[20px] h-[200px] p-4 mx-2'>
                                <div className="phone-detail flex  gap-7 mb-7 justify-center md:justify-start">
                                    <div className="icon w-[50px] h-[50px] rounded-[25px] bg-accent/15 flex justify-center items-center">
                                        <img src={review.img} alt="ClientImg" />
                                    </div>
                                    <div className="">
                                        <div className='text-lg font-bold'>{review.name}</div>
                                        <p className='text-[14px] w-full '>{review.country}</p>
                                    </div>
                                </div>
                                <p className='text-[16px]'>{review.review}</p>
                            </div>
                        </div>
                           })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Testimonial