import React from 'react';
import ScienceDeJargonizerScreenshot from '../images/projectphotos/sciencedejargonizer.png'; // Add your project images
import SoccerGamePredictorScreenshot from '../images/projectphotos/soccer_game_predictor.png'; // Add your project images
import CampusXChangeScreenshot from '../images/projectphotos/campusxchange.png'; // Add your project images
import AtlasScreenshot from '../images/projectphotos/atlas.png'; // Add your project images
import YourTurnScreenshot from '../images/projectphotos/yourturn.png'; // Add your project images
import PetsScreenshot from '../images/projectphotos/pets.png'; // Add your project images
import SoldiersAndSnakesScreenshot from '../images/projectphotos/soldiers_and_snakes.png'; // Add your project images
import Solo8BallScreenshot from '../images/projectphotos/solo_8_ball.png'; // Add your project images
import NoPhoto from '../images/penguinImage.png'; // Add your project images

const Projects = () => {
  const projectData = [
    {
      title: 'Science Dejargonizer',
      description: 'The Science De-jargonizer can simplify scientific jargon for journalists without scientific backgrounds, using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). This tool transforms complex terms into clear explanations, aiding accurate and accessible science reporting. ',
      image: ScienceDeJargonizerScreenshot,
      tags: ['GPT-4','Large Language Models','RAG','JavaScript','Python','Web Scraping','BeautifulSoup'],
      github: 'https://github.com/ericlee878/ScienceDeJargonizer'
    },
    {
      title: 'Soccer Game Predictor',
      description: 'A machine learning model to predict EPL match outcomes',
      image: SoccerGamePredictorScreenshot,
      tags: ['Python', 'Machine Learning', 'Random Forest', 'Web Scraping', 'BeautifulSoup'],
      github: 'https://github.com/ericlee878/SoccerGamePredictor'
    },
    {
      title: 'CampusXChange',
      description: 'A platform for buying, selling, borrowing and trading used items with other students on campus. These items include textbooks, devices, costumes, formal outfits, etc.',
      image: CampusXChangeScreenshot,
      tags: ['React', 'Firebase', 'Javascript', 'HTML', 'CSS'],
      github: 'https://github.com/394-s24/CampusXChange'
    },
    {
      title: 'Atlas',
      description: 'Atlas is a 2D Greek Mythology-inspired game following Atlas, a Greek hero, who has just successfully stolen the Golden Fleece. Unfortunately, he had to leave in a hurry, and he’s now stranded on an island in the middle of nowhere with no way to get home! Play as Atlas, surviving at sea, fighting through mythological monsters, and escaping angry gods to safely bring the Golden Fleece back home.',
      image: AtlasScreenshot,
      tags: ['C#', 'Unity', 'Visual Studio'],
      github: 'https://github.com/natalie-cheng/atlas'
    },
    {
      title: 'Personal Expense Tracker and Analyzer',
      description: 'Personalized Expense Tracking Service (PETS) is a cloud-native finance app. Users upload receipts via a web interface; Lambda functions categorize and store them in S3 and RDS. PETS identifies the highest spending category, calculates monthly spending, and determines average spending per receipt, all through a client interface with API gateway-triggered functions.',
      image: PetsScreenshot,
      tags: ['AWS', 'Javascript', ],
      github: 'https://replit.com/@ericlee878/PETS-Final-Project-1?v=1#main.py'
    },
    {
      title: 'YourTurn',
      description: 'A swarm rotation timer and more!',
      image: YourTurnScreenshot,
      tags: ['React', 'Firebase', 'Javascript', 'HTML', 'CSS'],
      github: 'https://github.com/394-s24/YourTurn'
    },
    {
      title: "Eric's Diary",
      description: 'The Daily Diary is your personal companion for organizing and reflecting on daily life. This user-friendly app features a dynamic calendar for tracking entries, an emotion rating scale for capturing moods, and a journaling section for recording thoughts and memorable moments.',
      image: NoPhoto,
      tags: ['Java', 'Android Studio'],
      github: 'https://github.com/ericlee878/Erics-Diary'
    },
    {
      title: "Soldiers and Snake",
      description: 'Survival Soldier is a 2D action game where you play as a brave soldier trapped in a snake-infested battlefield. Armed with your trusty firearm, your mission is to survive as long as possible by avoiding and defeating deadly snakes. Each snake you eliminate earns you points. Test your endurance and see how long you can last in this treacherous environment.',
      image: SoldiersAndSnakesScreenshot,
      tags: ['C#', 'Unity', 'Visual Studio'],
      github: 'https://github.com/ericlee878/Soldiers_and_Snakes'
    },
    {
      title: "Solo 8-Ball",
      description: '8-Ball Pool Solo Challenge is a solo version of the classic pool game. Pocket all the grey balls while avoiding the white cue ball to score points. Use arrow keys to aim, the slider to adjust power, and the space button to shoot. Earn points for each grey ball pocketed and avoid penalties for hitting the white ball. The game ends when all grey balls or the white ball are pocketed. Aim carefully and strive for a high score!',
      image: Solo8BallScreenshot,
      tags: ['C#', 'Unity', 'Visual Studio'],
      github: 'https://github.com/ericlee878/Solo_8_Ball'
    },
    {
      title: "Chess",
      description: 'Chess is a classic chess experience for two players. It includes all traditional rules, a graphical interface with draggable pieces, move validation, and check/checkmate detection.',
      image: NoPhoto,
      tags: ['Python', 'PyGame', 'Object-Oriented Programming'],
      github: 'https://github.com/ericlee878/Chess'
    }
    // Add more projects here
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
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
