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
      <div className="flex justify-center z-10 ">
        <img src={Headshot} width={500} height={550} alt="My headshot"/>
      </div>
      <div className="text-center">
        <p>
          Hi, I&apos;m Alex, a junior developer looking to make their mark on the industry. I specialize in creating user-friendly websites and mobile apps with an eye to accessability as well as functionality and stability.
          I&apos;m passionate about creating unique and innovative applications that help businesses achieve their goals. In my free time, I enjoy exploring new technologies, riding my bicycle (currently training for 
            <a href="https://ridetherimoregon.com/" target="_blank" rel="noreferrer">Ride The Rim Oregon</a>)
          and playing tabletop role playing games with my friends. My ultimate goal is to create things that not only look great but also solve real-world problems for my clients!
        </p>
      </div>
    </m.div>
  );
}

export default AboutMe;
