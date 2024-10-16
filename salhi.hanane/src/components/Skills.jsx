import React from "react";
import { FaReact, FaJs, FaNode, FaSass, FaGitAlt, FaGithub, FaPhp, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiRedux, SiCsharp, SiDotnet } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-section text-center my-5">
      <h2 className="skills-title mb-4">{" < Skills >"}</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <FaJs size={50} color="#F0DB4F" />
            <p>JavaScript</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <FaReact size={50} color="#61DBFB" />
            <p>React</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <SiRedux size={50} color="#764ABC" />
            <p>Redux</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <FaNode size={50} color="#68A063" />
            <p>Node.js</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <SiMongodb size={50} color="#4DB33D" />
            <p>MongoDB</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <FaPhp size={50} color="#4F5B93" />
            <p>PHP</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <FaDatabase size={50} color="#00758F" />
            <p>MySQL</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <SiCsharp size={50} color="#239120" />
            <p>C#</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <SiDotnet size={50} color="#512BD4" />
            <p>ASP.NET</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <FaSass size={50} color="#CC6699" />
            <p>Sass</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <FaGitAlt size={50} color="#F1502F" />
            <p>Git</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 skill-item">
            <FaGithub size={50} color="#333" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
