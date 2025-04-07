import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { modalFunc } from '../redux/modalSlice';

const Header = () => {

    const dispatch = useDispatch()

  return (
    <div>
        <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-5">
          <img
            src="https://i.pinimg.com/736x/ab/92/0f/ab920f503c6ea441e15c2536487669d7.jpg" // Logonun yolunu buraya koy
            alt="Logo"
            className="w-16 h-16"
          />
          <span className="text-2xl font-semibold text-gray-800">MyStore</span>
        </div>

        

        <div className='flex items-center justify-center'>
            <select className='bg-gray-100 p-3' name="" id="">
                <option value="asc">ARTAN</option>
                <option value="desc">AZALAN</option>
            </select>
            <div className='mx-3 p-2 bg-gray-100 '>
                <input className='outline-none' type="text" placeholder='Search' />
             </div>
             <div  onClick={()=> dispatch(modalFunc())} className='bg-gray-100 p-3 hover:bg-gray-200'>
             <IoMdAdd />
             </div>
        </div>

        
      </div>
    </header>
    </div>
  )
}

export default Header