import React from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from '../componets/ProyectCard';
import '../styles/Projects.css';

interface ProjectProps {
  language: 'en' | 'es';
}

const Projects: React.FC<ProjectProps> = ({ language }) => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        {language === 'es' ? 'Proyectos' : 'Projects'}
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            shortDescription={project.shortDescription}
            githubLink={project.githubLink}
            language={language}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
