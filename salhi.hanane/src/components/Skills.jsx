import React from "react";
import { FaReact, FaJs, FaNode, FaSass, FaGitAlt, FaGithub, FaPhp, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiRedux, SiCsharp, SiDotnet } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">{" < Skills >"}</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <FaJs size={50} color="#F0DB4F" /> {/* Jaune pour JavaScript */}
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FaReact size={50} color="#61DBFB" /> {/* Bleu React */}
          <p>React</p>
        </div>
        <div className="skill-item">
          <SiRedux size={50} color="#764ABC" /> {/* Violet Redux */}
          <p>Redux</p>
        </div>
        <div className="skill-item">
          <FaNode size={50} color="#68A063" /> {/* Vert Node.js */}
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <SiMongodb size={50} color="#4DB33D" /> {/* Vert MongoDB */}
          <p>MongoDB</p>
        </div>
        <div className="skill-item">
          <FaPhp size={50} color="#4F5B93" /> {/* Bleu foncé pour PHP */}
          <p>PHP</p>
        </div>
        <div className="skill-item">
          <FaDatabase size={50} color="#00758F" /> {/* Bleu MySQL */}
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <SiCsharp size={50} color="#239120" /> {/* Vert C# */}
          <p>C#</p>
        </div>
        <div className="skill-item">
          <SiDotnet size={50} color="#512BD4" /> {/* Violet ASP.NET */}
          <p>ASP.NET</p>
        </div>
        <div className="skill-item">
          <FaSass size={50} color="#CC6699" /> {/* Rose Sass */}
          <p>Sass</p>
        </div>
        <div className="skill-item">
          <FaGitAlt size={50} color="#F1502F" /> {/* Rouge Git */}
          <p>Git</p>
        </div>
        <div className="skill-item">
          <FaGithub size={50} color="#333" /> {/* Gris foncé GitHub */}
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
