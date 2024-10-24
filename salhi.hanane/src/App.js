import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import ProjectsComponent from './components/ProjectsComponent';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsComponent />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  </Router>
);

export default App;

