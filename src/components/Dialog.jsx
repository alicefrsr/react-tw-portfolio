import { useSearchParams } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import projectsData from '../assets/data/projectsData';

function Dialog({ onClose, children, activeId, setShowModal }) {
  const project = projectsData.find((project) => project.id === activeId);
  const searchParams = useSearchParams();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get('showDialog');

  useEffect(() => {
    if (showDialog === 'y') {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const dialog =
    showDialog === 'y' ? (
      <dialog
        ref={dialogRef}
        className='fixed bg-white rounded-[9px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 backdrop-blur'
      >
        <div className='flex flex-col w-[500px] max-w-full bg-gray-200'>
          <div className=' flex justify-between mb-4 pt-2 px-5 bg-yellow-400'>
            <h1 className='text-2xl'>My new modal</h1>
            <button
              onClick={closeDialog}
              className='py-1 px-2 mb-2 rounded border-none w-8 h-8 font-bold text-white bg-red-700 cursor-pointer'
            >
              x
            </button>
          </div>
          <div className='px-5 pb-6'>{children}</div>
        </div>
      </dialog>
    ) : null;

  return <div>{dialog}</div>;
}

export default Dialog;
