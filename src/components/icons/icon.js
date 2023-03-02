import React from 'react';
import PropTypes from 'prop-types';
import { 
  IconGitHub,
  IconInstagram,
  IconLinkedin,
} from './icons';

export const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};