/* eslint-disable */ 
// import { useEffect } from "react";
import React from 'react';
import Headshot from '../img/headshot.png';

function AboutMe({ title, subtitle, dark, id }) {
  return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <section id="aboutme" className="section-content">
          <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
            <div
              data-aos="slide-left"
              data-aos-delay="1200"
              className="absolute h-full md:w-4/12 w-8/12 top-0 right-50 bg-primaryLinear bottom-0 -z-10"
            >
              <h1 className="absolute top-50 left-50">
              Alex Johnson
              </h1>
            </div>
            {/* first col */}
            <div className="pb-16 px-6 pt-5" data-aos="fade-down">
              <h2>Developer</h2>
              <br />
            {/* sec col */}
            {/* md:h-[30rem] h-54 */}
            <div className="">
              <img
                src={Headshot}
                data-aos="slide-up"
                alt="my headshot"
                style={{height: 400, width: 500}}
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;