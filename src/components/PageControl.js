import React, { useState, useEffect } from 'react';
import styled from "styled-components";
// import Socials from './Socials';
import Projects from './Projects';
import ContactForm from './ContactMe';
import MySkills from './MySkills';
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header';

const Container = styled.div`
  display: flex;

`;
const Pane = styled.div`
  flex: ${props => props.weight};
  border: solid 3px black;
`;

const PageControl = ({
  leftWeight = 0.75,
  rightWeight = 4,
}) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Sidebar />
      </Pane>
      <Pane weight={rightWeight}>
        <Header />
        <Main />
        <Projects />
        <MySkills />
        <ContactForm />
      </Pane>
    </Container>
  );
}

export default PageControl;
