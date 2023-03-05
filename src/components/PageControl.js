import React, { useState, useEffect } from 'react';
import Socials from './Socials';
import Projects from './Projects';
import ContactForm from './ContactMe';

import styled from "styled-components";
import Sidebar from './Sidebar';

const Container = styled.div`
  display: flex;

`;
//whatever we pass in to pane will replace the default weight here
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
        <Projects />
      </Pane>
    </Container>
  );
}

export default PageControl;
