/*eslint-disable*/
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './Main';
import Projects from './Projects';
// I have no idea why this disable is needed
// eslint-disable-next-line import/no-named-as-default
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import CubeContainer from './cubes/CubeContainer';
import Background from '../img/background.jpg';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="bg-cover bg-center min-h-screen text-white" style={{ backgroundImage: { Background } }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CubeContainer />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    // </div>
  );
}

export default AnimatedRoutes;
