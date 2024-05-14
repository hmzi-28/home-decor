import React from 'react';
import work from '../assets/work/01.png'
import { MdOutlineNavigateNext } from 'react-icons/md';
import projects from '../assets/Work';

const Work = () => {
    return (
        <div className='mt-[80px] xl:mt-[150px] relative z-20' id='work'>
            <div className="container mx-auto">
                <h1 className='text-center  text-primary text-[35px] mb-3'>Follow Our Projects</h1>
                <p className='text-[17px] lg:w-[50%] mx-auto text-center mb-8'>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
                <div className="projects flex flex-wrap justify-between ">
                    {projects.map((project, index) => {
                        return <div className="project h-[400px] lg:w-[47%] lg:mb-8  mx-auto lg:mx-0 mb-10" key={index}>
                            <img src={project.img} alt="" className='h-[82%] w-full' />
                            <div className='flex justify-between mt-3'>
                                <div>
                                    <h3>{project.name}</h3>
                                    <p className='w-full text-[18px]'>{project.type}</p>
                                </div>
                                <div className='icon h-[50px] w-[50px] rounded-[25px] flex justify-center items-center bg-accent/15 cursor-pointer'>
                                   <a href=""> <MdOutlineNavigateNext /></a>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Work;