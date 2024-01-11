import React from 'react';
import { config } from '../config';
import { Icon } from './icons/icon';

const { socialMedia } = config;

function Socials({ darkMode }) {
// const Socials = (darkMode) => (
  // needs light/dark toggle
  return (
    <div className="socials-container">
      <ul className="socials-list">
        {socialMedia
        && socialMedia.map(({ url, name }, i) => (
        /* eslint-disable-next-line */
        <ul key={i} className="social-link" style={ {height: 30, width: 30} }>
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
