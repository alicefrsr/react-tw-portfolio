import FocusTrap from 'focus-trap-react';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
// import { useNavigate } from 'react-router-dom';

import projectsData from '../assets/data/projectsData';
// import { useEffect } from 'react';

function ProjectModal({ selectedProjectId, showModal, onClose }) {
  // const navigate = useNavigate();

  const project = projectsData.find(
    (project) => project.id === selectedProjectId
  );
  // option 1: e.stopPropagation on modal container
  // option 2: target overlay with an id, close only if matched
  const handleClose = (e) => {
    if (e.target.id === 'overlay') onClose();
  };

  // useEffect(() => {
  //   function keyListener(e) {
  //     const listener = keyListenersMap.get(e.keyCode);
  //     return listener && listener(e);
  //   }
  //   document.addEventListener('keydown', keyListener);

  //   return () => document.removeEventListener('keydown', keyListener);
  // });

  if (!showModal) return null;
  return (
    // Overlay div: on top of everything else: w-full h-full fixed inset-0
    <FocusTrap>
      <div
        className='fixed inset-0 w-full h-screen z-10 bg-teal-700 bg-opacity-20 backdrop-blur-sm'
        id='overlay'
        // onClick={() => onClose()}  // option 1: e.stopPropagation on modal container
        onClick={handleClose} // option 2: target overlay with an id, close only if matched
      >
        {/* modal container  */}

        <div
          id='project-modal'
          role='dialog'
          aria-modal='true'
          onClick={(e) => e.stopPropagation()} // option 1
          className='w-[90%] md:max-w-[40rem] bg-white p-5 rounded-[9px] z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          // md:w-full? mx-auto?
        >
          <div>
            <figure>
              <img
                className='rounded-[9px] '
                src={project.imageURL}
                alt={project.title}
              />
            </figure>

            <div>
              <div className='my-5'>
                <h2 className='text-2xl font-[500]'>{project.title}</h2>
              </div>

              <p className='text-base leading-7'>{project.desc}</p>
              <div className='mt-5 flex items-center gap-3 flex-wrap'>
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 tech'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='mt-8 flex gap-3 items-center justify-end'>
                <a
                  href={project.demoURL}
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-[9px] border-2 border-current py-1 px-2 flex gap-2 hover:text-teal-800 duration-300'
                >
                  <LuExternalLink size={25} title='External Link' />
                  Live demo
                </a>
                <a
                  href={project.codeURL}
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-[9px] border-2 border-current py-1 px-2 flex gap-2 hover:text-teal-800 duration-300'
                >
                  <FaGithub size={25} title='Github' />
                  View code
                </a>
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={() => onClose()}
              className='absolute top-[1.7rem] right-[1.7rem] w-[1.8rem] h-[1.8rem] bg-white  text-[25px] flex items-center justify-center rounded-[3px] leading-0'
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}

export default ProjectModal;
