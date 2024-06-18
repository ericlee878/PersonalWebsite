import React from 'react';
import '../styles.css'; // Import your CSS file for styling

import BaxterLogo from '../images/logos/baxter-logo.jpg';
import IDXExchangeLogo from '../images/logos/idxexchange-logo.jpg';
import ProjectMEDLogo from '../images/logos/project-med-logo.jpg';
import SLYDLogo from '../images/logos/slyd-logo.jpg';
import NorthwesternLogo from '../images/logos/northwestern-logo.jpg';
import IMCLogo from '../images/logos/imc-logo.jpg';
import MJSystemLogo from '../images/logos/mjsystem-logo.png';
import HelpingHandLogo from '../images/logos/helping-hand-logo.jpg';

const Homepage = () => {
  const experiences = [
    {
      title: 'Advanced Surgery R&D Software Intern',
      company: 'Baxter International Inc.',
      type: 'Internship',
      period: 'Jun 2024 - Present',
      location: 'Deerfield, Illinois, United States',
      details: 'Details about your role and responsibilities at Baxter International.',
      logo: BaxterLogo
    },
    {
      title: 'Participant at Trading @ IMC Launchpad',
      company: 'IMC Trading',
      type: 'Seasonal',
      period: 'May 2024',
      location: 'Chicago, Illinois, United States',
      details: 'Details about your participation and achievements at IMC Trading.',
      logo: IMCLogo
    },
    {
      title: 'Software Development Engineer',
      company: 'IDXExchange',
      type: 'Full-time',
      period: 'May 2024 - Present',
      location: 'Boise, Idaho, United States',
      details: 'Details about your role and responsibilities at IDXExchange.',
      logo: IDXExchangeLogo
    },
    {
      title: 'Website Developer',
      company: 'Project MED',
      type: 'Part-time',
      period: 'Mar 2024 - Present',
      location: 'Evanston, Illinois, United States',
      details: 'Details about your role and responsibilities at Project MED.',
      logo: ProjectMEDLogo
    },
    {
      title: 'Backend Development Intern',
      company: 'SLYD Group Inc.',
      type: 'Internship',
      period: 'Mar 2024 - Jun 2024',
      location: 'Chicago, Illinois, United States',
      details: 'Details about your role and responsibilities at SLYD Group Inc.',
      logo: SLYDLogo
    },
    {
      title: 'Research Assistant',
      company: 'Northwestern University',
      type: 'Part-time',
      period: 'Jan 2024 - Jun 2024',
      location: 'Evanston, Illinois, United States',
      details: 'Details about your role and responsibilities as a Research Assistant.',
      logo: NorthwesternLogo
    },
    {
      title: 'Website Development Intern',
      company: 'MJ System',
      type: 'Internship',
      period: 'Jun 2021 - Aug 2021',
      location: 'Lanett, Alabama, United States',
      details: 'Details about your role and responsibilities at MJ System.',
      logo: MJSystemLogo
    },
    {
      title: 'Chief Executive Officer',
      company: 'Helping Hand from Students',
      type: 'Self-employed',
      period: 'Aug 2020 - Aug 2021',
      location: 'Auburn, Alabama, United States',
      details: 'Details about your role and responsibilities as CEO at Helping Hand from Students.',
      logo: HelpingHandLogo
    }
  ];

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Hi, I'm Eric 👋</h1>
          <p>
            An enthusiastic software developer currently shaping the future of software development
            by designing smooth user-interfaces that promote user interaction with information and data.
            While studying at Northwestern University.
          </p>
          <div className="scroll-down">
            Scroll for more
          </div>
        </div>
      </div>
      <h2>My Timeline</h2>
      <div className="timeline">
        {experiences.map((job, index) => (
          <div className={`job ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-date">
              <span>{job.period}</span>
            </div>
            <div className="job-details">
              <img src={job.logo} alt={`${job.company} logo`} className="job-logo" />
              <div className="job-info">
                <h3>{job.title}</h3>
                <p className="company-type">{job.company}</p>
                <p className="period-location">{job.period} · {job.location}</p>
                {/* <p className="description">{job.details}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
