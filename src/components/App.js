/* eslint-disable */

import React, { useEffect } from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
// import Section from "./Section";
import Navbar from "./Navbar";
import Socials from "./Socials";
import Skills from "./Skills";
// Scrolling
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const App = () => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <Navbar/>
      <AboutMe
          title="About Me"
          // subtitle={dummyText}
          dark={true}
          id="aboutme"
        />
      <Skills 
          title="Skills" 
          dark={true}
          id="skills"
      />
      <Projects
          title="Projects" 
          dark={true}
          id="projects"
        />
      
      <ContactMe 
          title="Contact Me" 
          dark={true}
          id="contactme"
      />
    </div>

// socials might get moved into navbar/turned into footer segment
//<Socials />

    )
}

export default App;
