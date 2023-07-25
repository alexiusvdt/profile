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
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <Navbar />
      {/* <Section/> */}
      <AboutMe />
      {/* <Skills /> */}
      <Projects />
      {/* socials might get moved into navbar/turned into footer segment */}
      <Socials />
      <ContactMe />
    </div>

    )
}

export default App;
