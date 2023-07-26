/* eslint-disable */
import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Skills from "./Skills";
// Scrolling
// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// testing
// import Section from "./Section";
// laterbase
// // import Socials from "./Socials";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}
 
  return (
    <div className={`h-full w-full mx-auto py-2 
                    ${darkMode ? "dark" : "light"}`}
    >
    {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"> */}
      <Navbar
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        />
      <AboutMe
          title="About Me"
          darkMode={darkMode} 
          id="aboutme"
        />
      <Skills 
          title="Skills" 
          darkMode={darkMode} 
          id="skills"
        />
      <Projects
          title="Projects" 
          darkMode={darkMode} 
          id="projects"
        />
      <ContactMe 
          title="Contact Me" 
          darkMode={darkMode} 
          id="contactme"
      />
    </div>
  // </div>
// socials might get moved into navbar/turned into footer segment
//<Socials />

    )
}

export default App;
