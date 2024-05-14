import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import { GiStarKey } from 'react-icons/gi';
import { PiCompassTool } from 'react-icons/pi';
import { RiToolsLine } from 'react-icons/ri';

const Grids = () => {
    return (
        <div className='mt-[80px] lg:mt-[150px] relative z-20'>
            
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex w-full lg:flex-row lg:justify-between">
                    <div className="step flex justify-center flex-col items-center mb-10 lg:mt-0 md:w-[30%] text-center">
                        <PiCompassTool className='mb-4 text-accent' size={60} />
                        <h3 className='text-[25px] mb-5'> Project Planning</h3>
                        <p className='mb-5 text-[17px]'> There are many variations of the passages of lorem Ipsum from available, majority.</p>
                        <a href="" className='flex items-center gap-1'>Read more <BsArrowRightShort  className='mt-1'/></a>
                    </div>
                    <div className="step flex justify-center flex-col items-center mb-10 lg:mt-0 md:w-[30%] text-center">
                        <GiStarKey className='mb-4 text-accent' size={60} />
                        <h3 className='text-[25px] mb-5'> Gaining Materials</h3>
                        <p className='mb-5 text-[17px]'> There are many variations of the passages of lorem Ipsum from available, majority.</p>
                        <a href="" className='flex items-center gap-1'>Read more <BsArrowRightShort  className='mt-1'/></a>
                    </div>
                    <div className="step flex justify-center flex-col items-center mb-10 lg:mt-0 md:w-[30%] text-center">
                        <RiToolsLine className='mb-4 text-accent' size={60} />
                        <h3 className='text-[25px] mb-5'> Project Execution</h3>
                        <p className='mb-5 text-[17px]'> There are many variations of the passages of lorem Ipsum from available, majority.</p>
                        <a href="" className='flex items-center gap-1'>Read more<BsArrowRightShort  className='mt-1'/></a>
                    </div>
                  


                </div>
            </div>
        </div>
    )
}

export default Grids;
