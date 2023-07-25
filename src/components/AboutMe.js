/* eslint-disable */ 
import React from 'react';
import Headshot from '../img/headshot.png';

function AboutMe({ title, subtitle, dark, id }) {
  return (
    <>
      <div className="text-center px-20 py-5">
        
      </div>
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
        <h1>{title}</h1>
        <img src={Headshot} width={500} height={550} alt="My headshot"/>
      
      </div>
      </div>
    </>
  );
}

export default AboutMe;
