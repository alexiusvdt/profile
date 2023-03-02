import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
// import { IconGitHub, IconInstagram, IconLinkedin} from '../icons/';
import {IconGithub} from './IconGitHub';
import {IconInstagram} from './IconInstagram';
import {IconLinkedin} from './IconLinkedin';

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