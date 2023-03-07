import React from 'react';
import PropTypes from 'prop-types';
// import { IconButton } from '@mui/material';
// import { IconGitHub, IconInstagram, IconLinkedin} from '../icons/';
import IconGithub from './IconGithub';
import IconInstagram from './IconInstagram';
import IconLinkedIn from './IconLinkedIn';

// see config.js for these
export const Icon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'Instagram':
      return <IconInstagram />;
    default:
      return <p>"something's wrong here"</p>
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};