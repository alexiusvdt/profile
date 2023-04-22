import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import SCREAMCAT from '../img/cat-transp.png';
import Socials from "./Socials";

function Sidebar(){

  return(
    <>
      <div style={{textAlign: 'center', display: 'block', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: '100%'}}>
        {/* <img src={SCREAMCAT} width={200} height={200} alt="placeholder"></img> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-me">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact-me">Contact Me</NavLink>
        <Socials />
      </div>
    </>
  );
}

export default Sidebar;

const NavLink = styled(Link)`
  font-size: 1.6rem;
  color: #3394b5;
  -webkit-transition: color 0.3s, background-color 0.3s;
  -o-transition: color 0.3s, background-color 0.3s;
  transition: color 0.3s, background-color 0.3s;
  text-decoration: none;
  text-align: center;
  width: 100%;
  display: block;
  line-height: 5rem;
  border-bottom: 1px solid #282828;
`;
