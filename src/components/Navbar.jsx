import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

import {
  HiBars3,
  HiOutlineGlobeAlt,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';

import { Link } from 'react-scroll';
import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkModeEnabled, toggle] = useDarkMode();
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setOpenMobileNav(!openMobileNav);
  };

  return (
    <nav className='z-[3] fixed w-full h-16 flex justify-between items-center bg-red-200 text-lg px-6 shadow-lg '>
      {/* Logo */}
      <div className='flex items-center'>
        <span className='w-[40px] h-[40px] bg-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
          AM
        </span>
      </div>

      {/* Main menu -- centered */}
      <ul className='hidden md:flex '>
        <li className='nav-links px-4 cursor-pointer'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='nav-links px-4 cursor-pointer'>
          <Link to='skills' smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className='nav-links px-4 cursor-pointer'>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='nav-links px-4 cursor-pointer'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>

      {/* Mobile menu button / Hamburger or X --right-aligned */}
      <button
        className='md:hidden z-10 hover:text-primaryColor hover:rotate-180 duration-300'
        onClick={toggleMobileNav}
      >
        {!openMobileNav ? <HiBars3 /> : <FaTimes />}
      </button>

      {/* Mobile menu */}
      <ul
        className={
          !openMobileNav
            ? `hidden`
            : `absolute top-0 left-0 w-[15rem] h-screen bg-white flex flex-col justify-center items-center`
        }
      >
        <li className='py-6 text-2xl hover:cursor-pointer hover:text-primaryColor'>
          <Link
            onClick={toggleMobileNav}
            activeClass='active'
            to='home'
            smooth={true}
            duration={300}
          >
            Home
          </Link>
        </li>
        <li className='py-6 text-2xl hover:cursor-pointer hover:text-primaryColor'>
          <Link
            onClick={toggleMobileNav}
            to='skills'
            smooth={true}
            duration={300}
          >
            Skills
          </Link>
        </li>
        <li className='py-6 text-2xl hover:cursor-pointer hover:text-primaryColor'>
          <Link
            onClick={toggleMobileNav}
            to='projects'
            smooth={true}
            duration={300}
          >
            Projects
          </Link>
        </li>
        <li className='py-6 text-2xl hover:cursor-pointer hover:text-primaryColor'>
          <Link
            onClick={toggleMobileNav}
            to='about'
            smooth={true}
            duration={300}
          >
            About
          </Link>
        </li>
      </ul>

      <button
        className='ml-2 bg-transparent text-gray-900 dark:bg-indigo-900 dark:text-gray-300'
        onClick={toggle}
      >
        {darkModeEnabled ? <HiOutlineSun /> : <HiOutlineMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
