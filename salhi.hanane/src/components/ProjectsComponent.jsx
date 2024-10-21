import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projectsData from '../Data/projectsData.json';
import { FaGithub} from "react-icons/fa";
const ProjectsComponent = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Charger les projets depuis le fichier JSON
    setProjects(projectsData);
  }, []);
  // Configurer les options de responsive design pour le carrousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3, // 3 éléments pour grands écrans
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2, // 2 éléments pour desktop
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1, // 1 élément pour tablettes
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // 1 élément pour mobile
    },
  };

  return (
    <section  id='Projects' className="skills-projects-section">
      <section className="projects-section padding-section">
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

{/* Carrousel pour afficher plusieurs projets à la fois */}
<Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true}>
  {projects.map((project) => (
    <div key={project.id} className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url} className="project-link"><FaGithub size={20} color="#333" />
      {" Voir demo >>>"}
      </a>
      </div>
          ))}
        </Carousel>
      </section>
      </section>
  );
};

export default ProjectsComponent;