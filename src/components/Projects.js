import React from "react";
import { Card } from "react-bootstrap";
import { projects } from '../config';
// import styled from "styled-components";

const CardBox = {
  width: '18rem',
  backgroundColor: "#ffffff",
  borderRadius: "10px 10px 10px 10px",
  overflow: "Hidden",
  height: "200px",
  maxHeight: "35vh",
  webkitBoxShadow: "0px 12px 18px -6px rgba(0,0,0,0.3)",
  boxShadow: "0px 12px 18px -6px rgba(0,0,0,0.3)"
}

const CardGrid = {

}

const renderCard = (projects, i) => {
  return(
    <Card style={CardBox} key={i}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{projects.name}</Card.Title>
      <Card.Text>{projects.blurb}</Card.Text>
      <Card.Link href={projects.url} target="_blank" rel="noreferrer"></Card.Link>
    </Card.Body>
    </Card>
  )
}


function Projects(){
  return (
    <>
    <div style={CardGrid}>
      <h1>Look at my projects!</h1>
      {projects.map(renderCard)}
    </div>
    </>
  );
}

export default Projects;