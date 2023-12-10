function Bio() {
  return (
    <section id='bio' className='py-20 mb-20 tracking-wide '>
      {/* Container */}
      <div className='bio-container'>
        {/* <h3 className='text-[2rem] font-[700] mb-8'>Bio</h3> */}

        {/* bio -- left-aligned */}
        <div className='flex flex-col gap-3 flex-1 '>
          <h3 className='subtitle pb-12 text-teal-500  dark:text-teal-300 '>
            Mini Bio
          </h3>
          <p>
            In a previous life I was a{' '}
            <span className='subtitle text-slate-400  dark:text-teal-300'>
              film editor
            </span>{' '}
            based in London for 20 years, working on TV & feature documentaries,
            music promos, corporate videos and commercials. I left after Brexit
            in pursuit of new horizons, sunshine and sailing adventures, which
            led me to the Côte d&#39;Azur in France, and the Costa Brava and
            Mallorca in Spain, juggling short editing contracts with my regular
            clients back in London during the winter, with working as a
            <span className='subtitle text-slate-400  dark:text-teal-300'>
              {' '}
              deckhand, stewardess{' '}
            </span>{' '}
            and
            <span className='subtitle text-slate-400  dark:text-teal-300'>
              {' '}
              junior engineer{' '}
            </span>
            on private superyachts during the summer in the Mediterranean
            (2017-2020).
          </p>
          <p>
            As the world shut down for a few months during the pandemic in 2020,
            it was a chance for my curious mind to see what programming was all
            about. I had already dabbled with HTML, CSS and played with a
            Raspberry Pi but 2 months of Python during lockdown got me hooked,
            and soon enough I got lost down the rabbit hole of all things web.
          </p>
          <p>
            Today I can&#39;t imagine doing anything else. At this stage in my
            coding journey, I&#39;m looking for a professional and friendly team
            that will give me the opportunity to take my skills to the next
            level so that together, we can build useful tools and a more
            inclusive and accessible digital world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
