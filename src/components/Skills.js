/* eslint-disable  */
import React from 'react';
import { config } from '../config';
// import Aos from 'aos';

const renderTile = (skillsList) => {
  const i = skillsList.index;
  
  return (
    <div data-aos="flip-left" className='skill-card'>
      <h2>{skillsList.name}</h2>
      <p>{skillsList.subtext}</p>
      <img src={skillsList.logo}/>
    </div>
  );
};

function Skills({ title, dark, id }) {
  const { skills } = config;
  return(    
  <div className={"section" + (dark ? " section-dark" : "")}>
    <div className="section-content" id={id}>
    <h1>{title}</h1>
    {/* <h3>{skills.subtitle}</h3> */}
    <div className="section-content">
        {skills.skillsList.map(renderTile)}
        </div>
    </div>
  </div>
  )
}


export default Skills