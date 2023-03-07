import React from 'react';
import PropTypes from 'prop-types';
// import { IconButton } from '@mui/material';
// import { IconGitHub, IconInstagram, IconLinkedin} from '../icons/';
import IconGithub from './IconGithub';
import IconInstagram from './IconInstagram';
import IconLinkedin from './IconLinkedin';

export const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGithub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    default:
      return <p>"something's wrong here"</p>
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};