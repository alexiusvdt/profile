/*eslint-disable*/
import React from 'react';
import { socialMedia } from '../config';
import { Icon } from './icons/icon';

const Socials = () => (
  <div className="fixed bottom-0 left-0 flex flex-row items-center">
    <ul className="flex flex-row items-center m-5 p-5 list-none">
      
      {socialMedia &&
        socialMedia.map(( {url, name}, i) => (
          <li key={i} className="after:block after:w-5 after:h-90 after:m-auto after:bg-gray-600 hover:focus:translate-y-5">
            <a href={url} aria-label={name} target="_blank" rel="noreferrer" className="p-3">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </ul>
  </div>
);

export default Socials;

