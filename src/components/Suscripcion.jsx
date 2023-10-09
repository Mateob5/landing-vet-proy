import React from 'react';

export function Suscripcion() {
  return (
    <div className="bg-black text-white py-14">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="col-span-2 mr-40">
          <h2 className="text-4xl sm:text-2xl font-bold pb-2">¿Te interesa aprender más sobre nosotros?</h2>
          <p>Inscríbase para recibir información sobre tratamientos para mascotas, alimentación, ofertas disponibles y mas</p>
        </div>
        <div className="my-4 ml-40">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input className="pr-20 pl-4 py-3 m rounded-md text-black" type="email" placeholder="Email"/>
            <button className="bg-white text-black rounded-md font-medium w-[180px] ml-4 my-3 px-6 py-3">Inscribirme</button>
          </div>
          <p className="text-sm mt-2"><a className="hover:underline" href="/privacy-policy">Términos y Condiciones</a></p>
        </div>
      </div>
    </div>
  );
}

