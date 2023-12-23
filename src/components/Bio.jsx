import { motion } from 'framer-motion';

function Bio() {
  return (
    <section id='bio' className='py-20 tracking-wide '>
      {/* Container */}
      <div className='lg:max-w-[58rem] sm:max-w-[70%] sm:py-20 h-screen px-6 mx-auto flex w-full'>
        {/* <h3 className='text-[2rem] font-[700] mb-8'>Bio</h3> */}

        {/* bio -- left-aligned */}
        <div className='flex flex-col gap-3 flex-1 '>
          {/* <motion.h3
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='subtitle pb-12 text-teal-600  dark:text-teal-300 '
          >
            Bio
          </motion.h3> */}
          <h3 className='font-semibold text-[3rem] font-satisfy mb-8 '>Bio</h3>
          {/* <h4 className='italic'>
            From <span className='bio-subtitle'>film crew</span> to{' '}
            <span className='bio-subtitle'> yacht crew</span>...
          </h4> */}
          <p>
            In a previous life I was a{' '}
            <span className='jobtitle'>film editor</span> based in London for 20
            years, working on TV & feature documentaries, music promos,
            corporate videos, commercials, 2D/3D animation and VFX editing. I
            left after Brexit in pursuit of new horizons and sailing adventures,
            which led me to the Côte d&#39;Azur in France, and the Costa Brava
            and Mallorca in Spain, juggling short editing contracts with my
            regular clients back in London during the winter, with working as a
            <span className='jobtitle'> deckhand, stewardess </span> and
            <span className='jobtitle'> junior engineer </span>
            on private superyachts during the summer in the Mediterranean
            (2017-2020).
          </p>
          {/* <h4 className='italic'>
            From <span className='bio-subtitle'>marine engineering</span> to{' '}
            <span className='bio-subtitle'> software engineering</span>...
          </h4> */}
          <p>
            As the world shut down during the pandemic in 2020, it was a chance
            to explore what programming was all about. Two months of Python
            during lockdown got me hooked, and after tying up loose ends with
            ongoing work, I decided to commit to losing myself down the rabbit
            hole of all things web.
          </p>
          <p>
            Today I can&#39;t imagine doing anything else. Moving forward, I
            hope to find a professional and friendly team that will give me the
            opportunity to take my new skills to the next level so that
            together, we can build useful tools and a more inclusive and
            accessible digital world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
