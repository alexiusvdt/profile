/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import IconGithub from './IconGithub';
import IconInstagram from './IconInstagram';
import IconLinkedIn from './IconLinkedIn';

export const Icon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'Instagram':
      return <IconInstagram />;
    default:
      return <p>something&apos;s wrong here</p>;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
