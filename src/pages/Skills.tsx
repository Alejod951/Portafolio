import React from 'react';
import '../styles/Skills.css';

interface SkillsProps {
  language: 'es' | 'en';
}

interface Category {
  title: string | { es: string; en: string };
  icon: string;
  color: string;
  skills: string[];
}

const SKILL_CATEGORIES: Category[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#5334ef',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#06b6d4',
    skills: ['Node.js', 'Express', 'PHP', 'Laravel', 'Python', 'REST APIs'],
  },
  {
    title: { es: 'Bases de Datos', en: 'Databases' },
    icon: '🗄️',
    color: '#10b981',
    skills: ['PostgreSQL', 'MySQL', 'Prisma ORM'],
  },
  {
    title: { es: 'Herramientas & DevOps', en: 'Tools & DevOps' },
    icon: '🛠️',
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Postman'],
  },
  {
    title: { es: 'Metodologías', en: 'Methodologies' },
    icon: '📋',
    color: '#ec4899',
    skills: ['Scrum', 'Agile', 'IA & Automation', 'WebSockets'],
  },
];

const Skills: React.FC<SkillsProps> = ({ language }) => {
  const getTitle = (title: Category['title']) => {
    if (typeof title === 'string') return title;
    return title[language];
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        {language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
      </h2>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat, i) => (
          <div
            key={i}
            className="skill-category"
            style={{ '--accent': cat.color } as React.CSSProperties}
          >
            <div className="skill-category-header">
              <span className="skill-icon">{cat.icon}</span>
              <h3>{getTitle(cat.title)}</h3>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill, j) => (
                <span key={j} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="languages-block">
        <h3 className="subsection-title">
          {language === 'es' ? 'Idiomas' : 'Languages'}
        </h3>
        <div className="languages-grid">
          <div className="language-item">
            <div className="lang-info">
              <span className="lang-flag">🇪🇸</span>
              <span className="lang-name">{language === 'es' ? 'Español' : 'Spanish'}</span>
              <span className="lang-level">{language === 'es' ? 'Nativo' : 'Native'}</span>
            </div>
            <div className="lang-bar">
              <div className="lang-fill" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="language-item">
            <div className="lang-info">
              <span className="lang-flag">🇺🇸</span>
              <span className="lang-name">{language === 'es' ? 'Inglés' : 'English'}</span>
              <span className="lang-level">B1+</span>
            </div>
            <div className="lang-bar">
              <div className="lang-fill" style={{ width: '65%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
