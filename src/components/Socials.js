/*eslint-disable*/
import React from 'react';
import { config } from '../config';
import { Icon } from './icons/icon';

const {socialMedia} = config

function Socials({ darkMode }) {
// const Socials = (darkMode) => (
  // if (!dark) {
  //   let style = {
  //     height: 30,
  //     width: 30,
  //     filter: invert(100)
  //   }
  // } else {
  //   let style = {
  //     height: 30,
  //     width: 30,
  //     filter: invert(0)
  //     }
  // return style
  // }
  return (
  <div className="socials-container">
    <ul className="socials-list">  
      {socialMedia &&
        socialMedia.map(( {url, name}, i) => (
          <ul key={i} className="social-link" style={{height: 30, width: 30}}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer" className="icon">
              <Icon
                name={name}
                dark={darkMode}
              />
            </a>
          </ul>
        ))}
    </ul>
  </div>
  );
}

export default Socials;
