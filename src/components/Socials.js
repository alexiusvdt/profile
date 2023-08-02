/*eslint-disable*/
import React from 'react';
import { config } from '../config';
import { Icon } from './icons/icon';

  const {socialMedia} = config

const Socials = () => (
  <div className="socials-container">
    <ul className="socials-list">  
      {socialMedia &&
        socialMedia.map(( {url, name}, i) => (
          <ul key={i} className="social-link" style={{height: 30, width: 30}}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer" className="icon">
              <Icon name={name} />
            </a>
          </ul>
        ))}
    </ul>
  </div>
);

export default Socials;

