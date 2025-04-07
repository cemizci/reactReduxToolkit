import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import {deleteDataFunc, setUpdateItem} from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice';

const ProductCard = ({dt}) => {

  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false)

  const updateFunc = () => {
    dispatch(modalFunc())
    dispatch(setUpdateItem(dt))
    setOpenEdit(false)
  }

  return (
    <div className='mt-3 relative '>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-64 object-cover" src={dt.url} alt={dt.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{dt.name}</h2>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">{dt.price}</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-xl transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div>
      <BsThreeDotsVertical onClick={()=> setOpenEdit(!openEdit)} className='absolute top-2 right-2 cursor-pointer hover:bg-gray-300 rounded-sm'/>
    </div>
    {
      openEdit && (
        <div className='absolute top-2 right-6 bg-indigo-200 border border-black p-2 text-sm'>
          <div onClick={()=> dispatch(deleteDataFunc(dt?.id))} className='hover:bg-indigo-500 hover:text-white cursor-pointer'>Sil</div>
          <hr/>
          <div onClick={updateFunc} className='hover:bg-indigo-500 hover:text-white cursor-pointer'>Güncelle</div>
        </div>
      )
    }
    </div>
  )
}

export default ProductCard