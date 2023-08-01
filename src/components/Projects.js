/* eslint-disable */
import React, { useState } from 'react';
import { config } from '../config';
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
      <div className="project-card" key={i}>
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

function Projects({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      <h1>{title}</h1>
        <div className="">
        {config.projects.map(renderCard)}
        </div>
      </div>
    </div>
  );
}

export default Projects