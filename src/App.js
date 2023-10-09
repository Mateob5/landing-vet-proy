import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Nosotros } from './components/Nosotros';
import { Footer } from './components/Footer';
import { Servicios } from './components/Servicios';
import { Testimonios } from './components/Testimonios';
import { Suscripcion } from './components/Suscripcion';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Nosotros/>
      <Servicios/>
      <Suscripcion/>
      <Testimonios/>
      <Footer/>
    </div>
  );
}

export default App;
