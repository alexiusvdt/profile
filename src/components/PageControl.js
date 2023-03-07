import React, { useState } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Socials from './Socials';
import Main from './Main';
import Projects from './Projects';
import ContactForm from './ContactMe';
import AboutMe from './AboutMe';
import Sidebar from './Sidebar';

// pretty sure you're writting this function incorrectly so state isnt creating correctly


function PageControl(props){
  const [leftWeight, setLeftWeight] = useState(0.75)
  const [rightWeight, setRightWeight] = useState(4)


  return (
    <Router>
      <Container>
        <Pane weight={leftWeight}>
          <Sidebar />
        </Pane>
        <Pane weight={rightWeight}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactForm />} />
      </Routes>
        </Pane>
      </Container>
    </Router>
  );
}

export default PageControl;
const Container = styled.div`
  display: flex;

`;
const Pane = styled.div`
  flex: ${props => props.weight};
  border: solid 3px black;
`;

