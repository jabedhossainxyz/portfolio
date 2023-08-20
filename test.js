// ProjectCard.js
import React from "react";

const ProjectCard = ({imgUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-image-link" // Apply any additional styling here
      >
        <img
          src={imgUrl}
          alt={imgUrl}
          className="project-card-image" // Apply image-specific styling here
        />
      </a>
    </div>
  );
};

export default ProjectCard;
