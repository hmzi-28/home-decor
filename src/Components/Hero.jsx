import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const Home = () => {
  return (
    <div className='hero lg:h-[640px] h-[570px] xl:h-[800px] bg-home bg-center lg:bg-cover bg-no-repeat bg-fixed  lg:rounded-bl-[220px] relative z-20' id='home'>
      <div className="container mx-auto flex justify-center items-center h-full lg:justify-start">
        <div className="hero-text w-[560px] flex flex-col  items-center  text-center lg:text-start lg:items-start">
          <h1 className='lg:text-[64px] xl:text-[74px] text-[50px] leading-none  mb-8'>Let Your Home Be Unique</h1>
          <p className=' mb-8 text-[18px]'>There are many variations of the passages of lorem Ipsum from available,variations of the passages.</p>
          <button className='btn btn-primary mx-auto  lg:mx-0 text-white'>Get free estimation  <BsArrowRightShort/></button>
        </div>
      </div>


    </div>
  )
}

export default Home