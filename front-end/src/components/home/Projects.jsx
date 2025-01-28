import React from "react";
import "./Projects.scss";

const projects = [
  {
    title: "Strong Node",
    description:
      "Site pour trouver des coachs sportifs en REACT.JS avec un petit back-end basic en NODE.JS",
    techStack: "Html, tailwind, Javascript, react, node, React-router",
    links: { site: "https://projet-react-2-decembre.vercel.app/", code: "https://github.com/sounyatje/projet-react-2-decembre.git" },
    image: "strongnode.png",
  },
  {
    title: "Exercice todo-list",
    description:
      "Un des premier exercices que jai fait en classe",
    techStack: "Html, CSS et CSS module, React, Javascript",
    links: { site: "https://todolist-react-js-ashy.vercel.app/", code: "https://github.com/sounyatje/todolistREACT.JS.git" },
    image: "todo.png",
  },
  {
    title: "pokedex",
    description:
      "Un exercice que jai fait en classe sur le thème pokemon",
    techStack: "Html, SCSS, Javascript, react.js",
    links: { site: "https://vercel.com/sounyas-projects/pokedex/GEaXJZ2t1aq6sJyP61Q7xGnn4bHf", code: "https://github.com/sounyatje/pokedex.git" },
    image: "pokedex.png",
  },
  {
    title: "Mon premier workshop en vanilla JS",
    description:
      "Je suis fière de ce projet car elle regroupe toute la theorie JS que j'ai appris pendant la formation",
    techStack: "Html, SCSS, Javascript",
    links: { site: "https://workshop-interface3-2sov7tpmr-sounyas-projects.vercel.app/", code: "https://github.com/sounyatje/workshop-interface3.git" },
    image: "workshop.png",
  },
  {
    title: "Exercice villes",
    description:
      "J'ai fait un exercice qui filtre les filles en JS vanilla",
    techStack: "Html, SCSS, Javascript",
    links: { site: "https://exercices-villes.vercel.app/", code: "https://github.com/sounyatje/exercices-villes.git" },
    image: "villes.png",
  },
 
  {
    title: "Pendu",
    description:
      "Ce que j'aime beaucoup c'est de créer des jeux en codant. J'espere m'approfondir en C# pour pouvoir realiser plus de jeux",
    techStack: "Html, SCSS, Javascript",
    links: { site: "https://pendualamaison.vercel.app/", code: "https://github.com/sounyatje/pendualamaison.git" },
    image: "pendu.png",
  },
  {
    title: "Jujutsu kaisen school schedule",
    description:
      "J'ai realiser un tableau avec le programme scolaire dans l'animé Jujutsu Kaisen avec du vanilla JS",
    techStack: "Html, SCSS, Javascript",
    links: { site: "https://jujutsu-kaisen-school-schedule.vercel.app/", code: "https://github.com/sounyatje/jujutsu-kaisen-school-schedule.git" },
    image: "jujutsukaisen.png",
  },
  {
    title: "Jeu HunterXHunter",
    description:
      "Un jeu inspiré de pierre papier ciseaux en mode HunterxHunter",
    techStack: "Html, SCSS, Javascript",
    links: { site: "https://vercel.com/sounyas-projects/hunterxhunter/NL2kEa2tq744a4sjNWAyL14uR9Jc", code: "https://github.com/sounyatje/hunterxhunter.git" },
    image: "hunter.png",
  },
  {
    title: "Distributeur de friandises",
    description:
      "Le premier exercice qu'on a fait en classe c'etait un distributeur de boisson que jai transformer en jeu de distributeur de friandise avec un compteur",
    techStack: "Html, SCSS, Javascript",
    links: { site: "https://nezuko-d9u6uyjt6-sounyas-projects.vercel.app/", code: "https://github.com/sounyatje/nezuko.git" },
    image: "nezuko.png",
  },
];

const Projects = () => {
  return (
    <div id="travail" className="projects-container">
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
