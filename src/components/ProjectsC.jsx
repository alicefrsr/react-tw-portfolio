import devfinder from '../assets/images/projects/devfinder.png';
import omnifood from '../assets/images/projects/omnifood.png';
function Projects() {
  return (
    <section name='projects' className='w-full md:h-screen bg-green-200'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h3>Projects</h3>
          <p>Filters:</p>
        </div>
        {/* Project cards / Grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project card / Grid item */}
          <div
            style={{
              backgroundImage: `url(${devfinder})`,
            }}
            className='shadow-lg rounded-md group container flex justify-center items-center mx-auto content-project'
          >
            {/* Hover effect on card */}
            <div className='opacity-0 group-hover:opacity-100 duration-500 z-index-1 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Devfinder
              </span>
              <div className='pt-8 text-center'>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Demo
                </a>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project card / Grid item */}
          <div
            style={{
              backgroundImage: `url(${omnifood})`,
            }}
            className='shadow-lg rounded-md group container flex justify-center items-center mx-auto content-project'
          >
            {/* Hover effect on card */}
            <div className='opacity-0 group-hover:opacity-100 duration-500 z-index-1 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Devfinder
              </span>
              <div className='pt-8 text-center'>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Demo
                </a>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project card / Grid item */}
          <div
            style={{
              backgroundImage: `url(${devfinder})`,
            }}
            className='shadow-lg rounded-md group container flex justify-center items-center mx-auto content-project'
          >
            {/* Hover effect on card */}
            <div className='opacity-0 group-hover:opacity-100 duration-500 z-index-1 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Devfinder
              </span>
              <div className='pt-8 text-center'>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Demo
                </a>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project card / Grid item */}
          <div
            style={{
              backgroundImage: `url(${omnifood})`,
            }}
            className='shadow-lg rounded-md group container flex justify-center items-center mx-auto content-project'
          >
            {/* Hover effect on card */}
            <div className='opacity-0 group-hover:opacity-100 duration-500 z-index-1 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Devfinder
              </span>
              <div className='pt-8 text-center'>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Demo
                </a>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project card / Grid item */}
          <div
            style={{
              backgroundImage: `url(${devfinder})`,
            }}
            className='shadow-lg rounded-md group container flex justify-center items-center mx-auto content-project'
          >
            {/* Hover effect on card */}
            <div className='opacity-0 group-hover:opacity-100 duration-500 z-index-1 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Devfinder
              </span>
              <div className='pt-8 text-center'>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Demo
                </a>
                <a
                  className='font-bold rounded-md text-lg px-4 py-3 m-2 bg-white text-dark'
                  href='/'
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
