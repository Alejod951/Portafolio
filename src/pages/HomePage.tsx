import React from 'react';
import '../styles/HomePage.css';
import profileImage from '../assets/profile-2026.png';

interface HomePageProps {
  language: 'es' | 'en';
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <div className="hero-glow" />
          <img className="hero-avatar" src={profileImage} alt="Cristian Díaz Rivera" />
        </div>

        <div className="hero-text">
          <p className="hero-greeting">
            {language === 'es' ? 'Hola, soy' : 'Hello, I\'m'}
          </p>
          <h1 className="hero-name">
            Cristian Alejandro<br />Díaz Rivera
          </h1>
          <p className="hero-role">
            {language === 'es'
              ? 'Ingeniero Mecatrónico & Full Stack Developer'
              : 'Mechatronics Engineer & Full Stack Developer'}
          </p>
          <p className="hero-bio">
            {language === 'es'
              ? 'Apasionado por transformar ideas en sistemas que funcionen a escala. Con experiencia en React, Node.js, PostgreSQL y automatización, construyo soluciones que crecen con el negocio.'
              : 'Passionate about transforming ideas into systems that work at scale. With experience in React, Node.js, PostgreSQL, and automation, I build solutions that grow with the business.'}
          </p>

          <div className="hero-buttons">
            <a
              href="https://drive.usercontent.google.com/download?id=1Ybyp-SUYUVc8umtQjluwPvEQuYK-JuGx&export=download&authuser=0"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'es' ? 'Descargar CV' : 'Download CV'}
            </a>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              {language === 'es' ? 'Contáctame' : 'Contact Me'}
            </button>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/Alejod951"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <span className="social-divider">|</span>
            <a
              href="https://www.linkedin.com/in/cristian-alejandro-diaz-rivera-212069240/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <span className="social-divider">|</span>
            <a
              href="mailto:Alejod951@gmail.com"
              className="social-link"
            >
              Alejod951@gmail.com
            </a>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </button>
    </section>
  );
};

export default HomePage;
