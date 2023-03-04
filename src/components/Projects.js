import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { projects } from '../config';
import styled from "styled-components";


function Projects(){
  return (
    <>
    <h1>Look at my projects!</h1>
      {projects.map(( {name, url, blurb}, i)  => {   
        return (<li key={i}>
          <a href={url} target="_blank" rel="noreferrer">{name}</a><p>{blurb}</p></li>) 
      })}
    </>
  );
}

export default Projects