import React from 'react';
import '../styles/About.css';

interface AboutProps {
  language: 'es' | 'en';
}

const SOFT_SKILLS = [
  { es: 'Liderazgo', en: 'Leadership' },
  { es: 'Comunicación asertiva', en: 'Assertive Communication' },
  { es: 'Eficiencia', en: 'Efficiency' },
  { es: 'Resolución de problemas', en: 'Problem Solving' },
  { es: 'Elaboración de reportes', en: 'Report Writing' },
  { es: 'Trabajo en equipo', en: 'Teamwork' },
  { es: 'Aprendizaje continuo', en: 'Continuous Learning' },
  { es: 'Atención al detalle', en: 'Attention to Detail' },
];

const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        {language === 'es' ? 'Sobre Mí' : 'About Me'}
      </h2>

      <div className="about-layout">
        <div className="about-text-col">
          <p className="about-paragraph">
            {language === 'es'
              ? 'Soy Ingeniero Mecatrónico y Full Stack Developer apasionado por transformar ideas en sistemas que funcionen a escala. Con experiencia en React, Node.js, PostgreSQL y automatización, disfruto construir soluciones que no solo funcionen hoy, sino que crezcan con el negocio.'
              : 'I am a Mechatronics Engineer and Full Stack Developer passionate about transforming ideas into systems that work at scale. With experience in React, Node.js, PostgreSQL, and automation, I enjoy building solutions that not only work today but grow with the business.'}
          </p>
          <p className="about-paragraph">
            {language === 'es'
              ? 'Me motivan los proyectos donde la tecnología y la inteligencia artificial se convierten en ventaja competitiva real. Creo que la calidad del código es tan importante como la funcionalidad: escribo código limpio, modular y escalable, pensando siempre en mantenibilidad a largo plazo.'
              : 'I am driven by projects where technology and artificial intelligence become a real competitive advantage. I believe code quality is as important as functionality: I write clean, modular, and scalable code, always thinking about long-term maintainability.'}
          </p>
        </div>

        <div className="about-cards-col">
          <div className="highlight-card">
            <span className="highlight-icon">🚀</span>
            <div>
              <h3 className="highlight-number">3+</h3>
              <p className="highlight-label">
                {language === 'es' ? 'Módulos en producción' : 'Production modules'}
              </p>
            </div>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">👥</span>
            <div>
              <h3 className="highlight-number">50+</h3>
              <p className="highlight-label">
                {language === 'es' ? 'Usuarios impactados' : 'Users impacted'}
              </p>
            </div>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">🌐</span>
            <div>
              <h3 className="highlight-number">Full Stack</h3>
              <p className="highlight-label">
                {language === 'es' ? 'Web, Móvil & Cloud' : 'Web, Mobile & Cloud'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="soft-skills-block">
        <h3 className="subsection-title">
          {language === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}
        </h3>
        <div className="soft-skills-grid">
          {SOFT_SKILLS.map((skill, i) => (
            <span key={i} className="soft-skill-tag">
              {skill[language]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
