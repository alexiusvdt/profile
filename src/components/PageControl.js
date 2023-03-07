import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Socials from './Socials';
import Main from './Main';
import Projects from './Projects';
import ContactForm from './ContactMe';
import AboutMe from './AboutMe';
import Sidebar from './Sidebar';

// pretty sure you're writting this function incorrectly so state isnt creating correctly


function PageControl(){
  const leftWeight = 0.75;
  const rightWeight = 4;
    
  return (
    <Router>
      <Container>
        <Pane1>
          <Sidebar />
        </Pane1>
        <Pane2 weight={rightWeight}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactForm />} />
      </Routes>
        </Pane2>
      </Container>
    </Router>
  );
}

export default PageControl;
const Container = styled.div`
  display: flex;

`;
const Pane1 = styled.div`
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  border: 1px solid blue;
`;

const Pane2 = styled.div`
   border: 1px solid red;
  margin-left: 5px;
`;