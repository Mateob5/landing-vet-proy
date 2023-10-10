  import React from 'react';

  export function Contacto() {
    return (
      <div className="w-full px-4 py-5 bg-white">
            <h2 className="text-4xl sm:text-2xl font-bold">Contactanos</h2>
            <p>Escribenos cualquier informacion, queja o peticion que quieras realizar estamos penientes de responder tus mensajes.</p>
          <div className=" ">
            <input className="pr-20 pl-4 py-3 mt-3 rounded-md text-black" type="text" placeholder="Nombre"/>
            <input className="pr-20 pl-4 py-3 m-3 rounded-md text-black mt-3 sm:mt-0" type="tel" placeholder="Teléfono"/>
            <input className="pr-20 pl-4 py-3 m-3 rounded-md text-black mt-3" type="email" placeholder="Email"/>
            <textarea className="pr-20 pl-4 py-3 m rounded-md text-black mt-3" rows="5" placeholder="Mensaje (opcional)"></textarea>
            <button className="bg-black text-white rounded-md font-medium pr-20 pl-4 py-3 m rounded-md text-black mt-3">Inscribirme</button>
            <p className="text-sm mt-2"><a className="hover:underline" href="/privacy-policy">Términos y Condiciones</a></p>
          </div>
      </div>
    );
  }