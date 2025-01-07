import React from 'react';
import Header from './Header';
import '../App.css';
import HeroSection from './HeroSection';
import ProjectsComponent from './ProjectsComponent';
import Footer from './Footer';
import Skills from './Skills';
import Contact from './Contact';
import Services from './Services';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Home = () => {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SALHI Hanane",
    "url": "https://portfolio-salhi-hanane.vercel.app/",
    "logo": "logo.png",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61565869227101",
      "https://www.linkedin.com/in/hanane-salhi-81194b2ab/"
    ]
  };

  return (
<HelmetProvider>
    <section id="Home" className='container-fluid '>
      
      <Helmet>
      <html lang="fr" />
      <script type="application/ld+json">
          {JSON.stringify(schemaOrganization)}
        </script>
        <title>Portfolio SALHI Hanane </title>
        <meta name="description" content="Découvrez le portfolio de Hanane SALHI, développeuse web passionnée,basé a paris,  spécialisée dans la création d'applications web modernes et réactives. Explorez mes projets, compétences et réalisations dans le domaine du développement front-end." />
      </Helmet>
        <Header />
        <HeroSection />
        <Services />
        <ProjectsComponent />
        <Skills/>
        <Contact />
      <Footer/>
     
  
    </section>
    </HelmetProvider>
  );
};

export default Home;
