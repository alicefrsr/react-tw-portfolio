import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import { IoSunny, IoMoon } from 'react-icons/io5';
import { GrLanguage } from 'react-icons/gr';
import {
  HiBars3,
  HiOutlineGlobeAlt,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';

// import { Link } from 'react-scroll';
import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const navlinks = ['hello', 'projects', 'skills', 'bio'];
const Navbar = () => {
  const [darkModeEnabled, toggle] = useDarkMode();
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setOpenMobileNav(!openMobileNav);
  };

  return (
    <nav className='z-[3] fixed w-full h-16 flex justify-between items-center bg-red-200 text-lg px-6 shadow-lg '>
      {/* Logo, --left-aligned */}
      <span className='w-[40px] h-[40px] bg-transparentt  border-2 border-current text-[18px] font-[500] rounded-full  flex items-center justify-center'>
        A
      </span>

      {/* Main menu -- centered */}
      <ul className='hidden md:flex items-center gap-8 md:ml-28'>
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <a href={`#${navlink}`} className='nav-link'>
              {navlink}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu button / Hamburger or X --centered */}
      <button
        className='md:hidden p-1 z-10 border-2 border-blue-300 hover:text-teal-700 hover:rotate-180 duration-300'
        onClick={toggleMobileNav}
      >
        {!openMobileNav ? <HiBars3 /> : <FaTimes />}
      </button>

      {/* Mobile menu */}
      <ul
        className={
          !openMobileNav
            ? `hidden`
            : `absolute top-0 left-0 w-[15rem] h-screen bg-white flex flex-col justify-center items-center uppercase`
        }
      >
        {navlinks.map((navlink, index) => (
          <li key={index} className='m-4'>
            <a
              onClick={toggleMobileNav}
              href={`#${navlink}`}
              className='p-2 font-semibold text-md hover:text-teal-700'
            >
              {navlink}
            </a>
          </li>
        ))}
      </ul>

      {/* External links + btns, --right-aligned */}
      <div className='flex items-center '>
        {/* Socials icons */}
        <ul className='flex gap-4 border-r-2 border-current px-4'>
          <li className='hover:text-rose-700 duration-200'>
            <a href='/' className=''>
              <FaLinkedin size={25} />
            </a>
          </li>
          <li className='hover:text-rose-700 duration-200'>
            <a
              href='https://github.com/alicefrsr'
              target='_blank'
              rel='noreferrer'
              className=''
            >
              <FaGithub size={25} />
            </a>
          </li>
        </ul>
        {/* Language toggle */}
        {/* Later... */}
        {/* Dark mode toggle */}
        <button
          className='px-4 bg-transparent dark:bg-indigo-900 dark:text-slate-200 hover:text-rose-600 duration-200'
          onClick={toggle}
        >
          {darkModeEnabled ? <IoSunny size={25} /> : <IoMoon size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
