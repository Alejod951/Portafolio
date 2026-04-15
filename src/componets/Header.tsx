import React, { useState } from 'react';
import '../styles/Header.css';

interface NavLink {
  label: { es: string; en: string };
  id: string;
}

interface HeaderProps {
  language: 'es' | 'en';
  toggleLanguage: () => void;
  activeSection: string;
}

const NAV_LINKS: NavLink[] = [
  { label: { es: 'Inicio', en: 'Home' }, id: 'home' },
  { label: { es: 'Sobre Mí', en: 'About' }, id: 'about' },
  { label: { es: 'Habilidades', en: 'Skills' }, id: 'skills' },
  { label: { es: 'Experiencia', en: 'Experience' }, id: 'experience' },
  { label: { es: 'Proyectos', en: 'Projects' }, id: 'projects' },
  { label: { es: 'Contacto', en: 'Contact' }, id: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <span className="logo-name">Cristian</span>
          <span className="logo-dot">.</span>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label[language]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-slider" onClick={toggleLanguage} aria-label="Toggle language">
            <span className={`lang-option ${language === 'es' ? 'lang-active' : ''}`}>ES</span>
            <div className="lang-track">
              <div className={`lang-thumb ${language === 'en' ? 'lang-thumb-right' : ''}`} />
            </div>
            <span className={`lang-option ${language === 'en' ? 'lang-active' : ''}`}>EN</span>
          </div>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
