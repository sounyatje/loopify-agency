import React, { useState } from "react";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import "./Resume.scss";

const programmingSkills = [
  { name: "HTML5", percent: 92 },
  { name: "CSS3 & SASS", percent: 96 },
  { name: "JavaScript", percent: 40 },
  { name: "React", percent: 60 },
  { name: "NodeJS", percent: 33 },
  { name: "Tailwind", percent: 52 },
];

const softwareSkills = [
  { name: "Photoshop", percent: 94 },
  { name: "Illustrator", percent: 80 },
  { name: "Vs Code", percent: 89 },
  { name: "Figma", percent: 55 },
  { name: "Animate", percent: 55 },
];

const industryKnowledge = [
  { name: "Git/GitHub", isAnimated: false },
  { name: "UX/UI", isAnimated: false },
  { name: "Scrum", isAnimated: false },
  { name: "Internet Law", isAnimated: false },
  { name: "SEO", isAnimated: false },
  { name: "Responsive Design", isAnimated: false },
];

const Resume = () => {
  const [activeProgrammingSkillIndex, setActiveProgrammingSkillIndex] =
    useState(null);
  const [activeSoftwareSkillIndex, setActiveSoftwareSkillIndex] =
    useState(null);
  const [knowledge, setKnowledge] = useState(industryKnowledge);

  // Gestion de l'animation de check au clic
  const handleKnowledgeClick = (index) => {
    const updatedKnowledge = [...knowledge];
    updatedKnowledge[index].isAnimated = true; // Déclenche l'animation
    setKnowledge(updatedKnowledge); // Met à jour l'état, l'animation reste affichée
  };

  const handleProgrammingSkillClick = (index) => {
    setActiveProgrammingSkillIndex(
      index === activeProgrammingSkillIndex ? null : index
    );
  };

  const handleSoftwareSkillClick = (index) => {
    setActiveSoftwareSkillIndex(
      index === activeSoftwareSkillIndex ? null : index
    );
  };

  return (
    <div id="competences" className="resume-page font-pfTempesta">
      {/* Conteneur gauche */}
      <div className="left-container">
        <div>
          <span
            style={{ color: "#c8814c", fontSize: "18px", textAlign: "center" }}
          >
            Animation à venir ici
          </span>
        </div>
      </div>

      {/* Conteneur droit */}
      <div className="right-container">
        <div className="resume">
          {/* Section des compétences en programmation */}
          <div className="skills-section">
            <div className="skills-header">
              <FaCode className="icon" />
              <h3 className='font-pfTempesta text-xl font-bold'>Programming Skills</h3>
            </div>
            <ul className="skills-list">
              {programmingSkills.map((skill, index) => (
                <li
                  key={index}
                  className="skill-item cursor-pointer"
                  onClick={() => handleProgrammingSkillClick(index)}
                >
                  <span>{skill.name}</span>
                  <div className="skills-bar">
                    <div
                      className="bar"
                      style={{
                        width:
                          activeProgrammingSkillIndex === index
                            ? `${skill.percent}%`
                            : "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section des compétences en logiciels */}
          <div className="skills-section">
            <div className="skills-header">
              <FaProjectDiagram className="icon" />
              <h3 className='font-pfTempesta text-xl font-bold'>Software Skills</h3>
            </div>
            <div className="skills-circles cursor-pointer">
              {softwareSkills.map((skill, index) => (
                <div
                  key={index}
                  className="circle"
                  onClick={() => handleSoftwareSkillClick(index)}
                >
                  <svg viewBox="0 0 120 120" className="circle-svg">
                    <circle cx="60" cy="60" r="50" className="bg-circle" />
                    <circle
                      cx="60" cy="60" r="50" className="progress-circle"
                      style={{
                        strokeDasharray: 314,
                        strokeDashoffset:
                          activeSoftwareSkillIndex === index
                            ? `${314 - (314 * skill.percent) / 100}`
                            : 314,
                        transition: "stroke-dashoffset 1.5s ease-in-out",
                      }}
                    />
                  </svg>
                  <div className="circle-text font-pfTempesta ">
                    <span>{skill.name}</span>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section des connaissances industrielles */}
          <div className="skills-section font-pfTempesta">
  <h3 className="text-xl font-bold text-c8814c font-pfTempesta">Industry Knowledge</h3>
  <ul className=" !text-c8814c font-pfTempesta  flex flex-wrap justify-around gap-6 mt-4">
    {knowledge.map((item, index) => (
      <li
        key={index}
        className="!text-c8814c font-pfTempesta  text-lg font-bold transition-all hover:animate-darkGlow cursor-pointer"
      >
        {item.name}
      </li>
    ))}
  </ul>
</div>


        </div>
      </div>
    </div>
  );
};

export default Resume;
