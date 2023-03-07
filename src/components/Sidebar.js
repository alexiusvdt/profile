import React from "react";
import { Link } from "react-router-dom";

// sidebar is selecting the content & switching it to pagecontrol
// pagecontrol is rendering left & right bar
// pass the prop (ie content to render) up to pagecontrol
// in pagecontrol, render whatever prop is passed to it
// dont try to copy props into state because that causes errors 


function Sidebar(){

  return(
    <>
    <p>sidebar!</p>
    <Link to="/contact-me">Contact Me</Link>
    <Link to="/">Main</Link>
    </>
  );
}

export default Sidebar;