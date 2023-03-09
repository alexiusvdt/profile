import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from './Main';
import Projects from './Projects';
import ContactForm from './ContactMe';
import AboutMe from './AboutMe';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes(){
  const location = useLocation();
  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactForm />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;