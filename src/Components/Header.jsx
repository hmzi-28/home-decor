import React, { useEffect, useRef, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutsideHandler);
    return () => document.removeEventListener("mousedown", clickOutsideHandler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
  }, [isMenuOpen]);

  return (
    <div className={`w-[100%] h-[70px] z-30 shadow-xl ${isFixed ? 'fixed top-0 bg-primary lg:text-white text-white' : 'bg-white'}`}>
      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black ease-in-out duration-300 bg-opacity-75 z-10" onClick={() => setIsMenuOpen(false)}></div>}

      <div className="container mx-auto h-full flex justify-between items-center">
        <a href="#">Company Logo</a>
        <nav>
          <CiMenuFries className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)} />
          {/* Menu with higher z-index */}
          <div className={`md:flex-row md:flex md:items-center md:static md:gap-4 
          ${isFixed ? 'lg:text-white text-primary' :''}
           text-[18px] fixed top-0 bottom-0 w-full flex flex-col  text-primary bg-white lg:bg-transparent items-center
           justify-center gap-5 pr-[20%] md:pr-[0] ease-in-out duration-500 lg:duration-0
           ${isMenuOpen ? "right-20" : 'right-full'}`} ref={menuRef} style={{ zIndex: 50 }}>

            <div className="mobile-nav flex justify-between items-center pt-[20px] absolute top-0 md:hidden text-primary">
              <a href="#" >Company Logo</a>
              <IoClose onClick={() => setIsMenuOpen(false)} className='absolute right-[-120%]' size={25} />
            </div>
            <ul className='flex gap-4 flex-col absolute top-20 md:static md:flex-row md:flex md:items-center md:gap-4'>
            <li onClick={() => setIsMenuOpen(false)}><a href="#home">Home</a></li>
              <li onClick={() => setIsMenuOpen(false)}><a href="#about">About</a></li>
              <li onClick={() => setIsMenuOpen(false)}><a href="#testimonials">Testimonials</a></li>
              <li onClick={() => setIsMenuOpen(false)}><a href="#work">Our Work</a></li>
              <li onClick={() => setIsMenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
