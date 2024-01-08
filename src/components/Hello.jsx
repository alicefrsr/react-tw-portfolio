import { HiArrowNarrowRight } from 'react-icons/hi';

const Hello = () => {
  return (
    <section id='hello' className='tracking-wide pt-12 sm:pt-0'>
      {/* Container */}
      <div className='pt-12 sm:pt-0 lg:max-w-[58rem] sm:max-w-[70%] px-6 h-screen mx-auto flex flex-col justify-center w-full '>
        <div className='text-2xl'>
          <h1 className='text-3xl sm:text-4xl pb-4 tracking-wide'>
            Hello, I&#39;m <span className='text-5xl sm:text-6xl '>Anne</span>
          </h1>
          <h2 className='subtitle pb-12 tracking-widest'>Junior Developer</h2>
        </div>

        <div className='flex flex-col gap-3'>
          <p className=''>
            This site showcases some of the things I&#39;ve built while learning
            how to code. As a self-taught and aspiring professional developer,
            I&#39;m currently focused on building responsive and accessible web
            apps with <span className='tech'> React</span> and{' '}
            <span className='tech'> Tailwind</span> to improve my front-end
            skills, as well as integrating back-end technologies. But I&#39;m
            also keen to learn more about software development beyond web-based
            apps, and get my teeth into real-world projects.
          </p>
          <p>
            I care about design, user experience and web accessibility. Mostly,
            I love to learn, build things, problem-solve and take on new
            challenges.
          </p>
        </div>

        <div className='hidden sm:flex pt-12 text-sm sm:text-base justify-center sm:justify-start'>
          {/* Link to projects */}
          <a href='#projects' className='link'>
            <div className='group btn border-current hover:cursor-pointer shadow-md shadow-slate-400 hover:border-teal-600 hover:shadow-teal-600 dark:hover:border-teal-500 dark:hover:shadow-teal-500'>
              <span className='mr-3'>View projects </span>
              <span className='group-hover:rotate-90 duration-200 '>
                <HiArrowNarrowRight />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hello;
