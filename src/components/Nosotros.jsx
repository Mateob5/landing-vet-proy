import React from 'react';
import Imagen from '../assets/img2.png';
import Imagen2 from '../assets/img0.png';
export function Nosotros() {
  return (
    <div id='Nosotros'>
      <h2 className='md:text-5xl sm:text-4xl text-4xl font-medium md:py-12 text-center'>Nosotros</h2>
      <div className='w-full bg-white py-3 px-4'>
        <div className='max-u-[1240px] mx-auto grid md:grid-cols-2 px-[20px]'>
          <div className='flex flex-col justify-center px-[20px] my-10'>
            <h2 className='md:text-3xl sm:text-2xl text-3xl font-bold py-2'>Cuida y Protege a tus Mascotas con Nuestra Medicina Tradicional China</h2>
            <p className='text-lg my-6 py-15'>
                Nuestra misión es proporcionar una atención personalizada y efectiva a los animales a través de la medicina tradicional. Creemos en el poder de los tratamientos naturistas para curar y aliviar, y trabajamos arduamente para mejorar la calidad de vida de las mascotas <a href='#' className='text-black font-medium'>Leer Mas...</a>
            </p>
          </div>
          <img  className='w-[550px] mx-auto rounded-md' src={Imagen} alt="/" />
        </div>
      </div>
      <div className='w-full bg-white py-9 px-4'>
        <div className='max-u-[1240px] mx-auto grid md:grid-cols-2 px-[20px]'>
          <img  className='w-[550px] mx-auto rounded-md' src={Imagen2} alt="/" />
          <div className='flex flex-col justify-center px-[20px] my-10'>
            <h2 className='md:text-3xl sm:text-2xl text-3xl font-bold py-2'>Nuestro Equipo al Servicio de tu Mascota</h2>
            <p className='text-lg my-6 py-15'>
            Estamos orgullosos de presentarte a nuestro equipo de profesionales altamente capacitados y apasionados por el cuidado de los animales. Nuestra dedicación a la medicina tradicional china y su aplicación en la atención veterinaria es la columna vertebral de nuestra clínica, y estamos comprometidos a brindar el mejor cuidado posible a tus queridas mascotas <a href='#' className='text-black font-medium'>Leer Mas...</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}