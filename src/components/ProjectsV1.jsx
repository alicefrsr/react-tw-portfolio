import ProjectCard from './ProjectCard';
import { projects } from '../assets/data/projectsData';
import { useState } from 'react';

const Projects = () => {
  // filter buttons and list of categories we want to match against
  let filters = [
    'all',
    'Vanilla JS',
    'HTML/CSS Integration',
    'React',
    'Typescript',
    'Full Stack',
  ];

  // state when filter applied (default: display all projects)
  // should be derived state from projects
  // const [filteredProjects, setFilteredProjects] = useState(projects);
  // state to show selected filter (default: 'all')
  const [selectedFilter, setSelectedFilter] = useState('all');

  // onClick method to apply filter checking against array of categories
  const applyFilter = (selectedCategory) => {
    setSelectedFilter(selectedCategory);

    /////////// use reduce() instead of all this stuff?
    // let filteredProjects = [];
    // if (selectedCategory === 'all') {
    //   filteredProjects = projects;
    // } else {
    //   // loop through each project, then through project.category to check if array contains selectedCategory
    //   // projects.forEach((project) => {
    //   projects.map((project) => {
    //     let categoriesArr = project.categories;
    //     if (categoriesArr.includes(selectedCategory)) {
    //       // add to filteredProjects array if match found
    //       filteredProjects.push(project); // ??? BIG no-no...?
    //       // DO NOT MUTATE? instead: (map not forEach) then setFilteredProjects([...filteredProjects, project ])
    //     }
    //   });
    // }
    const filteredProjects = projects.reduce((prev, curr) => {
      if (curr.categories.includes(selectedCategory)) {
        return [...prev, curr];
      } else return prev;
    }, []);
    //////////////////
    // setFilteredProjects(filteredProjects);
  };

  return (
    <section name='projects' className='pt-40 w-full'>
      {/* container */}
      <div className=' max-w-[1200px] mx-auto px-6 flex flex-col w-full h-full'>
        <div>
          <h2 className='py-4'>Projects</h2>

          {/* filters */}
          <div className='flex flex-col'>
            <div className='pb-4'>Filter by: </div>
            <div className='flex flex-wrap'>
              {filters.map((category) => (
                <button
                  key={category}
                  onClick={() => applyFilter(category)}
                  className={`font-dm mb-4 mr-4 hover:text-primaryColor btn  ${
                    selectedFilter === category ? 'active ' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* projects grid */}
        <ul className='mt-6 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
