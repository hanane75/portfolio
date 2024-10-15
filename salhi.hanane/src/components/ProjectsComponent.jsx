import React, { useState, useEffect } from 'react';
import projectsData from '../Data/projectsData.json';

const ProjectsComponent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Charger les projets depuis le fichier JSON
    setProjects(projectsData);
  }, []);

  return (
    <section className="skills-projects-section">
      

      <section className="projects-section">
      <h2 className="skills-title">{"< projets >"}</h2>

      <div className="projects-content">
        <p>
          Explorez les projets web innovants réalisés par SALHI Hanane, une développeuse web passionnée basée à Paris.
          Avec un œil avisé pour le design moderne et la fonctionnalité, je concrétise vos idées numériques. Mon 
          portfolio présente une gamme de projets achevés, mettant en avant mes compétences techniques et mon engagement 
          pour la qualité. Interagissez avec des éléments interactifs et des animations qui reflètent ma dévotion à créer 
          des expériences web impactantes.
        </p>
      </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.url} className="project-link">
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProjectsComponent;
