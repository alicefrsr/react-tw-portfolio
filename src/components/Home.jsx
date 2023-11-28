import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section name='home' className='h-screen'>
      {/* Container */}
      <div className='max-w-[60rem] px-6 h-screen  mx-auto flex flex-col justify-center w-full'>
        <div className='text-2xl'>
          <h1 className='text-3xl sm:text-4xl pb-4 font-dancing tracking-wide'>
            Hello, I&#39;m <span className='text-5xl sm:text-6xl'>Anne.</span>
          </h1>
          <h2 className='pb-8 text-sm font-semibold text-rose-700 uppercase tracking-widest '>
            Junior Web Developer
          </h2>
        </div>
        <p className='py-2'>
          This site showcases some of the things I&#39;ve built while learning
          how to code. As an aspiring professional developer, I&#39;m currently
          focused on building responsive and accessible web apps with{' '}
          <span className='tech'> React</span>,{' '}
          <span className='tech'> Tailwind </span> and{' '}
          <span className='tech'> NextJS </span>to improve my front-end skills,
          as well as integrating back-end technologies.
        </p>
        <p>
          I care about design, user experience and web accessibility. Mostly, I
          love to learn, build things and set myself new challenges.
        </p>

        {/* Link to about */}
        <div className='pt-12 text-sm sm:text-base flex flex-col justify-center items-center gap-2 sm:gap-4 sm:flex-row sm:justify-start'>
          <Link to='about' smooth={true} duration={500}>
            <button className='group btn hover:shadow-primaryColor'>
              <span className='group-hover:rotate-90 duration-200 '>
                <HiArrowNarrowRight />
              </span>
              <span className='ml-3'> Find out more </span>
            </button>
          </Link>
          {/* Link to projects */}
          <Link to='projects' smooth={true} duration={500}>
            <button className='group btn hover:shadow-primaryColor'>
              <span className='group-hover:rotate-90 duration-200'>
                <HiArrowNarrowRight />
              </span>
              <span className='ml-3'>View projects </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
