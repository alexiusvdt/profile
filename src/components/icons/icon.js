/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import IconGithub from './IconGithub';
import IconInstagram from './IconInstagram';
import IconLinkedIn from './IconLinkedIn';
import IconGithubLight from './IconGithubLight';
import IconInstagramLight from './IconInstagram';
import IconLinkedInLight from './IconLinkedIn';

export const Icon = ({ name, darkMode }) => {
  switch (name) {
    case 'Github' && !darkMode:
      return <IconGithubLight />;
    case 'Github':
      return <IconGithub />
    case 'LinkedIn' && !darkMode:
      return <IconLinkedInLight />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'Instagram' && !darkMode:
      return <IconInstagramLight />;
    case 'Instagram':
      return <IconInstagram />;
    default:
      return <p>something&apos;s wrong here! This shouldn't fail at all!</p>;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
