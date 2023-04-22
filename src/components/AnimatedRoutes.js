import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from './Main';
import Projects from './Projects';
// I have no idea why this disable is needed
// eslint-disable-next-line import/no-named-as-default
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
