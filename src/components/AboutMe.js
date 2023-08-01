/* eslint-disable */ 
// import { useEffect } from "react";
import React from 'react';
import Headshot from '../img/headshot.png';

function AboutMe({ title, subtitle, dark, id }) {
  return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <section id="aboutme" className="overflow-hidden">
          <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
            <div
              data-aos="slide-left"
              data-aos-delay="1200"
              className="absolute h-full md:w-4/12 w-8/12 top-0 right-50 bg-primaryLinear bottom-0 -z-10"
            >
              <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
              Alex {" "}
              {/* laterbase: consider changing text instances to dark_prim on light/dkmode*/}
                <span className="text-dark_primary">Johnson</span>
              </h1>
            </div>

            {/* first col */}
            <div className="pb-16 px-6 pt-5" data-aos="fade-down">
              <h2>Developer</h2>
              <br />
              {/* <div className="flex justify-end">
                <button className="btn">{hero.btnText}</button>
              </div> */}
              {/* <div className="flex flex-col gap-10 mt-10">
                {hero.hero_content.map((content, i) => (
                  <div
                    key={i}
                    data-aos="fade-down"
                    data-aos-delay={i * 300}
                    className={`flex items-center w-80 gap-5
                ${i === 1 && " flex-row-reverse text-right"}  `}
                  >
                    <h3>{content.count}</h3>
                    <p>{content.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* sec col */}
            <div className="md:h-[30rem] h-54">
              <img
                src={Headshot}
                data-aos="slide-up"
                alt="headshot"
                style={{height: 500, width: 600}}
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

{/* <h1>{title}</h1> <br />
<img src={Headshot} width={250} height={300} alt="My headshot"/>

</div>
</div> */}
// </>
{/* );
} */}