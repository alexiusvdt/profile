/* eslint-disable */
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {FaToggleOn, FaToggleOff} from 'react-icons/fa';

const Navbar = (props) => {

  const scrollToTop = () => {
  scroll.scrollToTop();
  };

  return (
      <nav className="nav" id="navbar" >
        <div className="nav-content">
          <div className="flex flex-shrink-0 items-center">
          <img
            style={{height: 80, width: 80}}
            className="block h-8 w-auto lg:hidden"
            src="https://freesvg.org/img/black_cat_black_and_white.png"
            alt="logo"
            onClick={scrollToTop}
          />
          </div>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
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
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
            <img onClick={props.toggleDarkMode} 
                 className="self-left justify-self-end" 
                 src={props.darkMode ? <FaToggleOn /> : <FaToggleOff />} />
              {/* <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar