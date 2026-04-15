import React, { useState, useEffect } from 'react';

import Header from './componets/Header';
import StarryBackground from './componets/StarryBackground';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Proyect from './pages/Proyect';
import Contact from './pages/Contact';

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

const App: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [activeSection, setActiveSection] = useState('home');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35, rootMargin: '-5% 0px -5% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <StarryBackground />
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        activeSection={activeSection}
      />
      <main>
        <HomePage language={language} />
        <About language={language} />
        <Skills language={language} />
        <Experience language={language} />
        <Proyect language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
};

export default App;
