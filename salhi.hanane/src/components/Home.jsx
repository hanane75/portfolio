import React from 'react';
import Header from './Header';
import '../App.css';
import HeroSection from './HeroSection';
import ProjectsComponent from './ProjectsComponent';
import Footer from './Footer';
import Skills from './Skills';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
  return (

    <section className='container'>
        <Header />
        <HeroSection />
        <Skills/>
        <ProjectsComponent />
       <Services />
        <Contact />
      <Footer/>

    </section>
   
  );
};

export default Home;
