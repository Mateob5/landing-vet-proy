import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Captura from '../assets/Captura.PNG';
import { IonIcon } from '@ionic/react';
import { close, menu } from 'ionicons';

export function Navbar() {
  const Links = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/nosotros" },
    { name: "Servicios", link: "/servicios" },
    { name: "Testimonios", link: "/testimonios" },
    { name: "Contacto", link: "/contacto" },
    { name: "Login", link: "/login" },
    { name: "SignUp", link: "/signup" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='shadow-none w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white px-4 md:px-10'>
        <div className='cursor-pointer flex justify-center'>
          <Link to="/" ><img className='object-fill w-[350px]' src={Captura} alt="Logo" /></Link>
        </div>

        <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={toggleMenu}>
          <IonIcon  name={isMenuOpen ? 'close' : 'menu'}></IonIcon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 md:pr-10 transition-all duration-500 ease-in ${isMenuOpen ? 'top-20' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-black hover:text-gray-400 duration-500' onClick={closeMenu}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
