import React from 'react';
import about from '../assets/about/img.png';
import {  FaPhoneAlt } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const About = () => {
    return (
        <div className='mt-[80px] xl:mt-[150px] relative z-20' id='about'>
            <div className="container mx-auto lg:px-0">
                <div className="about flex justify-between gap-[60px] items-center flex-col lg:flex-row ">

                    <div className="about-text lg:pl-6 lg:max-w-[500px] mx-auto flex-1 order-2 lg:order-none  text-center lg:text-start">
                        <h2 className='text-[34px] xl:text-[42px] leading-tight mb-3 '>We Create The Art Of <br/> Stylish Living Stylishly</h2>
                        <p className='mb-7 text-[17px] lg:w-[80%]'>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using
                        that it has a more-or-less normal.</p>
                        <div className="phone-detail flex  gap-7 mb-7 justify-center md:justify-start">
                            <div className="icon w-[50px] h-[50px] rounded-[25px] bg-accent/15 flex justify-center items-center"><FaPhoneAlt /></div>
                            <div className="">
                             <div className='text-lg font-bold'>0987 456 765</div>
                             <p className='text-[16px]'>Call Us Anytime</p>
                            </div>
                        </div>
                        <button className='btn btn-primary  w-[fit-content] mx-auto md:mx-0'>Get free estimation  <BsArrowRightShort/></button>
                    </div>

                    <div className="about-img order-1 flex-1 lg:order-none lg:max-w-[503px] max-w-lg">
                        <img src={about} alt="aboutImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;