import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projectsData from '../Data/projectsData.json';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectsComponent = () => {
  const [projects, setProjects] = useState([]);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div id="projects" className="skills-projects-section">
      <section className="projects-section padding-section">
        <h2 className="skills-title">{"< projets >"}</h2>
        <div className="projects-content">
          <p>
            {showFullText ? (
              <>
                Explorez les projets web innovants réalisés par SALHI Hanane, une développeuse web passionnée basée à Paris.
                Avec un œil avisé pour le design moderne et la fonctionnalité, je concrétise vos idées numériques. Mon portfolio
                présente une gamme de projets achevés, mettant en avant mes compétences techniques et mon engagement pour la qualité.
                Interagissez avec des éléments interactifs et des animations qui reflètent ma dévotion à créer des expériences web impactantes.
              </>
            ) : (
              <>
                Explorez les projets web innovants réalisés par SALHI Hanane.
                Avec un œil avisé pour le design moderne et la fonctionnalité, je concrétise vos idées numériques...
              </>
            )}
          </p>
          <button onClick={toggleText} className="show-more-btn">
            {showFullText ? "Lire moins" : "Lire plus"}
          </button>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Affichage des cartes de technologies */}
              <div className="technologies-cards">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-card">{tech}</span>
                ))}
              </div>

              <Link to={`/projects/${project.id}`} className="project-details-btn">
                {"Plus de détails >>>"} 
              </Link>
              <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} color="#333" />{" Voir code >>>"}
              </a>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default ProjectsComponent;
