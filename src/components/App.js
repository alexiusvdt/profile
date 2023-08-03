import React, { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Navbar from './Navbar';
import Skills from './Skills';
import Socials from './Socials';

// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// testing
// import Section from "./Section";
// laterbase
// // import Socials from "./Socials";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  Aos.init({
    // Global settings:
    disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <div className={`flex container justify-center items-center h-screen p-4 h-full w-full mx-auto py-2 
                    ${darkMode ? 'dark' : 'light'}`}
    >
      {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"> */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} // eslint-disable-line
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
      <Socials
        darkMode={darkMode}
        id="socials"
      />
    </div>
  );
}

export default App;
