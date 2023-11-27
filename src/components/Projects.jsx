import projectsData from '../assets/data/projectsData';
import { useState, useEffect } from 'react';
import Modal from './Modal';

// filter buttons and list of categories we want to match against
let filters = [
  'All',

  'HTML/CSS Integration',
  'Vanilla JS',
  'React',
  'Full Stack',
];

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
        <h3 className='text-[2rem] font-[700] mb-8'>Projects</h3>
        <div className='flex justify-center flex-wrap'>
          {/* Filter buttons */}
          <div className='flex flex-col gap-2 sm:flex-row sm:gap-6 justify-center items-center shrink-0'>
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`btn-filter   ${
                  selectedFilter === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Project cards */}
          <div className='flex items-center gap-4 flex-wrap mt-12'>
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
        {/* load-more btn */}
        <div className='flex justify-center mt-12 text-sm sm:text-base '>
          {nextItems < projects.length && projectsData.length > 6 && (
            <button onClick={loadMoreHandler} className='btn  '>
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
