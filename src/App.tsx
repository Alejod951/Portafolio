import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './componets/Header';
import StarryBackground from './componets/StarryBackground';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Proyect from './pages/Proyect';

const App: React.FC = () => {
  // Define los enlaces para el menú de navegación
  const links = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Projects', url: '/projects' },
  ];

  // Estado para el idioma
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  // Función para alternar el idioma
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (

    <Router>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <StarryBackground></StarryBackground>

        <Header title= {language === 'en' ? 'Mi Portafolio' : 'My Portfolio'}  links={links} language={language} toggleLanguage={toggleLanguage} />

        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/projects" element={<Proyect language={language} />} />

        </Routes>


      </div>


    </Router>


  );
};

export default App;

