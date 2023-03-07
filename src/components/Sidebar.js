import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Sidebar(){

  return(
    <>
    <p>sidebar!</p>
    <Div><Link to="/about-me">About Me</Link></Div>
    <Div><Link to="/projects">Projects</Link></Div>
    <Div><Link to="/contact-me">Contact Me</Link></Div>
    <Div><Link to="/">Main</Link></Div>
    </>
  );
}

export default Sidebar;
const Div = styled.div`
border: 1px solid black
`;