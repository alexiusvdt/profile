/* eslint-disable */ 
import React from 'react';
import Headshot from '../img/headshot.png';

function AboutMe({ title, subtitle, dark, id }) {
  return (
    <>
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
        <h1>{title}</h1>
        <img src={Headshot} width={250} height={300} alt="My headshot"/>
      
      </div>
      </div>
    </>
  );
}

export default AboutMe;
