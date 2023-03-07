import React, { useState } from 'react';
import styled from "styled-components";
// import Socials from './Socials';
// import Main from './Main';
import Projects from './Projects';
import ContactForm from './ContactMe';
// import AboutMe from './AboutMe';
import Sidebar from './Sidebar';

// pretty sure you're writting this function incorrectly so state isnt creating correctly

function UpdatePane(selection){
  setRightContent(selection)
}

function PageControl(props){
  const [rightContent, setRightContent] = useState("Main")
  const [leftWeight, setLeftWeight] = useState(0.75)
  const [rightWeight, setRightWeight] = useState(4)



  return (
    <Container>
      <Pane weight={leftWeight}>
        <Sidebar />
      </Pane>
      <Pane weight={rightWeight}>
        {rightContent}
        {/* <AboutMe /> */}
        {/* <Main /> */}
        {/* <Projects />
        <ContactForm /> */}
      </Pane>
    </Container>
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

