function Bio() {
  return (
    <section id='bio' className='w-full h-screen'>
      {/* Container */}
      <div className='lg:max-w-[58rem] sm:max-w-[60%] px-6 h-screen  mx-auto flex items-center w-full'>
        {/* <h3 className='text-[2rem] font-[700] mb-8'>Bio</h3> */}

        {/* bio -- left-aligned */}
        <div className='flex flex-col gap-3 flex-1 '>
          <h3 className='subtitle '>Bio</h3>
          <p>
            In a previous life I was a{' '}
            <span className='font-bold'>film editor</span> based in London,
            working on TV & feature documentaries for 20 years. I left after
            Brexit in pursuit of new horizons, sunshine and sailing adventures,
            which led me to the Côte d&#39;Azur and Spain, juggling short
            editing contracts with my trusted and regular clients back in London
            during the winter, with working as a
            <span className='font-bold'> deckhand/stewardess </span>
            on private superyachts during 4 mediterranean seasons (2017-2020).
          </p>
          <p>
            I dabbled with HTML and CSS in 2019 between jobs, and as the world
            shut down for a few months during the pandemic in 2020, it was a
            chance to dive into Python to see what programming was all about.
            Initially, trendy words such as{' '}
            <span className='font-semibold'>blockchain</span> and{' '}
            <span className='font-semibold'>decentralised web </span>
            peeked my curiosity, but as I decided to explore the matter further,
            I got lost down the rabbit hole of all things web and went full-time
            in 2022.
          </p>
          <p>
            Today I can&#39;t imagine doing anything else. At this stage in my
            never-ending learning journey, I&#39;m looking for a professional
            and friendly team that will give me the opportunity to take my
            skills to the next level to build useful tools for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
