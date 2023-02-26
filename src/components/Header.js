import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
// styling goes here
const Div1 = styled.div`
  background-color: #708090;
`
const StyledLink = styled(Link)`
  color: #fff;
  font-family: segoe UI, monospace;
  margin: 5px;
  &:hover{
    color: green;
  };
  &:focus{
  color: #151ba0;
  };
  
`
const P = styled.p`
  color: #fff;
`
// rainbow gradient version
// h1 {
//   margin-top: 0px;
//   margin-bottom: 10px;
//   font-family: sans-serif;
//   font-size: 6rem;
//   background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// rainbow drop shadow version
const H1 = styled.h1`
  margin-top: 0px;
  margin-bottom: 50px;
  margin-left: 40px;
  font-family: Segoe UI, sans-serif;
  color: #fff;
  text-align: left;
  font-size: 4rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-shadow: -4px 4px #ef3550,
              -8px 8px #f48fb1,
              -12px 12px #7e57c2,
              -16px 16px #2196f3,
              -20px 20px #26c6da,
              -24px 24px #43a047,
              -28px 28px #eeff41,
              -32px 32px #f9a825,
              -36px 36px #ff5722;
`

// fragment render
  return (
    <React.Fragment>
      <Div1>
      <H1>Alex Johnson's Portfolio</H1>
        <span><P>|<StyledLink to="/">Home</StyledLink> | 
        <StyledLink to="/projects">Projects</StyledLink> | 
        <StyledLink to="/contact-me">Contact Me</StyledLink> |</P>
        </span>
      </Div1>
    </React.Fragment>
  );
}

export default Header;