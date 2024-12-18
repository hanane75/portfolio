// ProjectDetails.js
import React from 'react';
import { useParams ,Link} from 'react-router-dom';
import projectsData from '../Data/projectsData.json';
import { FaArrowLeft } from 'react-icons/fa'; 
import Footer from './Footer';


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <section  className='container-fluid '>
         <div  className='headerdetail'>
            <div className="logo">
            <Link to="/">
       <img   src={`${process.env.PUBLIC_URL}/logo.webp`} alt="Logo" />
       </Link>
            </div>
       
        {/* Flèche de retour */}
        <Link to="/" className="back-button">
          <FaArrowLeft /> {/* Utilisation d'une icône de flèche */}
          Retour à l'accueil
        </Link>
      </div>
      
    <div className="project-details">
      <img src={project.image} alt={project.title} className="project-image" />
      <h2>{project.title}</h2>
      <div className="modal-content">
        <h2 className="modal-title">Description</h2>
        <p className="modal-description">{project.details}</p>

        <h2 className="modal-title">Compétences</h2>
        <ul className="modal-skills">
          {project.competences.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </section>
  );
};

export default ProjectDetails;