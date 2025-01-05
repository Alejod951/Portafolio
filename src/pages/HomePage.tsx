import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import profileImagen from '../assets/profile.png';

interface HomePageProps {
  language: 'es' | 'en';
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
  return (
    <div className="homepage">

      <img
        className="hero-image"
        src={profileImagen}// Puedes cambiar esto a tu imagen local o una URL
        alt="Hero"
      />

      <p className="small-text">{language === 'en' ? 'Hola 👋, soy' : 'Hello 👋, I am'}</p>
      <h1 className="large-text">Cristian Alejandro Diaz Rivera</h1>
      <p className="small-text">
        {language === 'en'
          ? 'Desarrollador Full Stack apasionado por la programación.'
          : 'Full Stack Developer passionate about programming.'}
      </p>

      <div className="container">
        <div className="btn">
          <a href="https://drive.google.com/uc?export=download&id=1hMqZ1plCEUkoZCfDNIkFDessAkdXo7os">
            {language === 'en' ? 'Descargar Currículo' : 'Download Resume'}
          </a>
        </div>

        <div className="btn">
  <a 
    href="mailto:Alejod951@gmail.com" 
    className="contact-link"
  >
    {language === 'en' ? 'Contact me' : 'Contáctame'}
  </a>
</div>


      </div>
    </div>
  );
};

export default HomePage;
