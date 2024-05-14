import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, suffix }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Customize based on when you want the animation to start
  });

  return (
    <div ref={ref} className="text-[30px] font-bold">
      {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : `0${suffix}`}
    </div>
  );
};

const Stats = () => {
  return (
    <div className='mt-[80px] xl:mt-[150px] relative z-20'>
      <div className="container mx-auto">
        <div className="stats flex lg:justify-between lg:flex-row px-10 text-center bg-accent-secondary lg:h-[180px] items-center rounded-[20px] flex-col h-[auto] gap-9 py-5 lg:py-0">
          <div className='text-accent'>
            <div className='text-[22px]'>
            <AnimatedCounter end={7}  suffix="+"  />
            </div>
            <p className="text-[16px] w-[100%] text-secondary font-[500]">Years of Experience</p>
          </div>
          <div className='text-accent '>
            <AnimatedCounter end={200} suffix="+"  />
            <p className="text-[16px]  w-[100%] text-secondary font-[500]">Happy Customers</p>
          </div>
          <div className='text-accent'>
            <AnimatedCounter end={100} suffix="+" />
            <p className="text-[16px]  w-[100%] text-secondary font-[500]">Completed Projects</p>
          </div>
          <div className='text-accent'>
            <AnimatedCounter end={10} suffix="+" />
            <p className="text-[16px]  w-[100%] text-secondary  font-[500]">Active Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
