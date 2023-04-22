import React from 'react';
// import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import AnimatedRoutes from './AnimatedRoutes';

function PageControl() {
  return (
    <Router>
      <>
        <Navbar />
        <AnimatedRoutes />
      </>
    </Router>
  );
}

export default PageControl;
