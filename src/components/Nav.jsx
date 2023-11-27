import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import useDarkMode from '../hooks/useDarkMode';

function Nav() {
  const [darkModeEnabled, toggle] = useDarkMode();

  return (
    <nav className='flex justify-end mb-8'>
      <button
        className='bg-white text-gray-900 dark:bg-indigo-900 dark:text-gray-300'
        onClick={toggle}
      >
        {darkModeEnabled ? <HiOutlineSun /> : <HiOutlineMoon />}
      </button>
    </nav>
  );
}

export default Nav;
