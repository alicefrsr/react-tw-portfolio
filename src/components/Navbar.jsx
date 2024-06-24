import { FaTimes } from 'react-icons/fa';
import {
  IoMenu,
  IoLogoLinkedin,
  IoLogoGithub,
  IoSunny,
  IoMoon,
} from 'react-icons/io5';

import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const navlinks = ['projects', 'skills', 'about'];
const mobileNavlinks = ['hello', 'projects', 'skills', 'about'];
const Navbar = () => {
  const [darkModeEnabled, toggle] = useDarkMode();
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setOpenMobileNav(!openMobileNav);
  };

  return (
    <nav className='z-[3] fixed w-full h-16 flex justify-between items-center bg-slate-100 dark:bg-blueDarkest opacity-90 text-lg px-6 shadow-lg'>
      {/* Logo, --left-aligned */}
      <a href='#hello' className='icon-link'>
        <span
          className='rounded-full w-[35px] h-[35px] md:w-[40px] md:h-[40px] bg-transparent border-2 border-current text-3xl font-[500] font-brush flex items-center justify-center'
          aria-hidden='true'
        >
          A
        </span>
        <span className='sr-only'>Anne&#39;s logo. Hello section</span>
      </a>

      {/* Main menu -- centered */}
      <ul className='hidden md:flex items-center gap-8 md:ml-28'>
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <a href={`#${navlink}`} className='text-base nav-link link'>
              {navlink}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu button / Hamburger or X icon --centered */}
      <button
        className='md:hidden p-1 z-10 active:rotate-180 duration-300 link'
        onClick={toggleMobileNav}
      >
        {!openMobileNav ? (
          <>
            <IoMenu size={25} aria-hidden='true' />
            <span className='sr-only'>Mobile menu</span>
          </>
        ) : (
          <>
            <FaTimes size={25} aria-hidden='true' className='p-1' />
            <span className='sr-only'>Close mobile menu</span>
          </>
        )}
      </button>

      {/* Mobile menu */}
      <ul
        className={
          !openMobileNav
            ? `mobile-nav w-0 left-[-10rem]`
            : `mobile-nav w-[50%] left-0`
        }
      >
        {mobileNavlinks.map((navlink, index) => (
          <li key={index} className='m-4'>
            <a
              onClick={toggleMobileNav}
              href={`#${navlink}`}
              className='text-md font-bold nav-link link '
            >
              {navlink}
            </a>
          </li>
        ))}
      </ul>

      {/* External links + darkmode btn, --right-aligned */}
      <div className='flex items-center'>
        {/* Socials icons */}
        <ul className='flex gap-4 border-r-2 border-current px-4'>
          <li className=''>
            <a
              // data-testid='linkedin'
              href='https://www.linkedin.com/in/annemonnehay/'
              target='_blank'
              rel='noreferrer'
              className='link'
              aria-hidden='true'
            >
              <IoLogoLinkedin size={30} />
              <span className='sr-only'>LinkedIn (Opens in new tab)</span>
            </a>
          </li>
          <li className=''>
            <a
              // data-testid='github'
              href='https://github.com/alicefrsr'
              target='_blank'
              rel='noreferrer'
              className='icon-link'
              aria-hidden='true'
            >
              <IoLogoGithub size={28} />
              <span className='sr-only'>Github (Opens in new tab)</span>
            </a>
          </li>
        </ul>
        {/* Language toggle */}
        {/* Later... */}
        {/* Dark mode toggle */}
        <button
          className='ml-4 h-8 w-8 rounded-full moonsun px-1 focus:outline-none outline-offset-4 '
          onClick={toggle}
        >
          {darkModeEnabled ? (
            <IoSunny size={25} aria-hidden='true' />
          ) : (
            <IoMoon size={25} aria-hidden='true' />
          )}
          {darkModeEnabled ? (
            <span className='sr-only'>Light mode</span>
          ) : (
            <span className='sr-only'>Dark mode</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
