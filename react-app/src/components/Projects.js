import React from 'react';
import ProjectImage1 from '../images/project1.png'; // Add your project images
// import ProjectImage2 from '../images/project2.png'; // Add your project images
import ProjectImage3 from '../images/project3.png'; // Add your project images
import ProjectImage6 from '../images/project6.png'; // Add your project images
import NoPhoto from '../images/penguinImage.png'; // Add your project images

const Projects = () => {
  const projectData = [
    {
      title: 'Science Dejargonizer',
      description: 'The Science De-jargonizer can simplify scientific jargon for journalists without scientific backgrounds, using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). This tool transforms complex terms into clear explanations, aiding accurate and accessible science reporting. ',
      image: ProjectImage1,
      tags: ['GPT-4','Large Language Models','RAG','JavaScript','Python','Web Scraping','BeautifulSoup'],
      github: 'https://github.com/ericlee878/ScienceDeJargonizer'
    },
    {
      title: 'Soccer Game Predictor',
      description: 'A machine learning model to predict EPL match outcomes',
      image: NoPhoto,
      tags: ['Python', 'Machine Learning', 'Random Forest', ,'Web Scraping', 'BeautifulSoup'],
      github: 'https://github.com/ericlee878/SoccerGamePredictor'
    },
    {
      title: 'CampusXChange',
      description: 'A platform for buying, selling, borrowing and trading used items with other students on campus. These items include textbooks, devices, costumes, formal outfits, etc.',
      image: ProjectImage3,
      tags: ['React', 'Firebase', 'Javascript', 'HTML', 'CSS'],
      github: 'https://github.com/394-s24/CampusXChange'
    },
    {
      title: 'Atlas',
      description: 'Description of the project...',
      image: NoPhoto,
      tags: ['React', 'Node.js']
    },
    {
      title: 'Personal Expense Tracker and Analyzer',
      description: 'Description of the project...',
      image: NoPhoto,
      tags: ['React', 'Node.js']
    },
    {
      title: 'YourTurn',
      description: 'Description of the project...',
      image: ProjectImage6,
      tags: ['React', 'Node.js'],
      github: 'https://github.com/394-s24/YourTurn'
    },
    {
      title: "Eric's Diary",
      description: 'Description of the project...',
      image: NoPhoto,
      tags: ['React', 'Node.js']
    },
    {
      title: "Soldiers and Snake",
      description: 'Description of the project...',
      image: NoPhoto,
      tags: ['React', 'Node.js']
    },
    {
      title: "Solo 8-Ball",
      description: 'Description of the project...',
      image: NoPhoto,
      tags: ['React', 'Node.js']
    }
    // Add more projects here
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
