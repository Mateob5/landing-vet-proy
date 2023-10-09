import React from 'react'

export function Button(props) {
  return (
    <button className='bg-black text-white py-3 px-6 rounded md:ml-8 hover:bg-gray-900 
    duration-500'>
      {props.children}
    </button>
  )
}
