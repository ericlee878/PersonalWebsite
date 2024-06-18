import React from 'react';
import HeadshotCircle from '../images/headshot_circle.png';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={HeadshotCircle} alt="Eric Lee" className="profile-photo" />
        <div className="about-text">
          <ul>
            <li>Computer Science and Data Science student at Northwestern University.</li>
            <li>Backend Development Intern at SLYD in Chicago, IL.</li>
            <li>Research Assistant at the Computational Journalism Lab at Northwestern.</li>
            <li>Proficient in Python, Java, C, C++, C#, Git, HTML/CSS, Racket, and MATLAB.</li>
            <li>Passionate about soccer, golf, chess, and music.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
