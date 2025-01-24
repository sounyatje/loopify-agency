import React from "react";
import "./Projects.scss";

const projects = [
  {
    title: "Jolly Seed",
    description:
      "Site réalisé à la moitié de la formation Front-End Developer chez Interface3. Projet de groupe (3 personnes). Connectez-vous pour en voir plus !",
    codeExample: `const login = {
  mdp: "admin",
  email: "admin@gmail.com"
};`,
    techStack: "Html, SCSS, Php, Javascript, Ajax, MySql",
    links: { site: "#", code: "#" },
    image: "jolly-seed.jpg",
  },
  {
    title: "Skywalkers - Ultimate Mixed Team",
    description:
      "Single page application réalisée pour mon équipe d'Ultimate Frisbee. Le design n'est pas le mien, juste le code.",
    techStack: "Html, SCSS, React, Javascript, React-router",
    links: { site: "#", code: "#" },
    image: "skywalkers.jpg",
  },
  {
    title: "Hackerflix",
    description:
      "Application regroupant tous les films parlant d'informatique. Vous pouvez les trier suivant plusieurs critères, les liker, et le carrousel affiche les films en fonction de vos affinités.",
    techStack: "Html, SCSS, Javascript",
    links: { site: "#", code: "#" },
    image: "hackerflix.jpg",
  },
  {
    title: "Hackerflix",
    description:
      "Application regroupant tous les films parlant d'informatique. Vous pouvez les trier suivant plusieurs critères, les liker, et le carrousel affiche les films en fonction de vos affinités.",
    techStack: "Html, SCSS, Javascript",
    links: { site: "#", code: "#" },
    image: "hackerflix.jpg",
  },
  {
    title: "Hackerflix",
    description:
      "Application regroupant tous les films parlant d'informatique. Vous pouvez les trier suivant plusieurs critères, les liker, et le carrousel affiche les films en fonction de vos affinités.",
    techStack: "Html, SCSS, Javascript",
    links: { site: "#", code: "#" },
    image: "hackerflix.jpg",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title font-pfTempesta ">Mon Travail</h2>
      {projects.map((project, index) => (
        <div className={`project-row ${index % 2 === 0 ? "row-reverse" : ""}`} key={index}>
          <div className="project-image-container">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-details">
            <h3 className='font-pfTempesta'>{project.title}</h3>
            <p>{project.description}</p>
            {project.codeExample && (
              <pre>
                <code>{project.codeExample}</code>
              </pre>
            )}
            <p className="tech-stack">{project.techStack}</p>
            <div className="project-links">
              <a href={project.links.site} target="_blank" rel="noreferrer">
                Le site
              </a>
              <a href={project.links.code} target="_blank" rel="noreferrer">
                Le code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
