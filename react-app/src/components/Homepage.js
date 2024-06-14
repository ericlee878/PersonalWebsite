import React from 'react';
import Photo1 from '../images/photo1.jpg';
import Photo2 from '../images/photo2.jpg';
import Photo3 from '../images/photo3.jpg';
import Photo4 from '../images/photo4.jpg';
import Photo5 from '../images/photo5.jpg';
import Photo6 from '../images/photo6.jpg';
import Photo7 from '../images/photo7.jpg';
import Photo8 from '../images/photo8.jpg';
import Photo9 from '../images/photo9.jpg';
import Photo10 from '../images/photo10.jpg';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Hi, I'm Eric 👋</h1>
      <p className="intro">I'm a student at Northwestern University studying computer science and data science. I currently intern at Baxter as Advanced Surgery R&D Software Intern. I am also working at IDXExchange as a Software Developer Engineer and a Data Scientist.</p>
      <div className="gallery">
        <img src={Photo1} alt="Photo 1" className="gallery-photo" />
        <img src={Photo2} alt="Photo 2" className="gallery-photo" />
        <img src={Photo3} alt="Photo 3" className="gallery-photo" />
        <img src={Photo4} alt="Photo 4" className="gallery-photo" />
        <img src={Photo5} alt="Photo 5" className="gallery-photo" />
        <img src={Photo6} alt="Photo 6" className="gallery-photo" />
        <img src={Photo7} alt="Photo 7" className="gallery-photo" />
        <img src={Photo8} alt="Photo 8" className="gallery-photo" />
        <img src={Photo9} alt="Photo 9" className="gallery-photo" />
        <img src={Photo10} alt="Photo 10" className="gallery-photo" />
      </div>
    </div>
  );
};

export default Homepage;
