import React from 'react'
import {  
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare, 
} from 'react-icons/fa';

export function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black' id='Footer'>
      <div>
        <div className='flex justify-between md:w-[75%]'>
          <FaFacebookSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
          <FaGithubSquare size={30}/>
          <FaDribbbleSquare size={30}/>
        </div>
      </div>
      <div className='lg:col-span-3 flex justify-between'>
        <div>
          <h6 className='font-medium text-black'>Servicios</h6>
          <ul>
            <li className='py-2 text-sm'>Tratamientos</li>
            <li className='py-2 text-sm'>Medicamentos</li>
            <li className='py-2 text-sm'>General</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Soporte</h6>
          <ul>
            <li className='py-2 text-sm'>Precios</li>
            <li className='py-2 text-sm'>Preguntas</li>
            <li className='py-2 text-sm'>Reclamos</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Informacion</h6>
          <ul>
              <li className='py-2 text-sm'>Nostros</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Trabajos</li>
          </ul>
        </div>  
        <div>
          <h6 className='font-medium text-black'>Otros</h6>
          <ul>
            <li className='py-2 text-sm'>Terminos y Condiciones</li>
          </ul>
        </div>
      </div>
    </div>
  )
}