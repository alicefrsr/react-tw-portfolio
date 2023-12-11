import FocusTrap from 'focus-trap-react';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
// import { useNavigate } from 'react-router-dom';

import projectsData from '../assets/data/projectsData';
import ToolTip from './ToolTip';
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
    <FocusTrap
    // focusTrapOptions={{ initialFocus: '#close-modal' }}
    >
      {/* Overlay div: on top of everything else: w-full h-full fixed inset-0 */}
      <div
        className='fixed flex justify-center items-center top-0 left-0 w-full h-full z-10 bg-teal-700 bg-opacity-70 backdrop-blur-sm overflow-y-auto'
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
          className='w-[90%] md:max-w-[30rem] bg-white p-5 rounded-[9px] z-10 absolute  dark:bg-blueDark'
        >
          <div>
            {/* Close button */}
            <button
              id='close-modal'
              onClick={() => onClose()}
              className='absolute top-[1.7rem] right-[1.7rem] w-[1.8rem] h-[1.8rem] bg-white  text-[25px] flex items-center justify-center rounded-[3px] leading-0 duration-300  dark:text-blueDark link'
            >
              &times;
            </button>
            <figure>
              <img
                className='rounded-[9px] border-2 border-slate-200  dark:border-none'
                src={project.imageURL}
                alt={project.title}
              />
            </figure>

            <div>
              <h2 className='mt-8 mb-4 text-2xl font-semibold'>
                {project.title}
              </h2>
              <p className='text-base leading-7'>{project.desc}</p>
              {/* Tech stack */}
              <ul className='mt-8 flex items-center gap-2 flex-wrap'>
                {project.tech.map((tech, index) => (
                  <li key={index} className='tech-full text-[14px]'>
                    {tech}
                  </li>
                ))}
              </ul>
              {/* External links */}
              <div className='mt-8 flex gap-3 items-center justify-center sm:justify-start '>
                <ToolTip tooltip={`${project.demoURL}`}>
                  <a
                    href={project.demoURL}
                    target='_blank'
                    rel='noreferrer'
                    className='btn-modal link'
                  >
                    <LuExternalLink size={25} title='External link' />
                    Live demo
                  </a>
                </ToolTip>
                <ToolTip tooltip={`${project.codeURL}`}>
                  <a
                    href={project.codeURL}
                    target='_blank'
                    rel='noreferrer'
                    className='btn-modal link'
                  >
                    <FaGithub size={25} title='Github' />
                    View code
                  </a>
                </ToolTip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}

export default ProjectModal;
