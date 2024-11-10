// import React from 'react'
// import { CiMenuBurger } from "react-icons/ci";

// const Navbar = () => {
//   return (
//     <div className='container bg-black  w-700 pt-8 px-4 md:px-8 w-full'>
//         <div className='flex justify-between items-center'>
//             <div className='text-xl font-medium text-[#ff7f50]'>
//                 Md Hamza.
//             </div>
            
//             <ul className='gap-10 lg:gap-16 hidden md:flex'>
//                 <li className='menuLink text-[#f7f7f7] hover:text-[#ff9966]'>
//                     <a href="#hero">Home</a>
//                 </li>
//                 <li className='menuLink text-[#fffcfb] hover:text-[#ff9966]'>
//                     <a href="#about">About</a>
//                 </li>
//                 <li className='menuLink text-[#f4f4f4] hover:text-[#ff9966]'>
//                     <a href="#projects">Projects</a>
//                 </li>
//                 <li className='menuLink text-[#fdfdfd] hover:text-[#ff9966]'>
//                     <a href="#skills">Skills</a>
//                 </li>
//                 <li className='menuLink text-[#ffffff] hover:text-[#ff9966]'>
//                     <a href="#contact">Contact</a>
//                 </li>
//            </ul>    

//            {/* Mobile Burger Icon */}
//            <CiMenuBurger className='md:hidden text-[#ff7f50] hover:text-[#ff9966]' size={30} />
//         </div>
//     </div>
//   )
// }

// export default Navbar


import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full px-4 py-2 text-white bg-black shadow-md lg:px-8 lg:py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-white">
        <Link
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-white font-semibold"
        >
        Humaiza Naz
        </Link>

        {/* Menu for large screens */}
        <div className={`hidden lg:block ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link href="#hero" className="flex items-center">
                Home
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link href="#about" className="flex items-center">
                About
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link href="#projects" className="flex items-center">
             Projects
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link href="#skills" className="flex items-center">
               Skills
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link href="#contact" className="flex items-center">
              Contact
              </Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-white">
              <Link href="#reviews" className="flex items-center">
              Review
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
