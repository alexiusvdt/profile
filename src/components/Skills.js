/* eslint-disable  */
import React from 'react';
import { config } from '../config';
import Aos from 'aos';



const renderTile = (skills_list) => {
  const i = skills_list.index;
  
  return (
    <div data-aos="flip-left" className='skill-card'>
      <h2>{skills_list.name}</h2>
      <p>{skills_list.subtext}</p>
      <img src={skills_list.logo}/>
      </div>
  );
};

function Skills({ title, subtitle, dark, id }) {
  const { skills } = config;
  return(    
  <div className={"section" + (dark ? " section-dark" : "")}>
    <div className="section-content" id={id}>
    <h1>{title}</h1>
    <div className="">
        {skills.skills_list.map(renderTile)}
        </div>
    </div>
  </div>
  )
}


export default Skills