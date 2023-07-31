/* eslint-disable */
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import blackcat from "../img/black_cat.png";
import whitecat from "../img/white_cat.png";
const Navbar = (props) => {

  const scrollToTop = () => {
  scroll.scrollToTop();
  };

  return (
      <nav className="nav" id="navbar" >
        <div className="nav-content">
          <div className="flex flex-shrink-0 items-center">
          { props.darkMode ?
          <img
            src = {whitecat}
            style={{height: 80, width: 80}}
            className="block h-8 w-auto lg:hidden"
            alt="logo"
            onClick={scrollToTop}
          />
          :
          <img 
            src = {blackcat}
            style={{height: 80, width: 80}}
            className="block h-8 w-auto lg:hidden"
            alt="logo"
            onClick={scrollToTop}
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
              <div className="switch">
                <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onClick={props.toggleDarkMode} />
                <div className="slider round"></div>
                </label>
              </div>
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