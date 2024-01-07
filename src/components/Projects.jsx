import { useNavigate } from 'react-router-dom';

import projectsData from '../assets/data/projectsData';
import { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';
import { motion } from 'framer-motion';

// filter buttons: list of categories we want to match against
let filters = [
  'All',
  'HTML/CSS Integration',
  'Vanilla JS',
  'React',
  'Full Stack',
  'Responsive',
  // 'Professional',
];

function Projects() {
  const navigate = useNavigate();
  // Projects
  const [projects, setProjects] = useState(projectsData);
  // const [nextItems, setNextItems] = useState(6);

  // Filters
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Project modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // const loadMoreHandler = () => {
  //   setNextItems((prev) => prev + 3);
  // };

  const showModalHandler = (id) => {
    setShowModal(true);
    setSelectedProjectId(id);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/');
  };

  // filtering projects
  useEffect(() => {
    if (selectedFilter === 'All') {
      setProjects(projectsData);
    } else {
      let filteredProjects;
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

  if (showModal) {
    document.body.classList.add('active-modal');
    console.log(showModal);
  } else {
    {
      document.body.classList.remove('active-modal');
      console.log(showModal);
    }
  }

  return (
    // <section id='projects' className='h-fit pt-20 mb-16'>
    <section id='projects' className='h-fit pt-20 sm:pt-24 pb-12'>
      {/* Container */}
      <div className='projects-container mx-auto'>
        <div className='lg:max-w-[58rem] sm:max-w-[70%] sm:px-6 pt-10 mx-auto flex flex-col w-full'>
          <h3 className='font-semibold text-[3rem] font-satisfy mb-8 pb-8'>
            Projects
          </h3>
          <p className='pb-24'>
            Please note: if your are viewing this portfolio on a mobile device,
            not all these projects are responsive. Sometimes the focus was to
            learn a new tech. Please use the filter to display which ones are.
          </p>
        </div>

        {/* Filter buttons */}
        <div className='flex gap-3 justify-center items-center flex-wrap '>
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`btn-filter ${
                selectedFilter === category ? 'active-filter' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <motion.ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-20  '>
          {/* Project card */}
          {/* {projects?.slice(0, nextItems)?.map((project, index) => ( */}
          {projects?.map((project, index) => (
            <motion.li
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={index}
              className='group w-full relative z-[1] '
              onClick={() => showModalHandler(project.id)}
              // onClick={() => setShowModal(true)}
            >
              <a
                href={`#project-modal=?${project.urlName}`}
                className='rounded-[9px] outline-teal-600 outline-offset-4 hover:outline-none dark:focus:outline-teal-300'
              >
                <figure className=''>
                  <img
                    className='rounded-[9px] shadow-lg shadow-slate-300 dark:shadow-blueDarkest group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-teal-600  ease-in duration-200'
                    src={project.imageURL}
                    alt={project.title}
                  />
                </figure>

                {/* Project card overlay for hover effect */}
                <div className='rounded-[9px] w-full h-full bg-teal-400 bg-opacity-40 absolute top-0 left-0 z-[1] hidden group-hover:block group-hover:translate-x-3 group-hover:-translate-y-3 ease-in duration-200 '>
                  <div className='w-full h-full flex items-center justify-center duration-300 '>
                    <h4 className='btn text-teal-600 border-teal-600  dark:text-teal-300 dark:border-teal-300 '>
                      {project.title}
                    </h4>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>{' '}
      {/* load-more btn */}
      {/* <div className='flex justify-center mt-12 text-sm sm:text-base '>
        {nextItems < projects.length && projectsData.length > 6 && (
          <button onClick={loadMoreHandler} className='btn  '>
            Load more
          </button>
        )}
      </div> */}
      <ProjectModal
        showModal={showModal}
        onClose={closeModal}
        selectedProjectId={selectedProjectId}
      />
    </section>
  );
}

export default Projects;
