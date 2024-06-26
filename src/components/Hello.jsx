import { HiArrowNarrowRight } from 'react-icons/hi';

const Hello = () => {
  return (
    <section id='hello' className='tracking-wide pt-12 sm:pt-0'>
      {/* Container */}
      <div className='pt-12 sm:pt-0 lg:max-w-[58rem] sm:max-w-[70%] px-6 h-screen mx-auto flex flex-col justify-center w-full '>
        <div className='text-2xl'>
          {/* <h1 className='text-5xl sm:text-6xl pb-4 tracking-wide'>
            Hello, I&#39;m <span className=''>Anne</span>
          </h1> */}
          <h1 className='text-4xl md:text-5xl pb-4 tracking-wide'>
            Hello, I&#39;m Anne.
          </h1>
          <h2 className='subtitle pb-12'>Junior Developer</h2>
        </div>

        <div className='flex flex-col gap-3 sm:text-lg'>
          <p className=''>
            I&#39;m a self-taught developer currently focused on building
            responsive and accessible sites and web apps. This site showcases
            some of the things I&#39;ve built while learning how to code in the
            last year or so. Starting with basic{' '}
            <span className='highlight'>HTML/CSS integration</span>,{' '}
            <span className='highlight'>vanilla Javascript</span> apps (2022),
            then moving on to <span className='highlight'>React</span>,{' '}
            <span className='highlight'>Tailwind</span>, to integrating the
            back-end with <span className='highlight'>Node</span>,{' '}
            <span className='highlight'>Express </span>
            and <span className='highlight'>MongoDB</span> (2023).
          </p>
          <p>
            I care about design, user experience, clean code and web
            accessibility. Mostly, I love to learn, build things, collaborate,
            problem-solve, and take on new challenges.
          </p>
        </div>

        <div className='hidden sm:flex pt-12 text-sm sm:text-base justify-center sm:justify-start'>
          {/* Link to projects */}
          <a href='#projects' className='link'>
            <div className='group btn border-current hover:cursor-pointer shadow-md shadow-slate-400 hover:border-teal-600 hover:shadow-teal-600 dark:hover:border-teal-500 dark:hover:shadow-teal-500'>
              <span className='mr-3'>View projects </span>
              <span className='group-hover:rotate-90 duration-200 '>
                <HiArrowNarrowRight aria-hidden='true' />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hello;
