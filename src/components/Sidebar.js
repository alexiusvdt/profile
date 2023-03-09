import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from '../img/logo-placeholder.png'
import Socials from "./Socials";

function Sidebar(){

  return(
    <>
      <img src={Logo} width={250} height={150} alt="placeholder"></img>
      <p></p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-me">About Me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact-me">Contact Me</NavLink>
      <Socials />
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
