import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        {/* <li><Link to="/about">About Me</Link></li> */}
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/interests">Interests</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
