import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

// eslint-disable-next-line react/function-component-definition
const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav-static'} id="navbar`}>
      <div className="nav-content">
        <div className="flex flex-shrink-0 items-center object-cover">
          {/* </div> */}
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutme"
                spy="true"
                smooth="easeInQuart"
                offset={70}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="skills"
                spy="true"
                smooth="true"
                offset={70}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy="true"
                smooth="true"
                offset={70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contactme"
                spy="true"
                smooth="linear"
                offset={-70}
                duration={500}
                delay={100}
              >
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <div className="switch" title="toggle dark/light">
                <label className="theme-switch" htmlFor="checkbox">
                  {/* eslint-disable-next-line react/destructuring-assignment */}
                  <input type="checkbox" id="checkbox" onClick={props.toggleDarkMode} />
                  <div className="slider round" />
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
