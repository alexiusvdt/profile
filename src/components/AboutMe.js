/* eslint-disable */
import React from 'react';
import Headshot from '../img/headshot.png';

function AboutMe({ dark, id }) {
  return (
    <div className={`${dark} ? 'section-dark' : `}>
      <section id={id} className="section-content">
        <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
          <div
            data-aos="fade-up-left"
            data-aos-delay="500"
            className="absolute h-full md:w-4/12 w-8/12 top-0 right-100 bottom-0 -z-10"
          >
            <h1 className="absolute top-50 left-50">Alex Johnson</h1>
          </div>
          <div
            className="pb-16 px-6 pt-5"
            data-aos="fade-down-right"
            data-aos-delay="500"
          >
            <h2>Developer</h2>
            <br />
            <div className="">
              <img
                src={Headshot}
                data-aos="slide-up"
                alt="my headshot"
                style={{ height: 400, width: 500 }}
                className="h-full object-cover"
              />
            </div>
            <div
              className='px-6 pt-5 m-auto'
              data-aos="zoom-in-right"
              data-aos-delay="550"
            >
              <p>Passionate. Determined. Problem-Solver.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default AboutMe;
