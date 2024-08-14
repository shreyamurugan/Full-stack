import React, { useState } from 'react';
import Navbarr from './Navbarr';
import Hero from './Hero';
import BlogPreview from './BlogPreview';
import FAQ from './FAQ';
import Team from './Team';
import Events from './Events';

import TestimonialsSlider from './TestimonialsSlider';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
     
      <Navbarr />
      <br></br>
      <Hero />
      <BlogPreview />
      <FAQ />
      <Team />
      <Events />
     
      <TestimonialsSlider />
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #007bff;
          padding: 10px 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .navbar-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .navbar-brand {
          font-size: 24px;
          font-weight: 700;
          color: white;
          text-align: center;
          flex-grow: 1;
        }
        .navbar-brand a {
          text-decoration: none;
          color: inherit;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }
        .navbar-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .navbar-menu.open {
          display: block;
        }
        .navbar li {
          margin: 0 20px;
        }
        .navbar a {
          text-decoration: none;
          color: white;
          font-weight: 600;
          font-size: 16px;
          transition: color 0.3s, transform 0.3s;
        }
        .navbar a:hover {
          color: #f1f1f1;
          text-decoration: underline;
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .navbar-content {
            flex-direction: column;
            align-items: center;
          }
          .navbar-menu {
            display: none;
            flex-direction: column;
            width: 100%;
            text-align: left;
          }
          .navbar-menu.open {
            display: flex;
          }
          .menu-toggle {
            display: block;
            margin-top: 10px;
          }
          .navbar li {
            margin: 10px 0;
            width: 100%;
          }
          .navbar a {
            display: block;
            padding: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
        .main-content {
          padding-top: 80px;
        }
      `}</style>
    </div>
  );
};

export default Home;
