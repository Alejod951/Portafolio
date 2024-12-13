// src/components/Projects.tsx
import React from "react";
import { projects } from "../data/projectsData";
import ProjectCard from "../componets/ProyectCard";
import "../styles/Projects.css";

interface ProjectProps {
  language: "en" | "es";
}



const Projects: React.FC<ProjectProps> = ({ language }) => {
  return (
    <div className="projects-container">
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
  );
};

export default Projects;
