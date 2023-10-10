import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Nosotros } from './components/Nosotros';
import { Footer } from './components/Footer';
import { Servicios } from './components/Servicios';
import { Testimonios } from './components/Testimonios';
import { Contacto} from './components/Contacto';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Ruta para la página de inicio (Hero) */}
        <Route path="/" element={<Hero />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/Testimonios" element={<Testimonios />} />
        <Route path="/Contacto" element={<Contacto />} />
        {/* Rutas para Login y SignUp */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

