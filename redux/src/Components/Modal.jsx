import React from 'react'
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice';


const Modal = ({title, content}) => {

  const dispatch = useDispatch()

  const handleOverlayClick = () => {
    dispatch(modalFunc())
  }

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div>
        <div onClick={handleOverlayClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ">
           <div onClick={handleModalClick} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-xl w-full p-6 relative ">
             <button onClick={()=> dispatch(modalFunc())} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white">✕ </button>
             <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 border-b-gray-800">{title}</h2>
              <div className='flex flex-col items-start justify-center p-3'>
               <hr className='w-full border border-gray-200'/>
               {content}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Modal