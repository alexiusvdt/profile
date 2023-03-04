import React from "react";
import { Card } from "react-bootstrap";
import { projects } from '../config';
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 5px;
    &: last-of-type {
      // margin-bottom: 10px;
    }

    a {
      padding: 5px;
      &: hover,
      &: focus {
        // transform: translate Y(5px);
      }
      
    }
  }
`;

function Projects(){
  return (
    <>
    <h1>Look at my projects!</h1>
    {/* <StyledList> */}
      {projects.map(( {name, url, blurb}, i)  => {   
        <Card>
        <li key={i}>
          <a href={url} target="_blank" rel="noreferrer">{name}</a><p>{blurb}</p></li>) 
      })}
      </Card>
      // </StyledList>
    </>
  );
}

export default Projects