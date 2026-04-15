import React from 'react';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  id: number;
  title: { es: string; en: string };
  image: string;
  shortDescription: { es: string; en: string };
  githubLink: string;
  language: 'es' | 'en';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  shortDescription,
  githubLink,
  language,
}) => {
  return (
    <div className="project-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title[language]} className="card-image" />
        <div className="card-overlay">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-overlay-btn"
          >
            {language === 'es' ? '🔗 Ver en GitHub' : '🔗 View on GitHub'}
          </a>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title[language]}</h3>
        <p className="card-description">{shortDescription[language]}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          {language === 'es' ? 'Ver proyecto →' : 'View project →'}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
