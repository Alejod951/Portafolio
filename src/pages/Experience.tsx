import React from 'react';
import '../styles/Experience.css';

interface ExperienceProps {
  language: 'es' | 'en';
}

const WORK_EXPERIENCE = [
  {
    company: 'SUSOFTWARE S.A.S.',
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    period: { es: 'Oct 2025 – Abr 2026', en: 'Oct 2025 – Apr 2026' },
    bullets: {
      es: [
        'Desarrollé y mejoré hasta 3 módulos del sistema (nómina, contratos y gestión administrativa) utilizados por más de 50 usuarios, reduciendo inconsistencias y errores reportados.',
        'Optimicé consultas SQL en PostgreSQL, logrando una reducción notable de bugs en producción y mejorando la estabilidad del sistema.',
        'Implementé interfaces responsivas con React y TypeScript, enfocadas en UX/UI dentro de un equipo ágil de 3 desarrolladores bajo Scrum.',
        'Refactorizé y estructuré código legacy para mejorar la escalabilidad y mantenibilidad, facilitando el trabajo colaborativo con Git.',
        'Participé en el ciclo completo de desarrollo: desde implementación hasta despliegue en producción y soporte técnico post-lanzamiento.',
      ],
      en: [
        'Developed and improved up to 3 system modules (payroll, contracts, and administrative management) used by 50+ users, reducing inconsistencies and reported errors.',
        'Optimized SQL queries in PostgreSQL, achieving notable bug reduction in production and improving system stability.',
        'Implemented responsive interfaces with React and TypeScript, focused on UX/UI within a 3-developer Scrum team.',
        'Refactored and restructured legacy code to improve scalability and maintainability, facilitating collaborative work with Git.',
        'Participated in the full development cycle: from implementation to production deployment and post-launch technical support.',
      ],
    },
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Git', 'Scrum'],
  },
  {
    company: 'Fundación Obeso Mejía',
    role: { es: 'Analista y Digitador de Datos', en: 'Data Analyst & Entry Specialist' },
    period: { es: 'Jul 2021 – Ene 2022', en: 'Jul 2021 – Jan 2022' },
    bullets: {
      es: [
        'Digitación y validación de datos clínicos (estatura, peso, edad y niveles de hemoglobina), garantizando precisión y confiabilidad en la información registrada.',
        'Análisis básico de métricas de salud y elaboración de reportes estadísticos.',
        'Generación y redacción de informes técnicos con conclusiones basadas en datos recolectados.',
        'Apoyo en control de calidad de información y verificación de inconsistencias en registros.',
      ],
      en: [
        'Data entry and validation of clinical data (height, weight, age, and hemoglobin levels), ensuring accuracy and reliability.',
        'Basic analysis of health metrics and preparation of statistical reports.',
        'Technical report generation with data-driven conclusions.',
        'Quality control support and data inconsistency verification.',
      ],
    },
    tech: ['Excel', 'Análisis de Datos', 'Reportes Estadísticos'],
  },
];

const EDUCATION = [
  {
    institution: 'Universidad Autónoma de Occidente',
    degree: { es: 'Ingeniería Mecatrónica', en: 'Mechatronics Engineering' },
    period: '2019 – 2024',
    icon: '🎓',
    note: { es: 'Cali, Colombia', en: 'Cali, Colombia' },
  },
  {
    institution: 'Henry Bootcamp',
    degree: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    period: '2024',
    icon: '💻',
    note: {
      es: 'Bootcamp intensivo con proyecto final grupal en Vite, React y Node.js',
      en: 'Intensive bootcamp with group final project in Vite, React and Node.js',
    },
  },
];

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        {language === 'es' ? 'Experiencia' : 'Experience'}
      </h2>

      <div className="experience-layout">
        {/* Work experience */}
        <div className="work-col">
          <h3 className="col-heading">
            <span>💼</span>
            {language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
          </h3>
          <div className="timeline">
            {WORK_EXPERIENCE.map((job, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-line">
                  <div className="timeline-dot" />
                  {i < WORK_EXPERIENCE.length - 1 && <div className="timeline-track" />}
                </div>
                <div className="timeline-card">
                  <div className="job-header">
                    <div>
                      <h4 className="job-company">{job.company}</h4>
                      <p className="job-role">{job.role[language]}</p>
                    </div>
                    <span className="job-period">{job.period[language]}</span>
                  </div>
                  <ul className="job-bullets">
                    {job.bullets[language].map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  <div className="job-tech">
                    {job.tech.map((t, j) => (
                      <span key={j} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="edu-col">
          <h3 className="col-heading">
            <span>🎓</span>
            {language === 'es' ? 'Formación Académica' : 'Education'}
          </h3>
          <div className="edu-list">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="edu-card">
                <span className="edu-icon">{edu.icon}</span>
                <div className="edu-info">
                  <h4 className="edu-institution">{edu.institution}</h4>
                  <p className="edu-degree">{edu.degree[language]}</p>
                  <p className="edu-note">{edu.note[language]}</p>
                  <span className="edu-period">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
