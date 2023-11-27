import projectsData from '../assets/data/projectsData';

function Modal({ activeId, setShowModal }) {
  const project = projectsData.find((project) => project.id === activeId);
  return (
    <div className=' w-full h-full fixed top-0 left-0 z-10 bg-primaryColor bg-opacity-40'>
      <div className='w-11/12 md:max-w-[40rem] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[9px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
        <div>
          <figure>
            <img className='rounded-[9px] ' src={project.imageURL} alt='' />
          </figure>
          <div>
            <h2 className='text-2xl font-[500] my-5'>{project.title}</h2>
            <p className='text-base leading-7'>{project.desc}</p>
            <div className='mt-5 flex items-center gap-3 flex-wrap'>
              <h4 className='text-md text-[700]'>Technologies</h4>
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.siteURL}
              className='bg-primaryColor text-white py-2 px-4 my-8 rounded-[9px] font-[500] inline-block mt-6 hover:bg-red-200 ease-in duration-300 '
            >
              Live Site
            </a>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px]  leading-0  '
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
