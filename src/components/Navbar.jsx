import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="logo">🚀 Shasank Kamineni</div>
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li> {/* Correctly linked */}
          <li><Link to="#about">About</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
