import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
  links: { label: string; url: string }[];
  language: 'es' | 'en';
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, links, language, toggleLanguage }) => {
  const [menuVisible, setMenuVisible] = useState(false); // Estado para el menú

  const translateLabel = (label: string) => {
    switch (label) {
      case 'Home':
        return 'Inicio';
      case 'About':
        return 'Acerca de';
      case 'Projects':
        return 'Proyectos';
      default:
        return label;
    }
  };

  const translatedLinks = links.map((link) => ({
    ...link,
    label: language === 'es' ? link.label : translateLabel(link.label),
  }));

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <button className="menu-button" onClick={toggleMenu}>☰</button>
      <h1>{title}</h1>
      <nav className={menuVisible ? 'show' : ''}>
        {translatedLinks.map((link, index) => (
          
          <Link key={index} to={link.url}>{link.label}</Link>
          
        ))}
      </nav>
      <div className="language-switch">
        <label>{language === 'es' ? '🇪🇸' : '🇺🇸'}</label>
        <input type="checkbox" onChange={toggleLanguage} checked={language === 'en'} />
      </div>
    </header>
  );
};

export default Header;
