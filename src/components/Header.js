import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1>Alex Johnson Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact-me">Contact Me</Link></li>
      </ul>
    </React.Fragment>
  );
}

export default Header;