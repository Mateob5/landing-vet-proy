import React from 'react';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.PNG'
import { Button } from './Button';

export function Servicios() {
  const serviciosData = [
    {
      id: 1,
      title: 'Acupuntura',
      description: 'La Acupuntura es una técnica que utiliza agujas finas para estimular puntos específicos del cuerpo. Estos puntos se encuentran a lo largo de los meridianos, que son canales por los que circula el qi o “flujo de energía vital”.',
      info: 'La acupuntura para mascotas se utiliza para tratar una amplia gama de condiciones, como:',
      items: [
        'Dolor',
        'Inflamación',
        'Problemas de piel',
        'Trastornos del comportamiento',
      ],
      image: img3, 
    },

    {
        title: 'Moxibustión',
        description: 'La Moxibustión es una técnica que utiliza calor para estimular puntos específicos del cuerpo. El calor se genera quemando un lapiz de artemiza llamado moxa.',
        info: 'La moxibustión en las mascotas se utiliza para tratar una amplia gama de condiciones, como:',
        items: [
          'Problemas respiratorios',
          'Problemas de piel',
          'Trastornos del comportamiento',
        ],
        image: img1,
      },

      {
        title: 'Fitoterapia',
        description: 'La Fitoterapia es el uso de hierbas para tratar enfermedades. Las hierbas chinas se utilizan para tratar una amplia gama de condiciones, como:',
        info: '',
        items: [
          'Infecciones',
          'Alergias',
          'Trastornos digestivos',
          'Problemas de piel',
          'Trastornos del comportamiento',
        ],
        image: img2,
      },

      {
        title: 'Dieta para Mascotas',
        description: 'La Dieta para mascotas se desarrolla entorno a la medicina tradicional china para mascotas teniendo como pilar que los alimentos pueden tener un efecto en la salud y el bienestar de los animales. Dicha dieta se desarrolla con el fin de que sea equilibrada y que incluya alimentos que sean apropiados para su mascota.',
        info:'Estas dietas se enfocan en mejorar la salud y el bienestar general de las mascotas.',
        items: [
          'Fortalecimiento del Sistema Inmunológico',
          'Reducción del Dolor y la Inflamación'
        ],
        image: img2,
      },
  ];

  return (
    <div className="w-full px-4 py-5 bg-white" id='Servicios'>
      <h1 className='md:text-5xl sm:text-4xl text-4xl font-medium md:py-5 my-3 text-center'>Servicios</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-7">
        {serviciosData.map((servicio, index) => (
          <div key={index} className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(115) duration-300">
            <img className="w-full h-[300px] object-cover" src={servicio.image} alt={servicio.title}/>
            <h2 className="text-2xl font-bold text-center py-6">{servicio.title}</h2>
            <p className="text-medium my-3 mx-2">{servicio.description}</p>
            <p className="text-medium my-3 mx-2">{servicio.info}</p>
            <div className="font-medium">
              <ul>
                {servicio.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mx-3 my-2">- {item}</li>
                ))}
              </ul>
            </div>
            <button className='bg-black text-white py-3 px-3 rounded-lg md:ml-12 m-9 hover:bg-gray-900 duration-500'>Adquirir</button>
          </div>
        ))}
      </div>
    </div>
  );
}