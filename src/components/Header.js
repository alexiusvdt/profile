import React from "react";
import styled from "styled-components";

function Header() {


  return (
    <>
      <Div1>
      <H1>Hi! I'm Alex.</H1>
        {/* <span><P>|<StyledLink to="/">Home</StyledLink> | 
        <StyledLink to="/projects">Projects</StyledLink> | 
        <StyledLink to="/my-skills">My Skills</StyledLink> |
        <StyledLink to="/contact-me">Contact Me</StyledLink> |</P> */}
        {/* </span> */}
      </Div1>
    </>
  );
}

export default Header;

// STYLING
const Div1 = styled.div`
  background-color: #747474;
`
const P = styled.p`
  color: #fff;
`
const H1 = styled.h1 `
  margin-top: 0px;
  margin-bottom: 10px;
  font-family: sans-serif;
  font-size: 6rem;
  background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`