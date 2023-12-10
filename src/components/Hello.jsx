import { HiArrowNarrowRight } from 'react-icons/hi';
// import profilePix from '../assets/images/anne-sq.jpg';

const Hello = () => {
  return (
    <section id='hello' className='h-screen tracking-wide'>
      {/* Container */}
      <div className='lg:max-w-[58rem] sm:max-w-[60%] px-6 h-screen mx-auto flex flex-col justify-center w-full '>
        {/* <img
          className='w-28 h-28 mx-auto  rounded-full shadow-lg shadow-slate-300 group-hover:translate-x-1 group-hover:translate-y-1 ease-in duration-200 '
          src={profilePix}
          alt=''
        /> */}

        <div className='text-2xl'>
          <h1 className='text-3xl sm:text-4xl pb-4 font-dancing tracking-wide'>
            Hello, I&#39;m <span className='text-5xl sm:text-6xl '>Anne.</span>
          </h1>
          <h2 className='subtitle pb-12 text-slate-400 dark:text-teal-300 '>
            Web Developer
          </h2>
        </div>

        <div className='flex flex-col gap-3'>
          <p className=''>
            This site showcases some of the things I&#39;ve built while learning
            how to code. As a self-taught and aspiring professional developer,
            I&#39;m currently focused on building responsive and accessible web
            apps with <span className='tech'> React</span> and{' '}
            <span className='tech'> Tailwind</span> to improve my front-end
            skills, as well as integrating back-end technologies.
          </p>
          <p>
            I care about design, user experience and web accessibility. Mostly,
            I love to learn, build things, problem-solve and take on new
            challenges.
          </p>
        </div>

        <div className='pt-12 text-sm sm:text-base flex justify-center sm:justify-start'>
          {/* Link to skills */}
          <a href='#projects'>
            <button className='group btn hover:shadow-teal-600  hover:border-teal-600  hover:text-teal-600'>
              <span className='group-hover:rotate-90 duration-200'>
                <HiArrowNarrowRight />
              </span>
              <span className='ml-3'>View projects </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hello;
