import react from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import About_me from './components/about_me/about_me';
import Projects from './components/projects/projects';

function App() {

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 100) {
        // Muestra el botón cuando el desplazamiento es mayor que 100px
        setShowScrollButton(true);
      } else {
        // Oculta el botón cuando el desplazamiento es menor o igual a 100px
        setShowScrollButton(false);
      }
    };

    // Agrega un evento de desplazamiento para verificar la posición del scroll
    window.addEventListener('scroll', checkScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esto crea una transición suave
    });
  };

  return (
    <div className="App">

      <Navbar/>

      <About_me/>

      <Projects/>

      <button id="scrollTopButton" onClick={scrollToTop}>
          Volver arriba
      </button>

    </div>
  );
}

export default App;
