
import React from "react";

import "../styles/ProjectCard.css";

interface ProjectCardProps {
  id: number;
  title: { es: string; en: string };
  image: string;
  shortDescription: { es: string; en: string };
  githubLink: string;
  language: "es" | "en";
}

const ProjectCard: React.FC<ProjectCardProps> = ({

  title,
  image,
  shortDescription,
  githubLink,
  language,
}) => {

  
  // const navigate = useNavigate();

  // const handleCardClick = () => {
  //   navigate(`/projects/${id}`);
  // };

  // onClick={handleCardClick}

  return (
    <div className="project-card"  style={{ cursor: "pointer" }}>
      <img src={image} alt={title[language]} />
      <h3>{title[language]}</h3>
      <p>{shortDescription[language]}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()} // Evita que el enlace interrumpa la navegación al detalle
      >
        {language === "es" ? "Ver en GitHub" : "View on GitHub"}
      </a>
    </div>
  );
};

export default ProjectCard;
