import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './Header';
import Main from './Main';
import Projects from './Projects';
import ContactForm from './ContactMe';
import AboutMe from './AboutMe';
import Sidebar from './Sidebar';


function PageControl(){
  // const leftWeight = 0.75;
  // const rightWeight = 4;
    
  return (
    <Router>
      {/* <Div1><Header /></Div1> */}
        <Pane1>
          <Sidebar />
        </Pane1 >
        <Pane2>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactForm />} />
      </Routes>
        </Pane2>
    </Router>
  );
}

export default PageControl;

// STYLES

// don't need this
// const Container = styled.div`
//   display: flex;
// `;

// if changin width here, also adjust width of header
// todo: make panel weight a state effect
const Pane1 = styled.div`
    /* border: 1px solid blue; */
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: black;
`;

const Pane2 = styled.div`
  /* border: 1px solid red; */
  margin-left: 250px;
  height: 100vh;
  flex: 1;
  background-color: black;
`;

// const Div1 = styled.div`
//   background-color: black;
/* border: 1px solid green; */
// `;
