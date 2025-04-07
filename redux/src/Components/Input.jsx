import React from 'react'

const Input = ({placeholder, name, type, id, onChange}) => {
  return (
    <input className='outline-none p-2 border border-gray-300 rounded-md mt-5 w-full hover:bg-gray-100 cursor-pointer' placeholder={placeholder} type={type} id={id} name={name} onChange={onChange}/>
  )
}

export default Input