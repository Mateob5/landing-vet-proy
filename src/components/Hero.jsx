import React from 'react';
import Typed from 'react-typed';

export function Hero() {
  return (
    <div className="text-black" id='Inicio'>
        <div className="max-w-[900px] mt-[10px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h1 className="md:text-5xl sm:text-4xl text-4xl font-medium md:py-6" id='Inicio'>Medicina Tradicional China Para Mascotas</h1> 
            <div className='flex justify-center items-center'>
                <p className="md:text-3xl sm:text-2xl text-xl font-medium py-2">Tratamientos: </p>
                <Typed
                className='md:text-3xl sm:text-2xl text-xl font-medium md:pl-4 pl-2'
                strings={[
                    'Tui Na',
                    'Acupuntura',
                    'Moxibustión',
                    'Fitoterapia',
                  ]}
                    typeSpeed={80}
                    backSpeed={70} 
                    loop
                />
            </div>
            <a href='#Nosotros' className='text-black text-2xl font-medium my-8 py-4'>Leer Mas</a>
        </div>
    </div>
  );
};
