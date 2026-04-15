import React from 'react';
import '../styles/Contact.css';

interface ContactProps {
  language: 'es' | 'en';
}

const CONTACT_ITEMS = [
  {
    icon: '✉️',
    label: { es: 'Correo Electrónico', en: 'Email' },
    value: 'Alejod951@gmail.com',
    href: 'mailto:Alejod951@gmail.com',
  },
  {
    icon: '📱',
    label: { es: 'Teléfono', en: 'Phone' },
    value: '+57 315 873 5077',
    href: ' https://wa.me/573158735077',
  },
  {
    icon: '🐙',
    label: { es: 'GitHub', en: 'GitHub' },
    value: 'github.com/Alejod951',
    href: 'https://github.com/Alejod951',
    external: true,
  },
  {
    icon: '💼',
    label: { es: 'LinkedIn', en: 'LinkedIn' },
    value: 'linkedin.com/in/cristian',
    href: 'https://www.linkedin.com/in/cristian-alejandro-diaz-rivera-212069240/',
    external: true,
  },
];

const Contact: React.FC<ContactProps> = ({ language }) => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        {language === 'es' ? 'Contacto' : 'Contact'}
      </h2>

      <div className="contact-content">
        <p className="contact-intro">
          {language === 'es'
            ? '¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible y siempre abierto a nuevas oportunidades.'
            : 'Have a project in mind or want to collaborate? I\'m available and always open to new opportunities.'}
        </p>

        <div className="contact-grid">
          {CONTACT_ITEMS.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="contact-card"
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-icon">{item.icon}</span>
              <div className="contact-info">
                <p className="contact-label">{item.label[language]}</p>
                <p className="contact-value">{item.value}</p>
              </div>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>

        <a href="mailto:Alejod951@gmail.com" className="contact-cta">
          {language === 'es' ? '📩 Enviarme un mensaje' : '📩 Send me a message'}
        </a>
      </div>

      <footer className="site-footer">
        <p>
          {language === 'es'
            ? '© 2026 Cristian Díaz Rivera · Desarrollado con React & TypeScript'
            : '© 2026 Cristian Díaz Rivera · Built with React & TypeScript'}
        </p>
      </footer>
    </section>
  );
};

export default Contact;
