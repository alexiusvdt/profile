/* eslint-disable */

import React, { useEffect } from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Section from "./Section";
import Navbar from "./Navbar";
import Socials from "./Socials";
// Scrolling
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const App = () => {
  useEffect(() => {
    let something;
 
  }, []);

  return (
    // all the pagelets in order
    <div className="h-72 bg-gradient-to-r from-purple-600 to-blue-600">
      <Navbar />
      <Section/>
      <AboutMe />
      <Projects />
      {/* socials might get moved into navbar/turned into footer segment */}
      <Socials />
      <ContactMe />
    </div>

    )
}

export default App;
