/* eslint-disable  */
import React from 'react';
import { skills } from '../config';
import Aos from 'aos';

const renderTile = (skills) => {
  const i = skills.index;
  
  return (
    <>
    <div data-aos="flip-left" className='skill-card'>{skills.libraries}</div>
    <div data-aos="flip-left" className='skill-card'>{skills.languages}</div>
    <div data-aos="flip-left" className='skill-card'>{skills.frameworks}</div>
    </>
  );
};

function Skills({ title, subtitle, dark, id }) {
  return(    
  <div className={"section" + (dark ? " section-dark" : "")}>
    <div className="section-content" id={id}>
    <h1>{title}</h1>
    <div className="">
        {skills.map(renderTile)}
        </div>
    </div>
  </div>
  )
}

export default Skills