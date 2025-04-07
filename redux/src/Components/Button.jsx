import React from 'react'

const Button = ({onClick, btnText}) => {
  return (
    <button className='w-full h-10 bg-blue-700 text-white flex items-center justify-center mt-5 rounded-md hover:bg-blue-600 cursor-pointer' 
    onClick={onClick}>{btnText}</button>
    
  )
}

export default Button