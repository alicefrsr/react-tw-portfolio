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
  // const [nextItems, setNextItems] = useState(6);

  // Filters
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Project modal
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  // const loadMoreHandler = () => {
  //   setNextItems((prev) => prev + 3);
  // };

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
    <section name='projects' className='h-fit py-24 bg-green-100 '>
      {/* Container */}
      <div className='container mx-auto'>
        <h3 className='text-[2rem] font-[700] mb-8'>Projects</h3>
        {/* Filter buttons */}
        <div className='flex gap-3 justify-center items-center flex-wrap '>
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
        <div className='flex gap-12 items-center flex-wrap mt-20 sm:justify-between sm:gap-10 lg:justify-start '>
          {/* Project card */}
          {/* {projects?.slice(0, nextItems)?.map((project, index) => ( */}
          {projects?.map((project, index) => (
            <div
              key={index}
              className='group max-w-full sm:w-[46.5%] lg:w-[30.5%] relative z-[1]'
            >
              <figure className=''>
                <img
                  className='rounded-[9px] shadow-lg shadow-slate-300 group-hover:translate-x-1 group-hover:translate-y-1 ease-in duration-200 '
                  src={project.imageURL}
                  alt=''
                />
              </figure>
              {/* Project card overlay */}
              <div
                className=' rounded-[9px] w-full h-full bg-teal-400 bg-opacity-40 absolute top-0 left-0 z-[2] hidden group-hover:block group-hover:translate-x-3 group-hover:translate-y-3 ease-in duration-200 group-hover:cursor-pointer'
                onClick={() => showModalHandler(project.id)}
              >
                {/* <div className='w-full h-full flex items-center justify-center '>
                  <button
                    className='btn'
                    onClick={() => showModalHandler(project.id)}
                  >
                    See details
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>{' '}
      {/* load-more btn */}
      {/* <div className='flex justify-center mt-12 text-sm sm:text-base '>
        {nextItems < projects.length && projectsData.length > 6 && (
          <button onClick={loadMoreHandler} className='btn  '>
            Load more
          </button>
        )}
      </div> */}
      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
}

export default Projects;
