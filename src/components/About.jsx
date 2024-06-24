function About() {
  return (
    <section id='about' className='py-20 tracking-wide '>
      {/* Container */}
      <div className='lg:max-w-[58rem] sm:max-w-[70%] sm:py-20 px-6 mx-auto flex w-full'>
        {/* <h3 className='text-[2rem] font-[700] mb-8'>Bio</h3> */}

        {/* bio -- left-aligned */}
        <div className='flex flex-col gap-3 flex-1'>
          <h3 className='text-3xl md:text-4xl mb-8 py-8'>About</h3>
          <p className='mb-4'>
            <span className='pr-2 sm:text-2xl'>🎬</span> In a previous life I
            was a{' '}
            <strong className='text-primaryLight dark:text-focusColor'>
              film editor
            </strong>{' '}
            based in London for 20 years, working on{' '}
            <strong>TV & feature documentaries</strong> for major broadcasters
            (BBC, ITV, Channel 4, Sky etc), music promos, corporate videos, and
            was a VFX editor on award-winning animation shorts and commercials.
          </p>
          <p className='mb-4'>
            <span className='pr-2 sm:text-2xl'>⛵️</span> I left after Brexit in
            pursuit of new challenges and sailing adventures, which led me to
            the Mediterranean where I worked on{' '}
            <strong>private superyachts </strong>
            as{' '}
            <strong className='text-primaryLight dark:text-focusColor'>
              {' '}
              crew
            </strong>
            , lending a hand on deck, the interior and the engine room. For a
            while I juggled a life at sea during the summer with working on
            short editing contracts with my regular clients in London during the
            winter (2017-2021).
          </p>
          <p className=' dark:text-gray-300'>
            <span className='pr-2 sm:text-2xl'>👩‍💻</span>I discovered{' '}
            <strong className='text-primaryLight dark:text-focusColor'>
              {' '}
              programming{' '}
            </strong>{' '}
            in my travels and got hooked. For the past year I've been making
            sure to build a strong foundation in{' '}
            <strong className='text-primaryLight dark:text-focusColor'>
              {' '}
              web development{' '}
            </strong>
            by continuing to build <strong>front-end </strong> apps keeping{' '}
            <strong>accessibility </strong> in mind, while learning about{' '}
            <strong>back-end </strong> as I go along.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
