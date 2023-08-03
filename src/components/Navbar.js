/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import blackcat from "../img/black_cat.png";
import whitecat from "../img/white_cat.png";

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  
  const controlNavbar = () => {
    if (window.scrollY > 20){
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    };

  useEffect(() => {window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

    return <div className={`nav ${show && 'nav-static'} id="navbar`}>
        <div className="nav-content">
          <div className="flex flex-shrink-0 items-center object-cover">
          { props.darkMode ?
          <img
            src = {whitecat}
            style={{height: 80, width: 80}}
            className="block h-8 w-auto lg:hidden"
            alt="logo"
            onClick={scrollToTop}
            title="back to top"
          />
          :
          <img 
            src = {blackcat}
            style={{height: 80, width: 80}}
            className="block h-8 w-auto lg:hidden"
            alt="logo"
            onClick={scrollToTop}
            title="back to top"
          />
        }
          </div>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth='easeInQuart'
                offset={-70}
                duration={500}
              >
                About Me 
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills              
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="contactme"
                spy={true}
                smooth='linear'
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
                <input type="checkbox" id="checkbox" onClick={props.toggleDarkMode} />
                <div className="slider round"></div>
                </label>
              </div>
            </li>
          </ul>
        </div>
     </div>
}

export default Navbar;
