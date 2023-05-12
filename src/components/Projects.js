/* eslint-disable */
import React, { useState }from 'react';
import { motion as m } from 'framer-motion';
import { projects } from '../config';
import { Tilt } from 'react-tilt';

const renderCard = (projects) => {
  const i = projects.index;

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <Tilt options={defaultOptions}>
      <div className="w-72 md:w-80 mx-4 bg-white rounded-lg overflow-hidden h-auto max-h-96 shadow-lg py-5" key={i}>
        <div className="p-4">
          <h3 className="text-lg font-bold text-black mb-2">{projects.name}</h3>
          <p className="text-blue-400 text-sm">{projects.features}</p>
          <p className="text-gray-700">{projects.blurb}</p>          
          <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-4" onClick={() => window.open(projects.url, '_blank')}>
            View on GitHub
          </button>
          
        </div>
      </div>
    </Tilt>
  );
};

function Projects() {
  return (
    <m.div
      // note: exit and ease properties may have ~funky~ consequences on animation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="flex flex-wrap justify-center items-center py-10">Here are some of my projects:</h2>
      <br />
      <div className="flex flex-wrap justify-center items-center">
        {projects.map(renderCard)}
      </div>
    </m.div>
  );
}

export default Projects;
