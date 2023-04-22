import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import AnimatedRoutes from './AnimatedRoutes';

const Pane1 = styled.div`
    /* border: 1px solid blue; */
  width: 100%;
  height: 20%;
  position: absolute;
  top: 0;
  /* bottom: 0; */
  
`;

const Pane2 = styled.div`
  /* border: 1px solid red; */
  margin-left: 250px;
  height: 100vh;
  flex: 1;
  background-color: black;
`;

function PageControl() {
  return (
    <Router>
      {/* I think what I want is a page component and the navbar inside this router. page will take arg as to what element it renders */}
        <Pane1>
        <Navbar />
        </Pane1>
        <Pane2>
        <AnimatedRoutes />
        </Pane2>
    </Router>
  );
}

export default PageControl;
