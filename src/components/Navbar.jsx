import React, { useState } from 'react';
import Captura from '../assets/Captura.PNG';
import { Button } from './Button';

export function Navbar() {
  const Links = [
    { name: "Inicio", link: "#Inicio" },
    { name: "Nosotros", link: "#Nosotros" },
    { name: "Servicios", link: "#Servicios" },
    { name: "Testimonios", link: "#Testimonios" },
    { name: "Contacto", link: "#Footer" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-none w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white px-4 md:px-10'>
        <div className='cursor-pointer flex justify-center'>
          <a href="#" ><img className='object-fill w-[350px]' src={Captura} alt="Logo" /></a>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 md:pr-10 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-black hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))}
          <Button><a href="#Footer">Login</a></Button>
          <Button><a href="#Footer">Sign-Up</a></Button>
        </ul>
      </div>
    </div>
  );
}

