import projectsData from '../assets/data/projectsData';
import { useState, useEffect } from 'react';
import Modal from './Modal';

// filter buttons and list of categories we want to match against
let filters = ['All', 'Typescript', 'Full Stack'];

function Projects() {
  // Projects
  const [projects, setProjects] = useState(projectsData);
  const [nextItems, setNextItems] = useState(6);
  // Filters
  const [selectedFilter, setSelectedFilter] = useState('All');
  // Project modal
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
  };

  useEffect(() => {
    if (selectedFilter === 'All') {
      setProjects(projectsData);
    } else {
      let filteredProjects;
      // determine which projects includes the selected filter in their 'categories' array
      filters.map((filter) => {
        if (selectedFilter === filter) {
          filteredProjects = projectsData.filter((project) =>
            project.categories.includes(filter)
          );
        }
        setProjects(filteredProjects);
      });
    }
  }, [selectedFilter]);

  return (
    <section name='projects' className='pt-28 pb-12'>
      {/* Container */}
      <div className='container mx-auto'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='mb-7 sm:mb-0'>
            <h3 className='text-[2rem] font-[700]'>Projects</h3>
          </div>
          {/* Filter buttons */}
          <div className='flex gap-3 shrink-0 flex-wrap'>
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`border-2 border-gray-900 py-1 px-4 rounded-[9px] hover:text-primaryColor hover:border-primaryColor ease-in duration-200  ${
                  selectedFilter === category ? 'active ' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Project cards */}
          <div className='flex items-center gap-4  flex-wrap mt-12'>
            {/* Project card */}
            {projects?.slice(0, nextItems)?.map((project, index) => (
              <div
                key={index}
                className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'
              >
                <figure>
                  <img
                    className='rounded-[9px] shadow-lg shadow-slate-300 '
                    src={project.imageURL}
                    alt=''
                  />
                </figure>

                <div className='rounded-[9px] w-full h-full bg-primaryColor bg-opacity-60 absolute top-0 left-0 z-[2] hidden group-hover:block ease-in duration-200'>
                  <div className='w-full h-full flex items-center justify-center '>
                    <button
                      className='bg-white border-2 border-gray-900 py-1 px-4 rounded-[9px] hover:text-primaryColor hover:border-primaryColor font-[500] ease-in duration-200'
                      onClick={() => showModalHandler(project.id)}
                    >
                      See details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{' '}
        {/* end of flex-wrap div */}
        <div className='text-center mt-6 '>
          {nextItems < projects.length && projectsData.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className='text-white bg-indigo-500 hover:bg-indigo-400 py-2 px-4 rounded-[9px] font-[500] ease-in duration-200'
            >
              Load more
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
}

export default Projects;
