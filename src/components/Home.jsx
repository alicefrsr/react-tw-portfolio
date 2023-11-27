import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section name='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] px-8 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='text-2xl'>
          <h1>
            Hi, I&#39;m <span className='text-4xl font-[Lora]'>Anne</span>
          </h1>
          <h2 className=' text-sm uppercase '>Web Developer</h2>
        </div>
        <p>
          This site showcases some of the things I&#39;ve built while learning
          how to code. I&#39;m looking to join a professional team where
          I&#39;ll be given opportunities to take my newly gained skills to the
          next level.
        </p>
        <p>
          I care about design, user experience and web accessibility. Still
          unsure about where my new career will take me, as an aspiring
          developer, I&#39;m currentlyfocused on building responsive and
          accessible applications with React, Tailwind and NextJS to improve my
          frontend and design skills, as well as integrating back-end
          technologies to my projects.
        </p>

        {/* Link to projects */}
        <div className='py-8 lg:text-right'>
          <Link to='projects' smooth={true} duration={500}>
            <button className='group border-2 py-3 px-6 my-2 btn uppercase flex items-center '>
              View projects{' '}
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
