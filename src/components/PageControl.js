import React from 'react';
// import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import AnimatedRoutes from './AnimatedRoutes';

function PageControl() {
  return (
    <Router>
      <>
        <Navbar />
        <AnimatePresence>
          <AnimatedRoutes />
        </AnimatePresence>
      </>
    </Router>
  );
}

export default PageControl;
