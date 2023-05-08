/* eslint-disable */
import React from 'react';
import { motion as m } from 'framer-motion';
import { projects } from '../config';

const renderCard = (projects) => {
  const i = projects.index;

  return (
    <div className="w-72 md:w-80 mx-4 bg-white rounded-lg overflow-hidden h-auto max-h-96 shadow-lg" key={i}>
      <div className="p-4">
        <h3 className="text-lg font-bold text-black mb-2">{projects.name}</h3>
        <p className="text-gray-700">{projects.blurb}</p>
        <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-4" onClick={() => window.open(projects.url, '_blank')}>
          View on GitHub
        </button>
      </div>
    </div>
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
