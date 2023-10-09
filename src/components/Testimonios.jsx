import React from 'react';
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'

export function Testimonios() {
  const testimoniosData = [
    {
      username: 'Usuario 1',
      petName: 'Mascota 1',
      info: 'Después de probar varios tratamientos convencionales sin éxito, encontré esta clínica. Los resultados han sido notables, y ahora sé que mi mascota está en buenas manos.',
      photo: profile1,
    },
    {
      username: 'Usuario 2',    
      petName: 'Mascota 2',
      info:'Su enfoque en la medicina tradicional china me hizo dudar al principio, pero después de ver la mejora en la salud de mi mascota, no tengo dudas sobre la eficacia de sus tratamientos.',
      photo: profile2,
    },
    {
      username: 'Usuario 3',
      petName: 'Mascota 3',
      info:'Mi mascota tenía una afección crónica. Gracias a su enfoque integral de la medicina china, mi mascota está mejor que nunca. ¡Definitivamente la recomiendo!',
      photo: profile3,
    },
  ];

  return (
    <div className='pt-6 mt-14' id='Testimonios'>
      <h2 className='md:text-5xl sm:text-4xl text-4xl font-medium md:py-4 text-center'>Testimonios</h2>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {testimoniosData.map((testimonio, index) => (
        <div key={index} className="w-full shadow-xl flex flex-col my-12 mx-8 p-4 rounded-lg">
          <p className='text-medium my-3 mx-2'>{testimonio.info}</p>
          <div className="flex flex-col items-center my-4">
            <img
            className="w-20 h-20 rounded-full object-cover"
              src={testimonio.photo}
              alt={testimonio.username}
            />
            <h3 className="text-lg font-semibold mt-2">{testimonio.username}</h3>
            <p className="text-gray-600 text-sm mt-1">Dueño de {testimonio.petName}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
