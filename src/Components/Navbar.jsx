import React from 'react'
import { IoMdCall } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='hidden lg:w-[100%]  lg:h-[50px]  lg:bg-primary z-30 lg:flex'>
<div className="container mx-auto flex items-center">
    <div className="nav flex justify-between items-center h-full w-full text-white">
        <div className='flex items-center gap-1'>
        <IoMdCall />
        <a href="">+92 29 3444 2332</a>

        </div>
        <div className='flex items-center gap-1'>
        <MdOutlineMailOutline />
          <a href="">info@Company.com</a>

        </div>
    </div>
</div>
    </div>
  )
}

export default Navbar;