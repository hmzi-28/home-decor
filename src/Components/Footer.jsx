import React from 'react'
import { FaFacebookF, FaTwitter} from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='mt-[80px] xl:mt-[150px] relative z-20'>
        <div className="container mx-auto">
            <div className="footer w-full flex lg:flex-row flex-col-reverse justify-between  text-center gap-10">

                <div className="footerOne lg:w-[30%] gap-2 lg:gap-0">
                    <div className="footer-logo">
                        <a href="">Company Logo</a>
                    </div>
                    <div className='text-[16px] my-5'>It is a long established fact that a reader will be distracted lookings.</div>

                    <div className="footer-icon flex gap-5 justify-center ">
                        <a href="" className='cursor-pointer'>
                        <FaFacebookF/>
                        </a>
                        <a href="" className='cursor-pointer'>
                        <GrInstagram/>

                        </a>
                        <a href="" className='cursor-pointer'>
                        <FaTwitter/>

                        </a>
                        <a href="" className='cursor-pointer'>
                        <IoLogoWhatsapp />

                        </a>
                    </div>

                </div>
                <div className="footerTwo flex flex-col gap-2 lg:gap-0 lg:items-start">
                    <h3 className='lg:mb-4'>Pages</h3>
                    <a href="" className='text-[17px]'>About Us</a>
                    <a href="" className='text-[17px]'>Testimonials</a>
                    <a href="" className='text-[17px]'>Our Work</a>
                    <a href="" className='text-[17px]'>Contact</a>

                </div>
                <div className="footerThree flex flex-col gap-2 lg:gap-0 lg:items-start">
                    <h3 className='lg:mb-4'>Services</h3>
                    <a href="" className='text-[17px]'>Kitchen</a>
                    <a href="" className='text-[17px]'>Living Area</a>
                    <a href="" className='text-[17px]'>Bathroom</a>
                    <a href="" className='text-[17px]'>Bedroom</a>

                </div>
                <div className="footerFour flex flex-col lg:w-[22%] gap-2 lg:gap-0 lg:items-start">
                    <h3 className='lg:mb-4'>Contact</h3>
                    <a href="" className='text-[17px]'>55 East Birchwood Ave.</a>
                    <a href="" className='text-[17px]'>Brooklyn, New York 11201</a>
                    <a href="" className='text-[17px]'>contact@interno.com</a>
                    <a href="" className='text-[17px]'>(123) 456 - 7890</a>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer;