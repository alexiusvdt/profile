import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { motion as m } from 'framer-motion';
import { projects } from '../config';

// STYLING
const H2 = styled.h2`
  text-align: center;
  color: #fff;
`;

const CardBox = {
  width: '18rem',
  margin: '19px',
  backgroundColor: '#ffffff',
  borderRadius: '10px 10px 10px 10px',
  overflow: 'Hidden',
  height: 'flex',
  maxHeight: '35vh',
  webkitBoxShadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
  boxShadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
}

const CardGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const renderCard = (projects, i) => {
  return (
    <Card style={CardBox} key={i}>
    {/* <Card.Img variant='top' src='holder.js/100px180' /> if you wanna add a header image back */}
    <Card.Body>
      <Card.Title>{projects.name}</Card.Title>
      <Card.Text>{projects.blurb}</Card.Text>
      <Button variant='secondary' onClick={() => window.open(projects.url, '_blank')}>View on GitHub</Button>
    </Card.Body>
    </Card>
  )
}

function Projects() {
  return (
    <m.div
      // note: exit and ease properties may have ~funky~ consequences on animation
      initial={ {opacity: 0} }
      animate={ {opacity: 1} }
      transition={ { duration: 0.5} }
      >
      <H2>Look at my projects!</H2><br />
      <div style={CardGrid}>
        {projects.map(renderCard)}
      </div>
    </m.div>
  );
}

export default Projects;
