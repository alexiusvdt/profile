/* eslint-disable */ 
import React from 'react';
import { motion as m } from 'framer-motion';
import Headshot from '../img/headshot.png';

function AboutMe() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center z-10 py-15">
        <img src={Headshot} width={500} height={550} alt="My headshot"/>
      </div>
      <div className="text-center px-20 py-5">
        <p>
          Hi, I&apos;m Alex, a junior developer looking to make their mark on the industry. I specialize in creating user-friendly websites and mobile apps with an eye to accessability as well as functionality and stability.
          I&apos;m passionate about helping people and solving problems. In my free time, I enjoy exploring new technologies, riding my bicycle (currently training for 
            <a href="https://ridetherimoregon.com/" target="_blank" rel="noreferrer" className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Ride The Rim Oregon</a>)
          and playing tabletop role playing games with my friends.
        </p>
      </div>
    </m.div>
  );
}

export default AboutMe;
