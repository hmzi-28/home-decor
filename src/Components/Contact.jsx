import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div className='mt-[80px] xl:mt-[150px] relative z-20' id='contact'>
        <div className="container mx-auto">
            <div className="contact bg-primary h-[300px] flex text-center text-white flex-col justify-center items-center">
                <h2 className='text-white text-[35px] leading-[35px]'>Do you want to join Interno?</h2>
                <p className='text-[16px]  my-[20px] lg:my-[0] lg:mt-1'>It is a long established fact will be distracted.</p>
                <Link to='/contact'>
                <button className='btn bg-accent lg:mt-5  hover:bg-accent-hover'>Contact Us  <BsArrowRightShort  className=''/></button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Contact